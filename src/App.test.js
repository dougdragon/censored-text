import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders text textarea", () => {
    const textInputElement = screen.getByText(/text input/i);
    expect(textInputElement).toBeInTheDocument();
  });

  test("renders keyword textarea", () => {
    const keywordInputElement = screen.getByText(/keywords and phrases/i);
    expect(keywordInputElement).toBeInTheDocument();
  });

  test("renders submit button", () => {
    const submitButton = screen.getByText(/submit/i);
    expect(submitButton).toBeInTheDocument();
  });

  test("renders reset button", () => {
    const resetButton = screen.getByText(/reset/i);
    expect(resetButton).toBeInTheDocument();
  });
});
