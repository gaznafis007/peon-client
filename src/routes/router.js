const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
