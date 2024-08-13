export default function Empty({ resource }) {
  return (
    <div className="w-full h-full flex items-center justify-center text-sm sm:text-2xl text-custom-red font-bold p-12 text-center">
      No {resource} to display at the moment
    </div>
  );
}
