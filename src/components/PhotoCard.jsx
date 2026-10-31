/**
 * PhotoCard component - displays a single photo with author name and a heart (favourite) button.
 *
 * @param {{ photo: object, isFavourite: boolean, onToggleFavourite: (id: string) => void }} props
 */
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Photo */}
      <div className="relative overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Card footer: author name + heart button */}
      <div className="p-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700 truncate mr-2">
          {photo.author}
        </p>
        <button
          onClick={() => onToggleFavourite(photo.id)}
          className="flex-shrink-0 p-2 rounded-full hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
          aria-label={isFavourite ? `Remove ${photo.author} from favourites` : `Add ${photo.author} to favourites`}
        >
          {isFavourite ? (
            /* Filled heart */
            <svg
              className="w-6 h-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            /* Outline heart */
            <svg
              className="w-6 h-6 text-gray-400 hover:text-red-400 transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;

