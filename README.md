# Photo Gallery Web App

A responsive photo gallery built with **React + Vite + Tailwind CSS** that fetches photos from the [Picsum Photos API](https://picsum.photos/), displays them in a responsive grid, supports real-time search filtering by author name, and allows marking photos as favourites (persisted across page refreshes).

## Features

1. **React + Vite + Tailwind CSS** — Set up from scratch, no other UI libraries
2. **API Fetching** — Photos loaded from `https://picsum.photos/v2/list?limit=30` with loading spinner and error handling
3. **Responsive Grid** — 4 columns on desktop, 2 on tablet, 1 on mobile
4. **Real-time Search** — Filter photos by author name as you type (no API calls, client-side filtering)
5. **Favourites with `useReducer`** — Heart icon toggles favourites, persisted in `localStorage`
6. **Custom Hook (`useFetchPhotos`)** — Fetch logic separated from UI, returns `{ photos, loading, error }`
7. **`useCallback` + `useMemo`** — Performance-optimised search handler and filtered photo list

## Project Structure

```
src/
├── components/
│   ├── Gallery.jsx        # Main gallery (useReducer, useCallback, useMemo)
│   ├── PhotoCard.jsx      # Individual photo card with heart button
│   ├── SearchBar.jsx      # Search input component
│   ├── Spinner.jsx        # Loading spinner
│   └── ErrorMessage.jsx   # Error display
├── hooks/
│   └── useFetchPhotos.js  # Custom hook for API fetching
├── reducers/
│   └── favouritesReducer.js # useReducer logic + localStorage persistence
├── App.jsx                # Root component
├── main.jsx               # Entry point
└── index.css              # Tailwind CSS import
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **React 19** — Functional components with hooks only
- **Vite** — Fast build tool
- **Tailwind CSS v4** — Utility-first styling (no other UI libraries)
