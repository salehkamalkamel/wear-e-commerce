import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

export default function Card({ title, description, buttonText, onClick }) {
  return (
    <div className="bg-custom-black-10 rounded-[2rem] w-[100%] max-w-80 flex flex-col items-center justify-center gap-y-6 p-12 cursor-pointer hover:scale-95 transition-transform">
      <Heading as="h5" className="text-center">
        {title}
      </Heading>
      <p className="text-custom-black-60 text-[1.25rem] text-center">
        {description}
      </p>
      <Button type="secondary" onClick={() => onClick()}>
        {buttonText}
      </Button>{" "}
    </div>
  );
}
