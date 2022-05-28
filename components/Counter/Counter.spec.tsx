import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./index";

describe("Counter", () => {
  describe("Inicializado com defaultCount=10 e description=Contador ", () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="Contador" />);
    });

    test('renderiza "Contagem Atual: 10', () => {
      expect(screen.getByText("Contagem Atual: 10")).toBeInTheDocument();
    });

    test("renderiza o titulo Contador", () => {
      expect(screen.getByText(/Contador/i)).toBeInTheDocument();
    });
  });

  describe('Quando o incrementador mudar para 6 e o botão "+" é clicado', () => {
    beforeEach(() => {
      user.type(screen.getByLabelText(/Incrementador/), "{selectall}6");
      user.click(screen.getByRole("button", { name: "Soma" }));
    });

    test("Renderiza Contagem Atual: 10", () => {
      expect(screen.getByText("Contagem Atual: 10")).toBeInTheDocument();
    });
  });
});

test("defaultCount=0, and + clicked then counter = 1", () => {});
