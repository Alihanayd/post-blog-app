import Home from "../views/Home/Home";
import SignUp from "../views/Auth/SignUp/SignUp";
import SignIn from "../views/Auth/SignIn/SignIn";
import PostCreate from "../views/Post/PostCreate/PostCreate";
import Post from "../views/Post/Post";
import Auth from "../views/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import React from "react";

export const AppRoutes = [
  {
    path: "/",
    component: <Home />,
    protect: true,
  },
  {
    path: "/post",
    component: <Post />,
    protect: true,
    children: [
      {
        path: "create-post",
        component: <PostCreate />,
        protect: true,
      },
    ],
  },
  {
    path: "/auth",
    component: <Auth />,
    protect: false,
    children: [
      {
        path: "sign-up",
        component: <SignUp />,
        protect: false,
      },
      {
        path: "sign-in",
        component: <SignIn />,
        protect: false,
      },
    ],
  },
];

const AppRouter = () => {
  const renderComponent = (item) => {
    return <>{item.component}</>;
  };
  return (
    <>
      <Routes>
        {AppRoutes.map((route) => {
          return (
            <React.Fragment key={route.path}>
              {route.children ? (
                <>
                  (
                  <Route path={route.path} element={renderComponent(route)}>
                    {route.children.map((subItem) => {
                      return (
                        <Route
                          key={subItem.path}
                          path={subItem.path}
                          element={renderComponent(subItem)}
                        />
                      );
                    })}
                  </Route>
                  )
                </>
              ) : (
                <Route
                  path={route.path}
                  key={route.path}
                  element={renderComponent(route)}
                />
              )}
            </React.Fragment>
          );
        })}
      </Routes>
    </>
  );
};

export default AppRouter;
