import React from "react";
import { render, screen } from "@testing-library/react";
import HangedMan from "./HangedMan";

let stage;

describe("HangedMan", () => {
	it("should render with no hanged man parts according to stage 0", () => {
		stage = 0;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);		
	});

	it("should render with only head according to stage 1", () => {
		stage = 1;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);		
	});

	it("should render with only head and left arm according to stage 2", () => {
		stage = 2;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);		
	});

	it("should render with only head, left arm and right arm according to stage 3", () => {
		stage = 3;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);		
	});	

	it("should render with only head, left arm, right arm and torso according to stage 4", () => {
		stage = 4;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);				
	});	

	it("should render with only head, left arm, right arm, torso and left leg according to stage 5", () => {
		stage = 5;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(true);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(true);		
	});

	it("should render with full hanged man and game over text according to stage 6", () => {
		stage = 6;

	    render(
	        <HangedMan 
	            stage={ stage } 
	        />
	    );

		expect(screen.queryByTestId("hangedMan_head").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightArm").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_torso").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_leftLeg").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("hangedMan_rightLeg").classList.contains("hidden")).toBe(false);
		expect(screen.queryByTestId("txtGameOver").classList.contains("hidden")).toBe(false);
	});
});