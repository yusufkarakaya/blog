import React from "react";

function Admin() {
  this.state = {
    title: "",
    description: "",
  };

  const titleHandle = (event) => {};

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
      <section className="w-2/6	">
        <h1 className="text-2xl mb-2">Add new blog post</h1>
        <h2 className="mb-2">Title</h2>
        <input
          type="text"
          className="w-full	 mb-2 form-control block px-3 py-1.5text-basefont-normaltext-gray-700
          bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="title here"
        />
        <textarea
          className="mb-2 w-full	form-control block px-3 py-1.5text-basefont-normaltext-gray-700
        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Your message"
        ></textarea>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
          Submit
        </button>
      </section>
    </section>
  );
}

export default Admin;
