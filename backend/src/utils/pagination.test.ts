import { describe, expect, it } from "vitest";
import { paginate } from "./pagination.js";

describe("paginate", () => {
  it("usa os valores padrao quando nenhum argumento e enviado", () => {
    expect(paginate()).toEqual({ limit: 20, offset: 0 });
  });

  it("calcula offset com base na pagina e no pageSize", () => {
    expect(paginate(3, 15)).toEqual({ limit: 15, offset: 30 });
  });
});
