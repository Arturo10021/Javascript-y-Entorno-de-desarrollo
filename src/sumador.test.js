import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(5, 7)).toEqual(35);
  });
});

