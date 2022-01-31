import { CssSyntaxError } from 'postcss';
import styles from './v-sidebar-component.module.css';
import React, { useState } from 'react';

import VFormComponent from '../v-form-component/v-form-component';

/* eslint-disable-next-line */
export interface VSidebarComponentProps {}

export function VSidebarComponent(props: VSidebarComponentProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleClose = (e: any) => {
    console.log('close', sidebarIsOpen);
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <div>
      {/* <!-- component -->
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-10/12 bg-white  p-0 shadow-lg">
          <VFormComponent />
        </div>
        <div className="w-9/12">
          <div className="p-4 text-gray-500">Content here...</div>
        </div>
      </div> */}

      {/* <!-- component --> */}
      <div>
        {sidebarIsOpen ? (
          <div>
            {/* close button */}
            <div className="flex ">
              <button
                type="button"
                className="bg-white rounded-md border-2 rounded border-gray-500 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-10/12 bg-white  p-0 shadow-lg">
                <VFormComponent />
              </div>
            </div>
          </div>
        ) : (
          <main className="flex flex-col items-center justify-center flex-1">
            {/* <!-- Page content --> */}
            {/* <!-- Hamburger button --> */}
            <button
              onClick={() => {
                setSidebarIsOpen(!sidebarIsOpen);
              }}
              className="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">Open menu</span>
            </button>
          </main>
        )}
      </div>
    </div>
  );
}

export default VSidebarComponent;
