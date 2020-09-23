import React, { useState, useEffect } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from "./Player";

let guessedLetters;
let setGuessedLetters = (arr)=> {
	guessedLetters = arr;
};

let stage;
let setStage = (num)=> {
	stage = num;
};

let setMessageAndContext = (x)=> {

};

let error;
let mysteryWord;

window.alert = ()=> {};

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
		expect(screen.queryByText("a")).toBeInTheDocument();
		expect(screen.queryByText("b")).toBeInTheDocument();
		expect(screen.queryByText("c")).toBeInTheDocument();
		expect(screen.queryByText("d")).toBeInTheDocument();
		expect(screen.queryByText("e")).toBeInTheDocument();
		expect(screen.queryByText("f")).toBeInTheDocument();
		expect(screen.queryByText("g")).toBeInTheDocument();
		expect(screen.queryByText("h")).toBeInTheDocument();
		expect(screen.queryByText("i")).toBeInTheDocument();
		expect(screen.queryByText("j")).toBeInTheDocument();
		expect(screen.queryByText("k")).toBeInTheDocument();
		expect(screen.queryByText("l")).toBeInTheDocument();
		expect(screen.queryByText("m")).toBeInTheDocument();
		expect(screen.queryByText("n")).toBeInTheDocument();
		expect(screen.queryByText("o")).toBeInTheDocument();
		expect(screen.queryByText("p")).toBeInTheDocument();
		expect(screen.queryByText("q")).toBeInTheDocument();
		expect(screen.queryByText("r")).toBeInTheDocument();
		expect(screen.queryByText("s")).toBeInTheDocument();
		expect(screen.queryByText("t")).toBeInTheDocument();
		expect(screen.queryByText("u")).toBeInTheDocument();
		expect(screen.queryByText("v")).toBeInTheDocument();
		expect(screen.queryByText("w")).toBeInTheDocument();
		expect(screen.queryByText("x")).toBeInTheDocument();
		expect(screen.queryByText("y")).toBeInTheDocument();
		expect(screen.queryByText("z")).toBeInTheDocument();
	});

	it("should not react to button clicks if error", () => {
		error = new Error("");
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

		userEvent.click(screen.getByText("Begin"));
		expect(screen.queryByText("Begin")).toBeInTheDocument();
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
	    		
		userEvent.type(screen.getByTestId("txtGuessWord"), "xyz123-abc");

		expect(screen.getByTestId("txtGuessWord").value).toBe("xyzabc");
	});

	it("should end game if guessed word is correct", () => {
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
	    		
		userEvent.type(screen.getByTestId("txtGuessWord"), "evergreen");
		userEvent.click(screen.getByText("Confirm"));

		expect(stage).toBe(-1);
	});

	it("should increment stage if guessed word is incorrect", () => {
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
	    		
		userEvent.type(screen.getByTestId("txtGuessWord"), "notevergreen");
		userEvent.click(screen.getByText("Confirm"));

		expect(stage).toBe(4);
	});

	it("should handle if guessed letter is correct", () => {
		error = undefined;
		mysteryWord = "evergreen";
		guessedLetters = [];
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
	    		
		userEvent.click(screen.getByTestId("btnLetter_e"));
		
		expect(stage).toBe(3);
		expect(guessedLetters.length).toBe(1);
	});

	it("should handle if guessed letter is incorrect", () => {
		error = undefined;
		mysteryWord = "evergreen";
		guessedLetters = [];
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
	    		
		userEvent.click(screen.getByTestId("btnLetter_y"));

		expect(stage).toBe(4);
		expect(guessedLetters.length).toBe(0);
	});

	it("should handle if guessed letters win the game", () => {
		error = undefined;
		mysteryWord = "evergreen";
		guessedLetters = [];
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
	    		
		userEvent.click(screen.getByTestId("btnLetter_e"));
		userEvent.click(screen.getByTestId("btnLetter_v"));
		userEvent.click(screen.getByTestId("btnLetter_r"));
		userEvent.click(screen.getByTestId("btnLetter_g"));
		userEvent.click(screen.getByTestId("btnLetter_n"));
		
		expect(stage).toBe(-1);
	});
});