import { Movie } from "../interface";
import { setActiveButton, setData, setLoading } from "../store/movieSlice";
export const filterData = (data: Movie[], filterTitle: string, filterType: string) => {
    if (!data) return null;
    if (filterTitle || filterType) {
        return data.filter((movie: Movie) => {
            return (
                (!filterTitle || movie.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
                (!filterType || movie.Type.toLowerCase().includes(filterType.toLowerCase()))
            );
        });
    } else {
        return data;
    }
};
export const ButtonClickFetch = async (button: string, dispatch: any) => {
    try {
        const apiEndpoints: { [key: string]: string } = {
            matrix: "/fetch-matrix",
            reloaded: "/fetch-matrix-reloaded",
            revolutions: "/fetch-matrix-revolutions",
            allMovies: "/fetch-all",
        };

        const apiUrlRoot = process.env.REACT_APP_API_URL_ROOT;

        dispatch(setActiveButton(button));
        dispatch(setLoading(true));

        const response = await fetch(apiUrlRoot + apiEndpoints[button]);

        const result = await response.json();
        console.log(result)
        dispatch(setData(result.data || null));
        dispatch(setLoading(false));

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};