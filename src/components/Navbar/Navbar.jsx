const Navbar = () => {
  return (
    <ul className="w-3/4 flex justify-between text-gray-600 items-center">
      <li className="text-red-600 cursor-pointer">خانه</li>
      <li className="cursor-pointer sm:pr-3">لوازم جانبی و کامپیوتر</li>
      <li className="cursor-pointer sm:pr-3">کابل-مبدل-رابط</li>
      <li className="cursor-pointer sm:pr-3">لوازم تولید محتوا</li>
      <li className="cursor-pointer sm:pr-3">لوازم شبکه</li>
      <li className="cursor-pointer sm:pr-3">کنسول بازی و لوازم جانبی</li>
      <li className="cursor-pointer sm:pr-3">لوازم خانگی و شخصی</li>
      <li className="cursor-pointer sm:pr-3">برندها</li>
    </ul>
  );
};
export default Navbar;
