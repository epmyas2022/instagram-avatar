# Scraping Api instagram 📸

Este un proyecto de scraping de la API de Instagram, que permite obtener información de los perfiles de los usuarios, como el avatar, etc

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

### GET /api/v1/avatar?username=user

Obtiene el avatar del usuario.

```bash
curl --request GET \
  --url 'http://localhost:3000/api/v1/avatar?username=ronaldo'

```

## Features 📌

- [x] Obtener avatar de usuario
- [ ] Obtener publicaciones de usuario
- [ ] Obtener seguidores de usuario
- [ ] Obtener seguidos de usuario
- [ ] Obtener información de usuario
- [ ] Obtener información de publicación

Este proyecto se encuentra en desarrollo. 🚧
