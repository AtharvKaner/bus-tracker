// --- Data (villages of Kolhapur) ---
const busStops = [
  // sample subset; expand this list with all villages from Kolhapur district (~1223 villages) :contentReference[oaicite:0]{index=0}
  "Akurde", "Alave", "Amatewadi", "Ambarde", "Ambavade",
  "Apati", "Arale", "Asagaon", "Asurle", "Atkirwadi",
  "Awali", "Badewadi", "Bahirewadi", "Bajarbhongaon", "Bandivade",
  "Bongewadi", "Borgaon", "Borivade", "Borpadale", "Chavhanwadi",
  "Danewadi", "Darewadi", "Desaiwadi", "Devthane", "Dewale",
  "Dhabdhabewadi", "Digawade", "Gharapan", "Ghotavade", "Giroli",
  "Gogave", "Golivade", "Gothane", "Gothe", "Gude",
  "Harpavade", "Injole", "Jakhale", "Japhale", "Jeeur",
  "K.Thane", "Kakhe", "Kale", "Kaljawade", "Kaneri",
  "Karanjphen", "Katebhogaon", "Kaurwadi", "Kekhale", "Kherivade",
  "Khotwadi", "Kisrul", "Kodavade", "Kolik", "Kololi",
  "Kotoli", "Kumbharwadi", "Kushire", "Mahadikwadi", "Majegaon",
  "Malharpeth", "Malwadi", "Manewadi", "Manwad", "Marali","Ichalkaranji","Nandgaon"
  // etc...
];

// Mock for live buses and traffic etc. (you can keep or remove as you like)
const liveBusesMock = [];
const trafficMock = [];

// Translations
const translations = {
  en: {
    planTitle: "Plan Your Journey",
    sourceLabel: "Source",
    destinationLabel: "Destination",
    sourcePlaceholder: "Enter Source Village",
    destPlaceholder: "Enter Destination Village",
  // appTitle: "MeriBUS", // No longer used for translation
    subtitle: "Now travel is easy",
    currentLocation: "Current Location",
    showLocation: "Show Current Location",
    findRoute: "Find Best Route",
    liveBuses: "Live Buses Near You",
    liveBusesCount: "3 Live Buses",
    reportStatus: "Report Bus Status",
    setArrivalAlert: "Set Arrival Alert",
    shareLocation: "Share Location",
    shareYourLocation: "Share Your Location",
    copyLink: "Copy Link",
    whatsapp: "WhatsApp",
    sms: "SMS",
    trafficUpdates: "Traffic Updates",
    extraFeatures: "Extra Innovative Features",
    crowdingPrediction: "Bus Crowding Prediction based on historical data",
    routeOptimization: "Route Optimization suggestions for authorities",
    offlineFirst: "Offline-first functionality for poor networks",
    footer: "© <span id='year'></span> BusTracker — Built for SIH demo",
    footerDesc: "Multi-language, offline-first design & simple UI"
  },
  hi: {
    planTitle: "अपनी यात्रा की योजना बनाएं",
    sourceLabel: "स्रोत",
    destinationLabel: "गंतव्य",
    sourcePlaceholder: "स्रोत गाँव दर्ज करें",
    destPlaceholder: "गंतव्य गाँव दर्ज करें",
    appTitle: "मेरीBUS",
    subtitle: "अब सफ़र होगा आसान",
    currentLocation: "वर्तमान स्थान",
    showLocation: "वर्तमान स्थान दिखाएँ",
    findRoute: "सर्वश्रेष्ठ मार्ग खोजें",
    liveBuses: "आपके पास लाइव बसें",
    liveBusesCount: "3 लाइव बसें",
    reportStatus: "बस स्थिति रिपोर्ट करें",
    setArrivalAlert: "आगमन अलर्ट सेट करें",
    shareLocation: "स्थान साझा करें",
    shareYourLocation: "अपना स्थान साझा करें",
    copyLink: "लिंक कॉपी करें",
    whatsapp: "व्हाट्सएप",
    sms: "एसएमएस",
    trafficUpdates: "यातायात अपडेट्स",
    extraFeatures: "अतिरिक्त नवाचारी सुविधाएँ",
    crowdingPrediction: "ऐतिहासिक डेटा पर आधारित भीड़ भविष्यवाणी",
    routeOptimization: "प्राधिकरणों के लिए मार्ग अनुकूलन सुझाव",
    offlineFirst: "कम नेटवर्क के लिए ऑफ़लाइन-फर्स्ट सुविधा",
    footer: "© <span id='year'></span> BusTracker — SIH डेमो के लिए निर्मित",
    footerDesc: "मल्टी-लैंग्वेज, ऑफ़लाइन-फर्स्ट डिज़ाइन और सरल UI"
  },
  pa: {
    planTitle: "ਆਪਣੀ ਯਾਤਰਾ ਦੀ ਯੋਜਨਾ ਬਣਾਓ",
    sourceLabel: "ਸਰੋਤ",
    destinationLabel: "ਮੰਜ਼ਿਲ",
    sourcePlaceholder: "ਸਰੋਤ ਪਿੰਡ ਦਰਜ ਕਰੋ",
    destPlaceholder: "ਮੰਜ਼ਿਲ ਪਿੰਡ ਦਰਜ ਕਰੋ",
    appTitle: "ਮੇਰੀBUS",
    subtitle: "ਹੁਣ ਯਾਤਰਾ ਆਸਾਨ ਹੈ",
    currentLocation: "ਮੌਜੂਦਾ ਟਿਕਾਣਾ",
    showLocation: "ਮੌਜੂਦਾ ਟਿਕਾਣਾ ਵੇਖੋ",
    findRoute: "ਸਭ ਤੋਂ ਵਧੀਆ ਰੂਟ ਲੱਭੋ",
    liveBuses: "ਤੁਹਾਡੇ ਨੇੜੇ ਲਾਈਵ ਬੱਸਾਂ",
    liveBusesCount: "3 ਲਾਈਵ ਬੱਸਾਂ",
    reportStatus: "ਬੱਸ ਦੀ ਸਥਿਤੀ ਰਿਪੋਰਟ ਕਰੋ",
    setArrivalAlert: "ਆਗਮਨ ਅਲਰਟ ਸੈੱਟ ਕਰੋ",
    shareLocation: "ਟਿਕਾਣਾ ਸਾਂਝਾ ਕਰੋ",
    shareYourLocation: "ਆਪਣਾ ਟਿਕਾਣਾ ਸਾਂਝਾ ਕਰੋ",
    copyLink: "ਲਿੰਕ ਕਾਪੀ ਕਰੋ",
    whatsapp: "ਵਟਸਐਪ",
    sms: "ਐਸਐਮਐਸ",
    trafficUpdates: "ਟ੍ਰੈਫਿਕ ਅੱਪਡੇਟਸ",
    extraFeatures: "ਵਧੀਆ ਨਵੀਨਤਮ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    crowdingPrediction: "ਇਤਿਹਾਸਕ ਡਾਟਾ 'ਤੇ ਆਧਾਰਿਤ ਭੀੜ ਦੀ ਭਵਿੱਖਬਾਣੀ",
    routeOptimization: "ਅਧਿਕਾਰੀਆਂ ਲਈ ਰੂਟ ਅਪਟੀਮਾਈਜ਼ੇਸ਼ਨ ਸੁਝਾਵ",
    offlineFirst: "ਘੱਟ ਨੈੱਟਵਰਕ ਲਈ ਆਫਲਾਈਨ-ਫਰਸਟ",
    footer: "© <span id='year'></span> BusTracker — SIH ਡੈਮੋ ਲਈ ਬਣਾਇਆ ਗਿਆ",
    footerDesc: "ਮਲਟੀ-ਭਾਸ਼ਾ, ਆਫਲਾਈਨ-ਫਰਸਟ ਡਿਜ਼ਾਈਨ ਅਤੇ ਸਧਾਰਣ UI"
  },
  mr: {
    planTitle: "आपल्या प्रवासाची योजना करा",
    sourceLabel: "स्रोत",
    destinationLabel: "गंतव्य",
    sourcePlaceholder: "स्रोत गाव प्रविष्ट करा",
    destPlaceholder: "गंतव्य गाव प्रविष्ट करा",
    appTitle: "मेरीBUS",
    subtitle: "आता प्रवास सोपा झाला आहे",
    currentLocation: "सध्याचे स्थान",
    showLocation: "सध्याचे स्थान दाखवा",
    findRoute: "सर्वोत्तम मार्ग शोधा",
    liveBuses: "तुमच्या जवळच्या लाइव्ह बस",
    liveBusesCount: "3 लाइव्ह बस",
    reportStatus: "बस स्थिती अहवाल द्या",
    setArrivalAlert: "आगमन सूचना सेट करा",
    shareLocation: "स्थान शेअर करा",
    shareYourLocation: "तुमचे स्थान शेअर करा",
    copyLink: "लिंक कॉपी करा",
    whatsapp: "व्हॉट्सअॅप",
    sms: "एसएमएस",
    trafficUpdates: "वाहतूक अद्यतने",
    extraFeatures: "अतिरिक्त नाविन्यपूर्ण वैशिष्ट्ये",
    crowdingPrediction: "ऐतिहासिक डेटावर आधारित गर्दीची भविष्यवाणी",
    routeOptimization: "प्राधिकाऱ्यांसाठी मार्ग अनुकूलन सूचना",
    offlineFirst: "कमी नेटवर्कसाठी ऑफलाइन-फर्स्ट",
    footer: "© <span id='year'></span> BusTracker — SIH डेमोसाठी तयार केले",
    footerDesc: "मल्टी-लँग्वेज, ऑफलाइन-फर्स्ट डिझाईन आणि साधा UI"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  let lang = localStorage.getItem("lang") || "en";
  document.getElementById("language").value = lang;
  switchLanguage();

  renderLiveBuses();
  renderTraffic();
  renderFeatures();

  // Enter key handling is now managed in filterStops for correct suggestion selection
});

// Language switcher
function switchLanguage() {
  let lang = document.getElementById("language").value;
  localStorage.setItem("lang", lang);

  const t = translations[lang] || translations.en;
  document.getElementById("planTitle").innerText = t.planTitle;
  document.getElementById("sourceLabel").innerText = t.sourceLabel;
  document.getElementById("destinationLabel").innerText = t.destinationLabel;
  document.getElementById("source").placeholder = t.sourcePlaceholder;
  document.getElementById("destination").placeholder = t.destPlaceholder;
}

// Autocomplete and suggestions
function filterStops(field) {
  let inputEl = document.getElementById(field);
  let input = inputEl.value.trim();
  let inputLower = input.toLowerCase();
  let suggestions = document.getElementById(field + "-suggestions");
  suggestions.innerHTML = "";

  if (!input) {
    suggestions.classList.add("hidden");
    return;
  }

  // Use a Set to ensure uniqueness (case-insensitive)
  const seen = new Set();
  const uniqueMatches = [];
  for (const stop of busStops) {
    const stopLower = stop.toLowerCase();
    if (stopLower.includes(inputLower) && !seen.has(stopLower)) {
      seen.add(stopLower);
      uniqueMatches.push(stop);
      if (uniqueMatches.length === 10) break;
    }
  }

  // Always show user's input as the top suggestion
  let topSuggestion = input;
  let isExactMatch = uniqueMatches.some(stop => stop.toLowerCase() === inputLower);
  if (!isExactMatch && input.length > 0) {
    uniqueMatches.unshift(input);
  }

  // Limit to 10 suggestions
  const displayMatches = uniqueMatches.slice(0, 10);

  if (displayMatches.length === 0) {
    let li = document.createElement("li");
    li.textContent = "No results";
    li.className = "muted";
    suggestions.appendChild(li);
    suggestions.classList.remove("hidden");
    return;
  }

  displayMatches.forEach((stop, idx) => {
    let li = document.createElement("li");
    li.textContent = stop;
    li.className = idx === 0 ? "top-suggestion" : "";
    li.onclick = () => {
      inputEl.value = stop;
      suggestions.classList.add("hidden");
      suggestions.innerHTML = "";
    };
    suggestions.appendChild(li);
  });

  // Make dropdown scrollable if many suggestions
  suggestions.style.maxHeight = "220px";
  suggestions.style.overflowY = "auto";

  suggestions.classList.remove("hidden");
  // Keyboard: Enter auto-selects top suggestion (not 'No results')
  inputEl.onkeydown = function(e) {
    if (e.key === "Enter") {
      const firstLi = suggestions.querySelector("li:not(.muted)");
      if (firstLi) {
        inputEl.value = firstLi.textContent;
        suggestions.classList.add("hidden");
        suggestions.innerHTML = "";
        e.preventDefault();
      }
    }
  };
}

// Render live buses (mock)
function renderLiveBuses() {
  const container = document.getElementById("live-bus-list");
  container.innerHTML = "";
  if (!window.liveBusesMock || window.liveBusesMock.length === 0) {
    container.innerHTML = '<div class="muted">No live buses found for this route.</div>';
    return;
  }
  window.liveBusesMock.forEach((bus, idx) => {
    const card = document.createElement("div");
    card.className = "bus-card";
    card.style.cursor = "pointer";
    card.setAttribute('tabindex', 0);
    // Animate on load
    card.style.animation = 'busCardIn 0.7s cubic-bezier(.4,2,.6,1)';

    // Bus icon
    const busIcon = `<span class="bus-icon" title="Bus">🚌</span>`;

    // Format bus number (MH32 AB 8008 style)
    let busNum = bus.label;
    if (!/^MH\d{2}\s[A-Z]{2}\s\d{4}$/.test(bus.label)) {
      // Generate a mock bus number if not already in format
      busNum = `MH${Math.floor(10+Math.random()*90)} ${String.fromCharCode(65+Math.floor(Math.random()*26))}${String.fromCharCode(65+Math.floor(Math.random()*26))} ${Math.floor(1000+Math.random()*9000)}`;
    }

    // Highlight if tracked
    if (window.trackedBusId === idx) {
      card.classList.add('tracked-bus');
    }

    card.onclick = () => {
      window.trackedBusId = idx;
      renderLiveBuses();
    };
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        window.trackedBusId = idx;
        renderLiveBuses();
      }
    };

    const meta = document.createElement("div");
    meta.className = "bus-meta";
    meta.innerHTML = `
      <div class="bus-route">${busIcon}<span>${busNum}</span> <span class="muted">(${bus.route})</span></div>
      <div class="bus-loc">Current: <strong>${bus.current}</strong> &rarr; Next: <strong>${bus.next}</strong></div>
      <div class="bus-stops muted">Stops: ${bus.stops.join(' &rarr; ')}</div>
    `;

    const right = document.createElement("div");
    right.style.textAlign = "right";
    // Format seat availability
    let seatText = '';
    if (bus.availableSeats === 0) {
      seatText = '<span class="badge" style="background:#ffd6d6;color:#d14b4b;">Full</span>';
    } else if (bus.availableSeats > 0 && bus.availableSeats < 40) {
      seatText = `<span class="badge" style="background:#e6fbef;color:#0a8a5f;">AVL ${bus.availableSeats}</span>`;
    } else if (bus.availableSeats >= 40) {
      seatText = '<span class="badge" style="background:#e3f1fb;color:#0b78d1;">Empty</span>';
    }
    right.innerHTML = `
      <div style="font-weight:700; font-size:18px; color:var(--accent)">${bus.eta} min</div>
      <div class="muted" style="font-size:12px;">ETA: ${bus.time}</div>
      ${seatText}
    `;

    card.appendChild(meta);
    card.appendChild(right);
    container.appendChild(card);
    setTimeout(() => card.style.animation = '', 800);
  });
}

// Render traffic (mock)
function renderTraffic() {
  const tcont = document.getElementById("traffic-list");
  tcont.innerHTML = "";
  trafficMock.forEach(it => {
    const el = document.createElement("div");
    el.className = "traffic-item";
    el.innerHTML = `<div>${it.location}</div><div class="muted">${it.status}</div>`;
    tcont.appendChild(el);
  });
}

// Render features
function renderFeatures() {
  const features = [
    {
      title: "No idea when the bus will arrive",
      body: "Live GPS tracking of all buses. Show ETA (Estimated Time of Arrival) on app screen."
    },
    {
      title: "Missed buses due to unpredictable schedules",
      body: "Provide daily updated schedule inside the app. Show 'Next 3 buses' for each route so users can plan backup."
    },
    {
      title: "Lack of route information",
      body: "Interactive route map inside app showing stops. Allow users to search 'From-To' and get best bus route."
    },
    {
      title: "Long waiting time at stops",
      body: "Show real-time bus location and delay info so people leave home only when village is near. Add notifications."
    },
    {
      title: "Overcrowded buses",
      body: "Allow drivers/conductors to update bus capacity (empty/half/full). Show this info in app."
    },
    {
      title: "People in rural areas with poor network",
      body: "Make app offline-first (store timetable when online). Add SMS-based tracking option for feature phones."
    },
    {
      title: "Safety concerns",
      body: "Show last known bus location for family tracking. Add SOS button in app for emergency help."
    },
    {
      title: "No feedback option",
      body: "Add a feedback form so users can report late buses, rude staff, or road issues."
    }
  ];

  const grid = document.getElementById("features-grid");
  grid.innerHTML = "";
  features.forEach(f => {
    const el = document.createElement("div");
    el.className = "feature";
    el.innerHTML = `<h4>${f.title}</h4><p class="muted">${f.body}</p>`;
    grid.appendChild(el);
  });
}

// Planner action (mock)
function findRoute() {
  // Simulate seat changes in real time
  if (window._seatInterval) clearInterval(window._seatInterval);
  window._seatInterval = setInterval(() => {
    if (!window.liveBusesMock) return;
    window.liveBusesMock.forEach(bus => {
      // Randomly book or free a seat for demo
      if (typeof bus.availableSeats === 'number') {
        if (bus.availableSeats > 0 && Math.random() < 0.3) bus.availableSeats--;
        else if (bus.availableSeats < 40 && Math.random() < 0.2) bus.availableSeats++;
      }
    });
    renderLiveBuses();
  }, 5000);
  window.trackedBusId = undefined;
  // Start dynamic updates for live buses
  if (window._liveBusInterval) clearInterval(window._liveBusInterval);
  window._liveBusInterval = setInterval(() => {
    if (!window.liveBusesMock) return;
    const now = new Date();
    window.liveBusesMock.forEach((bus, idx) => {
      // If tracked, update more frequently and highlight
      if (window.trackedBusId === idx) {
        // Simulate tracked bus moving every 10s
        if (!bus._lastMove || now - bus._lastMove > 10000) {
          if (bus.eta > 1) bus.eta = Math.max(1, bus.eta - 1);
          if (bus.eta <= 5 && bus.next !== bus.stops[bus.stops.length-1]) {
            const i = bus.stops.indexOf(bus.current);
            if (i !== -1 && i < bus.stops.length-1) {
              bus.current = bus.stops[i+1];
              bus.next = bus.stops[i+2] || bus.stops[i+1];
              bus.eta = 5 + Math.floor(Math.random()*10);
              const d = new Date(now.getTime() + bus.eta*60000);
              bus.time = d.getHours().toString().padStart(2,'0')+":"+d.getMinutes().toString().padStart(2,'0');
            }
          }
          bus._lastMove = now;
        }
      } else {
        // Untracked buses update every 30s as before
        if (bus.eta > 1) bus.eta = Math.max(1, bus.eta - 1);
        if (bus.eta <= 5 && bus.next !== bus.stops[bus.stops.length-1]) {
          const i = bus.stops.indexOf(bus.current);
          if (i !== -1 && i < bus.stops.length-1) {
            bus.current = bus.stops[i+1];
            bus.next = bus.stops[i+2] || bus.stops[i+1];
            bus.eta = 5 + Math.floor(Math.random()*10);
            const d = new Date(now.getTime() + bus.eta*60000);
            bus.time = d.getHours().toString().padStart(2,'0')+":"+d.getMinutes().toString().padStart(2,'0');
          }
        }
      }
    });
    renderLiveBuses();
  }, 30000);
  const s = document.getElementById("source").value.trim();
  const d = document.getElementById("destination").value.trim();
  const resultDiv = document.getElementById("route-result");
  const tripInfoCard = document.getElementById("trip-info-card");
  if (!s || !d) {
    resultDiv.textContent = "Please fill Source and Destination (this is a demo).";
    resultDiv.classList.add("muted");
    if (tripInfoCard) tripInfoCard.style.display = "none";
    return;
  }
  resultDiv.innerHTML = `<strong>Best route between "${s}" and "${d}":</strong><br>Route Suggestion: <span style='color:var(--accent)'>Take a bus from ${s} to ${d} (mock).</span>`;
  resultDiv.classList.add("muted");

  // --- Trip Info Calculation (mock logic) ---
  // For demo, use string length difference as a pseudo-distance
  let dist = Math.abs(s.length - d.length) * 4 + 8 + Math.floor(Math.random()*5); // 8-20 km
  let time = Math.round(dist / 0.6); // 0.6 km/min, so 15-35 min
  let fare = 10 + Math.round(dist * 1.8); // Rs 10 base + per km
  // Show card
  if (tripInfoCard) {
    tripInfoCard.innerHTML = `
      <div class="trip-info-flex">
        <div class="trip-info-item">
          <span class="trip-info-icon">⏰</span>
          <div class="trip-info-label">Est. Time</div>
          <div class="trip-info-value">${time} min</div>
        </div>
        <div class="trip-info-item">
          <span class="trip-info-icon">🛣️</span>
          <div class="trip-info-label">Distance</div>
          <div class="trip-info-value">${dist} km</div>
        </div>
        <div class="trip-info-item">
          <span class="trip-info-icon">₹</span>
          <div class="trip-info-label">Fare</div>
          <div class="trip-info-value">₹${fare}</div>
        </div>
      </div>
    `;
    tripInfoCard.style.display = "block";
  }

  // --- Generate mock live buses ---
  // For demo, create 3 buses with different timings and locations
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  // Helper to add minutes and format time
  function addMinutes(date, mins) {
    const d = new Date(date.getTime() + mins * 60000);
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
  }
  // Mock bus data
    window.liveBusesMock = [
      {
        route: `${s} → ${d}`,
        label: `Bus #${Math.floor(100 + Math.random()*900)}`,
        current: s,
        next: d,
        eta: 5,
        availableSeats: 21,
        time: addMinutes(now, 5),
        stops: [s, 'Midway', d]
      },
      {
        route: `${s} → ${d}`,
        label: `Bus #${Math.floor(100 + Math.random()*900)}`,
        current: 'Midway',
        next: d,
        eta: 12,
        availableSeats: 0,
        time: addMinutes(now, 12),
        stops: [s, 'Midway', d]
      },
      {
        route: `${s} → ${d}`,
        label: `Bus #${Math.floor(100 + Math.random()*900)}`,
        current: s,
        next: 'Midway',
        eta: 20,
        availableSeats: 40,
        time: addMinutes(now, 20),
        stops: [s, 'Midway', d]
      }
    ];
  renderLiveBuses();
}

// Quick actions (mocks)
function reportStatus(){ alert("Report Status — opens a form (not implemented in demo)."); }
function setArrivalAlert(){ alert("Arrival Alert set (demo)."); }
function shareLocation() {
  document.getElementById('share-modal').style.display = 'flex';
}

function closeShareModal() {
  document.getElementById('share-modal').style.display = 'none';
}

function copyLocationLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('Location link copied to clipboard!');
    closeShareModal();
  });
}

function shareViaWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, '_blank');
  closeShareModal();
}

function shareViaSMS() {
  const url = encodeURIComponent(window.location.href);
  window.open(`sms:?body=${url}`);
  closeShareModal();
}
