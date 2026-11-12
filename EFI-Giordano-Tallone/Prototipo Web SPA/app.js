/**
 * ========================================================
 * MR. PATITAS - SINGLE PAGE APPLICATION (SPA)
 * Red Comunitaria de Mascotas - Río Cuarto, Córdoba
 * Entrega Final Integradora (EFI) - Giordano & Tallone
 * ========================================================
 */

// Estado Global de la Aplicación
const AppState = {
  currentUser: null, // { name, email, phone, barrio, role, isLogged, avatar }
  userRole: 'vecino', // 'vecino' | 'proveedor'
  activeView: 'welcome',
  selectedZone: 'Todas',
  selectedCategory: 'all',
  currentPetDetailId: null,
  cart: [],
  favorites: ['milo', 'luna'],
  pendingProtectedAction: null,
  mapInstance: null,
  mapMarkers: [],

  // Base local de usuarios registrados (persiste en LocalStorage)
  usersDb: [
    {
      email: 'vecino@mrpatitas.com',
      password: 'password123',
      name: 'Lucila Tallone',
      phone: '+54 9 358 432-8891',
      barrio: 'Centro',
      role: 'vecino',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      activeReports: 1,
      rescuedCount: 2
    },
    {
      email: 'veterinaria@mrpatitas.com',
      password: 'password123',
      name: 'Dr. Carlos Giordano',
      phone: '+54 9 358 514-9922',
      barrio: 'Macrocentro',
      role: 'proveedor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      activeReports: 3,
      rescuedCount: 48
    }
  ],

  // Base de Mascotas (Caso Milo oficial + datos reales de Río Cuarto)
  pets: [
    {
      id: 'milo',
      name: 'Milo',
      type: 'lost',
      species: 'gato',
      badge: 'Perdido',
      breed: 'Atigrado gris · Sin collar',
      zone: 'Centro',
      fullLocation: 'Centro, Río Cuarto',
      distance: '1,2 km',
      timeAgo: 'Hace 4 horas',
      publishedAt: 'Publicado hace 4 horas',
      images: [
        'assets/milo_case/fotos_milo.png',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Se perdió en la zona del Centro. Si lo viste o tenés información, contactá a su dueño. ¡Ayudemos a que vuelva a casa!',
      details: {
        edad: '2 años',
        sexo: 'Macho',
        tamano: 'Mediano',
        collar: 'Sin collar',
        castrado: 'Sí',
        chip: 'No'
      },
      contactName: 'Lucía Tallone',
      contactPhone: '+54 9 358 432-8891',
      lat: -33.1255,
      lng: -64.3490,
      reward: '$50.000',
      ownerEmail: 'lucia.tallone@ejemplo.com'
    },
    {
      id: 'luna',
      name: 'Luna',
      type: 'lost',
      species: 'perro',
      badge: 'Perdida',
      breed: 'Collar rojo · Mediana',
      zone: 'Banda Norte',
      fullLocation: 'Banda Norte · 800 m',
      distance: '800 m',
      timeAgo: 'Hace 2 horas',
      publishedAt: 'Publicado hace 2 horas',
      images: [
        'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Golden retriever dócil y amigable. Asustadiza con ruidos fuertes de motos. Llevaba collar rojo con tachitas reflectivas.',
      details: {
        edad: '3 años',
        sexo: 'Hembra',
        tamano: 'Mediano/Grande',
        collar: 'Collar rojo reflectivo',
        castrado: 'Sí',
        chip: 'Sí'
      },
      contactName: 'Carlos Giordano',
      contactPhone: '+54 9 358 514-9922',
      lat: -33.1090,
      lng: -64.3450,
      reward: null,
      ownerEmail: 'carlos.giordano@ejemplo.com'
    },
    {
      id: 'simon',
      name: 'Simón',
      type: 'lost',
      species: 'perro',
      badge: 'Perdido',
      breed: 'Beagle tricolor · Orejas largas',
      zone: 'Alberdi',
      fullLocation: 'Alberdi, Río Cuarto',
      distance: '2,4 km',
      timeAgo: 'Hace 5 horas',
      publishedAt: 'Publicado hace 5 horas',
      images: [
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Se extravió cerca de la plaza del barrio Alberdi. Es muy curioso pero desconfiado con personas desconocidas.',
      details: {
        edad: '4 años',
        sexo: 'Macho',
        tamano: 'Mediano',
        collar: 'Collar azul de tela',
        castrado: 'Sí',
        chip: 'No'
      },
      contactName: 'Mariano Rossi',
      contactPhone: '+54 9 358 677-1234',
      lat: -33.1360,
      lng: -64.3320,
      reward: '$30.000',
      ownerEmail: 'mariano.alberdi@ejemplo.com'
    },
    {
      id: 'rocky',
      name: 'Rocky',
      type: 'found',
      species: 'perro',
      badge: 'Encontrado',
      breed: 'Boxer leonado · Pechera verde',
      zone: 'Macrocentro',
      fullLocation: 'Macrocentro, Río Cuarto',
      distance: '500 m',
      timeAgo: 'Hace 1 hora',
      publishedAt: 'Publicado hace 1 hora',
      images: [
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Encontrado desorientado frente a Veterinaria Río Pet en Av. España. Muy bien cuidado, limpio y sociable. Retenido en tránsito.',
      details: {
        edad: 'Joven (aprox 2 años)',
        sexo: 'Macho',
        tamano: 'Grande',
        collar: 'Pechera verde sin chapita',
        castrado: 'Desconocido',
        chip: 'Verificando'
      },
      contactName: 'Clínica Veterinaria Río Pet',
      contactPhone: '+54 9 358 464-9000',
      lat: -33.1280,
      lng: -64.3540,
      reward: null,
      ownerEmail: 'riopet.rc@ejemplo.com'
    },
    {
      id: 'nina',
      name: 'Nina',
      type: 'adoption',
      species: 'perro',
      badge: 'En Adopción',
      breed: 'Mestiza dulce · Mediana',
      zone: 'Banda Norte',
      fullLocation: 'Banda Norte, Río Cuarto',
      distance: '1,5 km',
      timeAgo: 'Ayer',
      publishedAt: 'Publicado ayer',
      images: [
        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Rescatada hace 3 semanas, completamente rehabilitada y desparasitada. Muy cariñosa con niños y sociable con otros animales.',
      details: {
        edad: '1 año y medio',
        sexo: 'Hembra',
        tamano: 'Mediano (12 kg)',
        collar: 'No',
        castrado: 'Sí',
        chip: 'No'
      },
      contactName: 'Refugio Amigos Peludos Río Cuarto',
      contactPhone: '+54 9 358 488-7711',
      lat: -33.1040,
      lng: -64.3390,
      reward: null,
      ownerEmail: 'refugio.rc@ejemplo.com'
    },
    {
      id: 'olivia',
      name: 'Olivia',
      type: 'adoption',
      species: 'gato',
      badge: 'En Adopción',
      breed: 'Gatita carey rescatada',
      zone: 'Centro',
      fullLocation: 'Centro, Río Cuarto',
      distance: '600 m',
      timeAgo: 'Hace 3 días',
      publishedAt: 'Publicado hace 3 días',
      images: [
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Ronroneadora profesional. Castrada, libre de VIF/ViLeF y con libreta sanitaria al día. Se entrega en adopción responsable para departamento protegido.',
      details: {
        edad: '8 meses',
        sexo: 'Hembra',
        tamano: 'Chico',
        collar: 'No',
        castrado: 'Sí',
        chip: 'No'
      },
      contactName: 'Paula Rescates',
      contactPhone: '+54 9 358 501-4433',
      lat: -33.1230,
      lng: -64.3460,
      reward: null,
      ownerEmail: 'paula.rescates@ejemplo.com'
    }
  ],

  // Productos del Marketplace local
  products: [
    {
      id: 'p1',
      title: 'Alimento Balance Premium Perros 15kg',
      price: 32500,
      originalPrice: 38000,
      category: 'Alimento',
      vendor: 'Veterinaria Río Pet Centro',
      rating: 4.9,
      reviewsCount: 38,
      stock: 12,
      badge: 'Más Vendido',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
      description: 'Nutrición balanceada con 26% de proteína de alta digestibilidad. Formulado para razas medianas y grandes.'
    },
    {
      id: 'p2',
      title: 'Correa Retráctil Reflectiva 5m',
      price: 14200,
      originalPrice: 17500,
      category: 'Accesorios',
      vendor: 'PetShop Banda Norte',
      rating: 4.8,
      reviewsCount: 24,
      stock: 8,
      badge: 'Seguridad',
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
      description: 'Freno ergonómico con botón de bloqueo seguro y cinta reflectiva de alta visibilidad para paseos nocturnos seguros.'
    },
    {
      id: 'p3',
      title: 'Chapita QR Inteligente Mr. Patitas',
      price: 4900,
      originalPrice: 6500,
      category: 'Identificación',
      vendor: 'Mr. Patitas Oficial Río Cuarto',
      rating: 5.0,
      reviewsCount: 112,
      stock: 45,
      badge: 'Recomendado',
      image: 'assets/logo.png',
      description: 'Chapa de aluminio grabada con código QR dinámico. Al escanearla, el vecino ve tus datos y te envía la ubicación GPS.'
    },
    {
      id: 'p4',
      title: 'Cama Ortopédica Antiestrés Lavable',
      price: 28000,
      originalPrice: 32000,
      category: 'Confort',
      vendor: 'Mundo Canino Alberdi',
      rating: 4.7,
      reviewsCount: 19,
      stock: 5,
      badge: 'Confort',
      image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80',
      description: 'Relleno viscoelástico de alta densidad que alivia articulaciones. Funda con cierre desmontable y base antideslizante.'
    }
  ],

  // Servicios locales
  services: [
    {
      id: 's1',
      title: 'Guardia Veterinaria & Urgencias 24 Horas',
      provider: 'Clínica Veterinaria Central Río Cuarto',
      pricePerHour: 18000,
      zone: 'Macrocentro (Av. Italia 450)',
      rating: 4.9,
      reviewsCount: 142,
      badge: 'Guardia 24hs Activa',
      icon: 'fa-solid fa-hospital',
      features: ['Ecografía y Rayos X', 'Cirugía de urgencia', 'Internación supervisada'],
      availableTimes: ['Inmediata', '14:00', '16:30', '19:00', '21:00']
    },
    {
      id: 's2',
      title: 'Paseos Caninos Recreativos & Socialización',
      provider: 'Paseadores Urbanos Río Cuarto',
      pricePerHour: 4500,
      zone: 'Banda Norte / Costanera del Río',
      rating: 4.8,
      reviewsCount: 89,
      badge: 'Paseador Certificado',
      icon: 'fa-solid fa-person-walking-with-dog',
      features: ['Grupos reducidos max 4 perros', 'GPS en vivo para dueños', 'Agua fresca e hidratación'],
      availableTimes: ['08:00 a 10:00', '10:30 a 12:30', '16:00 a 18:00', '18:30 a 20:30']
    },
    {
      id: 's3',
      title: 'Peluquería Canina, Baño y Ozonoterapia',
      provider: 'Spa Canino Burbujas Felices',
      pricePerHour: 11500,
      zone: 'Centro (Sobremonte 820)',
      rating: 4.9,
      reviewsCount: 67,
      badge: 'Libre de Estrés',
      icon: 'fa-solid fa-scissors',
      features: ['Corte higiénico o de raza', 'Corte de uñas y limpieza', 'Shampoo hipoalergénico'],
      availableTimes: ['09:30', '11:00', '15:00', '17:00']
    },
    {
      id: 's4',
      title: 'Guardería Familiar y Hospedaje por Día',
      provider: 'Hogar Canino Doña Rosa',
      pricePerHour: 9000,
      zone: 'Alberdi (Parque Sarmiento)',
      rating: 5.0,
      reviewsCount: 43,
      badge: 'Sin Caniles',
      icon: 'fa-solid fa-house-chimney-paw',
      features: ['Parque arbolado cercado', 'Atención 24hs familiar', 'Fotos y videos por WhatsApp'],
      availableTimes: ['Fin de semana', 'Día completo', 'Semana']
    }
  ],

  // Clínicas veterinarias para el mapa
  vetPoints: [
    { name: 'Veterinaria Río Pet Centro', address: 'San Martín 450, Centro', lat: -33.1250, lng: -64.3480, phone: '0358-4649000', guardia24: true },
    { name: 'Hospital Veterinario UNRC', address: 'Ruta 36 Km 601', lat: -33.1110, lng: -64.3000, phone: '0358-4676100', guardia24: true },
    { name: 'Clínica Veterinaria Banda Norte', address: 'Marcelo T. de Alvear 780', lat: -33.1080, lng: -64.3420, phone: '0358-4621122', guardia24: false },
    { name: 'Veterinaria El Ombú Alberdi', address: 'Av. Colombia 310', lat: -33.1370, lng: -64.3310, phone: '0358-4638844', guardia24: false }
  ]
};

// ==========================================
// FUNCIONES GLOBALES DE MODALES Y UI
// ==========================================
window.openReportPetModal = function(defaultType = 'lost') {
  requireAuth(() => {
    const modal = document.getElementById('reportModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const form = document.getElementById('reportForm');
      if (form) form.reset();
      const typeSelect = document.getElementById('reportPetType');
      if (typeSelect) typeSelect.value = defaultType;
      const preview = document.getElementById('reportPreviewImg');
      const placeholder = document.getElementById('reportUploadPlaceholder');
      if (preview) {
        preview.src = '';
        preview.classList.add('hidden');
      }
      if (placeholder) placeholder.classList.remove('hidden');
    }
  }, 'Para crear un reporte comunitario y proteger a las mascotas de Río Cuarto, por favor iniciá sesión.');
};

window.closeReportModal = function() {
  const modal = document.getElementById('reportModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.previewReportImage = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById('reportPreviewImg');
    const placeholder = document.getElementById('reportUploadPlaceholder');
    if (preview && placeholder) {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
      placeholder.classList.add('hidden');
    }
  };
  reader.readAsDataURL(file);
};

// ==========================================
// INICIALIZACIÓN Y PERSISTENCIA (LOCALSTORAGE)
// ==========================================
function initApp() {
  loadFromStorage();
  setupEventListeners();
  renderApp();
  initMap();

  if (AppState.currentUser && AppState.currentUser.isLogged) {
    navigateTo('home');
  } else {
    navigateTo('welcome');
  }
}

function loadFromStorage() {
  try {
    const savedUsersDb = localStorage.getItem('mrpatitas_users_db');
    if (savedUsersDb) {
      AppState.usersDb = JSON.parse(savedUsersDb);
    }

    const savedUser = localStorage.getItem('mrpatitas_user');
    if (savedUser) {
      AppState.currentUser = JSON.parse(savedUser);
      if (AppState.currentUser.role) {
        AppState.userRole = AppState.currentUser.role;
      }
    }

    const savedPets = localStorage.getItem('mrpatitas_pets');
    if (savedPets) {
      AppState.pets = JSON.parse(savedPets);
    }

    const savedCart = localStorage.getItem('mrpatitas_cart');
    if (savedCart) {
      AppState.cart = JSON.parse(savedCart);
    }

    const savedFavs = localStorage.getItem('mrpatitas_favs');
    if (savedFavs) {
      AppState.favorites = JSON.parse(savedFavs);
    }
  } catch (e) {
    console.error('Error cargando LocalStorage:', e);
  }
}

function saveToStorage() {
  try {
    localStorage.setItem('mrpatitas_users_db', JSON.stringify(AppState.usersDb));
    if (AppState.currentUser) {
      localStorage.setItem('mrpatitas_user', JSON.stringify(AppState.currentUser));
    } else {
      localStorage.removeItem('mrpatitas_user');
    }
    localStorage.setItem('mrpatitas_pets', JSON.stringify(AppState.pets));
    localStorage.setItem('mrpatitas_cart', JSON.stringify(AppState.cart));
    localStorage.setItem('mrpatitas_favs', JSON.stringify(AppState.favorites));
  } catch (e) {
    console.error('Error guardando en LocalStorage:', e);
  }
}

// ==========================================
// NAVEGACIÓN SPA DINÁMICA (SIN RECARGA)
// ==========================================
window.navigateTo = function(viewName, params = {}) {
  document.querySelectorAll('.spa-view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });

  AppState.activeView = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const topBar = document.getElementById('appTopBar');
  const bottomNav = document.getElementById('appBottomNav');
  const fabReport = document.getElementById('fabReportBtn');

  if (viewName === 'welcome') {
    if (topBar) topBar.classList.add('hidden');
    if (bottomNav) bottomNav.classList.add('hidden');
    if (fabReport) fabReport.classList.add('hidden');
  } else {
    if (topBar) topBar.classList.remove('hidden');
    if (bottomNav) bottomNav.classList.remove('hidden');
    if (fabReport) fabReport.classList.remove('hidden');
  }

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('active');
    targetView.style.display = viewName === 'welcome' ? 'flex' : 'block';
  }

  updateNavIndicators(viewName);

  if (viewName === 'home') {
    renderPetCards();
  } else if (viewName === 'detail') {
    if (params.id) AppState.currentPetDetailId = params.id;
    renderPetDetail(AppState.currentPetDetailId || 'milo');
  } else if (viewName === 'map') {
    setTimeout(() => refreshMap(), 150);
  } else if (viewName === 'adoptions') {
    renderAdoptions();
  } else if (viewName === 'marketplace') {
    renderMarketplace();
  } else if (viewName === 'profile') {
    renderProfile();
  } else if (viewName === 'favorites') {
    renderFavorites();
  }
};

function updateNavIndicators(viewName) {
  const mobileNavItems = ['home', 'map', 'adoptions', 'marketplace', 'profile'];
  mobileNavItems.forEach(item => {
    const el = document.getElementById(`nav-btn-${item}`);
    if (!el) return;
    const isCurrent = item === viewName || (viewName === 'detail' && item === 'home');
    if (isCurrent) {
      el.classList.add('text-brand-500', 'font-semibold');
      el.classList.remove('text-slate-500');
    } else {
      el.classList.remove('text-brand-500', 'font-semibold');
      el.classList.add('text-slate-500');
    }
  });

  const desktopNavItems = ['home', 'map', 'adoptions', 'marketplace', 'favorites'];
  desktopNavItems.forEach(item => {
    const el = document.getElementById(`dnav-${item}`);
    if (!el) return;
    const isCurrent = item === viewName || (viewName === 'detail' && item === 'home');
    if (isCurrent) {
      el.className = 'px-3.5 py-2 rounded-xl text-xs font-heading font-bold text-brand-600 bg-brand-50 transition shadow-xs';
    } else {
      el.className = 'px-3.5 py-2 rounded-xl text-xs font-heading font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition';
    }
  });
}

// ==========================================
// INTERCEPCIÓN DE ACCIONES PROTEGIDAS (AUTH)
// ==========================================
function requireAuth(actionCallback, reasonMsg = 'Para realizar esta acción comunitaria, por favor iniciá sesión o registrate.') {
  if (AppState.currentUser && AppState.currentUser.isLogged) {
    actionCallback();
  } else {
    AppState.pendingProtectedAction = actionCallback;
    openAuthModal('login', reasonMsg);
  }
}

window.handleGeneralPublish = function(defaultType = 'lost') {
  if (AppState.currentUser && AppState.currentUser.isLogged) {
    openReportPetModal(defaultType);
  } else {
    AppState.pendingProtectedAction = () => {
      openReportPetModal(defaultType);
    };
    openAuthModal('login', 'Para publicar una mascota en la red de Río Cuarto, por favor iniciá sesión con tu cuenta.');
  }
};

window.handlePublishMarketplace = function() {
  requireAuth(() => {
    showToast('Formulario para publicar producto o servicio comercial habilitado.', 'info');
  }, 'Para publicar productos o servicios profesionales en el Marketplace local, iniciá sesión.');
};

window.openAuthModal = function(defaultTab = 'login', reasonMsg = null) {
  const modal = document.getElementById('authModal');
  const reasonEl = document.getElementById('authModalReason');
  if (reasonEl) {
    reasonEl.textContent = reasonMsg || 'Para publicar en la red comunitaria o contactar a los dueños, por favor ingresá con tu cuenta.';
  }
  switchAuthModalTab(defaultTab);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeAuthModal = function() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

function switchAuthModalTab(tab) {
  const tabLogin = document.getElementById('modalTabLogin');
  const tabReg = document.getElementById('modalTabRegister');
  const subLogin = document.getElementById('modalSubViewLogin');
  const subReg = document.getElementById('modalSubViewRegister');

  if (tab === 'login') {
    if (tabLogin) tabLogin.className = 'flex-1 py-2 rounded-xl font-heading font-bold text-xs bg-white text-slate-900 shadow-xs transition';
    if (tabReg) tabReg.className = 'flex-1 py-2 rounded-xl font-heading font-semibold text-xs text-slate-600 hover:text-slate-900 transition';
    if (subLogin) subLogin.classList.remove('hidden');
    if (subReg) subReg.classList.add('hidden');
  } else {
    if (tabReg) tabReg.className = 'flex-1 py-2 rounded-xl font-heading font-bold text-xs bg-white text-slate-900 shadow-xs transition';
    if (tabLogin) tabLogin.className = 'flex-1 py-2 rounded-xl font-heading font-semibold text-xs text-slate-600 hover:text-slate-900 transition';
    if (subReg) subReg.classList.remove('hidden');
    if (subLogin) subLogin.classList.add('hidden');
  }
}

window.fillDemoCredentials = function(role) {
  const emailInput = document.getElementById('loginEmail');
  const passInput = document.getElementById('loginPassword');
  if (role === 'vecino') {
    if (emailInput) emailInput.value = 'vecino@mrpatitas.com';
    if (passInput) passInput.value = 'password123';
  } else {
    if (emailInput) emailInput.value = 'veterinaria@mrpatitas.com';
    if (passInput) passInput.value = 'password123';
  }
  showToast('Credenciales completadas. Presioná "Iniciar Sesión" para ingresar.', 'info');
};

window.handleModalLogin = function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPassword').value.trim();

  const user = AppState.usersDb.find(u => u.email.toLowerCase() === email && u.password === pass);

  if (user) {
    AppState.currentUser = { ...user, isLogged: true };
    AppState.userRole = user.role;
    saveToStorage();
    updateHeaderUserPill();
    closeAuthModal();
    showToast(`¡Bienvenido/a de nuevo, ${user.name}!`, 'success');

    if (AppState.pendingProtectedAction) {
      const callback = AppState.pendingProtectedAction;
      AppState.pendingProtectedAction = null;
      callback();
    } else {
      if (AppState.activeView === 'welcome') {
        navigateTo('home');
      } else {
        navigateTo(AppState.activeView);
      }
    }
  } else {
    showToast('Credenciales incorrectas. Verificá los datos o usá los atajos demo.', 'error');
  }
};

window.handleModalRegister = function(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const phone = document.getElementById('regPhone').value.trim();
  const barrio = document.getElementById('regBarrio').value;
  const password = document.getElementById('regPassword').value;
  const passwordConfirm = document.getElementById('regPasswordConfirm').value;
  const roleEl = document.querySelector('input[name="regRole"]:checked');
  const role = roleEl ? roleEl.value : 'vecino';

  if (password.length < 6) {
    showToast('La contraseña debe tener al menos 6 caracteres.', 'error');
    return;
  }
  if (password !== passwordConfirm) {
    showToast('Las contraseñas no coinciden.', 'error');
    return;
  }
  if (phone.length < 8) {
    showToast('Ingresá un número de WhatsApp válido.', 'error');
    return;
  }

  const exists = AppState.usersDb.some(u => u.email.toLowerCase() === email);
  if (exists) {
    showToast('Ese correo ya está registrado. Por favor iniciá sesión.', 'error');
    switchAuthModalTab('login');
    document.getElementById('loginEmail').value = email;
    return;
  }

  const newUser = {
    name,
    email,
    phone,
    barrio,
    password,
    role,
    avatar: role === 'proveedor' ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    activeReports: 0,
    rescuedCount: 0
  };

  AppState.usersDb.push(newUser);
  AppState.currentUser = { ...newUser, isLogged: true };
  AppState.userRole = role;
  saveToStorage();
  updateHeaderUserPill();
  closeAuthModal();

  showToast(`¡Cuenta creada con éxito! Bienvenido, ${name}.`, 'success');

  if (AppState.pendingProtectedAction) {
    const callback = AppState.pendingProtectedAction;
    AppState.pendingProtectedAction = null;
    callback();
  } else {
    navigateTo('home');
  }
};

window.logout = function() {
  AppState.currentUser = null;
  AppState.userRole = 'vecino';
  saveToStorage();
  updateHeaderUserPill();
  showToast('Has cerrado sesión. Ahora navegás como Invitado.', 'info');
  navigateTo('home');
};

function updateHeaderUserPill() {
  const pill = document.getElementById('headerUserPill');
  if (!pill) return;

  if (AppState.currentUser && AppState.currentUser.isLogged) {
    pill.innerHTML = `
      <div onclick="navigateTo('profile')" class="flex items-center gap-2 cursor-pointer bg-slate-100 hover:bg-slate-200 py-1.5 px-3 rounded-full transition text-xs font-medium text-slate-800" title="Ver mi perfil">
        <img src="${AppState.currentUser.avatar || 'assets/logo.png'}" class="w-6 h-6 rounded-full object-cover border border-brand-500">
        <span class="hidden sm:inline font-heading font-semibold">${AppState.currentUser.name.split(' ')[0]}</span>
      </div>
    `;
  } else {
    pill.innerHTML = `
      <button onclick="openAuthModal('login', 'Iniciá sesión para publicar alertas y contactar dueños')" class="flex items-center gap-1.5 bg-brand-50 hover:bg-brand-100 text-brand-600 border border-brand-200 py-1.5 px-3.5 rounded-full transition text-xs font-heading font-bold shadow-xs">
        <i class="fa-solid fa-arrow-right-to-bracket text-xs"></i>
        <span>Ingresar</span>
      </button>
    `;
  }
}

// ==========================================
// FILTRADO Y BÚSQUEDA EN TIEMPO REAL
// ==========================================
window.setCategoryFilter = function(category) {
  AppState.selectedCategory = category;

  const pills = ['all', 'lost', 'found', 'adoption'];
  pills.forEach(cat => {
    const el = document.getElementById(`cat-pill-${cat}`);
    if (!el) return;
    if (cat === category) {
      if (cat === 'lost') {
        el.className = 'cat-pill pill-lost-alert active px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-red-600 text-white shadow-xs transition';
      } else if (cat === 'found') {
        el.className = 'cat-pill px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-emerald-700 text-white shadow-xs transition';
      } else if (cat === 'adoption') {
        el.className = 'cat-pill px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-purple-700 text-white shadow-xs transition';
      } else {
        el.className = 'cat-pill px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-slate-900 text-white shadow-xs transition';
      }
    } else {
      if (cat === 'lost') {
        el.className = 'cat-pill pill-lost-alert px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-red-400 transition';
      } else {
        el.className = 'cat-pill px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white text-slate-700 border border-slate-200 hover:border-brand-300 transition';
      }
    }
  });

  renderPetCards();
};

window.handleZoneChange = function(zone) {
  AppState.selectedZone = zone;
  renderPetCards();
  showToast(`Filtrando publicaciones de: ${zone}`, 'info');
};

window.clearSearchInput = function() {
  const input = document.getElementById('homeSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  renderPetCards();
};

window.resetHomeFilters = function() {
  AppState.selectedZone = 'Todas';
  AppState.selectedCategory = 'all';
  clearSearchInput();

  const zoneSelect = document.getElementById('zoneSelectDropdown');
  if (zoneSelect) zoneSelect.value = 'Todas';

  setCategoryFilter('all');
};

function renderPetCards() {
  const container = document.getElementById('petListContainer');
  if (!container) return;

  let filtered = AppState.pets;

  if (AppState.selectedCategory === 'lost') {
    filtered = filtered.filter(p => p.type === 'lost');
  } else if (AppState.selectedCategory === 'found') {
    filtered = filtered.filter(p => p.type === 'found');
  } else if (AppState.selectedCategory === 'adoption') {
    filtered = filtered.filter(p => p.type === 'adoption');
  }

  if (AppState.selectedZone !== 'Todas') {
    filtered = filtered.filter(p => p.zone.toLowerCase().includes(AppState.selectedZone.toLowerCase()));
  }

  const searchInput = document.getElementById('homeSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  if (searchInput && searchInput.value.trim() !== '') {
    const q = searchInput.value.toLowerCase().trim();
    if (clearBtn) clearBtn.classList.remove('hidden');
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.breed.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.zone.toLowerCase().includes(q)
    );
  } else {
    if (clearBtn) clearBtn.classList.add('hidden');
  }

  const counterEl = document.getElementById('petCountLabel');
  if (counterEl) {
    counterEl.textContent = `Mostrando ${filtered.length} mascota${filtered.length === 1 ? '' : 's'} en Río Cuarto`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-slate-200 p-8">
        <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-3xl mb-3">
          🐾
        </div>
        <h4 class="font-heading font-bold text-slate-800 text-base">No hay reportes con estos criterios</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Probá seleccionando "Todas las zonas" o buscando con otras palabras.</p>
        <button onclick="resetHomeFilters()" class="mt-4 px-5 py-2 bg-brand-50 hover:bg-brand-100 text-brand-600 text-xs font-heading font-bold rounded-full transition">
          Reestablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pet => {
    const isFav = AppState.favorites.includes(pet.id);
    const badgeClass = pet.type === 'lost' ? 'badge-lost' : (pet.type === 'found' ? 'badge-found' : 'badge-adopt');
    const photo = pet.images && pet.images[0] ? pet.images[0] : 'assets/logo.png';

    return `
      <article onclick="openPetDetail('${pet.id}')" class="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-brand-300 transition-all overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-1">
        <div class="relative w-full h-52 bg-slate-100 overflow-hidden">
          <img src="${photo}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          
          <div class="absolute top-3 left-3">
            <span class="px-3 py-1 rounded-full text-xs font-heading font-bold shadow-xs ${badgeClass}">
              ${pet.type === 'lost' ? '🚨 ' : (pet.type === 'found' ? '🐾 ' : '💛 ')} ${pet.badge}
            </span>
          </div>

          <button onclick="event.stopPropagation(); toggleFavorite('${pet.id}')" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-slate-600 hover:text-brand-500 shadow-md flex items-center justify-center transition">
            <i class="${isFav ? 'fa-solid fa-heart text-brand-500' : 'fa-regular fa-heart'} text-sm"></i>
          </button>

          <div class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-xs flex items-center gap-1.5 font-medium">
            <i class="fa-solid fa-location-dot text-brand-400"></i> ${pet.zone} · ${pet.distance}
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-heading font-bold text-slate-900 text-lg group-hover:text-brand-500 transition-colors">
                ${pet.name}
              </h3>
              <span class="text-xs text-slate-400 font-medium">${pet.timeAgo}</span>
            </div>
            <p class="text-xs text-slate-600 font-semibold mt-1 line-clamp-1">
              ${pet.breed}
            </p>
            <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
              ${pet.description}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span class="text-xs text-brand-600 font-heading font-bold flex items-center gap-1">
              Ver ficha completa <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </span>
            <span class="text-[11px] text-slate-400">Río Cuarto</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ==========================================
// FICHA EN DETALLE DE MASCOTA
// ==========================================
window.openPetDetail = function(petId) {
  AppState.currentPetDetailId = petId;
  navigateTo('detail', { id: petId });
};

function renderPetDetail(petId) {
  const container = document.getElementById('petDetailContainer');
  if (!container) return;

  const pet = AppState.pets.find(p => p.id === petId) || AppState.pets[0];
  const isFav = AppState.favorites.includes(pet.id);
  const badgeClass = pet.type === 'lost' ? 'bg-red-600 text-white' : (pet.type === 'found' ? 'bg-emerald-600 text-white' : 'bg-purple-600 text-white');

  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <button onclick="navigateTo('home')" class="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-heading font-semibold rounded-full border border-slate-200 shadow-xs flex items-center gap-2 transition">
        <i class="fa-solid fa-arrow-left"></i> Volver al listado
      </button>
      <div class="flex items-center gap-2">
        <button onclick="sharePetDetail('${pet.id}')" class="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs flex items-center justify-center transition" title="Compartir">
          <i class="fa-solid fa-share-nodes text-sm"></i>
        </button>
        <button onclick="toggleFavorite('${pet.id}'); renderPetDetail('${pet.id}')" class="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs flex items-center justify-center transition" title="Guardar en favoritos">
          <i class="${isFav ? 'fa-solid fa-heart text-brand-500' : 'fa-regular fa-heart'} text-sm"></i>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div class="lg:col-span-6 space-y-4">
        <div class="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md bg-slate-900 border border-slate-200">
          <img id="detailHeroImage" src="${pet.images[0]}" alt="${pet.name}" class="w-full h-full object-cover">
          
          <div class="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-10">
            <div class="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2 shadow">
              ${pet.images.map((img, idx) => `
                <button onclick="switchDetailPhoto('${img}')" class="w-2.5 h-2.5 rounded-full ${idx === 0 ? 'bg-brand-500 w-5' : 'bg-slate-300'} transition-all"></button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-heading font-bold text-slate-900 text-sm">Última vez visto</h4>
              <p class="text-xs text-slate-500">${pet.fullLocation} · ${pet.timeAgo}</p>
            </div>
            <span class="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">Ubicación aproximada</span>
          </div>

          <div onclick="navigateTo('map')" class="relative h-44 w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden cursor-pointer group">
            <div class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
            
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg ring-4 ring-brand-100 group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-location-dot text-base"></i>
                </div>
                <div class="mt-1 bg-white text-slate-800 font-heading font-bold text-xs px-2.5 py-0.5 rounded-full shadow border border-slate-100">
                  ${pet.zone}
                </div>
              </div>
            </div>

            <div class="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur text-white px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-map"></i> Ver en Mapa Completo
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-6 space-y-6">
        <div>
          <div class="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider shadow-xs ${badgeClass} mb-3">
            ${pet.badge} en ${pet.zone}, Río Cuarto
          </div>

          <div class="flex items-baseline justify-between flex-wrap gap-2">
            <h1 class="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              ${pet.name}
            </h1>
            ${pet.reward ? `<span class="bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-xl text-xs font-heading font-bold">Recompensa: ${pet.reward}</span>` : ''}
          </div>
          <p class="text-xs text-slate-400 font-medium mt-1">
            <i class="fa-regular fa-clock"></i> ${pet.publishedAt} · Barrio ${pet.zone}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
          <h4 class="font-heading font-bold text-slate-800 text-sm mb-1">${pet.breed}</h4>
          <p class="text-slate-600 text-sm leading-relaxed">${pet.description}</p>
        </div>

        <div>
          <h3 class="font-heading font-bold text-slate-900 text-base mb-3">Ficha Técnica</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Especie / Sexo</span>
              <span class="font-heading font-semibold text-slate-800 text-sm capitalize">${pet.species} · ${pet.details.sexo}</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Edad estimada</span>
              <span class="font-heading font-semibold text-slate-800 text-sm">${pet.details.edad}</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Tamaño</span>
              <span class="font-heading font-semibold text-slate-800 text-sm">${pet.details.tamano}</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Collar</span>
              <span class="font-heading font-semibold text-slate-800 text-sm">${pet.details.collar}</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Castrado/a</span>
              <span class="font-heading font-semibold text-slate-800 text-sm">${pet.details.castrado}</span>
            </div>
            <div class="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <span class="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Microchip</span>
              <span class="font-heading font-semibold text-slate-800 text-sm">${pet.details.chip}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-heading font-bold text-lg">
              ${pet.contactName ? pet.contactName[0] : 'U'}
            </div>
            <div>
              <h4 class="font-heading font-semibold text-slate-900 text-sm">${pet.contactName || 'Vecino de Río Cuarto'}</h4>
              <span class="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                <i class="fa-solid fa-circle-check text-[10px]"></i> Usuario Verificado de Río Cuarto
              </span>
            </div>
          </div>
          <span class="text-xs text-slate-400">Miembro 2026</span>
        </div>

        <div class="pt-2">
          <button onclick="handleContactOwner('${pet.id}')" class="w-full py-4 px-6 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-heading font-bold text-base rounded-2xl shadow-xl shadow-brand-500/30 transition-all flex items-center justify-center gap-3">
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <span>Contactar al dueño (WhatsApp)</span>
          </button>
          <p class="text-center text-[11px] text-slate-400 mt-2">
            Por seguridad comunitaria, se requiere identificación previa para contactar al dueño.
          </p>
        </div>
      </div>
    </div>
  `;
}

window.switchDetailPhoto = function(src) {
  const hero = document.getElementById('detailHeroImage');
  if (hero) hero.src = src;
};

window.handleContactOwner = function(petId) {
  const pet = AppState.pets.find(p => p.id === petId);
  if (!pet) return;

  requireAuth(() => {
    openContactModal(pet);
  }, `Para contactar por WhatsApp al dueño de ${pet.name} y proteger la privacidad comunitaria, por favor iniciá sesión.`);
};

window.openContactModal = function(pet) {
  const modal = document.getElementById('contactModal');
  const petNameEl = document.getElementById('contactModalPetName');
  const phoneEl = document.getElementById('contactModalPhone');
  const messagePreview = document.getElementById('contactModalMessage');
  const whatsappLink = document.getElementById('contactModalWhatsappBtn');

  if (petNameEl) petNameEl.textContent = pet.name;
  if (phoneEl) phoneEl.textContent = pet.contactPhone;

  const defaultMsg = encodeURIComponent(`Hola ${pet.contactName}, vi tu publicación en Mr. Patitas sobre ${pet.name} (${pet.badge} en ${pet.zone}). Tengo información para compartirte.`);
  const cleanPhone = pet.contactPhone.replace(/[^0-9]/g, '');

  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${cleanPhone}?text=${defaultMsg}`;
  }
  if (messagePreview) {
    messagePreview.textContent = decodeURIComponent(defaultMsg);
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeContactModal = function() {
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// ==========================================
// FORMULARIO DE REPORTE CON CAMPOS OPCIONALES Y SUBIDA DE FOTO
// ==========================================
window.handleReportSubmit = function(e) {
  e.preventDefault();

  const name = document.getElementById('reportPetName').value.trim();
  const type = document.getElementById('reportPetType').value;
  const species = document.getElementById('reportPetSpecies').value;
  const breed = document.getElementById('reportPetBreed').value.trim() || 'Mestizo / Sin especificar';
  const zone = document.getElementById('reportPetZone').value;
  const description = document.getElementById('reportPetDesc').value.trim() || 'Sin descripción adicional proporcionada por el vecino.';
  const phone = document.getElementById('reportPetPhone').value.trim();
  const rewardInput = document.getElementById('reportPetReward').value.trim();

  const sexo = document.getElementById('reportDetailSexo').value;
  const edad = document.getElementById('reportDetailEdad').value.trim() || 'No especificada';
  const tamano = document.getElementById('reportDetailTamano').value;
  const collar = document.getElementById('reportDetailCollar').value.trim() || 'Sin collar visible';
  const castrado = document.getElementById('reportDetailCastrado').value;
  const chip = document.getElementById('reportDetailChip').value;

  if (!name || !phone) {
    showToast('Por favor completá el Nombre y el Teléfono de contacto.', 'error');
    return;
  }

  let lat = -33.1232;
  let lng = -64.3493;
  if (zone === 'Banda Norte') { lat = -33.1090; lng = -64.3450; }
  else if (zone === 'Alberdi') { lat = -33.1360; lng = -64.3320; }
  else if (zone === 'Macrocentro') { lat = -33.1280; lng = -64.3540; }
  else if (zone === 'Sur') { lat = -33.1450; lng = -64.3500; }

  let photoUrl = species === 'gato' 
    ? 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
    : 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';

  const preview = document.getElementById('reportPreviewImg');
  if (preview && preview.src && !preview.classList.contains('hidden')) {
    photoUrl = preview.src;
  }

  const newPet = {
    id: 'report_' + Date.now(),
    name: name,
    type: type,
    species: species,
    badge: type === 'lost' ? 'Perdido' : (type === 'found' ? 'Encontrado' : 'En Adopción'),
    breed: breed,
    zone: zone,
    fullLocation: `${zone}, Río Cuarto`,
    distance: 'Cerca de vos',
    timeAgo: 'Recién',
    publishedAt: 'Publicado hace unos momentos',
    images: [photoUrl],
    description: description,
    details: {
      edad: edad,
      sexo: sexo,
      tamano: tamano,
      collar: collar,
      castrado: castrado,
      chip: chip
    },
    contactName: AppState.currentUser ? AppState.currentUser.name : 'Vecino de Río Cuarto',
    contactPhone: phone,
    lat: lat,
    lng: lng,
    reward: rewardInput ? (rewardInput.startsWith('$') ? rewardInput : '$' + rewardInput) : null,
    ownerEmail: AppState.currentUser ? AppState.currentUser.email : ''
  };

  AppState.pets.unshift(newPet);
  saveToStorage();

  closeReportModal();
  showToast('¡Reporte publicado con éxito en la red de Río Cuarto!', 'success');
  addPetMarkerToMap(newPet);
  openPetDetail(newPet.id);
};

// ==========================================
// MAPA COMUNITARIO LEAFLET (RÍO CUARTO)
// ==========================================
function initMap() {
  const mapEl = document.getElementById('leafletMapContainer');
  if (!mapEl || AppState.mapInstance) return;

  AppState.mapInstance = L.map('leafletMapContainer').setView([-33.1232, -64.3493], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Mr. Patitas'
  }).addTo(AppState.mapInstance);
  refreshMapMarkers('all');
}

window.refreshMap = function() {
  if (AppState.mapInstance) {
    AppState.mapInstance.invalidateSize();
  } else {
    initMap();
  }
};

window.refreshMapMarkers = function(filterType = 'all') {
  if (!AppState.mapInstance) return;

  AppState.mapMarkers.forEach(m => AppState.mapInstance.removeLayer(m));
  AppState.mapMarkers = [];

  const mapBtns = ['all', 'lost', 'found', 'vets'];
  mapBtns.forEach(b => {
    const el = document.getElementById(`map-btn-${b}`);
    if (!el) return;
    if (b === filterType) {
      el.className = 'px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xs';
    } else {
      el.className = 'px-4 py-2 rounded-full bg-white text-slate-700 border border-slate-200 text-xs font-semibold whitespace-nowrap hover:bg-slate-50';
    }
  });

  AppState.pets.forEach(pet => {
    if (filterType === 'lost' && pet.type !== 'lost') return;
    if (filterType === 'found' && pet.type !== 'found') return;
    if (filterType === 'vets') return;

    addPetMarkerToMap(pet);
  });

  if (filterType === 'all' || filterType === 'vets') {
    AppState.vetPoints.forEach(vet => {
      const vetIcon = L.divIcon({
        className: 'custom-map-vet',
        html: `<div style="background-color: #2563eb; color: white; width: 34px; height: 34px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(37,99,235,0.4); border: 2px solid white;"><i class="fa-solid fa-hospital text-sm"></i></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker([vet.lat, vet.lng], { icon: vetIcon }).addTo(AppState.mapInstance);
      marker.bindPopup(`
        <div style="font-family: 'Inter', sans-serif; padding: 12px; width: 220px;">
          <span style="font-size: 10px; font-weight: bold; color: #2563eb; text-transform: uppercase;">Veterinaria</span>
          <h4 style="font-family: 'Poppins', sans-serif; font-weight: 700; margin: 4px 0; font-size: 14px; color: #0f172a;">${vet.name}</h4>
          <p style="font-size: 11px; color: #64748b; margin-bottom: 8px;">${vet.address}</p>
          ${vet.guardia24 ? '<span style="background: #eff6ff; color: #1d4ed8; font-size: 10px; padding: 2px 6px; border-radius: 6px; font-weight: 600;">Guardia 24 Horas</span><br>' : ''}
          <a href="tel:${vet.phone}" style="display: inline-block; margin-top: 8px; font-size: 11px; font-weight: 600; color: #2563eb;">Llamar: ${vet.phone}</a>
        </div>
      `);
      AppState.mapMarkers.push(marker);
    });
  }
};

function addPetMarkerToMap(pet) {
  if (!AppState.mapInstance) return;

  const isLost = pet.type === 'lost';
  const color = isLost ? '#DC2626' : (pet.type === 'found' ? '#10B981' : '#8B5CF6');
  const iconHtml = `<div style="background-color: ${color}; color: white; width: 38px; height: 38px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.25); border: 3px solid white; cursor: pointer;"><i class="fa-solid ${isLost ? 'fa-paw' : (pet.type === 'found' ? 'fa-magnifying-glass' : 'fa-heart')} text-sm"></i></div>`;

  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: iconHtml,
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });

  const marker = L.marker([pet.lat, pet.lng], { icon: customIcon }).addTo(AppState.mapInstance);

  const popupContent = `
    <div style="font-family: 'Inter', sans-serif; width: 230px; overflow: hidden; border-radius: 14px;">
      <img src="${pet.images[0]}" style="width: 100%; height: 110px; object-fit: cover;">
      <div style="padding: 10px 12px;">
        <span style="font-size: 10px; font-weight: 700; color: ${color}; text-transform: uppercase;">${pet.badge}</span>
        <h4 style="font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 15px; margin: 2px 0; color: #0f172a;">${pet.name}</h4>
        <p style="font-size: 11px; color: #64748b; margin: 0 0 8px 0;">📍 ${pet.zone} · ${pet.timeAgo}</p>
        <button onclick="openPetDetail('${pet.id}')" style="width: 100%; padding: 6px 10px; background-color: #FF6B35; color: white; font-size: 11px; font-weight: 700; border-radius: 8px; border: none; cursor: pointer;">
          Ver ficha completa
        </button>
      </div>
    </div>
  `;

  marker.bindPopup(popupContent);
  AppState.mapMarkers.push(marker);
}

window.centerMapOnUser = function() {
  if (AppState.mapInstance) {
    AppState.mapInstance.flyTo([-33.1232, -64.3493], 16, { animate: true, duration: 1.2 });
    showToast('Ubicación centrada en Plaza Roca, Río Cuarto.', 'info');
  }
};

// ==========================================
// SECCIÓN: ADOPCIONES RESPONSABLES
// ==========================================
function renderAdoptions() {
  const container = document.getElementById('adoptionsListContainer');
  if (!container) return;

  const adoptions = AppState.pets.filter(p => p.type === 'adoption');

  container.innerHTML = adoptions.map(pet => {
    const isFav = AppState.favorites.includes(pet.id);
    return `
      <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group hover:shadow-md transition">
        <div class="relative h-56 bg-slate-100 overflow-hidden">
          <img src="${pet.images[0]}" alt="${pet.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
          <div class="absolute top-3 left-3 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-heading font-bold shadow-xs">
            💛 En Adopción
          </div>
          <button onclick="toggleFavorite('${pet.id}'); renderAdoptions()" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 text-slate-700 hover:text-brand-500 shadow flex items-center justify-center">
            <i class="${isFav ? 'fa-solid fa-heart text-brand-500' : 'fa-regular fa-heart'} text-sm"></i>
          </button>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-heading font-bold text-xl text-slate-900">${pet.name}</h3>
              <span class="text-xs text-slate-500">${pet.details.edad}</span>
            </div>
            <p class="text-xs text-slate-600 font-semibold mt-1">${pet.breed}</p>
            <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">${pet.description}</p>
            
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">Vacunado/a</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">Castrado/a</span>
              <span class="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">Sociable</span>
            </div>
          </div>

          <div class="mt-5 pt-4 border-t border-slate-100 flex gap-2">
            <button onclick="openPetDetail('${pet.id}')" class="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-heading font-semibold rounded-xl transition">
              Ver Historia
            </button>
            <button onclick="handleApplyAdoption('${pet.id}')" class="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs font-heading font-bold rounded-xl transition shadow-xs">
              Postularse
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.handleApplyAdoption = function(petId) {
  const pet = AppState.pets.find(p => p.id === petId);
  requireAuth(() => {
    openAdoptionFormModal(pet);
  }, `Para postularte como adoptante de ${pet ? pet.name : 'la mascota'}, por favor iniciá sesión.`);
};

function openAdoptionFormModal(pet) {
  const modal = document.getElementById('adoptionFormModal');
  const nameEl = document.getElementById('adoptionModalPetName');
  if (nameEl && pet) nameEl.textContent = pet.name;
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

window.closeAdoptionFormModal = function() {
  const modal = document.getElementById('adoptionFormModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.submitAdoptionApplication = function(e) {
  e.preventDefault();
  closeAdoptionFormModal();
  showToast('¡Tu postulación ha sido enviada al rescatista! Te contactarán por WhatsApp.', 'success');
};

// ==========================================
// SECCIÓN: MARKETPLACE (PRODUCTOS Y SERVICIOS)
// ==========================================
function renderMarketplace() {
  renderProducts();
  renderServices();
  updateCartBadge();
}

window.switchMarketplaceTab = function(tab) {
  const tabProd = document.getElementById('marketTabProducts');
  const tabServ = document.getElementById('marketTabServices');
  const viewProd = document.getElementById('marketViewProducts');
  const viewServ = document.getElementById('marketViewServices');

  if (tab === 'products') {
    if (tabProd) tabProd.className = 'px-4 py-2 rounded-xl font-heading font-bold text-xs bg-brand-500 text-white shadow-xs transition flex items-center gap-2';
    if (tabServ) tabServ.className = 'px-4 py-2 rounded-xl font-heading font-semibold text-xs text-slate-600 hover:text-slate-900 transition flex items-center gap-2';
    if (viewProd) viewProd.classList.remove('hidden');
    if (viewServ) viewServ.classList.add('hidden');
  } else {
    if (tabServ) tabServ.className = 'px-4 py-2 rounded-xl font-heading font-bold text-xs bg-brand-500 text-white shadow-xs transition flex items-center gap-2';
    if (tabProd) tabProd.className = 'px-4 py-2 rounded-xl font-heading font-semibold text-xs text-slate-600 hover:text-slate-900 transition flex items-center gap-2';
    if (viewServ) viewServ.classList.remove('hidden');
    if (viewProd) viewProd.classList.add('hidden');
  }
};

function renderProducts() {
  const container = document.getElementById('marketplaceProductsContainer');
  if (!container) return;

  container.innerHTML = AppState.products.map(prod => `
    <div class="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden flex flex-col group hover:shadow-md transition">
      <div class="relative h-48 bg-slate-100 overflow-hidden p-4 flex items-center justify-center">
        <img src="${prod.image}" alt="${prod.title}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform">
        <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-lg">
          ${prod.badge}
        </span>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] text-slate-400 font-medium block">${prod.vendor}</span>
          <h4 class="font-heading font-semibold text-slate-900 text-sm mt-0.5 line-clamp-2">${prod.title}</h4>
          
          <div class="flex items-center gap-1 mt-2 text-amber-500 text-xs">
            <i class="fa-solid fa-star"></i>
            <span class="font-bold text-slate-800">${prod.rating}</span>
            <span class="text-slate-400 text-[11px]">(${prod.reviewsCount})</span>
          </div>

          <div class="mt-3 flex items-baseline gap-2">
            <span class="font-heading font-extrabold text-slate-900 text-lg">
              $${prod.price.toLocaleString('es-AR')}
            </span>
            <span class="text-xs text-slate-400 line-through">
              $${prod.originalPrice.toLocaleString('es-AR')}
            </span>
          </div>
        </div>

        <button onclick="addToCart('${prod.id}')" class="mt-4 w-full py-2.5 bg-slate-900 hover:bg-brand-500 text-white text-xs font-heading font-semibold rounded-xl transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-cart-plus"></i> Añadir al Carrito
        </button>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const container = document.getElementById('marketplaceServicesContainer');
  if (!container) return;

  container.innerHTML = AppState.services.map(serv => `
    <div class="p-5 bg-white rounded-3xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between hover:shadow-md transition">
      <div class="flex items-start gap-4">
        <div class="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center text-2xl shrink-0 border border-brand-100">
          <i class="${serv.icon}"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-[11px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">${serv.badge}</span>
            <span class="text-xs text-amber-500 font-semibold"><i class="fa-solid fa-star"></i> ${serv.rating} (${serv.reviewsCount})</span>
          </div>
          <h4 class="font-heading font-bold text-slate-900 text-base mt-1">${serv.title}</h4>
          <p class="text-xs text-slate-500 mt-0.5">${serv.provider} · 📍 ${serv.zone}</p>
          
          <div class="flex flex-wrap gap-2 mt-2">
            ${serv.features.map(f => `<span class="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">✓ ${f}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="sm:text-right shrink-0 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 flex sm:flex-col justify-between items-center sm:items-end">
        <div>
          <span class="text-[11px] text-slate-400 block">Tarifa base</span>
          <span class="font-heading font-extrabold text-slate-900 text-lg">$${serv.pricePerHour.toLocaleString('es-AR')}</span>
        </div>
        <button onclick="openBookingServiceModal('${serv.id}')" class="mt-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-heading font-bold text-xs rounded-xl shadow-xs transition">
          Reservar Turno
        </button>
      </div>
    </div>
  `).join('');
}

window.addToCart = function(productId) {
  const prod = AppState.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = AppState.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({ productId, quantity: 1 });
  }

  saveToStorage();
  updateCartBadge();
  showToast(`"${prod.title.slice(0, 24)}..." añadido al carrito.`, 'success');
};

function updateCartBadge() {
  const count = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

window.openCartModal = function() {
  const modal = document.getElementById('cartModal');
  renderCartItems();
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeCartModal = function() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

function renderCartItems() {
  const container = document.getElementById('cartItemsContainer');
  const totalEl = document.getElementById('cartTotalLabel');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="py-10 text-center text-slate-400">
        <i class="fa-solid fa-cart-shopping text-4xl mb-3 text-slate-300"></i>
        <p class="text-sm font-medium">Tu carrito está vacío</p>
        <p class="text-xs text-slate-400 mt-1">Explorá los productos de comercios locales de Río Cuarto.</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = '$0';
    return;
  }

  let total = 0;
  container.innerHTML = AppState.cart.map(item => {
    const prod = AppState.products.find(p => p.id === item.productId);
    if (!prod) return '';
    const subtotal = prod.price * item.quantity;
    total += subtotal;

    return `
      <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
        <div class="flex items-center gap-3">
          <img src="${prod.image}" class="w-12 h-12 rounded-xl object-contain bg-white border border-slate-200 p-1">
          <div>
            <h5 class="font-heading font-semibold text-slate-900 text-xs line-clamp-1">${prod.title}</h5>
            <span class="text-xs font-bold text-brand-600">$${prod.price.toLocaleString('es-AR')}</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-xs">
            <button onclick="changeCartQty('${prod.id}', -1)" class="px-2 py-1 hover:bg-slate-100">-</button>
            <span class="px-2 font-semibold">${item.quantity}</span>
            <button onclick="changeCartQty('${prod.id}', 1)" class="px-2 py-1 hover:bg-slate-100">+</button>
          </div>
          <button onclick="removeCartItem('${prod.id}')" class="text-slate-400 hover:text-red-500 text-xs p-1">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = `$${total.toLocaleString('es-AR')}`;
}

window.changeCartQty = function(productId, delta) {
  const item = AppState.cart.find(i => i.productId === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    AppState.cart = AppState.cart.filter(i => i.productId !== productId);
  }
  saveToStorage();
  renderCartItems();
  updateCartBadge();
};

window.removeCartItem = function(productId) {
  AppState.cart = AppState.cart.filter(i => i.productId !== productId);
  saveToStorage();
  renderCartItems();
  updateCartBadge();
};

window.startCheckout = function() {
  if (AppState.cart.length === 0) {
    showToast('Añadí al menos un producto al carrito para comprar.', 'info');
    return;
  }

  requireAuth(() => {
    closeCartModal();
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
      checkoutModal.classList.remove('hidden');
      checkoutModal.classList.add('flex');
    }
  }, 'Para confirmar el envío a tu domicilio en Río Cuarto y método de pago, por favor iniciá sesión.');
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.submitCheckoutOrder = function(e) {
  e.preventDefault();
  closeCheckoutModal();

  AppState.cart = [];
  saveToStorage();
  updateCartBadge();

  const successModal = document.getElementById('orderSuccessModal');
  if (successModal) {
    document.getElementById('orderIdSpan').textContent = `MP-${Math.floor(100000 + Math.random() * 900000)}`;
    successModal.classList.remove('hidden');
    successModal.classList.add('flex');
  }
};

window.closeOrderSuccessModal = function() {
  const modal = document.getElementById('orderSuccessModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  navigateTo('marketplace');
};

window.openBookingServiceModal = function(serviceId) {
  const serv = AppState.services.find(s => s.id === serviceId);
  if (!serv) return;

  requireAuth(() => {
    const modal = document.getElementById('serviceBookingModal');
    document.getElementById('bookingModalServiceTitle').textContent = serv.title;
    document.getElementById('bookingModalProvider').textContent = `${serv.provider} · 📍 ${serv.zone}`;
    document.getElementById('bookingModalPrice').textContent = `$${serv.pricePerHour.toLocaleString('es-AR')}`;
    
    const timesContainer = document.getElementById('bookingTimesSlots');
    timesContainer.innerHTML = serv.availableTimes.map((t, idx) => `
      <label class="cursor-pointer">
        <input type="radio" name="bookingTime" value="${t}" class="peer hidden" ${idx === 0 ? 'checked' : ''}>
        <div class="px-3 py-2 rounded-xl text-xs font-semibold text-center border border-slate-200 peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-600 transition">
          ${t}
        </div>
      </label>
    `).join('');

    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }, `Para reservar un turno en ${serv.title}, por favor iniciá sesión.`);
};

window.closeBookingModal = function() {
  const modal = document.getElementById('serviceBookingModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.confirmServiceBooking = function(e) {
  e.preventDefault();
  closeBookingModal();
  showToast('¡Turno reservado con éxito! Recibirás los detalles por WhatsApp.', 'success');
};

// ==========================================
// SECCIÓN: PERFIL Y CONFIGURACIÓN DE ROLES
// ==========================================
function renderProfile() {
  const container = document.getElementById('profileContentContainer');
  if (!container) return;

  const isLogged = AppState.currentUser && AppState.currentUser.isLogged;
  const user = AppState.currentUser || {
    name: 'Invitado / Visitante',
    email: 'invitado@mrpatitas.org',
    phone: 'No registrado',
    barrio: 'Río Cuarto, Centro',
    avatar: 'assets/logo.png',
    activeReports: 0,
    rescuedCount: 0
  };

  const isProvider = AppState.userRole === 'proveedor';

  container.innerHTML = `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div class="relative w-24 h-24 rounded-3xl bg-amber-50 border-2 border-brand-500/30 overflow-hidden shadow-inner flex items-center justify-center shrink-0">
        <img src="${user.avatar || 'assets/logo.png'}" class="w-full h-full object-cover">
        ${isLogged ? '<span class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></span>' : ''}
      </div>

      <div class="flex-1 text-center sm:text-left">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 class="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">${user.name}</h2>
            <p class="text-xs text-slate-500 font-medium mt-1">📍 ${user.barrio} · ${user.email}</p>
          </div>
          <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold ${isProvider ? 'bg-purple-100 text-purple-700' : 'bg-brand-50 text-brand-600'} self-center sm:self-auto">
            ${isProvider ? '🏥 Modo Proveedor / Rescatista' : '🏡 Modo Vecino'}
          </span>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div class="text-center sm:text-left">
            <span class="text-xs font-heading font-bold text-slate-800 block">Conmutador de Rol Operativo</span>
            <span class="text-[11px] text-slate-500">Alterná entre vista vecinal y panel de clínica/refugio</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold ${!isProvider ? 'text-brand-600' : 'text-slate-400'}">Vecino</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" onchange="toggleUserRole(this.checked)" class="sr-only role-toggle-checkbox" ${isProvider ? 'checked' : ''}>
              <div class="w-11 h-6 bg-slate-300 rounded-full role-toggle-label transition-colors">
                <div class="role-toggle-dot absolute top-[2px] left-[2px] bg-white border border-slate-200 rounded-full h-5 w-5 transition-transform"></div>
              </div>
            </label>
            <span class="text-xs font-semibold ${isProvider ? 'text-purple-600' : 'text-slate-400'}">Rescatista</span>
          </div>
        </div>
      </div>
    </div>

    ${isProvider ? renderProviderDashboard() : renderNeighborDashboard()}

    <div class="pt-4 text-center">
      ${isLogged ? `
        <button onclick="logout()" class="px-6 py-3 rounded-2xl bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-heading font-semibold border border-slate-200 transition flex items-center gap-2 mx-auto shadow-xs">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Cerrar Sesión
        </button>
      ` : `
        <button onclick="openAuthModal('login', 'Iniciá sesión para acceder a tu historial')" class="px-8 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-heading font-bold text-xs shadow-lg shadow-brand-500/25 transition mx-auto">
          Iniciar Sesión o Registrarse
        </button>
      `}
    </div>
  `;
}

window.toggleUserRole = function(checked) {
  AppState.userRole = checked ? 'proveedor' : 'vecino';
  if (AppState.currentUser) {
    AppState.currentUser.role = AppState.userRole;
    saveToStorage();
  }
  showToast(`Cambiado a ${AppState.userRole === 'proveedor' ? 'Modo Rescatista / Clínica' : 'Modo Vecino'}.`, 'info');
  renderProfile();
};

function renderNeighborDashboard() {
  const myReports = AppState.pets.filter(p => p.id === 'milo');

  return `
    <div class="grid grid-cols-3 gap-4">
      <div class="p-5 rounded-3xl bg-white border border-slate-200/90 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-brand-500">1</span>
        <span class="text-xs text-slate-500 block mt-1 font-medium">Reporte Activo</span>
      </div>
      <div class="p-5 rounded-3xl bg-white border border-slate-200/90 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-emerald-500">2</span>
        <span class="text-xs text-slate-500 block mt-1 font-medium">Recuperadas</span>
      </div>
      <div class="p-5 rounded-3xl bg-white border border-slate-200/90 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-purple-500">${AppState.favorites.length}</span>
        <span class="text-xs text-slate-500 block mt-1 font-medium">Guardadas</span>
      </div>
    </div>

    <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="font-heading font-bold text-slate-900 text-lg">Mis Publicaciones</h3>
        <button onclick="handleGeneralPublish('lost')" class="text-xs text-brand-600 font-heading font-bold hover:underline">
          + Nueva Alerta
        </button>
      </div>

      <div class="space-y-3">
        ${myReports.map(pet => `
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <img src="${pet.images[0]}" class="w-14 h-14 rounded-2xl object-cover">
              <div>
                <h5 class="font-heading font-bold text-slate-900 text-sm">${pet.name}</h5>
                <span class="text-xs text-red-600 font-semibold">🚨 ${pet.badge} en ${pet.zone}</span>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-auto">
              <button onclick="openPetDetail('${pet.id}')" class="px-3.5 py-1.5 bg-white border border-slate-200 hover:border-brand-500 text-slate-700 text-xs font-semibold rounded-xl transition">
                Ver
              </button>
              <button onclick="markPetFound('${pet.id}')" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition shadow-xs">
                ¡Encontrado!
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderProviderDashboard() {
  return `
    <div class="grid grid-cols-3 gap-4">
      <div class="p-5 rounded-3xl bg-purple-50 border border-purple-100 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-purple-600">48</span>
        <span class="text-xs text-purple-700 block mt-1 font-medium">Vidas Salvadas</span>
      </div>
      <div class="p-5 rounded-3xl bg-emerald-50 border border-emerald-100 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-emerald-600">14</span>
        <span class="text-xs text-emerald-700 block mt-1 font-medium">En Tránsito</span>
      </div>
      <div class="p-5 rounded-3xl bg-amber-50 border border-amber-100 text-center shadow-xs">
        <span class="font-heading font-extrabold text-3xl text-amber-600">6.4 hs</span>
        <span class="text-xs text-amber-700 block mt-1 font-medium">Tiempo Promedio</span>
      </div>
    </div>

    <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="font-heading font-bold text-slate-900 text-base">Radio de Alertas Comunitarias</h3>
          <p class="text-xs text-slate-500">Recibir avisos prioritarios de extravíos cerca de tu veterinaria o refugio</p>
        </div>
        <span id="radiusLabel" class="font-heading font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-xl text-xs">3 km</span>
      </div>

      <input type="range" min="1" max="10" value="3" oninput="document.getElementById('radiusLabel').textContent = this.value + ' km'" class="w-full accent-purple-600">
      
      <div class="flex justify-between text-[11px] text-slate-400">
        <span>1 km (Barrio)</span>
        <span>5 km (Río Cuarto)</span>
        <span>10 km (Gran Río Cuarto)</span>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button onclick="broadcastEmergencyAlert()" class="p-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs shadow-md transition flex items-center justify-center gap-2">
        <i class="fa-solid fa-triangle-exclamation"></i> Emitir Alerta de Donación de Sangre / Alimento
      </button>
      <button onclick="navigateTo('marketplace')" class="p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs shadow-md transition flex items-center justify-center gap-2">
        <i class="fa-solid fa-list-check"></i> Gestionar Servicios & Turnos
      </button>
    </div>
  `;
}

window.markPetFound = function(petId) {
  const pet = AppState.pets.find(p => p.id === petId);
  if (!pet) return;

  pet.badge = '¡Reencontrado!';
  pet.type = 'found';
  saveToStorage();
  showToast(`¡Qué hermosa noticia! ${pet.name} fue marcado como reencontrado con su familia.`, 'success');
  renderProfile();
};

window.broadcastEmergencyAlert = function() {
  showToast('Alerta de emergencia emitida a los vecinos de Río Cuarto.', 'success');
};

// ==========================================
// SECCIÓN: GUARDADOS / FAVORITOS
// ==========================================
window.toggleFavorite = function(id) {
  const index = AppState.favorites.indexOf(id);
  if (index > -1) {
    AppState.favorites.splice(index, 1);
    showToast('Eliminado de tus guardados.', 'info');
  } else {
    AppState.favorites.push(id);
    showToast('Añadido a tus guardados.', 'success');
  }
  saveToStorage();
};

function renderFavorites() {
  const container = document.getElementById('favoritesListContainer');
  if (!container) return;

  const favPets = AppState.pets.filter(p => AppState.favorites.includes(p.id));

  if (favPets.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-slate-200 p-8">
        <i class="fa-regular fa-heart text-5xl text-slate-300 mb-3"></i>
        <h4 class="font-heading font-bold text-slate-800 text-base">No tenés mascotas guardadas</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-xs mx-auto">Tocá el corazón en cualquier ficha para seguir de cerca su estado.</p>
        <button onclick="navigateTo('home')" class="mt-4 px-5 py-2.5 bg-brand-500 text-white font-heading font-bold text-xs rounded-full shadow-xs">
          Explorar Mascotas
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = favPets.map(pet => `
    <div onclick="openPetDetail('${pet.id}')" class="p-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs flex items-center justify-between cursor-pointer hover:border-brand-300 transition">
      <div class="flex items-center gap-3">
        <img src="${pet.images[0]}" class="w-14 h-14 rounded-2xl object-cover">
        <div>
          <h4 class="font-heading font-bold text-slate-900 text-base">${pet.name}</h4>
          <span class="text-xs text-slate-500">${pet.breed} · 📍 ${pet.zone}</span>
        </div>
      </div>
      <button onclick="event.stopPropagation(); toggleFavorite('${pet.id}'); renderFavorites()" class="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-brand-500 flex items-center justify-center transition">
        <i class="fa-solid fa-heart text-base"></i>
      </button>
    </div>
  `).join('');
}

// ==========================================
// TOAST NOTIFICATIONS Y AUXILIARES
// ==========================================
window.showToast = function(message, type = 'info') {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;

  if (type === 'success') {
    toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-lg';
  } else if (type === 'error') {
    toastIcon.className = 'fa-solid fa-circle-exclamation text-red-400 text-lg';
  } else {
    toastIcon.className = 'fa-solid fa-circle-info text-brand-400 text-lg';
  }

  toast.classList.remove('hidden', 'translate-y-10', 'opacity-0');
  toast.classList.add('flex', 'translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3500);
};

window.sharePetDetail = function(petId) {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
    showToast('¡Enlace copiado al portapapeles para difundir!', 'success');
  } else {
    showToast('Copiá el enlace desde tu navegador para compartir.', 'info');
  }
};

window.openNotificationsModal = function() {
  const modal = document.getElementById('notificationsModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeNotificationsModal = function() {
  const modal = document.getElementById('notificationsModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// ==========================================
// EVENT LISTENERS GLOBALES
// ==========================================
function setupEventListeners() {
  const searchInput = document.getElementById('homeSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderPetCards();
    });
  }

  const reportForm = document.getElementById('reportForm');
  if (reportForm) {
    reportForm.addEventListener('submit', handleReportSubmit);
  }

  const adoptForm = document.getElementById('adoptionApplicationForm');
  if (adoptForm) {
    adoptForm.addEventListener('submit', submitAdoptionApplication);
  }

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', submitCheckoutOrder);
  }

  const serviceBookingForm = document.getElementById('serviceBookingForm');
  if (serviceBookingForm) {
    serviceBookingForm.addEventListener('submit', confirmServiceBooking);
  }

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container')) {
      e.target.classList.add('hidden');
      e.target.classList.remove('flex');
    }
  });
}

function renderApp() {
  updateHeaderUserPill();
  renderPetCards();
  updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initApp);