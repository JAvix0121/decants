/**
 * Sistema de Gestión de Imágenes para Galaxy Scents
 * Maneja la carga, optimización y fallback de imágenes
 */

class ImageManager {
    constructor() {
        this.imageCache = new Map();
        this.basePath = 'html/images/';
        this.fallbackImages = {
            perfume: `${this.basePath}placeholders/perfume-placeholder.svg`,
            brand: `${this.basePath}placeholders/brand-placeholder.svg`
        };
        this.loadingStates = new Set();
        this.init();
    }

    init() {
        this.setupImageObserver();
        this.preloadCriticalImages();
    }

    /**
     * Carga una imagen con fallback automático
     * @param {string} src - URL de la imagen
     * @param {string} alt - Texto alternativo
     * @param {string} type - Tipo de imagen (perfume, brand, etc.)
     * @param {Object} options - Opciones adicionales
     * @returns {Promise<HTMLImageElement>}
     */
    async loadImage(src, alt = '', type = 'perfume', options = {}) {
        const {
            width = 400,
            height = 400,
            quality = 80,
            lazy = true,
            placeholder = true
        } = options;

        // Verificar cache
        const cacheKey = `${src}_${width}_${height}`;
        if (this.imageCache.has(cacheKey)) {
            return this.imageCache.get(cacheKey);
        }

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            
            // Configurar dimensiones
            img.width = width;
            img.height = height;
            img.alt = alt;

            // Agregar clases CSS
            img.className = 'perfume-image-loaded';
            if (lazy) {
                img.className += ' lazy-load';
            }

            // Eventos de carga
            img.onload = () => {
                this.imageCache.set(cacheKey, img);
                this.loadingStates.delete(src);
                resolve(img);
            };

            img.onerror = () => {
                console.warn(`Error cargando imagen: ${src}`);
                this.loadingStates.delete(src);
                
                // Usar imagen de fallback
                const fallbackImg = this.createFallbackImage(type, width, height, alt);
                this.imageCache.set(cacheKey, fallbackImg);
                resolve(fallbackImg);
            };

            // Optimizar URL si es de Unsplash
            const optimizedSrc = this.optimizeImageUrl(src, width, height, quality);
            img.src = optimizedSrc;
            this.loadingStates.add(src);
        });
    }

    /**
     * Optimiza URLs de imágenes de Unsplash
     * @param {string} url - URL original
     * @param {number} width - Ancho deseado
     * @param {number} height - Alto deseado
     * @param {number} quality - Calidad (1-100)
     * @returns {string}
     */
    optimizeImageUrl(url, width, height, quality = 80) {
        if (url.includes('unsplash.com')) {
            // Extraer ID de la imagen de Unsplash
            const match = url.match(/photo-(\w+)/);
            if (match) {
                const photoId = match[1];
                return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=crop&q=${quality}&auto=format`;
            }
        }
        return url;
    }

    /**
     * Crea una imagen de fallback
     * @param {string} type - Tipo de imagen
     * @param {number} width - Ancho
     * @param {number} height - Alto
     * @param {string} alt - Texto alternativo
     * @returns {HTMLImageElement}
     */
    createFallbackImage(type, width, height, alt) {
        const img = new Image();
        img.width = width;
        img.height = height;
        img.alt = alt;
        img.className = 'perfume-image-fallback';
        
        const fallbackData = this.fallbackImages[type] || this.fallbackImages.perfume;
        img.src = fallbackData;
        
        return img;
    }

    /**
     * Configura el Intersection Observer para lazy loading
     */
    setupImageObserver() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            this.observer.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
        }
    }

    /**
     * Precarga imágenes críticas
     */
    async preloadCriticalImages() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1594736797933-d0c29c8b0b1a?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=400&fit=crop'
        ];

        const preloadPromises = criticalImages.map(src => 
            this.loadImage(src, 'Imagen precargada', 'perfume', { lazy: false })
        );

        try {
            await Promise.all(preloadPromises);
            console.log('Imágenes críticas precargadas');
        } catch (error) {
            console.warn('Error precargando imágenes:', error);
        }
    }

    /**
     * Crea un elemento de imagen con lazy loading
     * @param {string} src - URL de la imagen
     * @param {string} alt - Texto alternativo
     * @param {Object} options - Opciones
     * @returns {HTMLImageElement}
     */
    createLazyImage(src, alt, options = {}) {
        const img = new Image();
        img.alt = alt;
        img.className = 'perfume-image lazy-load';
        img.dataset.src = src;
        
        // Imagen placeholder mientras carga
        if (options.placeholder) {
            img.src = this.createPlaceholder(options.width || 400, options.height || 400);
        }

        // Agregar al observer si está disponible
        if (this.observer) {
            this.observer.observe(img);
        } else {
            // Fallback: cargar inmediatamente
            img.src = src;
        }

        return img;
    }

    /**
     * Crea un placeholder SVG
     * @param {number} width - Ancho
     * @param {number} height - Alto
     * @returns {string}
     */
    createPlaceholder(width, height) {
        return `data:image/svg+xml;base64,${btoa(`
            <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="${width}" height="${height}" fill="url(#gradient)"/>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#00D4AA;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#00B894;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#E17055;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)/8}" fill="rgba(255, 255, 255, 0.8)"/>
                <text x="${width/2}" y="${height/2 + 5}" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="14" font-weight="bold">Cargando...</text>
            </svg>
        `)}`;
    }

    /**
     * Obtiene la ruta de una imagen local
     * @param {string} filename - Nombre del archivo
     * @param {string} category - Categoría (perfumes, brands, placeholders)
     * @returns {string}
     */
    getLocalImagePath(filename, category = 'perfumes') {
        return `${this.basePath}${category}/${filename}`;
    }

    /**
     * Verifica si una imagen local existe
     * @param {string} filename - Nombre del archivo
     * @param {string} category - Categoría
     * @returns {Promise<boolean>}
     */
    async checkLocalImageExists(filename, category = 'perfumes') {
        const path = this.getLocalImagePath(filename, category);
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = path;
        });
    }

    /**
     * Limpia el cache de imágenes
     */
    clearCache() {
        this.imageCache.clear();
        console.log('Cache de imágenes limpiado');
    }

    /**
     * Obtiene estadísticas del cache
     * @returns {Object}
     */
    getCacheStats() {
        return {
            cacheSize: this.imageCache.size,
            loadingCount: this.loadingStates.size,
            memoryUsage: this.estimateMemoryUsage()
        };
    }

    /**
     * Estima el uso de memoria del cache
     * @returns {string}
     */
    estimateMemoryUsage() {
        const avgImageSize = 50; // KB promedio por imagen
        const totalKB = this.imageCache.size * avgImageSize;
        
        if (totalKB < 1024) {
            return `${totalKB} KB`;
        } else {
            return `${(totalKB / 1024).toFixed(1)} MB`;
        }
    }

    /**
     * Destruye el ImageManager y limpia recursos
     */
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.clearCache();
        this.loadingStates.clear();
    }
}

// Instancia global del ImageManager
window.imageManager = new ImageManager();

// Funciones de utilidad globales
window.loadPerfumeImage = (src, alt, options = {}) => {
    return window.imageManager.loadImage(src, alt, 'perfume', options);
};

window.loadBrandImage = (src, alt, options = {}) => {
    return window.imageManager.loadImage(src, alt, 'brand', options);
};

window.createLazyImage = (src, alt, options = {}) => {
    return window.imageManager.createLazyImage(src, alt, options);
};

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageManager;
}

