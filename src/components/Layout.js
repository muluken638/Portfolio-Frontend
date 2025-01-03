import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
     <Header/>

      {/* Main Content */}
      <main className="flex-grow container ">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Muluken Zeleke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
