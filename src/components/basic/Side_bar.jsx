import React from "react";
import { useState } from "react";

function Side_bar() {
  return (
    <div className="w-full h-full flex ">
      <div className="flex w-full">
        <aside
          id="default-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4  overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-8  my-32 ">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span class="ml-3 text-xl">Contact Info</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span class="flex-1 ml-3 text-xl whitespace-nowrap">
                    Password
                  </span>
                  <span class="inline-flex items-center whitespace-nowrap justify-center px-2 ml-3 text-sm font-medium text-white bg-[#f784c0] rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Change Password
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span class="flex-1 ml-3 text-xl whitespace-nowrap">
                    Favourites
                  </span>
                  <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-[#f784c0] rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span class="flex-1 ml-3 text-xl whitespace-nowrap">
                    Personal Events
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 "
                >
                  <span class="flex-1 ml-3 text-xl whitespace-nowrap">
                    Log Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Side_bar;
