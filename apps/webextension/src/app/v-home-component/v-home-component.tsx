import { CssSyntaxError } from 'postcss';
import styles from './v-sidebar-component.module.css';
import React, { useState } from 'react';

import VSidebarComponent from '../v-sidebar-component/v-sidebar-component';

/* eslint-disable-next-line */
export interface VHomeComponentProps {}

export function VHomeComponent(props: VHomeComponentProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleClose = (e: any) => {
    console.log('close', sidebarIsOpen);
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <div>
      <div className="w-full bg-gray-50 pt-6 pl-3 shadow-lg">
        {sidebarIsOpen ? (
          <div>
            {/* close button */}
            <div>
              <button
                type="button"
                className="bg-white flex rounded-md border-2 rounded border-gray-500 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 "
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

              <VSidebarComponent />
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

export default VHomeComponent;
