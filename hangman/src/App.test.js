import React from "react";
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it('renders', () => {
		render(<App />);
		expect(screen.queryByText('Loading...')).toBeInTheDocument();
	});
});