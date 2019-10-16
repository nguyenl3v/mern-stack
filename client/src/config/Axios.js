export const API =
  process.env.NODE_ENV === "production"
    ? "https://shielded-beyond-24124.herokuapp.com"
    : "http://localhost:4000";
