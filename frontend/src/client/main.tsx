import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "../components/Home";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Roadmap from "../components/Roadmap";
import AuthCallback from "../components/AuthCallback";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";

const stripePromise = loadStripe(
  "pk_test_51PaKuvAI0MKbyJD7u71JRTJatC7yPo2BoCJZ1huuDaLqb0jmvq6MBnDPo7O6TPGblOXCsmuDWu0hqu58qnnlh1QJ00qprCtom2"
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Redirect / to /login */}
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile" element={<Profile />} />

      <Route path="/auth/callback" element={<AuthCallback />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <RouterProvider router={router} />
    </Elements>
  </React.StrictMode>
);
