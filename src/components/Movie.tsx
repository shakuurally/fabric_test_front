import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { FilterComponent } from "./common/Filter";
import { ButtonGroup } from "./common/Buttons";
import { Movie } from "../interface";
import Loader from "./common/Grid";

// Define types for the component's state
interface MovieDataState {
  data: Array<Movie> | null;
  loading: boolean;
  activeButton?: string;
  filterTitle: string;
  filterType: string;
}

export const MovieData: React.FC = () => {
  // Initialize the state
  const [state, setState] = useState<MovieDataState>({
    data: null,
    loading: false,
    activeButton: "login",
    filterTitle: "",
    filterType: "",
  });

  // Function to fetch data
  const fetchData = async (url: string, button: string) => {
    try {
      setState({ ...state, loading: true });
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.data);
      setState({ ...state, data: result.data || null, loading: false, activeButton: button });
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({ ...state, loading: false });
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

  // Fetch data on component mount
  useEffect(() => {
    handleButtonClick("login");
  }, []);

  // Function to filter data
  const filterData = (data: Movie[] | null) => {
    if (!data) return null;

    return data.filter((movie) => {
      return (
        movie.title &&
        movie.Type &&
        movie.title.toLowerCase().includes(state.filterTitle.toLowerCase()) &&
        movie.Type.toLowerCase().includes(state.filterType.toLowerCase())
      );
    });
  };

  // Update the filtered data whenever filter inputs change or data source changes
  const filteredData = filterData(state.data);

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        {/* Filtering Component */}
        <FilterComponent
          filterTitle={state.filterTitle}
          filterType={state.filterType}
          setFilterTitle={(value) =>
            setState({ ...state, filterTitle: value })
          }
          setFilterType={(value) =>
            setState({ ...state, filterType: value })
          }
        />

        <div className={`relative  mx-auto max-w-6xl bg-white rounded `}>
          <ButtonGroup
            activeButton={state.activeButton}
            handleButtonClick={handleButtonClick}
          />

          <div className="py-8 px-4 sm:px-6 lg:px-8">
            {state.loading ? (
              <Loader />
            ) : filteredData && filteredData.length === 0 ? (
              <p className="items-center flex justify-center h-80">
                No data found.........🙃
              </p>
            ) : (
              <MovieList
                data={filteredData}
                loading={state.loading}
                activeButton={state.activeButton}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ... (rest of your code)
