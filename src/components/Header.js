import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appConfigSlice";
import { useEffect, useState } from "react";
import getSearchSuggestion from "../utils/searchSuggesionApi";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 Api Calls is <200ms
    //decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key -i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   *
   * key - ip
   * - destroy the component(useeffect return method)
   * - render the component
   * - useEffect()
   * - start timer => make api all after 200ms
   */

  const getSuggestions = async () => {
    if (searchQuery) {
      const suggestionsData = await getSearchSuggestion(searchQuery);
      setSuggestion(suggestionsData[1]);

      //update cache
      dispatch(cacheResults({ [searchQuery]: suggestionsData[1] }));
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="px-6 py-4 grid grid-cols-12 items-center sticky top-0 bg-white z-10">
      <div className="flex items-center gap-6 col-span-3">
        <span className="text-black cursor-pointer" onClick={toggleMenuHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            ></path>
          </svg>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="external-icon"
            display="inherit"
            viewBox="0 0 90 20"
            style={{ width: "40%", height: "40%" }}
            pointerEvents="none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 90 20"
            >
              <path
                fill="red"
                d="M27.973 3.123A3.578 3.578 0 0025.447.597C23.22 0 14.285 0 14.285 0S5.35 0 3.123.597A3.578 3.578 0 00.597 3.123C0 5.35 0 10 0 10s0 4.65.597 6.877a3.578 3.578 0 002.526 2.526C5.35 20 14.285 20 14.285 20s8.935 0 11.162-.597a3.578 3.578 0 002.526-2.526C28.57 14.65 28.57 10 28.57 10s-.002-4.65-.597-6.877z"
              ></path>
              <path
                fill="#fff"
                d="M11.425 14.285L18.848 10l-7.423-4.285v8.57z"
              ></path>
              <g>
                <g>
                  <path d="M34.602 13.004L31.395 1.418h2.798l1.124 5.252c.287 1.294.497 2.397.633 3.31h.082c.094-.655.306-1.75.633-3.291l1.164-5.27h2.799L37.38 13.003v5.557H34.6v-5.557h.002zM41.47 18.194c-.565-.381-.967-.974-1.207-1.778-.237-.805-.357-1.872-.357-3.208V11.39c0-1.348.136-2.432.409-3.248.273-.816.699-1.413 1.277-1.787.579-.374 1.338-.563 2.279-.563.927 0 1.667.191 2.227.572.558.381.967.978 1.225 1.787.26.812.389 1.891.389 3.239v1.818c0 1.336-.128 2.408-.38 3.217-.25.811-.66 1.404-1.224 1.778-.565.374-1.332.562-2.298.562-.997.002-1.776-.19-2.34-.571zm3.165-1.962c.156-.409.236-1.074.236-2.001v-3.902c0-.898-.078-1.557-.236-1.97-.157-.417-.432-.624-.828-.624-.38 0-.651.207-.806.623-.158.417-.235 1.073-.235 1.971v3.902c0 .927.075 1.594.225 2.001.15.41.421.614.816.614.396 0 .67-.204.828-.614zM56.815 18.563H54.61l-.244-1.533h-.061c-.6 1.157-1.498 1.736-2.698 1.736-.83 0-1.444-.273-1.839-.816-.395-.546-.593-1.397-.593-2.554V6.037h2.82v9.193c0 .56.061.957.184 1.195.122.237.327.357.613.357.245 0 .48-.075.706-.226.226-.15.39-.34.5-.571v-9.95h2.818v12.527z"></path>
                  <path d="M64.475 3.688h-2.798v14.875h-2.759V3.688H56.12V1.42h8.356v2.268z"></path>
                  <path d="M71.277 18.563H69.07l-.245-1.533h-.06c-.6 1.157-1.499 1.736-2.699 1.736-.83 0-1.443-.273-1.839-.816-.395-.546-.592-1.397-.592-2.554V6.037h2.82v9.193c0 .56.06.957.183 1.195.122.237.327.357.614.357.244 0 .48-.075.705-.226.226-.15.39-.34.501-.571v-9.95h2.818v12.527zM80.609 8.039c-.172-.79-.447-1.362-.828-1.717-.38-.355-.905-.532-1.573-.532-.518 0-1.002.146-1.451.44-.45.294-.798.677-1.042 1.155h-.021v-6.6h-2.717v17.776h2.329l.287-1.186h.06c.22.424.546.755.981 1.002.436.245.92.367 1.451.367.953 0 1.656-.44 2.105-1.317.45-.88.675-2.25.675-4.118v-1.982c0-1.4-.087-2.498-.256-3.288zm-2.585 5.11c0 .913-.037 1.628-.113 2.145-.075.518-.2.887-.378 1.103a.871.871 0 01-.715.327c-.233 0-.447-.054-.645-.165a1.232 1.232 0 01-.48-.489V8.96c.095-.34.26-.618.492-.837.23-.218.485-.327.755-.327a.76.76 0 01.663.337c.158.226.266.602.327 1.133.061.532.092 1.287.092 2.268v1.615h.002zM84.866 13.871c0 .804.023 1.407.07 1.809.047.402.146.694.297.88.15.183.38.274.693.274.421 0 .713-.164.868-.491.158-.327.243-.873.257-1.634l2.431.143c.014.108.022.259.022.45 0 1.156-.318 2.022-.95 2.593-.633.572-1.53.859-2.686.859-1.39 0-2.364-.436-2.921-1.308-.56-.873-.838-2.22-.838-4.045v-2.187c0-1.88.29-3.253.868-4.118.579-.866 1.569-1.299 2.973-1.299.966 0 1.71.177 2.227.532.517.355.882.905 1.094 1.656.211.75.317 1.785.317 3.106v2.145h-4.722v.635zm.357-5.903c-.143.176-.237.466-.287.868-.047.402-.07 1.011-.07 1.83v.898h2.062v-.898c0-.805-.028-1.414-.082-1.83-.054-.416-.153-.708-.296-.88-.144-.169-.365-.256-.664-.256-.3.002-.522.092-.663.268z"></path>
                </g>
              </g>
            </svg>
          </svg>
        </span>
      </div>
      <div className="col-span-7 flex  relative">
        <input
          className="px-4 py-1.5 w-[70%] border-[1px] rounded-l-full outline-none border-gray-400"
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border-[1px] px-3 border-l-0 rounded-r-full text-slate-800 bg-[#f2f2f2] border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
            ></path>
          </svg>
        </button>

        {showSuggestion && (
          <ul className="absolute bg-white top-11 rounded-lg shadow-xl border w-[31rem] py-2 font-Inter font-semibold ">
            {suggestion.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-center gap-2 hover:bg-[#e5e5e5]  px-4 py-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
                  ></path>
                </svg>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-2 text-end text-slate-600 ">
        <span className="float-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.217 19.332A6.982 6.982 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
            ></path>
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
