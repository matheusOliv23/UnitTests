import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import SignInSide, { validateInput } from "../components/SignInSide";

describe("Login", () => {
  test("Login form should be in the document", () => {
    const component = render(<Home />);
    const inputNode = component.getByText("Email");
    expect(inputNode).toBeInTheDocument();
  });
  test("Email field should have label", () => {
    const component = render(<SignInSide />);
    const emailLabel = component.getByTestId("account-email");
    expect(emailLabel.getAttribute("name")).toBe("email");
  });
  test("Validate function should pass on correct input", () => {
    render(<SignInSide />);
    const text = "text@test.com";
    expect(validateInput(text)).toBe(true);
  });
  test("Validate function should fail on incorrect input", () => {
    render(<SignInSide />);
    const text = "text";
    expect(validateInput(text)).not.toBe(true);
  });
});
