export default function LoadingPage() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm z-40">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
