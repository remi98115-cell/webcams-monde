# 🌍 Webcams du Monde

Site web qui affiche **71 webcams live** vérifiées depuis le monde entier : villes, nature, faune sauvage et espace.

## ✨ Fonctionnalités

- **71 flux live 24/7** vérifiés (EarthCam, Skyline Webcams, NASA, Explore.org, etc.)
- **Miniatures animées** : les vidéos jouent en muet dans les cartes
- **Recherche instantanée** par ville, pays ou nom
- **Filtres par région** : Europe, Amériques, Asie, Océanie, Afrique, Nature, Espace
- **Mode plein écran** en cliquant sur une carte
- **Design responsive** adapté mobile et desktop
- **Performance optimisée** : chargement à la demande via IntersectionObserver

## 🚀 Déploiement

Site statique — aucun build nécessaire. Hébergeable sur GitHub Pages, Netlify, Vercel, etc.

## 📝 Ajouter une webcam

Éditez le tableau `WEBCAMS` en haut de [script.js](script.js) :

```js
{ name: "Nom", city: "Ville", country: "Pays", region: "europe",
  flag: "🇫🇷", emoji: "🏛️", videoId: "YOUTUBE_ID", desc: "Description" }
```

Le `videoId` est la partie après `v=` dans une URL YouTube.
