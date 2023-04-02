import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from "./context/DataContext";

const router = createBrowserRouter([
  {
    path: "/*",
    element: 
    <DataProvider>
      <App />
    </DataProvider>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
