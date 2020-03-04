describe("Froms", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:5000");
  });
  it("Should display the title", async () => {
    await expect(page).toMatchElement("span", { text: "R" });
  });
});
