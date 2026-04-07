import React from "react";
window.React = React;
import { createRoot } from "react-dom/client";
import SearchApp from "./components/SearchApp/SearchApp";
import DashboardApp from "./components/DashboardApp/DashboardApp";
import "../assets/stylesheets/application.tailwind.css";
import "./i18n/config";

document.addEventListener("DOMContentLoaded", () => {
  const searchEl = document.getElementById("search-app");
  if (searchEl) createRoot(searchEl).render(<SearchApp />);

  const dashboardEl = document.getElementById("dashboard-app");
  if (dashboardEl) createRoot(dashboardEl).render(<DashboardApp />);
});
