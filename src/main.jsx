import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";

import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import router from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "bg-gray-800 text-white rounded-lg shadow-lg",
        }}
      />
    </AuthProvider>
  </StrictMode>
);
