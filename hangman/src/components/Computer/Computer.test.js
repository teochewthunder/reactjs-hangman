import React from "react";
import { render, screen } from "@testing-library/react";
import Computer from "./Computer";

let guessedLetters;
let mysteryWord;

describe("Computer", () => {
	it("should render with Computer display component when game in progress", () => {
		mysteryWord = "friend";
		guessedLetters = ["i", "e"];

	    render(
	        <Computer 
	            mysteryWord={ mysteryWord } 
	            guessedLetters={ guessedLetters }
	        />
	    );

		expect(screen.queryByText("f")).not.toBeInTheDocument();
		expect(screen.queryByText("r")).not.toBeInTheDocument();
		expect(screen.queryByText("i")).toBeInTheDocument();
		expect(screen.queryByText("e")).toBeInTheDocument();
		expect(screen.queryByText("n")).not.toBeInTheDocument();
		expect(screen.queryByText("d")).not.toBeInTheDocument();
	});
});