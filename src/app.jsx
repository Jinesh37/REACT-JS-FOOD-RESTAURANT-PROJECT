import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {useState,useEffect} from "react";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/cart";
import UserContext from "./utils/UserContext";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import{Provider} from "react-redux";
import appStore from "./utils/appStore";
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  // Here we bind the user context with local state variable so evrytime state variable update then userContext data update
  const [userInfo, setUserInfo] = useState("");
  // authentication
  useEffect(() => {
    const data = {
      name: "Akshay Saini",
    };
    setUserInfo(data.name);
  }, []);

  return (
    // UserContext.provider the new value of Context data loggedIn loggedInUser
    // Here we putting app inside the UserContext.Provider then it will update everywhere this loggedInuser if we put header or any other component then it will update isloggedInUser only Header
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userInfo,setUserInfo }}>
      <div className="app">
        <Header />
        <Outlet />
        {/*if path =/then we have Body component */}
        {/* if path =/about then we have about component */}
        {/* if path=/contact then we have contact component */}
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
  // {
  //   path:"/about",
  //   element:<About/>
  // },
  // {
  //   path:"/contact",
  //   element:<Contact/>
  // }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// config driven UI:controlling your ui with data how Ui will looks for different location
// Can we do nested provider
// default
{
  /* <UserContext.Provider value={{loggedInUser:userName}}>
  // Akshay saini
<div className="app">
// Elon Musk
    <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
      <Header/>
    </UserContext.Provider>
    <Outlet/>
  </div>
</UserContext.Provider> */
}
