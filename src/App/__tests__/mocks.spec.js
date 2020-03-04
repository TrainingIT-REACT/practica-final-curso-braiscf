describe("Mocks", () => {
  it("should work", () => {
    const increment = jest.fn(x => x + 1);
    const arr = [1, 2];

    arr.forEach(increment);

    expect(increment).toHaveBeenCalled();
    expect(increment).toHaveBeenCalledTimes(2);

    expect(increment).toBeCalledWith(1, 0, arr);
    expect(increment).toBeCalledWith(2, 1, arr);

    expect(increment.mock.results[0].value).toBe(2);
    expect(increment.mock.results[1].value).toBe(3);
  });

  if (
    ("should return values",
    () => {
      const mock = jest.fn();
      mock.mockReturnValue("hola");
      mock.mockReturnValue("que tal?");
      mock.mockReturnValue("adios");
      expect(mock()).toBe("Hola");
      expect(mock()).toBe("que tal?");
      expect(mock()).toBe("adios");
      expect(mock()).toBe("adios");
    })
  );
});
