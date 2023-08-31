import React from 'react';
import { ButtonGroupProps, ButtonProps } from '../../interface';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ activeButton, handleButtonClick }) => {
    return (
        <div className="flex mx-1 md:mx-10 mt-2 mb-4 rounded-md bg-gray-100 relative tabs overflow-x-scroll">
            <Button
                buttonLabel="Matrix"
                isActive={activeButton === "matrix"}
                onClick={() => handleButtonClick("matrix")}
            />

            <Button
                buttonLabel="Reloaded"
                isActive={activeButton === "reloaded"}
                onClick={() => handleButtonClick("reloaded")}
            />

            <Button
                buttonLabel="Revolutions"
                isActive={activeButton === "revolutions"}
                onClick={() => handleButtonClick("revolutions")}
            />

            <Button
                buttonLabel="allMovies"
                isActive={activeButton === "allMovies"}
                onClick={() => handleButtonClick("allMovies")}
            />

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
};


const Button: React.FC<ButtonProps> = ({ buttonLabel, isActive, onClick }) => {
    return (
        <button
            className={`tabs-item relative z-10 py-1 my-2 truncate ml-2 text-center rounded-md w-full text-sm cursor-pointer select-none focus:outline-none ${isActive ? "active" : ""}`}
            onClick={onClick}
        >
            {buttonLabel}
        </button>
    );
};