export const API =
  process.env.NODE_ENV === "production"
    ? "https://mern-cms-stack.herokuapp.com"
    : "http://localhost:4000";
