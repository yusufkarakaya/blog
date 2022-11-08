import React, { Component } from "react";

class Admin extends Component {
  render() {
    return (
      <section className="mt-36">
        <div className="flex justify-between">
          <header>
            <h1 className="text-3xl">Admin Panel</h1>
          </header>
          <div className="flex gap-1">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              add blog
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              edit blog
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              delete blog
            </button>
          </div>
        </div>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Control Panel</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </section>
    );
  }
}

export default Admin;
