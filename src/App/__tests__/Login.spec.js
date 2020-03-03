import React from "react";
import { render } from "enzyme";
import Login from "../../components/login";

describe(Login, () => {
  describe("render", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach
    beforeEach(() => {
      wrapper = render(<Login />);
    });

    it("should add the HTML elements", () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.is("div")).toBeTruthy();
      expect(wrapper.find("label").length).toBe(0);
      expect(wrapper.find('input[type="text"]').length).toBe(1);
      expect(wrapper.find("button").length).toBe(1);
    });
  });
});
