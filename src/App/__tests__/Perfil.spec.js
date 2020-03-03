import React from "react";
import { shallow } from "enzyme";
import Perfil from "../../components/perfil";

describe(Perfil.WrappedComponent, () => {
  describe("shallow", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach
    beforeEach(() => {
      wrapper = shallow(<Perfil.WrappedComponent />);
    });

    it("should add the HTML elements", () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.is("div")).toBeTruthy();
    });
  });
});
