import { FaChevronLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-1 md:left-[-1.7rem] z-10 bg-primary p-2 rounded-full "
      onClick={onClick}
    >
      <FaChevronLeft className="text-2xl text-white transition" />
    </div>
  );
};

export default PrevArrow;
