import MovieList from "./MovieList";
import { FilterComponent } from "../common/Filter";
import { ButtonGroup } from "../common/Buttons";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setFilterTitle, setFilterType } from "../../store/movieSlice";
import { ButtonClickFetch, filterData } from "../../Service";
import { useEffect } from "react";


export const MovieData: React.FC = () => {
  const data = useSelector((state: any) => state.movie);
  const dispatch = useDispatch();

  const handleButtonClick = (button: string) => {
    ButtonClickFetch(button, dispatch);
  };
  useEffect(() => {
    handleButtonClick('matrix');
  }, []);

  const filteredData = filterData(data.data, data.filterTitle, data.filterType);

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        {/* Filtering Component */}
        <FilterComponent
          filterTitle={data.filterTitle}
          filterType={data.filterType}
          setFilterTitle={(value) => dispatch(setFilterTitle(value))}
          setFilterType={(value) => dispatch(setFilterType(value))}
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