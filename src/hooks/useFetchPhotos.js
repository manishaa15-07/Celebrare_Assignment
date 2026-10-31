import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch photos from the Picsum Photos API.
 * Separates data-fetching logic from the UI components.
 *
 * @returns {{ photos: Array, loading: boolean, error: string|null }}
 */
function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://picsum.photos/v2/list?limit=30',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        // Don't set error if the fetch was aborted (component unmounted)
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch photos. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();

    // Cleanup: abort the fetch if the component unmounts
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}

export default useFetchPhotos;

