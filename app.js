/* ==========================================================================
   BEN PELEG'S TRAVEL PLANNER - MAIN APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'benPelegTravelPlannerState';
  
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  const state = {
    waypoints: [],          // Array of { id, name, lat, lng, radius (in km) }
    globalRadiusKm: 2.0,    // Default search radius along route / waypoints in km
    selectedCategories: new Set(['attractions', 'restaurants', 'desserts', 'shopping', 'nature', 'nightlife', 'gems']),
    activeTileLayer: 'dark', // 'dark' or 'light'
    selectedWaypointForRadius: null, // Track waypoint being edited
    attractionsFound: [],    // Computed list of matching attractions
    liveAttractions: [],     // Places loaded live from OpenStreetMap
    liveSearchToken: 0,
    isClickToAddActive: true
  };

  // Map Instance and Layer Groups
  let map;
  let waypointsLayerGroup;
  let routePolylineLayer;
  let radiusCirclesLayerGroup;
  let attractionsMarkersLayerGroup;
  let tileLayers = {};
  let liveSearchDebounce;

  // --------------------------------------------------------------------------
  // DOM ELEMENTS
  // --------------------------------------------------------------------------
  const sidebarTabs = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResultsDropdown = document.getElementById('searchResults');
  const presetTagBtns = document.querySelectorAll('.preset-tags .tag-btn');

  const globalRadiusSlider = document.getElementById('globalRadiusSlider');
  const globalRadiusDisplay = document.getElementById('globalRadiusDisplay');
  const floatingRadiusText = document.getElementById('floatingRadiusText');

  const waypointsListEl = document.getElementById('waypointsList');
  const waypointsCountBadge = document.getElementById('waypointsCountBadge');
  const statWaypointsCount = document.getElementById('statWaypointsCount');
  const statDistance = document.getElementById('statDistance');
  const statAttractionsFound = document.getElementById('statAttractionsFound');

  const categoryCheckboxes = document.querySelectorAll('.category-card input[type="checkbox"]');
  const selectAllCategoriesBtn = document.getElementById('selectAllCategories');
  const clearAllCategoriesBtn = document.getElementById('clearAllCategories');

  const attractionsDrawer = document.getElementById('attractionsDrawer');
  const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
  const attractionsGrid = document.getElementById('attractionsGrid');
  const resultsCountEl = document.getElementById('resultsCount');
  const sortAttractionsSelect = document.getElementById('sortAttractionsSelect');

  const clearRouteBtn = document.getElementById('clearRouteBtn');
  const recenterMapBtn = document.getElementById('recenterMapBtn');
  const toggleTileLayerBtn = document.getElementById('toggleTileLayerBtn');
  const addCustomWaypointBtn = document.getElementById('addCustomWaypointBtn');
  const btnClickToAddMode = document.getElementById('btnClickToAddMode');

  // Modals
  const importExportBtn = document.getElementById('importExportBtn');
  const googleMapsModal = document.getElementById('googleMapsModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  const exportToGmapsUrlBtn = document.getElementById('exportToGmapsUrlBtn');
  const exportGpxBtn = document.getElementById('exportGpxBtn');
  const exportKmlBtn = document.getElementById('exportKmlBtn');
  
  const gmapsUrlInput = document.getElementById('gmapsUrlInput');
  const parseGmapsUrlBtn = document.getElementById('parseGmapsUrlBtn');
  const gpxFileInput = document.getElementById('gpxFileInput');
  const exportPlanBtn = document.getElementById('exportPlanBtn');
  const planFileInput = document.getElementById('planFileInput');
  const saveStatus = document.getElementById('saveStatus');

  const waypointRadiusModal = document.getElementById('waypointRadiusModal');
  const closeWaypointModalBtn = document.getElementById('closeWaypointModalBtn');
  const selectedWaypointNameEl = document.getElementById('selectedWaypointName');
  const specificRadiusSlider = document.getElementById('specificRadiusSlider');
  const specificRadiusDisplay = document.getElementById('specificRadiusDisplay');
  const saveWaypointRadiusBtn = document.getElementById('saveWaypointRadiusBtn');
  const resetWaypointRadiusBtn = document.getElementById('resetWaypointRadiusBtn');

  // --------------------------------------------------------------------------
  // INITIALIZATION
  // --------------------------------------------------------------------------
  function initApp() {
    initMap();
    setupEventListeners();

    if (!loadSavedPlan()) {
      // Load initial default destination: Paris route demo for Ben
      addPresetDestination('Paris', 48.8566, 2.3522);
    }
  }

  async function refreshLiveAttractions() {
    const searchToken = ++state.liveSearchToken;
    if (state.waypoints.length === 0) {
      state.liveAttractions = [];
      return;
    }
    const liveResults = await GEOSERVICES.searchNearbyAttractions(state.waypoints);
    if (searchToken === state.liveSearchToken) {
      state.liveAttractions = liveResults;
      filterAndRenderAttractions();
    }
  }

  // --------------------------------------------------------------------------
  // LEAFLET MAP SETUP
  // --------------------------------------------------------------------------
  function initMap() {
    // Default center on Paris
    map = L.map('map', {
      zoomControl: false,
      attributionControl: false
    }).setView([48.8566, 2.3522], 13);

    L.control.zoom({ position: 'topleft' }).addTo(map);

    // Map Tile Layers
    tileLayers.dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd'
    });

    tileLayers.light = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    });

    tileLayers.dark.addTo(map);

    // Create Layer Groups
    radiusCirclesLayerGroup = L.layerGroup().addTo(map);
    routePolylineLayer = L.polyline([], {
      color: '#6366f1',
      weight: 5,
      opacity: 0.9,
      dashArray: '8, 8'
    }).addTo(map);
    waypointsLayerGroup = L.layerGroup().addTo(map);
    attractionsMarkersLayerGroup = L.layerGroup().addTo(map);

    // Click on Map to add Waypoint
    map.on('click', (e) => {
      if (state.isClickToAddActive) {
        addWaypoint({
          name: `נקודה ${state.waypoints.length + 1}`,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          radius: state.globalRadiusKm
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    // Sidebar Tabs
    sidebarTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        sidebarTabs.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        btn.classList.add('active');
        const targetTab = document.getElementById(btn.dataset.tab);
        if (targetTab) targetTab.classList.add('active');
      });
    });

    // Theme Toggle (Dark / Light)
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      
      const isLight = document.body.classList.contains('light-theme');
      themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';

      map.removeLayer(tileLayers[state.activeTileLayer]);
      state.activeTileLayer = isLight ? 'light' : 'dark';
      tileLayers[state.activeTileLayer].addTo(map);
    });

    toggleTileLayerBtn.addEventListener('click', () => {
      themeToggleBtn.click();
    });

    // Global Radius Slider
    globalRadiusSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.globalRadiusKm = val;
      globalRadiusDisplay.textContent = `${val.toFixed(1)} ק"מ`;
      floatingRadiusText.textContent = `${val.toFixed(1)} ק"מ`;
      
      // Update waypoints that don't have custom radius
      state.waypoints.forEach(wp => {
        if (!wp.hasCustomRadius) {
          wp.radius = val;
        }
      });

      renderMapElements();
      filterAndRenderAttractions();
      clearTimeout(liveSearchDebounce);
      liveSearchDebounce = setTimeout(refreshLiveAttractions, 500);
    });

    // Search Input & Suggestions
    let searchDebounce;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      const query = e.target.value.trim();
      if (query.length < 2) {
        searchResultsDropdown.classList.remove('show');
        return;
      }

      searchDebounce = setTimeout(async () => {
        const results = await GEOSERVICES.searchLocation(query);
        renderSearchResults(results);
      }, 350);
    });

    searchBtn.addEventListener('click', async () => {
      const query = searchInput.value.trim();
      if (query) {
        const results = await GEOSERVICES.searchLocation(query);
        if (results.length > 0) {
          selectSearchResult(results[0]);
        }
      }
    });

    // Preset Cities
    presetTagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cityName = btn.dataset.city;
        const match = ATTRACTIONS_DATABASE.find(a => a.city.toLowerCase() === cityName.toLowerCase());
        if (match) {
          addPresetDestination(cityName, match.lat, match.lng);
        } else {
          searchInput.value = cityName;
          searchBtn.click();
        }
      });
    });

    // Category Checkboxes
    categoryCheckboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const cat = e.target.value;
        const card = e.target.closest('.category-card');
        if (e.target.checked) {
          state.selectedCategories.add(cat);
          card.classList.add('active');
        } else {
          state.selectedCategories.delete(cat);
          card.classList.remove('active');
        }
        document.getElementById('filterCountBadge').textContent = state.selectedCategories.size;
        filterAndRenderAttractions();
      });
    });

    selectAllCategoriesBtn.addEventListener('click', () => {
      categoryCheckboxes.forEach(cb => {
        cb.checked = true;
        cb.closest('.category-card').classList.add('active');
        state.selectedCategories.add(cb.value);
      });
      document.getElementById('filterCountBadge').textContent = state.selectedCategories.size;
      filterAndRenderAttractions();
    });

    clearAllCategoriesBtn.addEventListener('click', () => {
      categoryCheckboxes.forEach(cb => {
        cb.checked = false;
        cb.closest('.category-card').classList.remove('active');
      });
      state.selectedCategories.clear();
      document.getElementById('filterCountBadge').textContent = 0;
      filterAndRenderAttractions();
    });

    // Drawer Collapse Toggle
    toggleDrawerBtn.addEventListener('click', () => {
      attractionsDrawer.classList.toggle('collapsed');
    });

    // Sort Attractions
    sortAttractionsSelect.addEventListener('change', () => {
      renderAttractionCards();
    });

    // Clear Route
    clearRouteBtn.addEventListener('click', () => {
      if (confirm('האם נרצה למחוק את כל הנקודות במסלול של בן?')) {
        state.waypoints = [];
        state.liveAttractions = [];
        renderMapElements();
        renderWaypointsList();
        filterAndRenderAttractions();
        refreshLiveAttractions();
      }
    });

    // Explicitly enable map-click mode from the itinerary tab or map toolbar.
    [addCustomWaypointBtn, btnClickToAddMode].forEach(btn => {
      btn.addEventListener('click', () => {
        state.isClickToAddActive = true;
        btnClickToAddMode.classList.add('active');
        map.getContainer().classList.add('map-add-mode');
      });
    });

    // Recenter Map
    recenterMapBtn.addEventListener('click', () => {
      if (state.waypoints.length > 0) {
        const bounds = L.latLngBounds(state.waypoints.map(w => [w.lat, w.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    });

    // Modals Handling
    importExportBtn.addEventListener('click', () => googleMapsModal.classList.add('active'));
    closeModalBtn.addEventListener('click', () => googleMapsModal.classList.remove('active'));
    googleMapsModal.addEventListener('click', (e) => {
      if (e.target === googleMapsModal) googleMapsModal.classList.remove('active');
    });

    // Waypoint Radius Modal
    closeWaypointModalBtn.addEventListener('click', () => waypointRadiusModal.classList.remove('active'));
    
    specificRadiusSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      specificRadiusDisplay.textContent = `${val.toFixed(1)} ק"מ`;
    });

    saveWaypointRadiusBtn.addEventListener('click', () => {
      if (state.selectedWaypointForRadius) {
        const val = parseFloat(specificRadiusSlider.value);
        state.selectedWaypointForRadius.radius = val;
        state.selectedWaypointForRadius.hasCustomRadius = true;
        
        waypointRadiusModal.classList.remove('active');
        renderMapElements();
        renderWaypointsList();
        filterAndRenderAttractions();
      }
    });

    resetWaypointRadiusBtn.addEventListener('click', () => {
      if (state.selectedWaypointForRadius) {
        state.selectedWaypointForRadius.radius = state.globalRadiusKm;
        state.selectedWaypointForRadius.hasCustomRadius = false;
        
        waypointRadiusModal.classList.remove('active');
        renderMapElements();
        renderWaypointsList();
        filterAndRenderAttractions();
      }
    });

    // Export & Import Handlers
    exportToGmapsUrlBtn.addEventListener('click', exportToGoogleMapsUrl);
    exportGpxBtn.addEventListener('click', exportGpxFile);
    exportKmlBtn.addEventListener('click', exportKmlFile);
    exportPlanBtn.addEventListener('click', exportPlanFile);
    
    parseGmapsUrlBtn.addEventListener('click', parseGoogleMapsInputUrl);
    gpxFileInput.addEventListener('change', handleFileUpload);
    planFileInput.addEventListener('change', handlePlanFileUpload);
  }

  function savePlan() {
    const plan = {
      version: 1,
      savedAt: new Date().toISOString(),
      globalRadiusKm: state.globalRadiusKm,
      selectedCategories: [...state.selectedCategories],
      waypoints: state.waypoints.map(wp => ({
        id: wp.id,
        name: wp.name,
        lat: wp.lat,
        lng: wp.lng,
        radius: wp.radius,
        hasCustomRadius: wp.hasCustomRadius
      }))
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
      if (saveStatus) saveStatus.textContent = 'נשמר מקומית בדפדפן';
    } catch (error) {
      if (saveStatus) saveStatus.textContent = 'לא ניתן לשמור בדפדפן זה';
    }
  }

  function loadSavedPlan() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || !Array.isArray(saved.waypoints)) return false;

      const waypoints = saved.waypoints.filter(wp =>
        wp && Number.isFinite(Number(wp.lat)) && Number.isFinite(Number(wp.lng))
      );
      state.waypoints = waypoints.map((wp, index) => ({
        id: wp.id || `saved_wp_${Date.now()}_${index}`,
        name: wp.name || `נקודה ${index + 1}`,
        lat: Number(wp.lat),
        lng: Number(wp.lng),
        radius: Number.isFinite(Number(wp.radius)) ? Number(wp.radius) : state.globalRadiusKm,
        hasCustomRadius: Boolean(wp.hasCustomRadius)
      }));

      if (Number.isFinite(Number(saved.globalRadiusKm))) {
        state.globalRadiusKm = Number(saved.globalRadiusKm);
        globalRadiusSlider.value = state.globalRadiusKm;
        globalRadiusDisplay.textContent = `${state.globalRadiusKm.toFixed(1)} ק"מ`;
        floatingRadiusText.textContent = `${state.globalRadiusKm.toFixed(1)} ק"מ`;
      }

      const availableCategories = new Set([...categoryCheckboxes].map(cb => cb.value));
      state.selectedCategories = new Set(
        (Array.isArray(saved.selectedCategories) ? saved.selectedCategories : [])
          .filter(category => availableCategories.has(category))
      );
      categoryCheckboxes.forEach(cb => {
        cb.checked = state.selectedCategories.has(cb.value);
        cb.closest('.category-card').classList.toggle('active', cb.checked);
      });
      document.getElementById('filterCountBadge').textContent = state.selectedCategories.size;

      renderMapElements();
      renderWaypointsList();
      filterAndRenderAttractions();
      refreshLiveAttractions();
      return true;
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
  }

  // --------------------------------------------------------------------------
  // SEARCH & PRESETS
  // --------------------------------------------------------------------------
  function renderSearchResults(results) {
    if (!results || results.length === 0) {
      searchResultsDropdown.innerHTML = '<div class="search-result-item">לא נמצאו תוצאות matching.</div>';
      searchResultsDropdown.classList.add('show');
      return;
    }

    searchResultsDropdown.innerHTML = results.map(r => `
      <div class="search-result-item" data-lat="${r.lat}" data-lng="${r.lng}" data-name="${r.name}">
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <strong>${r.name}</strong>
          <div style="font-size:0.73rem; color:var(--text-muted);">${r.fullName}</div>
        </div>
      </div>
    `).join('');

    searchResultsDropdown.classList.add('show');

    searchResultsDropdown.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        selectSearchResult({
          name: el.dataset.name,
          lat: parseFloat(el.dataset.lat),
          lng: parseFloat(el.dataset.lng)
        });
      });
    });
  }

  function selectSearchResult(item) {
    searchResultsDropdown.classList.remove('show');
    searchInput.value = item.name;

    addWaypoint({
      name: item.name,
      lat: item.lat,
      lng: item.lng,
      radius: state.globalRadiusKm
    });

    map.setView([item.lat, item.lng], 13);
  }

  function addPresetDestination(cityName, lat, lng) {
    state.waypoints = []; // Fresh start for preset city
    addWaypoint({ name: `${cityName} - מרכז`, lat, lng, radius: state.globalRadiusKm });
    map.setView([lat, lng], 13);
  }

  // --------------------------------------------------------------------------
  // WAYPOINT MANAGEMENT & INDIVIDUAL RADIUS CONTROL
  // --------------------------------------------------------------------------
  function addWaypoint(wp) {
    const newWp = {
      id: 'wp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      name: wp.name,
      lat: wp.lat,
      lng: wp.lng,
      radius: wp.radius || state.globalRadiusKm,
      hasCustomRadius: false
    };

    state.waypoints.push(newWp);
    renderMapElements();
    renderWaypointsList();
    filterAndRenderAttractions();
    savePlan();
    refreshLiveAttractions();
  }

  function removeWaypoint(id) {
    state.waypoints = state.waypoints.filter(w => w.id !== id);
    renderMapElements();
    renderWaypointsList();
    filterAndRenderAttractions();
    savePlan();
    refreshLiveAttractions();
  }

  function openWaypointRadiusModal(wp) {
    state.selectedWaypointForRadius = wp;
    selectedWaypointNameEl.textContent = wp.name;
    specificRadiusSlider.value = wp.radius;
    specificRadiusDisplay.textContent = `${wp.radius.toFixed(1)} ק"מ`;
    waypointRadiusModal.classList.add('active');
  }

  function renderWaypointsList() {
    waypointsCountBadge.textContent = state.waypoints.length;
    statWaypointsCount.textContent = state.waypoints.length;

    if (state.waypoints.length === 0) {
      waypointsListEl.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-map-pin"></i>
          <p>עדיין לא הוספת נקודות במסלול.</p>
          <span>לחץ על המפה או חפש יעד כדי להתחיל לבנות את המסלול של בן!</span>
        </div>
      `;
      statDistance.textContent = '0 ק"מ';
      return;
    }

    // Calculate approx total route distance
    let totalDistKm = 0;
    for (let i = 0; i < state.waypoints.length - 1; i++) {
      const from = L.latLng(state.waypoints[i].lat, state.waypoints[i].lng);
      const to = L.latLng(state.waypoints[i + 1].lat, state.waypoints[i + 1].lng);
      totalDistKm += from.distanceTo(to) / 1000;
    }
    statDistance.textContent = `${totalDistKm.toFixed(1)} ק"מ`;

    waypointsListEl.innerHTML = state.waypoints.map((wp, index) => `
      <div class="waypoint-item" data-id="${wp.id}">
        <div class="waypoint-left">
          <div class="waypoint-num">${index + 1}</div>
          <div class="waypoint-details">
            <span class="waypoint-title" title="${wp.name}">${wp.name}</span>
            <span class="waypoint-radius-tag" onclick="window.openWpRadiusModal('${wp.id}')">
              <i class="fa-solid fa-sliders"></i> רדיוס: ${wp.radius.toFixed(1)} ק"מ ${wp.hasCustomRadius ? '⭐' : ''}
            </span>
          </div>
        </div>
        <div class="waypoint-actions">
          <button class="btn-icon-danger" title="מחק נקודה" onclick="window.removeWp('${wp.id}')">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // Global window helpers for inline onclicks
  window.openWpRadiusModal = function(id) {
    const wp = state.waypoints.find(w => w.id === id);
    if (wp) openWaypointRadiusModal(wp);
  };
  window.removeWp = function(id) {
    removeWaypoint(id);
  };

  // --------------------------------------------------------------------------
  // MAP RENDERING (WAYPOINTS, CIRCLES, POLYLINE)
  // --------------------------------------------------------------------------
  function renderMapElements() {
    waypointsLayerGroup.clearLayers();
    radiusCirclesLayerGroup.clearLayers();

    if (state.waypoints.length === 0) {
      routePolylineLayer.setLatLngs([]);
      return;
    }

    const latLngs = state.waypoints.map(w => [w.lat, w.lng]);
    routePolylineLayer.setLatLngs(latLngs);

    state.waypoints.forEach((wp, idx) => {
      // 1. Radius Circle
      const circle = L.circle([wp.lat, wp.lng], {
        radius: wp.radius * 1000, // meters
        color: wp.hasCustomRadius ? '#f59e0b' : '#10b981',
        fillColor: wp.hasCustomRadius ? '#f59e0b' : '#10b981',
        fillOpacity: 0.12,
        weight: 1.5,
        dashArray: wp.hasCustomRadius ? '4,4' : null
      });

      circle.on('click', () => openWaypointRadiusModal(wp));
      radiusCirclesLayerGroup.addLayer(circle);

      // 2. Custom Marker Pin
      const iconHtml = `
        <div style="
          background: ${wp.hasCustomRadius ? '#f59e0b' : '#6366f1'};
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.85rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          border: 2px solid white;
        ">
          ${idx + 1}
        </div>
      `;
      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-leaflet-marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker([wp.lat, wp.lng], { icon: customIcon });
      
      marker.bindPopup(`
        <div style="direction:rtl; font-family:'Heebo',sans-serif; text-align:right;">
          <h4 style="margin:0 0 4px 0;">${wp.name}</h4>
          <p style="margin:0 0 8px 0; font-size:0.8rem; color:#666;">
            רדיוס חיפוש: <strong>${wp.radius.toFixed(1)} ק"מ</strong>
          </p>
          <button onclick="window.openWpRadiusModal('${wp.id}')" style="
            background:#6366f1; color:white; border:none; padding:4px 8px; border-radius:4px; font-size:0.78rem; cursor:pointer;
          ">
            שנה רדיוס לנקודה זו
          </button>
        </div>
      `);

      waypointsLayerGroup.addLayer(marker);
    });
  }

  // --------------------------------------------------------------------------
  // ATTRACTIONS FILTERING LOGIC
  // --------------------------------------------------------------------------
  function filterAndRenderAttractions() {
    if (state.waypoints.length === 0) {
      state.attractionsFound = [];
      attractionsMarkersLayerGroup.clearLayers();
      renderAttractionCards();
      savePlan();
      return;
    }

    // Filter the curated database and merge live places from OpenStreetMap.
    const results = [];

    ATTRACTIONS_DATABASE.forEach(attr => {
      if (!state.selectedCategories.has(attr.category)) return;

      // Check distance to any waypoint's specific radius
      let minDistanceKm = Infinity;
      let isWithinRadius = false;

      state.waypoints.forEach(wp => {
        const distKm = getDistanceKm(wp.lat, wp.lng, attr.lat, attr.lng);
        if (distKm < minDistanceKm) {
          minDistanceKm = distKm;
        }
        if (distKm <= wp.radius) {
          isWithinRadius = true;
        }
      });

      if (isWithinRadius) {
        results.push({
          ...attr,
          distKm: minDistanceKm
        });
      }
    });

    const knownNames = new Set(results.map(attr => attr.name.toLowerCase()));
    state.liveAttractions.forEach(attr => {
      if (!state.selectedCategories.has(attr.category) || knownNames.has(attr.name.toLowerCase())) return;

      let minDistanceKm = Infinity;
      let isWithinRadius = false;
      state.waypoints.forEach(wp => {
        const distKm = getDistanceKm(wp.lat, wp.lng, attr.lat, attr.lng);
        minDistanceKm = Math.min(minDistanceKm, distKm);
        if (distKm <= wp.radius) isWithinRadius = true;
      });

      if (isWithinRadius) {
        results.push({ ...attr, distKm: minDistanceKm });
        knownNames.add(attr.name.toLowerCase());
      }
    });

    state.attractionsFound = results;
    statAttractionsFound.textContent = results.length;
    resultsCountEl.textContent = results.length;

    renderAttractionMarkers();
    renderAttractionCards();
    savePlan();
  }

  function getDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  // --------------------------------------------------------------------------
  // ATTRACTION MARKERS & CARDS DISPLAY
  // --------------------------------------------------------------------------
  function renderAttractionMarkers() {
    attractionsMarkersLayerGroup.clearLayers();

    const categoryIcons = {
      attractions: 'fa-landmark',
      restaurants: 'fa-utensils',
      desserts: 'fa-cookie-bite',
      shopping: 'fa-bag-shopping',
      nature: 'fa-tree',
      nightlife: 'fa-martini-glass-citrus',
      gems: 'fa-gem'
    };

    const categoryColors = {
      attractions: '#6366f1',
      restaurants: '#f59e0b',
      desserts: '#ec4899',
      shopping: '#a855f7',
      nature: '#10b981',
      nightlife: '#06b6d4',
      gems: '#f43f5e'
    };

    state.attractionsFound.forEach(attr => {
      const color = categoryColors[attr.category] || '#6366f1';
      const iconClass = categoryIcons[attr.category] || 'fa-location-dot';

      const iconHtml = `
        <div style="
          background: ${color};
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          border: 1.5px solid white;
        ">
          <i class="fa-solid ${iconClass}"></i>
        </div>
      `;

      const markerIcon = L.divIcon({
        html: iconHtml,
        className: 'attr-leaflet-marker',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker([attr.lat, attr.lng], { icon: markerIcon });
      
      marker.bindPopup(`
        <div style="direction:rtl; font-family:'Heebo',sans-serif; text-align:right; max-width:200px;">
          <h4 style="margin:0 0 4px 0;">${attr.name}</h4>
          <p style="margin:0 0 4px 0; font-size:0.78rem; color:#666;">${attr.desc}</p>
          <span style="font-size:0.75rem; color:#10b981; font-weight:700;">⭐ ${attr.rating} | ${attr.price}</span>
        </div>
      `);

      attractionsMarkersLayerGroup.addLayer(marker);
    });
  }

  function renderAttractionCards() {
    if (state.attractionsFound.length === 0) {
      attractionsGrid.innerHTML = `
        <div style="padding:1.5rem; text-align:center; color:var(--text-muted); width:100%;">
          <i class="fa-solid fa-compass" style="font-size:2rem; margin-bottom:0.5rem; color:var(--accent-primary);"></i>
          <p style="font-weight:600;">לא נמצאו אטרקציות ברדיוס המסלול הנוכחי.</p>
          <span style="font-size:0.8rem;">נסה להגדיל את רדיוס החיפוש או לבחור קטגוריות נוספות!</span>
        </div>
      `;
      return;
    }

    // Sort Copy
    const sorted = [...state.attractionsFound];
    const sortBy = sortAttractionsSelect.value;

    if (sortBy === 'distance') {
      sorted.sort((a, b) => a.distKm - b.distKm);
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'category') {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    }

    const catLabels = {
      attractions: 'אטרקציה',
      restaurants: 'מסעדה',
      desserts: 'קינוח',
      shopping: 'קניות',
      nature: 'טבע',
      nightlife: 'חיי לילה',
      gems: 'פנינה נסתרת'
    };

    const catColors = {
      attractions: '#6366f1',
      restaurants: '#f59e0b',
      desserts: '#ec4899',
      shopping: '#a855f7',
      nature: '#10b981',
      nightlife: '#06b6d4',
      gems: '#f43f5e'
    };

    attractionsGrid.innerHTML = sorted.map(attr => `
      <div class="attraction-card">
        <div class="attr-img-wrapper">
          <img src="${attr.img}" alt="${attr.name}" loading="lazy">
          <span class="attr-category-badge" style="background:${catColors[attr.category] || '#6366f1'}">
            ${catLabels[attr.category] || attr.category}
          </span>
          ${attr.rating ? `
            <span class="attr-rating-badge">
              <i class="fa-solid fa-star"></i> ${attr.rating}
            </span>
          ` : `
            <span class="attr-rating-badge">חי מהאינטרנט</span>
          `}
        </div>
        <div class="attr-content">
          <h3 class="attr-name">${attr.name}</h3>
          <p class="attr-desc">${attr.desc}</p>
          
          ${attr.tips ? `
            <div style="font-size:0.73rem; color:var(--accent-amber); background:rgba(245,158,11,0.08); padding:0.3rem 0.5rem; border-radius:4px; margin-bottom:0.5rem;">
              <i class="fa-solid fa-lightbulb"></i> <strong>טיפ:</strong> ${attr.tips}
            </div>
          ` : ''}

          <div class="attr-meta">
            <span class="attr-price">${attr.price}</span>
            <span><i class="fa-solid fa-route"></i> ${attr.distKm.toFixed(1)} ק"מ מהמסלול</span>
          </div>

          <div class="attr-actions">
            <a href="${attr.gmapsUrl}" target="_blank" class="attr-btn attr-btn-nav">
              <i class="fa-solid fa-location-arrow"></i> גוגל מפות
            </a>
            ${attr.bookingUrl ? `
              <a href="${attr.bookingUrl}" target="_blank" class="attr-btn attr-btn-book">
                <i class="fa-solid fa-ticket"></i> הזמן כרטיס
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // GOOGLE MAPS IMPORT & EXPORT
  // --------------------------------------------------------------------------
  function exportToGoogleMapsUrl() {
    if (state.waypoints.length === 0) {
      alert('אין נקודות במסלול לייצוא.');
      return;
    }

    if (state.waypoints.length === 1) {
      const wp = state.waypoints[0];
      window.open(`https://www.google.com/maps/search/?api=1&query=${wp.lat},${wp.lng}`, '_blank');
      return;
    }

    // Google Maps Directions Format: origin, destination, waypoints
    const origin = `${state.waypoints[0].lat},${state.waypoints[0].lng}`;
    const destination = `${state.waypoints[state.waypoints.length - 1].lat},${state.waypoints[state.waypoints.length - 1].lng}`;
    
    let waypointsParam = '';
    if (state.waypoints.length > 2) {
      const middleWps = state.waypoints.slice(1, -1);
      waypointsParam = '&waypoints=' + middleWps.map(w => `${w.lat},${w.lng}`).join('|');
    }

    const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointsParam}&travelmode=driving`;
    window.open(gmapsUrl, '_blank');
  }

  function exportGpxFile() {
    if (state.waypoints.length === 0) {
      alert('אין נקודות במסלול לייצוא.');
      return;
    }

    let gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Ben Peleg Travel Planner">
  <trk>
    <name>מסלול בן פלג - Ben Peleg Trip</name>
    <trkseg>
`;

    state.waypoints.forEach(wp => {
      gpxContent += `      <trkpt lat="${wp.lat}" lon="${wp.lng}">
        <name>${escapeXml(wp.name)}</name>
      </trkpt>\n`;
    });

    gpxContent += `    </trkseg>
  </trk>
</gpx>`;

    downloadBlob(gpxContent, 'ben_peleg_route.gpx', 'application/gpx+xml');
  }

  function exportKmlFile() {
    if (state.waypoints.length === 0) {
      alert('אין נקודות במסלול לייצוא.');
      return;
    }

    let kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>מסלול בן פלג</name>
`;

    state.waypoints.forEach(wp => {
      kmlContent += `    <Placemark>
      <name>${escapeXml(wp.name)}</name>
      <Point>
        <coordinates>${wp.lng},${wp.lat},0</coordinates>
      </Point>
    </Placemark>\n`;
    });

    kmlContent += `  </Document>
</kml>`;

    downloadBlob(kmlContent, 'ben_peleg_route.kml', 'application/vnd.google-earth.kml+xml');
  }

  function exportPlanFile() {
    savePlan();
    const savedPlan = localStorage.getItem(STORAGE_KEY);
    if (!savedPlan) {
      alert('לא ניתן ליצור קובץ שיתוף כרגע.');
      return;
    }
    downloadBlob(savedPlan, 'ben_peleg_route.json', 'application/json');
  }

  function escapeXml(str) {
    return str.replace(/[<>&'"]/g, c => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
  }

  function downloadBlob(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function parseGoogleMapsInputUrl() {
    const url = gmapsUrlInput.value.trim();
    if (!url) return;

    // Try extracting coordinates pattern /dir/@lat,lng,zoom or lat,lng pairs
    const coordsMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) || url.match(/dir\/(-?\d+\.\d+),(-?\d+\.\d+)/g);

    if (coordsMatch) {
      const pairs = url.match(/(-?\d+\.\d+),(-?\d+\.\d+)/g);
      if (pairs && pairs.length > 0) {
        state.waypoints = [];
        pairs.forEach((p, idx) => {
          const [lat, lng] = p.split(',').map(Number);
          addWaypoint({
            name: `תחנה מגוגל מפות ${idx + 1}`,
            lat,
            lng,
            radius: state.globalRadiusKm
          });
        });
        googleMapsModal.classList.remove('active');
        alert(`נקלטו בהצלחה ${pairs.length} נקודות מגוגל מפות!`);
        return;
      }
    }

    alert('לא ניתן לפלח קואורדינטות מלינק זה. אנא ודא שהלינק מכיל נתוני מיקום מלאים, או העלה קובץ KML/GPX.');
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const content = evt.target.result;
      
      // Parse GPX / KML lat & lon regex
      const latLonMatches = [...content.matchAll(/lat=["'](-?\d+\.\d+)["']\s+lon=["'](-?\d+\.\d+)["']/g)];
      const kmlCoordMatches = [...content.matchAll(/<coordinates>\s*(-?\d+\.\d+),(-?\d+\.\d+)/g)];

      if (latLonMatches.length > 0) {
        state.waypoints = [];
        latLonMatches.forEach((m, idx) => {
          addWaypoint({
            name: `נקודת GPX ${idx + 1}`,
            lat: parseFloat(m[1]),
            lng: parseFloat(m[2]),
            radius: state.globalRadiusKm
          });
        });
        googleMapsModal.classList.remove('active');
        alert(`ייבוא GPX הושלם! נטענו ${latLonMatches.length} נקודות.`);
      } else if (kmlCoordMatches.length > 0) {
        state.waypoints = [];
        kmlCoordMatches.forEach((m, idx) => {
          addWaypoint({
            name: `נקודת KML ${idx + 1}`,
            lat: parseFloat(m[2]),
            lng: parseFloat(m[1]),
            radius: state.globalRadiusKm
          });
        });
        googleMapsModal.classList.remove('active');
        alert(`ייבוא KML הושלם! נטענו ${kmlCoordMatches.length} נקודות.`);
      } else {
        alert('לא נמצאו קואורדינטות בקובץ שהועלה.');
      }
    };
    reader.readAsText(file);
  }

  function handlePlanFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const importedPlan = JSON.parse(evt.target.result);
        if (!importedPlan || !Array.isArray(importedPlan.waypoints)) {
          throw new Error('Invalid plan');
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(importedPlan));
        window.location.reload();
      } catch (error) {
        alert('קובץ המסלול אינו תקין או שאינו קובץ שיתוף של האפליקציה.');
      } finally {
        planFileInput.value = '';
      }
    };
    reader.readAsText(file);
  }

  // Run App Initialization
  initApp();
});
