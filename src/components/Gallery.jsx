import { useReducer, useState, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favouritesReducer, loadFavourites } from '../reducers/favouritesReducer';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

/**
 * Gallery component - the main component that:
 * 1. Fetches photos using the useFetchPhotos custom hook
 * 2. Manages favourites with useReducer (persisted in localStorage)
 * 3. Filters photos by author name using a search input
 * 4. Uses useCallback for the search handler and toggle handler
 * 5. Uses useMemo to compute the filtered photo list
 */
function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');

  // useReducer to manage favourites state — initialised from localStorage
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites);

  /**
   * useCallback on the search filter handler.
   * This memoises the function so it keeps the same reference across renders,
   * preventing unnecessary re-renders of the SearchBar component.
   */
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  /**
   * useCallback on the toggle favourite handler.
   * This memoises the dispatch call so PhotoCard components don't re-render
   * unnecessarily when the parent re-renders.
   */
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photoId });
  }, []);

  /**
   * useMemo to compute the filtered photo list.
   * Only recomputes when photos or searchTerm changes, avoiding
   * re-filtering on every render (e.g. when only favourites change).
   */
  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) return photos;
    const lowerSearch = searchTerm.toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(lowerSearch)
    );
  }, [photos, searchTerm]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No photos found for &quot;{searchTerm}&quot;
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;

