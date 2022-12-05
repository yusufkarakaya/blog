import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Admin() {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitPost = () => {
    fetch("http://localhost:3001/admin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        created_on: new Date(),
      }),
    })
      .then((response) => response.json())
      .then((post) => {
        console.log(post);
      });
  };

  const titleHandle = (event) => {
    setTitle(event.target.value);
  };

  const descriptionHandle = (content) => {
    console.log(content);
    setDescription(content);
  };

  return (
    <section className="mt-36">
      <div className="flex justify-between">
        <header>
          <h1 className="text-3xl">Admin Panel</h1>
        </header>
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
          onChange={titleHandle}
          type="text"
          className="w-full	 mb-2 form-control block px-3 py-1.5text-basefont-normaltext-gray-700
          bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="title here"
        />
        <Editor
          onEditorChange={descriptionHandle}
          apiKey="process.env.REACT_EDITOR_API_KEY"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button
          onClick={submitPost}
          className="mb-10 mt-10bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
        >
          Submit
        </button>
      </section>
    </section>
  );
}

export default Admin;
