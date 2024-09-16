export default function ErrorPage({
  message = "Something went wrong. Please try again later.",
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Error</h1>
      <p className="mt-4 text-lg text-gray-700">{message}</p>
      <button
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}
