describe("Froms", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:5000");
  });
  it("Should display the title", async () => {
    await expect(page).toMatchElement("#title", {
      text: "Música Recomendada:"
    });
  });
});
