import Container from "../../ui/Container";

export default function ProductShowSkeleton() {
  return (
    <Container className="py-8 sm:py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Left side: Image carousel placeholder */}
        <div className="flex flex-col justify-center items-start gap-4">
          <div className="bg-gray-200 w-full max-w-md h-[20rem] animate-pulse rounded-lg"></div>
        </div>

        {/* Right side: Product details placeholders */}
        <div className="flex flex-col justify-center items-center sm:items-start gap-6 sm:pl-12">
          <div className="bg-gray-200 w-2/3 h-8 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-full h-4 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-1/2 h-4 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-1/4 h-6 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-1/3 h-6 animate-pulse rounded"></div>

          <div className="text-red-600 w-1/3 h-4 bg-gray-200 animate-pulse rounded"></div>

          {/* Buttons and Quantity */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="bg-gray-200 w-full sm:w-auto h-12 animate-pulse rounded"></div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse"></div>
              <div className="bg-gray-200 h-6 w-6 rounded-full animate-pulse"></div>
              <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse"></div>
            </div>
            <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse mt-4 sm:mt-0"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
