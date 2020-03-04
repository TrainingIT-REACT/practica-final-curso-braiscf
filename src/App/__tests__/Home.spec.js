import React from "react";
import { mount } from "enzyme";
import store from "../../store";

// Componente
import App from "../App";
import Home from "../../components/home";
import { Provider } from "react-redux";

describe(Home.WrappedComponent, () => {
  it("should fetch the songs", done => {
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const id = 1;
    const name = "Take On Me";
    const seconds = 203;
    const isLoading = false;
    const error = false;

    const fetchMock = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => {
          isLoading, error, [{ id, name, seconds }];
        }
      })
    );

    // Modificamos la función fetch!
    global.fetch = fetchMock;

    expect(fetchMock).toHaveBeenCalled();

    const titleInput = wrapper.find("#title");

    // Fuerza a que se resuelvan todas las promesas. Aunque una promesa esté
    // resuelta, eso no quiere decir que se resuelva de manera síncrona.
    // setImmediate es un pequeño truco para forzar esa sincronía y poder
    // comprobar el resultado correctamente
    setImmediate(() => {
      expect(wrapper.state().response).toContain(id);
      done();
    });
  });
});
