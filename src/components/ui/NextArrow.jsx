import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-1 md:right-[-1.7rem] z-10 bg-primary p-2 rounded-full"
      onClick={onClick}
    >
      <FaChevronRight className="text-2xl text-white hover:text-rose-800 transition" />
    </div>
  );
};

export default NextArrow;
