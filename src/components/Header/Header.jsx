import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const changeRoute = ()=>{navigate("/Admin")}
  return (
      <nav className="w-3/4 flex justify-between items-center m-5" id="Header">
        <img className="Header-Logo" src="/src/assets/logo.png" alt="Logo" />
        <input
          type="search"
          className="search-box w-[15rem] h-[2rem] bg-gray-200 rounded p-2"
          placeholder="جست و جو"
        />
        <ul className="flex text-gray-500 sm:justify-between">
          <li className="p-3 cursor-pointer">باشگاه مشتریان</li>
          <li className="p-3 cursor-pointer">ارتباط با ما</li>
          <li className="p-3 cursor-pointer">درباره ما</li>
        </ul>
        <button className="w-[7rem] h-[3rem] bg-green-600 rounded text-white" onClick={changeRoute}>
          پنل ادمین
        </button>
      </nav>
  );
};
export default Header;
