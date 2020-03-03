import { createAsyncAction } from "redux-promise-middleware-actions";

export const getSongs = createAsyncAction("SONGS", async () => {
  const res = await fetch("/songs");
  return await res.json();
});
