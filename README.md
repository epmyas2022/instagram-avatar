# Scraping Api instagram 📸

Este un proyecto de scraping de la API de Instagram, que permite obtener información de los perfiles de los usuarios, como el avatar, etc

> [!WARNING]  
> Este proyecto se encuentra en desarrollo. (tomar en cuenta) 🚧

## Instalación 🚀

```bash
npm install
```

## Uso 📦

Renombrar el archivo `.env.example` a `.env` y agregar las credenciales de la API de Instagram.

```bash
npm start
```

## API 📖

### <span style="color:green;"> GET </span> /api/v1/avatar/:username

Obtiene el avatar del usuario.

```bash
curl --request GET \
  --url 'http://localhost:3000/api/v1/avatar/cristiano'
```

### <span style="color:green;"> GET </span> /api/v1/info/:username

Obtiene información del usuario.

```bash
curl --request GET \
  --url 'http://localhost:3000/api/v1/info/cristiano'
```

## Features 📌

- [x] Obtener avatar de usuario
- [x] Obtener publicaciones de usuario
- [x] Obtener seguidores de usuario
- [x] Obtener seguidos de usuario
- [x] Obtener información de usuario
- [x] Obtener información de publicación


