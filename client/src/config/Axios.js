export const API =
  process.env.NODE_ENV === "production"
    ? "https://server-cms-api.herokuapp.com"
    : "http://localhost:4000";
