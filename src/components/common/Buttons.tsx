// ... (previous code)

// Button Group Component
interface ButtonGroupProps {
    activeButton: string | undefined; // Define the type of activeButton prop
    handleButtonClick: (button: string) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ activeButton, handleButtonClick }) => {
    return (
        <div className="flex mx-1 md:mx-10 mt-2 mb-4 rounded-md bg-gray-100 relative tabs">
            <button
                className={`tabs-item relative z-10 py-1 my-2 ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none ${activeButton === "login" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("login");
                }}
            >
                Fetch Data 1
            </button>

            <button
                className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${activeButton === "signup" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("signup");
                }}
            >
                Fetch Data 2
            </button>
            <button
                className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md text-sm cursor-pointer select-none focus:outline-none ${activeButton === "premium" ? "active" : ""
                    }`}
                onClick={() => {
                    handleButtonClick("premium");
                }}
            >
                Fetch Data 3
            </button>

            <span
                className={`tab-item-animate rounded-md bg-white ${activeButton === "login"
                    ? "transform translate-x-0"
                    : activeButton === "signup"
                        ? "transform translate-x-full"
                        : "transform translate-x-2/3"
                    }`}
            ></span>
        </div>
    );
}

