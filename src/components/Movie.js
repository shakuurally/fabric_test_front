import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { Search } from "lucide-react";
import Grid from "./Loaders/Grid";
import { motion } from "framer-motion";

const MovieData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("login");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterType, setFilterType] = useState("");

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setData(result.Search || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleButtonClick = (button) => {
    if (button === "login") {
      fetchData("http://www.omdbapi.com/?s=Matrix&apikey=720c3666");
    } else if (button === "signup") {
      fetchData("http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666");
    } else if (button === "premium") {
      fetchData(
        "http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666"
      );
    }
    setActiveButton(button);
  };

  useEffect(() => {
    handleButtonClick("login");
  }, []);

  const filteredData = data.filter((movie) => {
    return (
      movie.Title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.Type.toLowerCase().includes(filterType.toLowerCase())
    );
  });

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 ">
        <div className="flex flex-col space-y-4 py-10">
          <div className="group relative flex focus:outline-none">
            <Search className="absolute inset-y-0 left-4 z-10 my-auto h-4 w-4 text-gray-500" />
            <input
              className="w-full rounded-xl border hover:ring-0 outline-none border-gray-200 bg-white p-3 pl-12 text-left text-gray-500 transition-colors group-active:bg-gray-50"
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
              placeholder="👋 Search Movie name..."
            />

            <span className="absolute inset-y-0 right-4 my-auto h-5 text-sm text-gray-400">
              <motion.div
                initial={{ opacity: 0, y: -10 }} // Initial state (hidden and above)
                animate={{ opacity: 1, y: 0 }} // Animation state (visible and normal position)
                transition={{ duration: 0.3 }} // Animation duration
                className="relative"
              >
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full outline-none bg-transparent text-gray-500"
                >
                  <option value="">Filter by Type</option>
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                  <option value="episode">Episode</option>
                </select>
              </motion.div>
            </span>
          </div>
        </div>
      </div>
      <div className={`relative  mx-auto max-w-6xl bg-white rounded `}>
        <div className="flex mx-1 md:mx-10 mt-2 mb-4 rounded-md bg-gray-100 relative tabs">
          <button
            className={`tabs-item relative z-10 py-1 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none ${
              activeButton === "login" ? "active" : ""
            }`}
            onClick={() => {
              handleButtonClick("login");
            }}
          >
            Fetch Data 1
          </button>

          <button
            className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${
              activeButton === "signup" ? "active" : ""
            }`}
            onClick={() => {
              handleButtonClick("signup");
            }}
          >
            Fetch Data 2
          </button>
          <button
            className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${
              activeButton === "premium" ? "active" : ""
            }`}
            onClick={() => {
              handleButtonClick("premium");
            }}
          >
            Fetch Data 3
          </button>

          <span
            className={`tab-item-animate rounded-md bg-white ${
              activeButton === "login"
                ? "transform translate-x-0"
                : activeButton === "signup"
                ? "transform translate-x-full"
                : "transform translate-x-2/3"
            }`}
          ></span>
        </div>
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          {loading ? (
            <Grid />
          ) : filteredData.length === 0 ? (
            <p className="items-center flex justify-center h-80">
              No data found.........🙃
            </p>
          ) : (
            <MovieList
              data={filteredData}
              loading={loading}
              activeButton={activeButton}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieData;
