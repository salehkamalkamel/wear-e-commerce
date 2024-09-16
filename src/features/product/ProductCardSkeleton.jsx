export default function ProductCardSkeleton({ size = "lg" }) {
  // Define fixed card sizes for skeleton
  const sizeClasses = {
    sm: "w-48 h-80 p-4",
    md: "w-64 h-auto p-4",
    lg: "w-80 h-112 p-6",
  };

  return (
    <div
      className={`bg-gray-200 animate-pulse rounded-2xl flex flex-col ${
        sizeClasses[size] || sizeClasses.lg
      } shadow-lg`}
    >
      {/* Fixed width and height for the image placeholder */}
      <div className="relative w-full h-52 mb-4 overflow-hidden rounded-lg bg-gray-300"></div>

      <div className="flex flex-col gap-2 flex-grow">
        {/* Title placeholder with fixed width */}
        <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>

        {/* Description placeholder with fixed width */}
        <div className="bg-gray-300 h-4 w-2/3 mb-2"></div>

        {/* Category placeholder */}
        <div className="bg-gray-300 h-4 w-1/3 mb-2"></div>

        {/* Price placeholder */}
        <div className="bg-gray-300 h-8 w-1/2 mb-2"></div>

        {/* Rating placeholder */}
        <div className="bg-gray-300 h-6 w-1/4 mb-2"></div>

        {/* Buttons placeholders with fixed width */}
        <div className="flex gap-4 mt-4">
          <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
          <div className="bg-gray-300 h-10 w-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
