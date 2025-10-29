// Datos de perfumes
const perfumes = [
    {
        id: 1,
        name: "Le Male",
        brand: "jean-paul-gaultier",
        brandName: "Jean Paul Gaultier",
        type: "oriental",
        typeName: "Oriental",
        image: "html/images/perfumes/jpg.jpg",
        notes: {
            salida: "Lavanda, Menta",
            corazon: "Canela, Cumin",
            fondo: "Vainilla, Sándalo"
        },
        originalPrice: 95,
        price5ml: 22,
        price10ml: 40,
        bestSeller: true,
        available: true
    },
    {
        id: 2,
        name: "Scandal",
        brand: "jean-paul-gaultier",
        brandName: "Jean Paul Gaultier",
        type: "oriental",
        typeName: "Oriental",
        image: "html/images/perfumes/jpg escandal.jpg",
        notes: {
            salida: "Miel, Gardenia",
            corazon: "Rosa, Jazmín",
            fondo: "Vainilla, Praliné"
        },
        originalPrice: 110,
        price5ml: 25,
        price10ml: 45,
        bestSeller: true,
        available: true
    },
    {
        id: 3,
        name: "Y Eau de Parfum",
        brand: "ysl",
        brandName: "Yves Saint Laurent",
        type: "amaderado",
        typeName: "Amaderado",
        image: "html/images/perfumes/yves.jpg",
        notes: {
            salida: "Bergamota, Geranio",
            corazon: "Sage, Lavanda",
            fondo: "Cedro, Ambergris"
        },
        originalPrice: 130,
        price5ml: 28,
        price10ml: 50,
        bestSeller: true,
        available: true
    },
    {
        id: 4,
        name: "Libre",
        brand: "ysl",
        brandName: "Yves Saint Laurent",
        type: "floral",
        typeName: "Floral",
        image: "html/images/perfumes/libre.jpg",
        notes: {
            salida: "Lavanda, Bergamota",
            corazon: "Jazmín, Naranja",
            fondo: "Vainilla, Sándalo"
        },
        originalPrice: 125,
        price5ml: 27,
        price10ml: 48,
        bestSeller: false,
        available: true
    },
    {
        id: 5,
        name: "Eros",
        brand: "versace",
        brandName: "Versace",
        type: "oriental",
        typeName: "Oriental",
        image: "html/images/perfumes/eros.jpg",
        notes: {
            salida: "Menta, Manzana verde",
            corazon: "Tonka, Ambroxan",
            fondo: "Vainilla, Sándalo"
        },
        originalPrice: 90,
        price5ml: 20,
        price10ml: 35,
        bestSeller: true,
        available: true
    },
    {
        id: 6,
        name: "Dylan Blue",
        brand: "versace",
        brandName: "Versace",
        type: "amaderado",
        typeName: "Amaderado",
        image: "html/images/perfumes/dylan blu.webp",
        notes: {
            salida: "Bergamota, Pomelo",
            corazon: "Violeta, Pimienta",
            fondo: "Incenso, Musk"
        },
        originalPrice: 85,
        price5ml: 19,
        price10ml: 33,
        bestSeller: false,
        available: true
    },
    {
        id: 7,
        name: "Hawas",
        brand: "rasasi",
        brandName: "Rasasi",
        type: "citrico",
        typeName: "Cítrico",
        image: "html/images/perfumes/hawas.jpg",
        notes: {
            salida: "Limón, Bergamota",
            corazon: "Jazmín, Lavanda",
            fondo: "Musk, Sándalo"
        },
        originalPrice: 65,
        price5ml: 15,
        price10ml: 28,
        bestSeller: true,
        available: true
    },
    {
        id: 8,
        name: "Born in Roma",
        brand: "valentino",
        brandName: "Valentino",
        type: "amaderado",
        typeName: "Amaderado",
        image: "html/images/perfumes/roma.webp",
        notes: {
            salida: "Bergamota, Pimienta",
            corazon: "Violeta, Lavanda",
            fondo: "Vetiver, Musk"
        },
        originalPrice: 120,
        price5ml: 26,
        price10ml: 47,
        bestSeller: false,
        available: true
    },
    {
        id: 9,
        name: "Uomo",
        brand: "valentino",
        brandName: "Valentino",
        type: "oriental",
        typeName: "Oriental",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop",
        notes: {
            salida: "Bergamota, Lavanda",
            corazon: "Cedro, Vetiver",
            fondo: "Cuero, Musk"
        },
        originalPrice: 115,
        price5ml: 25,
        price10ml: 45,
        bestSeller: true,
        available: true
    },
    {
        id: 10,
        name: "London",
        brand: "burberry",
        brandName: "Burberry",
        type: "amaderado",
        typeName: "Amaderado",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        notes: {
            salida: "Bergamota, Lavanda",
            corazon: "Cedro, Pimienta",
            fondo: "Musk, Sándalo"
        },
        originalPrice: 100,
        price5ml: 22,
        price10ml: 40,
        bestSeller: false,
        available: true
    },
    {
        id: 11,
        name: "Hero",
        brand: "burberry",
        brandName: "Burberry",
        type: "amaderado",
        typeName: "Amaderado",
        image: "html/images/perfumes/hero.webp",
        notes: {
            salida: "Bergamota, Pimienta negra",
            corazon: "Cedro, Lavanda",
            fondo: "Vetiver, Musk"
        },
        originalPrice: 105,
        price5ml: 23,
        price10ml: 42,
        bestSeller: true,
        available: true
    },
    {
        id: 12,
        name: "Ultra Male",
        brand: "jean-paul-gaultier",
        brandName: "Jean Paul Gaultier",
        type: "oriental",
        typeName: "Oriental",
        image: "html/images/perfumes/jpg.jpg",
        notes: {
            salida: "Pera, Lavanda",
            corazon: "Canela, Cumin",
            fondo: "Vainilla, Sándalo"
        },
        originalPrice: 110,
        price5ml: 24,
        price10ml: 43,
        bestSeller: false,
        available: true
    },
    // Nuevos perfumes: Azzaro y Paco Rabanne
    {
        id: 13,
        name: "Wanted",
        brand: "azzaro",
        brandName: "Azzaro",
        type: "citrico",
        typeName: "Cítrico",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
        notes: {
            salida: "Limón, Jengibre",
            corazon: "Cardamomo, Enebro",
            fondo: "Haba Tonka, Vetiver"
        },
        originalPrice: 95,
        price5ml: 21,
        price10ml: 38,
        bestSeller: true,
        available: true
    },
    {
        id: 14,
        name: "Chrome",
        brand: "azzaro",
        brandName: "Azzaro",
        type: "citrico",
        typeName: "Cítrico",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop",
        notes: {
            salida: "Bergamota, Piña",
            corazon: "Jazmín, Cilantro",
            fondo: "Musk, Sándalo"
        },
        originalPrice: 75,
        price5ml: 16,
        price10ml: 29,
        bestSeller: false,
        available: true
    },
    {
        id: 15,
        name: "Invictus",
        brand: "paco-rabanne",
        brandName: "Paco Rabanne",
        type: "acuatico",
        typeName: "Acuático",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
        notes: {
            salida: "Pomelo, Notas marinas",
            corazon: "Hoja de laurel, Jazmín",
            fondo: "Ambra gris, Madera de gaiac"
        },
        originalPrice: 110,
        price5ml: 24,
        price10ml: 44,
        bestSeller: true,
        available: true
    },
    {
        id: 16,
        name: "1 Million",
        brand: "paco-rabanne",
        brandName: "Paco Rabanne",
        type: "oriental",
        typeName: "Oriental",
        image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=400&fit=crop",
        notes: {
            salida: "Toronja, Menta",
            corazon: "Rosa, Canela",
            fondo: "Cuero, Ámbar"
        },
        originalPrice: 100,
        price5ml: 22,
        price10ml: 40,
        bestSeller: true,
        available: true
    }
];

// Variables globales
let filteredPerfumes = [...perfumes];
let currentFilters = {
    marca: '',
    tipo: '',
    tamaño: ''
};
let favorites = JSON.parse(localStorage.getItem('favoritePerfumes') || '[]');
let comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupFilters();
    renderPerfumes();
    renderBestSellers();
    setupModal();
    initializeCounters();
}

// Navegación móvil
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Sistema de filtros
function setupFilters() {
    const marcaFilter = document.getElementById('marca-filter');
    const tipoFilter = document.getElementById('tipo-filter');
    const tamañoFilter = document.getElementById('tamaño-filter');
    marcaFilter.addEventListener('change', function() {
        currentFilters.marca = this.value;
        applyFilters();
    });

    tipoFilter.addEventListener('change', function() {
        currentFilters.tipo = this.value;
        applyFilters();
    });

    tamañoFilter.addEventListener('change', function() {
        currentFilters.tamaño = this.value;
        applyFilters();
    });
}

function applyFilters() {
    filteredPerfumes = perfumes.filter(perfume => {
        // Filtro por marca
        if (currentFilters.marca && perfume.brand !== currentFilters.marca) {
            return false;
        }

        // Filtro por tipo
        if (currentFilters.tipo && perfume.type !== currentFilters.tipo) {
            return false;
        }

        // Filtro por tamaño (siempre disponible en ambos tamaños)
        if (currentFilters.tamaño) {
            // Por ahora todos los perfumes están disponibles en ambos tamaños
            // En una implementación real, esto dependería del stock
        }


        return true;
    });

    renderPerfumes();
}

// Renderizado de perfumes
function renderPerfumes() {
    const grid = document.getElementById('perfumes-grid');
    
    if (filteredPerfumes.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                <h3>No se encontraron perfumes</h3>
                <p>Intenta ajustar los filtros para ver más resultados.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredPerfumes.map(perfume => {
        const isFavorited = favorites.includes(perfume.id);
        const isInComparison = comparisonList.includes(perfume.id);
        return `
        <div class="perfume-card">
            <div class="perfume-image" data-perfume-id="${perfume.id}" onclick="openPerfumeModal(${perfume.id})">
                <img class="perfume-image-main" src="${perfume.image}" alt="${perfume.name}" onerror="handleImageError(this, '${perfume.name}')">
                ${perfume.bestSeller ? '<div class="perfume-badge">Más Vendido</div>' : ''}
            </div>
            <div class="perfume-info">
                <div class="perfume-brand">${perfume.brandName}</div>
                <h3 class="perfume-name">${perfume.name}</h3>
                <p class="perfume-type">${perfume.typeName}</p>
                <div class="perfume-prices">
                    <span class="price price-5ml">5ml: $${perfume.price5ml}</span>
                    <span class="price price-10ml">10ml: $${perfume.price10ml}</span>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="openPerfumeModal(${perfume.id})"><i class="fas fa-eye"></i> Ver</button>
                    <button class="btn btn-secondary" onclick="contactWhatsApp('${perfume.name} - Consulta', ${perfume.price5ml})"><i class="fab fa-whatsapp"></i> Consultar</button>
                    <button class="icon-btn favorite-btn ${isFavorited ? 'favorited' : ''}" title="${isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}" onclick="toggleFavorite(${perfume.id}); event.stopPropagation();">
                        <i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="icon-btn compare-btn ${isInComparison ? 'in-comparison' : ''}" title="${isInComparison ? 'Quitar de comparación' : 'Comparar perfume'}" onclick="toggleComparison(${perfume.id}); event.stopPropagation();">
                        <i class="fas fa-balance-scale"></i>
                        ${isInComparison ? '<span class="compare-count">✓</span>' : ''}
                    </button>
                    <button class="icon-btn" title="Compartir" onclick="sharePerfume(${perfume.id}); event.stopPropagation();"><i class="fas fa-share-alt"></i></button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Renderizado de más vendidos
function renderBestSellers() {
    const bestSellers = perfumes.filter(perfume => perfume.bestSeller);
    const grid = document.getElementById('best-sellers-grid');

    grid.innerHTML = bestSellers.map(perfume => {
        const isFavorited = favorites.includes(perfume.id);
        const isInComparison = comparisonList.includes(perfume.id);
        return `
        <div class="best-seller-card">
            <div class="perfume-image" data-perfume-id="${perfume.id}" onclick="openPerfumeModal(${perfume.id})">
                <img class="perfume-image-main" src="${perfume.image}" alt="${perfume.name}" onerror="handleImageError(this, '${perfume.name}')">
                <div class="best-seller-badge">Más Vendido</div>
            </div>
            <div class="perfume-info">
                <div class="perfume-brand">${perfume.brandName}</div>
                <h3 class="perfume-name">${perfume.name}</h3>
                <p class="perfume-type">${perfume.typeName}</p>
                <div class="perfume-prices">
                    <span class="price price-5ml">5ml: $${perfume.price5ml}</span>
                    <span class="price price-10ml">10ml: $${perfume.price10ml}</span>
                </div>
                <div class="card-actions">
                    <button class="btn btn-primary" onclick="openPerfumeModal(${perfume.id})"><i class="fas fa-eye"></i> Ver</button>
                    <button class="btn btn-secondary" onclick="contactWhatsApp('${perfume.name} - Consulta', ${perfume.price5ml})"><i class="fab fa-whatsapp"></i> Consultar</button>
                    <button class="icon-btn favorite-btn ${isFavorited ? 'favorited' : ''}" title="${isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}" onclick="toggleFavorite(${perfume.id}); event.stopPropagation();">
                        <i class="${isFavorited ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="icon-btn compare-btn ${isInComparison ? 'in-comparison' : ''}" title="${isInComparison ? 'Quitar de comparación' : 'Comparar perfume'}" onclick="toggleComparison(${perfume.id}); event.stopPropagation();">
                        <i class="fas fa-balance-scale"></i>
                        ${isInComparison ? '<span class="compare-count">✓</span>' : ''}
                    </button>
                    <button class="icon-btn" title="Compartir" onclick="sharePerfume(${perfume.id}); event.stopPropagation();"><i class="fas fa-share-alt"></i></button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Modal de perfume
function setupModal() {
    const modal = document.getElementById('perfume-modal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

function openPerfumeModal(perfumeId) {
    const perfume = perfumes.find(p => p.id === perfumeId);
    if (!perfume) return;

    const modal = document.getElementById('perfume-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-perfume-image">
            <img class="perfume-image-main" src="${perfume.image}" alt="${perfume.name}" onerror="handleImageError(this, '${perfume.name}')">
            <div class="perfume-placeholder" style="display: none;">
                <i class="fas fa-spray-can"></i>
            </div>
        </div>
        
        <div class="modal-perfume-info">
            <div class="modal-perfume-brand">${perfume.brandName}</div>
            <h2>${perfume.name}</h2>
            <p class="modal-perfume-type">${perfume.typeName}</p>
            
            <div class="notes-section">
                <h3>Notas Olfativas</h3>
                <div class="notes-grid">
                    <div class="note-category">
                        <h4>Salida</h4>
                        <p>${perfume.notes.salida}</p>
                    </div>
                    <div class="note-category">
                        <h4>Corazón</h4>
                        <p>${perfume.notes.corazon}</p>
                    </div>
                    <div class="note-category">
                        <h4>Fondo</h4>
                        <p>${perfume.notes.fondo}</p>
                    </div>
                </div>
            </div>
            
            <div class="pricing-section">
                <h3>Precios</h3>
                <div class="price-options">
                    <div class="price-option">
                        <h4>Decant 5ml</h4>
                        <div class="price">$${perfume.price5ml}</div>
                        <p>~80-100 atomizaciones</p>
                        <button class="contact-button" onclick="contactWhatsApp('${perfume.name} - 5ml', ${perfume.price5ml})">
                            <i class="fab fa-whatsapp"></i> Consultar
                        </button>
                    </div>
                    <div class="price-option">
                        <h4>Decant 10ml</h4>
                        <div class="price">$${perfume.price10ml}</div>
                        <p>~160-200 atomizaciones</p>
                        <button class="contact-button" onclick="contactWhatsApp('${perfume.name} - 10ml', ${perfume.price10ml})">
                            <i class="fab fa-whatsapp"></i> Consultar
                        </button>
                    </div>
                </div>
                ${perfume.originalPrice ? `
                    <p style="margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">
                        Frasco original: $${perfume.originalPrice}
                    </p>
                ` : ''}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('perfume-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para contactar por WhatsApp
function contactWhatsApp(productName, price) {
    const message = `Hola! Me interesa comprar: ${productName} - $${price}. ¿Está disponible?`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Animaciones al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que necesitan animación
    document.querySelectorAll('.perfume-card, .best-seller-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(setupScrollAnimations, 100);
});

// Función para mostrar/ocultar loading
function showLoading(element) {
    element.innerHTML = '<div class="loading">Cargando perfumes...</div>';
}

function hideLoading(element) {
    // El contenido se reemplaza automáticamente cuando se renderizan los perfumes
}

// Función para resetear filtros
function resetFilters() {
    currentFilters = {
        marca: '',
        tipo: '',
        tamaño: ''
    };

    // Resetear los controles del formulario
    document.getElementById('marca-filter').value = '';
    document.getElementById('tipo-filter').value = '';
    document.getElementById('tamaño-filter').value = '';

    applyFilters();
}


// Función para buscar perfumes por nombre
function searchPerfumes(query) {
    if (!query.trim()) {
        filteredPerfumes = [...perfumes];
    } else {
        filteredPerfumes = perfumes.filter(perfume => 
            perfume.name.toLowerCase().includes(query.toLowerCase()) ||
            perfume.brandName.toLowerCase().includes(query.toLowerCase()) ||
            perfume.typeName.toLowerCase().includes(query.toLowerCase())
        );
    }
    renderPerfumes();
}

// Agregar funcionalidad de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchPerfumes(this.value);
        });
    }
});


// Función para compartir perfume
function sharePerfume(perfumeId) {
    const perfume = perfumes.find(p => p.id === perfumeId);
    if (!perfume) return;

    const shareData = {
        title: `${perfume.name} - ${perfume.brandName}`,
        text: `Descubre ${perfume.name} de ${perfume.brandName} en decants de 5ml y 10ml`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: copiar al portapapeles
        const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Enlace copiado al portapapeles');
        });
    }
}

// Función para agregar a favoritos (localStorage)
function toggleFavorite(perfumeId) {
    let favorites = JSON.parse(localStorage.getItem('favoritePerfumes') || '[]');
    const index = favorites.indexOf(perfumeId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(perfumeId);
    }
    
    localStorage.setItem('favoritePerfumes', JSON.stringify(favorites));
    updateFavoriteButton(perfumeId);
}

function updateFavoriteButton(perfumeId) {
    const favorites = JSON.parse(localStorage.getItem('favoritePerfumes') || '[]');
    const isFavorite = favorites.includes(perfumeId);
    
    // Actualizar el botón en el modal si está abierto
    const modal = document.getElementById('perfume-modal');
    if (modal.style.display === 'block') {
        const favoriteBtn = document.querySelector('.favorite-button');
        if (favoriteBtn) {
            favoriteBtn.innerHTML = isFavorite ? 
                '<i class="fas fa-heart"></i> En Favoritos' : 
                '<i class="far fa-heart"></i> Agregar a Favoritos';
            favoriteBtn.classList.toggle('favorited', isFavorite);
        }
    }
}

// Función para mostrar perfumes favoritos
function showFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favoritePerfumes') || '[]');
    filteredPerfumes = perfumes.filter(perfume => favorites.includes(perfume.id));
    renderPerfumes();
}


// Función para mostrar estadísticas
function showStats() {
    const totalPerfumes = perfumes.length;
    const bestSellers = perfumes.filter(p => p.bestSeller).length;
    const availablePerfumes = perfumes.filter(p => p.available).length;
    
    alert(`📊 Estadísticas del Catálogo:\n\n• Total de perfumes: ${totalPerfumes}\n• Más vendidos: ${bestSellers}\n• Disponibles: ${availablePerfumes}\n• Marcas disponibles: ${new Set(perfumes.map(p => p.brandName)).size}`);
}

// Funcionalidad para los botones del header
document.addEventListener('DOMContentLoaded', function() {
    // Botón de Iniciar Sesión
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // Simular modal de login (puedes reemplazar con tu lógica de autenticación)
            const loginModal = document.createElement('div');
            loginModal.className = 'login-modal';
            loginModal.innerHTML = `
                <div class="login-content">
                    <div class="login-header">
                        <h2>Iniciar Sesión</h2>
                        <button class="close-login">&times;</button>
                    </div>
                    <form class="login-form">
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <button type="submit" class="login-submit">Iniciar Sesión</button>
                        <p class="login-footer">¿No tienes cuenta? <a href="#" class="register-link">Regístrate aquí</a></p>
                    </form>
                </div>
            `;
            
            // Agregar estilos al modal
            const style = document.createElement('style');
            style.textContent = `
                .login-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .login-content {
                    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.9) 100%);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    padding: 2rem;
                    width: 90%;
                    max-width: 400px;
                    border: 1px solid rgba(0, 212, 170, 0.3);
                    box-shadow: 0 20px 60px rgba(0, 212, 170, 0.3);
                }
                
                .login-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .login-header h2 {
                    color: var(--white);
                    margin: 0;
                    background: linear-gradient(135deg, var(--primary-color), var(--nebula-orange));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .close-login {
                    background: none;
                    border: none;
                    color: var(--white);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .close-login:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: scale(1.1);
                }
                
                .form-group {
                    margin-bottom: 1rem;
                }
                
                .form-group label {
                    display: block;
                    color: var(--white);
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }
                
                .form-group input {
                    width: 100%;
                    padding: 0.8rem;
                    border: 1px solid rgba(0, 212, 170, 0.3);
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--white);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }
                
                .form-group input:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.2);
                }
                
                .login-submit {
                    width: 100%;
                    padding: 0.8rem;
                    background: linear-gradient(135deg, var(--primary-color), var(--nebula-orange));
                    color: var(--white);
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-bottom: 1rem;
                }
                
                .login-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
                }
                
                .login-footer {
                    text-align: center;
                    color: rgba(255, 255, 255, 0.8);
                    margin: 0;
                }
                
                .register-link {
                    color: var(--primary-color);
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .register-link:hover {
                    text-decoration: underline;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(loginModal);
            
            // Cerrar modal
            const closeBtn = loginModal.querySelector('.close-login');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(loginModal);
                document.head.removeChild(style);
            });
            
            // Cerrar al hacer clic fuera del modal
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    document.body.removeChild(loginModal);
                    document.head.removeChild(style);
                }
            });
            
            // Manejar envío del formulario
            const form = loginModal.querySelector('.login-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Funcionalidad de login en desarrollo! Por ahora es solo una demostración.');
                document.body.removeChild(loginModal);
                document.head.removeChild(style);
            });
        });
    }
    
    // Botón de Carrito
    const cartBtn = document.getElementById('cartBtn');
    const cartCount = document.getElementById('cartCount');
    
    if (cartBtn && cartCount) {
        // Inicializar carrito desde localStorage
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        updateCartCount();
        
        cartBtn.addEventListener('click', function() {
            // Simular modal de carrito
            const cartModal = document.createElement('div');
            cartModal.className = 'cart-modal';
            cartModal.innerHTML = `
                <div class="cart-content">
                    <div class="cart-header">
                        <h2><i class="fas fa-shopping-cart"></i> Mi Carrito</h2>
                        <button class="close-cart">&times;</button>
                    </div>
                    <div class="cart-items" id="cartItems">
                        ${cart.length === 0 ? 
                            '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Tu carrito está vacío</p></div>' : 
                            cart.map(item => `
                                <div class="cart-item">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="item-details">
                                        <h4>${item.name}</h4>
                                        <p>${item.brandName}</p>
                                        <p>${item.size}ml - $${item.price}</p>
                                    </div>
                                    <button class="remove-item" data-id="${item.id}">&times;</button>
                                </div>
                            `).join('')
                        }
                    </div>
                    <div class="cart-footer">
                        <div class="cart-total">
                            <strong>Total: $${cart.reduce((sum, item) => sum + item.price, 0)}</strong>
                        </div>
                        <button class="checkout-btn" ${cart.length === 0 ? 'disabled' : ''}>
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            `;
            
            // Agregar estilos al modal del carrito
            const cartStyle = document.createElement('style');
            cartStyle.textContent = `
                .cart-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                }
                
                .cart-content {
                    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.9) 100%);
                    backdrop-filter: blur(20px);
                    border-radius: 20px;
                    padding: 2rem;
                    width: 90%;
                    max-width: 500px;
                    max-height: 80vh;
                    overflow-y: auto;
                    border: 1px solid rgba(0, 212, 170, 0.3);
                    box-shadow: 0 20px 60px rgba(0, 212, 170, 0.3);
                }
                
                .cart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid rgba(0, 212, 170, 0.3);
                    padding-bottom: 1rem;
                }
                
                .cart-header h2 {
                    color: var(--white);
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, var(--primary-color), var(--nebula-orange));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .close-cart {
                    background: none;
                    border: none;
                    color: var(--white);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .close-cart:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: scale(1.1);
                }
                
                .empty-cart {
                    text-align: center;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 2rem;
                }
                
                .empty-cart i {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }
                
                .cart-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    margin-bottom: 1rem;
                    border: 1px solid rgba(0, 212, 170, 0.2);
                }
                
                .cart-item img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                
                .item-details {
                    flex: 1;
                }
                
                .item-details h4 {
                    color: var(--white);
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                }
                
                .item-details p {
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0;
                    font-size: 0.9rem;
                }
                
                .remove-item {
                    background: var(--nebula-red);
                    color: var(--white);
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                }
                
                .remove-item:hover {
                    background: #c0392b;
                    transform: scale(1.1);
                }
                
                .cart-footer {
                    border-top: 1px solid rgba(0, 212, 170, 0.3);
                    padding-top: 1rem;
                    margin-top: 1rem;
                }
                
                .cart-total {
                    text-align: center;
                    color: var(--white);
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
                
                .checkout-btn {
                    width: 100%;
                    padding: 1rem;
                    background: linear-gradient(135deg, var(--primary-color), var(--nebula-orange));
                    color: var(--white);
                    border: none;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .checkout-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
                }
                
                .checkout-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `;
            
            document.head.appendChild(cartStyle);
            document.body.appendChild(cartModal);
            
            // Cerrar modal
            const closeBtn = cartModal.querySelector('.close-cart');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(cartModal);
                document.head.removeChild(cartStyle);
            });
            
            // Cerrar al hacer clic fuera del modal
            cartModal.addEventListener('click', (e) => {
                if (e.target === cartModal) {
                    document.body.removeChild(cartModal);
                    document.head.removeChild(cartStyle);
                }
            });
            
            // Manejar checkout
            const checkoutBtn = cartModal.querySelector('.checkout-btn');
            checkoutBtn.addEventListener('click', () => {
                if (cart.length > 0) {
                    alert('¡Funcionalidad de checkout en desarrollo! Por ahora es solo una demostración.');
                }
            });
        });
    }
    
    // Función para actualizar contador del carrito
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }
    
    // Función para agregar al carrito (puedes llamar esta función desde los cards de perfumes)
    window.addToCart = function(perfumeId, size, price) {
        const perfume = perfumes.find(p => p.id === perfumeId);
        if (!perfume) return;
        
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItem = cart.find(item => item.id === perfumeId && item.size === size);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: perfumeId,
                name: perfume.name,
                brandName: perfume.brandName,
                image: perfume.image,
                size: size,
                price: price,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Mostrar notificación
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Agregado al carrito</span>
        `;
        
        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = `
            .cart-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, var(--primary-color), var(--nebula-orange));
                color: var(--white);
                padding: 1rem 1.5rem;
                border-radius: 12px;
                box-shadow: 0 8px 25px rgba(0, 212, 170, 0.3);
                display: flex;
                align-items: center;
                gap: 0.5rem;
                z-index: 10001;
                animation: slideIn 0.3s ease;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        
        document.head.appendChild(notificationStyle);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(notificationStyle);
        }, 3000);
    };
});

// ========== FUNCIONES PRÁCTICAS ADICIONALES ==========

// Sistema de Favoritos Mejorado
function toggleFavorite(perfumeId) {
    const index = favorites.indexOf(perfumeId);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('❌ Removido de favoritos', 'info');
    } else {
        favorites.push(perfumeId);
        showNotification('❤️ Agregado a favoritos', 'success');
    }
    
    localStorage.setItem('favoritePerfumes', JSON.stringify(favorites));
    updateFavoriteButtons();
    updateFavoritesCounter();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const perfumeId = parseInt(btn.closest('.perfume-card, .best-seller-card')
            ?.querySelector('.perfume-image')?.dataset.perfumeId);
        if (!perfumeId) return;
        
        const isFavorited = favorites.includes(perfumeId);
        btn.classList.toggle('favorited', isFavorited);
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = isFavorited ? 'fas fa-heart' : 'far fa-heart';
        }
        btn.title = isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos';
    });
}

function updateFavoritesCounter() {
    const counter = document.getElementById('favorites-counter');
    if (counter) {
        counter.textContent = favorites.length;
        counter.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

// Sistema de Comparación
function toggleComparison(perfumeId) {
    const index = comparisonList.indexOf(perfumeId);
    
    if (index > -1) {
        comparisonList.splice(index, 1);
        showNotification('Comparación removida', 'info');
    } else {
        if (comparisonList.length >= 3) {
            showNotification('Máximo 3 perfumes para comparar', 'warning');
            return;
        }
        comparisonList.push(perfumeId);
        showNotification('Agregado a comparación', 'success');
    }
    
    localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
    updateComparisonButtons();
    updateComparisonBadge();
    
    if (comparisonList.length >= 2) {
        showComparisonButton();
    }
}

function updateComparisonButtons() {
    document.querySelectorAll('.compare-btn').forEach(btn => {
        const perfumeId = parseInt(btn.closest('.perfume-card, .best-seller-card')
            ?.querySelector('.perfume-image')?.dataset.perfumeId);
        if (!perfumeId) return;
        
        const isInComparison = comparisonList.includes(perfumeId);
        btn.classList.toggle('in-comparison', isInComparison);
        
        if (!btn.querySelector('.compare-count') && isInComparison) {
            const span = document.createElement('span');
            span.className = 'compare-count';
            span.textContent = '✓';
            btn.appendChild(span);
        } else if (btn.querySelector('.compare-count') && !isInComparison) {
            btn.querySelector('.compare-count')?.remove();
        }
        
        btn.title = isInComparison ? 'Quitar de comparación' : 'Comparar perfume';
    });
}

function updateComparisonBadge() {
    const badge = document.getElementById('comparison-badge');
    if (badge) {
        badge.textContent = comparisonList.length;
        badge.style.display = comparisonList.length > 0 ? 'flex' : 'none';
    }
}

function showComparisonButton() {
    let btn = document.getElementById('show-comparison-btn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'show-comparison-btn';
        btn.className = 'comparison-fab';
        btn.innerHTML = '<i class="fas fa-balance-scale"></i><span>Comparar (${comparisonList.length})</span>';
        btn.onclick = openComparisonModal;
        document.body.appendChild(btn);
    }
    btn.innerHTML = `<i class="fas fa-balance-scale"></i><span>Comparar (${comparisonList.length})</span>`;
}

// Modal de Comparación
function openComparisonModal() {
    if (comparisonList.length < 2) {
        showNotification('Selecciona al menos 2 perfumes para comparar', 'warning');
        return;
    }
    
    const comparedPerfumes = perfumes.filter(p => comparisonList.includes(p.id));
    
    const modal = document.createElement('div');
    modal.className = 'comparison-modal';
    modal.innerHTML = `
        <div class="comparison-content">
            <div class="comparison-header">
                <h2><i class="fas fa-balance-scale"></i> Comparar Perfumes</h2>
                <button class="close-comparison" onclick="this.closest('.comparison-modal').remove()">&times;</button>
            </div>
            <div class="comparison-grid">
                ${comparedPerfumes.map(perfume => `
                    <div class="comparison-card">
                        <div class="comparison-image">
                            <img src="${perfume.image}" alt="${perfume.name}">
                            <button class="remove-from-comparison" onclick="toggleComparison(${perfume.id}); this.closest('.comparison-modal').remove(); setTimeout(openComparisonModal, 100);">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <h3>${perfume.name}</h3>
                        <p class="comparison-brand">${perfume.brandName}</p>
                        <div class="comparison-details">
                            <div class="detail-item">
                                <strong>Tipo:</strong> ${perfume.typeName}
                            </div>
                            <div class="detail-item">
                                <strong>Precio 5ml:</strong> $${perfume.price5ml}
                            </div>
                            <div class="detail-item">
                                <strong>Precio 10ml:</strong> $${perfume.price10ml}
                            </div>
                            <div class="detail-item notes">
                                <strong>Notas:</strong>
                                <ul>
                                    <li><strong>Salida:</strong> ${perfume.notes.salida}</li>
                                    <li><strong>Corazón:</strong> ${perfume.notes.corazon}</li>
                                    <li><strong>Fondo:</strong> ${perfume.notes.fondo}</li>
                                </ul>
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="openPerfumeModal(${perfume.id}); this.closest('.comparison-modal').remove();">
                            Ver Detalles
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="comparison-footer">
                <button class="btn btn-secondary" onclick="clearComparison(); this.closest('.comparison-modal').remove();">
                    Limpiar Comparación
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function clearComparison() {
    comparisonList = [];
    localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
    updateComparisonButtons();
    updateComparisonBadge();
    const btn = document.getElementById('show-comparison-btn');
    if (btn) btn.remove();
    showNotification('Comparación limpiada', 'info');
}

// Sistema de Notificaciones Mejorado
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Actualizar contadores al inicializar
function initializeCounters() {
    updateFavoritesCounter();
    updateComparisonBadge();
    if (comparisonList.length >= 2) {
        showComparisonButton();
    }
}

