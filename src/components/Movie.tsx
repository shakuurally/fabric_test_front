import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { FilterComponent } from "./common/Filter";
import { ButtonGroup } from "./common/Buttons";
import { Movie } from "../interface";
import Loader from "./common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton, setData, setLoading } from "../store/movieSlice";

interface MovieDataState {
  filterTitle: string;
  filterType: string;
}

export const MovieData: React.FC = () => {
  // Initialize the state
  const [state, setState] = useState<MovieDataState>({
    filterTitle: "",
    filterType: "",
  });
  const data = useSelector((state: any) => state.movie);

  const dispatch = useDispatch();
  const fetchData = async (url: string, button: string) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(url);
      const result = await response.json();
      dispatch(setData(result.data || null));
      dispatch(setLoading(false));
      dispatch(setActiveButton(button));

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle button clicks
  const handleButtonClick = (button: string) => {
    let url = "";
    switch (button) {
      case "login":
        url = "https://fabric.up.railway.app/api/movies/fetch-matrix";
        break;
      case "signup":
        url = "https://fabric.up.railway.app/api/movies/fetch-matrix-reloaded";
        break;
      case "premium":
        url = "https://fabric.up.railway.app/api/movies/fetch-matrix-revolutions";
        break;
      default:
        break;
    }

    fetchData(url, button);
  };
  useEffect(() => {
    handleButtonClick("login");
  }, []);

  // Function to filter data
  // Function to filter data
  const filterData = (data: Movie[] | null) => {
    if (!data) return null;

    // Check if either filterTitle or filterType is not empty
    if (state.filterTitle || state.filterType) {
      return data.filter((movie: { title: string; Type: string; }) => {
        return (
          movie.title &&
          movie.Type &&
          movie.title.toLowerCase().includes(state.filterTitle.toLowerCase()) &&
          movie.Type.toLowerCase().includes(state.filterType.toLowerCase())
        );
      });
    } else {
      // If both filterTitle and filterType are empty, return the full data
      return data;
    }
  };


  // Update the filtered data whenever filter inputs change or data source changes
  const filteredData = filterData(state.filterTitle || state.filterType ? data.data : data.data);

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        {/* Filtering Component */}
        <FilterComponent
          filterTitle={state.filterTitle}
          filterType={state.filterType}
          setFilterTitle={(value) => {
            // Update filterTitle using functional update
            setState((prevState) => ({
              ...prevState,
              filterTitle: value
            }));
          }}
          setFilterType={(value) => {
            // Update filterType using functional update
            setState((prevState) => ({
              ...prevState,
              filterType: value
            }));
          }}
        />

        <div className={`relative  mx-auto max-w-6xl bg-white rounded `}>
          <ButtonGroup
            activeButton={data.activeButton}
            handleButtonClick={handleButtonClick}
          />

          <div className="py-8 px-4 sm:px-6 lg:px-8">
            {data.loading ? (
              <Loader />
            ) : filteredData && filteredData.length === 0 ? (
              <p className="items-center flex justify-center h-80">
                No data found.........🙃
              </p>
            ) : (
              <MovieList
                data={filteredData}
                loading={data.loading}
                activeButton={data.activeButton}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};