// src/components/ButtonGroup.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonGroup from "./Buttons";

test("ButtonGroup renders correctly", () => {
  const handleButtonClick = jest.fn();
  const { getByText } = render(
    <ButtonGroup activeButton="matrix" handleButtonClick={handleButtonClick} />
  );

  // Check if the buttons are rendered
  expect(getByText("Matrix")).toBeInTheDocument();
  expect(getByText("Reloaded")).toBeInTheDocument();
  expect(getByText("Revolutions")).toBeInTheDocument();
  expect(getByText("allMovies")).toBeInTheDocument();

  // Simulate a button click
  fireEvent.click(getByText("Reloaded"));

  // Ensure that handleButtonClick was called with the correct argument
  expect(handleButtonClick).toHaveBeenCalledWith("reloaded");
});
