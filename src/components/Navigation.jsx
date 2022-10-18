import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <section className="flex justify-center mt-36">
        <ul className="flex gap-4">
          <NavLink to={"/"}>
            <span className="group transition duration-300">
              about
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </span>
          </NavLink>
          <NavLink to={"/portfolio"}>
            <span className="group transition duration-300">
              portfolio
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </span>
          </NavLink>
          <NavLink to={"/blog"}>
            <span className="group transition duration-300">
              blog
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </span>
          </NavLink>
        </ul>
      </section>
      <section>
        <div className="relative flex py-6 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400">{props.title}</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
      </section>
    </div>
  );
}

export default Navigation;
