
interface ButtonGroupProps {
    activeButton: string | undefined;
    handleButtonClick: (button: string, data?: []) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ activeButton, handleButtonClick }) => {
    return (
        <div className="flex mx-1 md:mx-10 mt-2 mb-4 rounded-md bg-gray-100 relative tabs">
            <button
                className={`tabs-item relative z-10 py-1 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none ${activeButton === "matrix" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("matrix",);
                }}
            >
                Fetch Data 1
            </button>

            <button
                className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${activeButton === "reloaded" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("reloaded");
                }}
            >
                Fetch Data 2
            </button>
            <button
                className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${activeButton === "revolutions" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("revolutions");
                }}
            >
                Fetch Data 3
            </button>

            <span
                className={`tab-item-animate rounded-md bg-white ${activeButton === "matrix"
                    ? "transform translate-x-0"
                    : activeButton === "reloaded"
                        ? "transform translate-x-full"
                        : "transform translate-x-2/3"
                    }`}
            ></span>
        </div>
    );
}

