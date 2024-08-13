import { FaStar } from "react-icons/fa";

export default function RatingStars({ rating }) {
  rating = Math.round(rating);
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={` ${
            index < +rating ? "text-yellow-500" : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
