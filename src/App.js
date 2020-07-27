import React from "react";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <img src={logo} alt="react-tailwind"></img>
        <div>
          <h1 className="mt-4 text-3xl">
            React + Tailwind 😍 Starter Template{" "}
          </h1>
          <p>
            Tailwind CSS is a highly customizable, low-level CSS framework that
            gives you all of the building blocks you need to build bespoke
            designs without any annoying opinionated styles you have to fight to
            override.
          </p>
          <p className="font-bold mt-4 mb-10">
            Skip the configration part and straight for development!
          </p>
          <a target="_blank" href="https://tailwindcss.com/docs/installation" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tailwind Documentation
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
