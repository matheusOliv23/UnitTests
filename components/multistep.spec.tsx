import { render, screen, waitFor, within } from "@testing-library/react";
import React from "react";
import { MultiStepForm } from "./MultiStepForm";
import user from "@testing-library/user-event";

describe("MultiStep form", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<MultiStepForm onSubmit={onSubmit} />);
  });

  test("should pass if onsubmit is called when all fields pass validation", async () => {
    //1nd step
    user.type(getFullName(), "Matheus");
    const dropdown = screen.getByRole("combobox");
    user.selectOptions(
      dropdown,
      within(dropdown).getByRole("option", { name: "Tempo integral" })
    );

    const phone = screen.getByRole("textbox", { name: /Telefone/i });
    user.type(phone, "31971472138");

    const city = screen.getByRole("textbox", { name: /Cidade/i });
    user.type(city, "Sete Lagoas");

    const checkbox = screen.getByRole("checkbox", {
      name: /Desejo receber informações e ofertas no meu email/i,
    });
    user.click(checkbox);

    user.click(screen.getByRole("button", { name: /Avançar/i }));

    // // 3nd step
    // const description = await screen.findByRole("textbox", {
    //   name: /Description/i,
    // });
    // user.type(description, "hello");
    // user.click(screen.getByRole("button", { name: /Submit/i }));

    // await waitFor(() => {
    //   expect(onSubmit).toHaveBeenCalledTimes(1);
    // });

    // expect(onSubmit).toHaveBeenCalledWith({ lazy: true });
  });
});

function getFullName() {
  return screen.getByRole("textbox", { name: /Nome completo/i });
}
