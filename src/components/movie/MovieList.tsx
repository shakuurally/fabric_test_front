import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { MovieListProps } from "../../interface";
import { VideoOff } from "lucide-react";



const MovieList: React.FC<MovieListProps> = ({ data, loading }) => {
  console.log(data)
  const controls = useAnimation();

  useEffect(() => {
    if (!loading) {
      controls.start({ opacity: 1 });
    }
  }, [loading, data, controls]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {loading ? (
        <div className="w-full text-center">
          <p>Loading...</p>
        </div>
      ) : data ? (
        data.map((movie, index) => (
          <motion.div
            key={movie.imdbID}
            initial={{ opacity: 0, y: 20 }}
            animate={controls} // Pass the controls to the animate prop
            transition={animationVariants}
            className="relative mx-auto w-full"
          >
            <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full" key={movie.imdbID}>
              <div className="shadow p-4 rounded-lg bg-white">
                <div className="flex justify-center relative rounded-lg overflow-hidden h-56">
                  <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                    <div className="absolute inset-0 bg-black hover:opacity-80 opacity-100">
                      <img src={movie.posterID?.posterURL} alt="" />
                    </div>
                  </div>
                  {
                    movie.year === '2003' && (
                      <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                        Hot
                      </span>
                    )
                  }

                </div>

                <div className="mt-4">
                  <h2
                    className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                    title="New York"
                  >
                    {movie.title}
                  </h2>
                </div>
                <div className="grid grid-cols-2 mt-8">
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">

                    <VideoOff className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                    />
                    <span className="mt-2 xl:mt-0">{movie.Type}</span>
                  </p>

                  <div className="flex justify-end">
                    <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                      <span className="text-lg">{movie.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="w-full text-center">
          <p>No data found...</p>
        </div>
      )}
    </div>
  );
};

const animationVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default MovieList;
