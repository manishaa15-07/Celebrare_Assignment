/**
 * Spinner component - displays a loading spinner while photos are being fetched.
 */
function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-500 text-sm">Loading photos...</p>
    </div>
  );
}

export default Spinner;

