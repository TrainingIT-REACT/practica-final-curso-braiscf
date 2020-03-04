import { createAsyncAction } from "redux-promise-middleware-actions";

export const getSongs = createAsyncAction('SONGS', async () => {
  const res = await fetch("http:localhost:8080/songs");
  return await res.json();
});
