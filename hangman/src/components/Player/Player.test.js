import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from "./Player";

let guessedLetters;
let setGuessedLetters = (arr)=> {
	guessedLetters = arr;
}

let stage;
let setStage = (num)=> {
	stage = num;
}

let setMessageAndContext = (x) => {

}

let error;
let mysteryWord;

describe("Player", () => {
	it("should render with Begin button when game not started", () => {
		error = undefined;
		mysteryWord = "evergreen";
		setStage(-1);

	    render(
	        <Player 
	            stage={ stage } 
	            setStage={ setStage } 
	            mysteryWord={ mysteryWord } 
	            guessedLetters={ guessedLetters }
	            setGuessedLetters={ setGuessedLetters }
	            setMessageAndContext={ setMessageAndContext }
	            error={ error } 
	        />
	    );

		//expect(screen.queryByText("Select A Letter")).toBeInTheDocument();
		//expect(screen.queryByText("Guess The Word")).toBeInTheDocument();
		expect(screen.queryByText("Begin")).toBeInTheDocument();
	});

	it("should render with Replay button when game over", () => {
		error = undefined;
		mysteryWord = "evergreen";
		setStage(6);

	    render(
	        <Player 
	            stage={ stage } 
	            setStage={ setStage } 
	            mysteryWord={ mysteryWord } 
	            guessedLetters={ guessedLetters }
	            setGuessedLetters={ setGuessedLetters }
	            setMessageAndContext={ setMessageAndContext }
	            error={ error } 
	        />
	    );

		expect(screen.queryByText("Replay")).toBeInTheDocument();
	});

	it("should render with Player dashboard component when game in progress", () => {
		error = undefined;
		mysteryWord = "evergreen";
		setStage(3);

	    render(
	        <Player 
	            stage={ stage } 
	            setStage={ setStage } 
	            mysteryWord={ mysteryWord } 
	            guessedLetters={ guessedLetters }
	            setGuessedLetters={ setGuessedLetters }
	            setMessageAndContext={ setMessageAndContext }
	            error={ error } 
	        />
	    );

		expect(screen.queryByText("Select A Letter")).toBeInTheDocument();
		expect(screen.queryByText("Guess The Word")).toBeInTheDocument();
	});

	it("should only allow letters to be input when guessing word", () => {
		error = undefined;
		mysteryWord = "evergreen";
		setStage(3);

	    render(
	        <Player 
	            stage={ stage } 
	            setStage={ setStage } 
	            mysteryWord={ mysteryWord } 
	            guessedLetters={ guessedLetters }
	            setGuessedLetters={ setGuessedLetters }
	            setMessageAndContext={ setMessageAndContext }
	            error={ error } 
	        />
	    );
	    		
		let txtGuessWord = screen.getByTestId('txtGuessWord');
		userEvent.type(txtGuessWord, "xyz123-abc");

		expect(txtGuessWord.value).toBe("xyzabc");
	});
});