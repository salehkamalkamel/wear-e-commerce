export default function Input({ heading, error }) {
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full">
      <p className="font-normal text-[1rem] text-custom-black-80">
        {heading} *
      </p>
      <input className="bg-transparent outline-none border border-custom-black-80 rounded-lg h-12 w-full px-4" />
      {error && (
        <p className="font-normal text-[1rem] text-custom-red">{error}</p>
      )}
    </div>
  );
}
