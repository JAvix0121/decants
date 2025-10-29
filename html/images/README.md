# Galería de Imágenes - Galaxy Scents

Esta carpeta contiene todas las imágenes utilizadas en el catálogo de fragancias.

## Estructura de Carpetas

```
html/images/
├── perfumes/          # Imágenes de los perfumes individuales
├── brands/           # Logos y imágenes de las marcas
├── placeholders/     # Imágenes de respaldo y placeholders
└── README.md         # Este archivo
```

## Especificaciones de Imágenes

### Perfumes
- **Formato**: JPG, PNG, WebP
- **Dimensiones**: 400x400px (mínimo)
- **Tamaño**: Máximo 500KB por imagen
- **Nomenclatura**: `{marca}_{perfume}_{tamaño}.{extensión}`
  - Ejemplo: `jean-paul-gaultier_le-male_400x400.jpg`

### Marcas
- **Formato**: PNG (con transparencia), SVG
- **Dimensiones**: 200x200px (mínimo)
- **Tamaño**: Máximo 100KB por imagen
- **Nomenclatura**: `{marca}_logo.{extensión}`
  - Ejemplo: `jean-paul-gaultier_logo.png`

### Placeholders
- **Formato**: SVG, PNG
- **Dimensiones**: Variables según uso
- **Uso**: Imágenes de respaldo cuando las originales no cargan

## Cómo Agregar Nuevas Imágenes

1. **Para Perfumes**:
   - Coloca la imagen en `perfumes/`
   - Usa el nombre descriptivo del perfume
   - Asegúrate de que sea cuadrada (1:1)

2. **Para Marcas**:
   - Coloca el logo en `brands/`
   - Usa fondo transparente si es posible
   - Mantén la proporción original

3. **Para Placeholders**:
   - Crea imágenes genéricas de respaldo
   - Usa colores de la marca (verde, naranja)
   - Mantén consistencia visual

## Optimización

- Comprime las imágenes antes de subirlas
- Usa WebP para mejor rendimiento
- Considera crear múltiples tamaños para responsive design

## Notas Técnicas

- Las imágenes se cargan de forma lazy (bajo demanda)
- Se implementa fallback automático si una imagen no carga
- El sistema optimiza automáticamente las URLs de Unsplash
- Se mantiene un cache local para mejorar el rendimiento

