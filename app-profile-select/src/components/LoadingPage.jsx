// Page Loading

function LoadingPage() {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-gray-600 text-xl font-semibold">Loading...</h2>
      </div>
    </div>
  );
}
export default LoadingPage;