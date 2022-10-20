import React from "react";

function PortfolioCard(props) {
  return (
    <div>
      <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          {props.description}
        </p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href={props.link}
            target="_blank"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              aria-hidden="true"
              class="octicon octicon-mark-github"
              height="24"
              version="1.1"
              viewBox="0 0 16 16"
              width="24"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <div class="text-left">
              <div class="-mt-1 ml-1 font-sans text-sm font-semibold">
                Github Repo
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
