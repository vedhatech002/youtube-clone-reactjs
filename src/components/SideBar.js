import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuopen = useSelector((store) => store.appConfig.isMenuOpen);

  return (
    <div
      className={`sticky h-[88.5vh]  border-r px-4   font-Roboto pt-4 ${
        isMenuopen && "w-[240px]"
      }`}
    >
      <div>
        <ul className="space-y-2 font-medium text-gray-600">
          <Link
            to="/"
            className="flex items-center gap-4 px-2 py-2 hover:bg-[#e6e6e6] cursor-pointer rounded-lg"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                display="inherit"
                viewBox="0 0 24 24"
                pointerEvents="none"
              >
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </svg>
            </span>
            {isMenuopen && <span className=" text-sm">Home</span>}
          </Link>
          <li className="flex items-center gap-4 px-2 py-2 hover:bg-[#e6e6e6] cursor-pointer rounded-lg">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                display="inherit"
                viewBox="0 0 24 24"
                pointerEvents="none"
              >
                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
              </svg>
            </span>
            {isMenuopen && <span className=" text-sm">Shorts</span>}
          </li>
          <li className="flex items-center gap-4 px-2 py-2 hover:bg-[#e6e6e6] cursor-pointer rounded-lg">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                display="inherit"
                viewBox="0 0 24 24"
                pointerEvents="none"
              >
                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
              </svg>
            </span>
            {isMenuopen && <span className=" text-sm">Subscriptions</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
