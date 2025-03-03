import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homePage/HomePage.jsx";
import ListPage from "./routes/ListPage/ListPage.jsx";
import ProfilePage from "./routes/ProfilePage/ProfilePage.jsx";
import Register from "./routes/Register/Register.jsx";
import { Layout, RequireAuth } from "./routes/Layout/Layout.jsx";
import Login from "./routes/Login/Login.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
import About from "./routes/AboutPage/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./routes/NewPostPage/NewPostPage.jsx";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "list", element: <ListPage />, loader: listPageLoader },
      { path: ":id", element: <SinglePage />, loader: singlePageLoader },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <h1>Not Found</h1> },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      { path: "profile", element: <ProfilePage />, loader: profilePageLoader },
      { path: "profile/update", element: <ProfileUpdatePage /> },
      { path: "profile/newPost", element: <NewPostPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
