/**
 * Loads favourites from localStorage.
 * Returns an array of photo IDs that have been favourited.
 */
export function loadFavourites() {
  try {
    const stored = localStorage.getItem('favourites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

/**
 * Saves favourites to localStorage.
 * @param {string[]} favourites - Array of photo IDs
 */
function saveFavourites(favourites) {
  localStorage.setItem('favourites', JSON.stringify(favourites));
}

/**
 * Reducer for managing the favourites list.
 * Handles two actions:
 *   - TOGGLE_FAVOURITE: Adds or removes a photo ID from the list
 *
 * @param {string[]} state - Current array of favourite photo IDs
 * @param {{ type: string, payload: string }} action - The dispatched action
 * @returns {string[]} - Updated array of favourite photo IDs
 */
export function favouritesReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload;
      if (state.includes(photoId)) {
        // Remove from favourites
        newState = state.filter((id) => id !== photoId);
      } else {
        // Add to favourites
        newState = [...state, photoId];
      }
      break;
    }
    default:
      return state;
  }

  // Persist to localStorage whenever state changes
  saveFavourites(newState);
  return newState;
}

