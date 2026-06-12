import React, { useEffect, useState } from "react";

import Calculator from "./components/Calculator";
import PreparationMethod from "./components/PreparationMethod";
import { Route } from "./components/Nav";

import "reset-css";
import "./App.css";

function routeFromHash(hash: string): Route {
  return hash === "#/preparo" ? "preparo" : "home";
}

function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(routeFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => setRoute(routeFromHash(window.location.hash));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();

  return route === "preparo" ? <PreparationMethod /> : <Calculator />;
}
