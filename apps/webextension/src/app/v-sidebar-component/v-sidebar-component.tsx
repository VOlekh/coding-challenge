import './v-sidebar-component.module.css';

/* eslint-disable-next-line */
export interface VSidebarComponentProps {}

export function VSidebarComponent(props: VSidebarComponentProps) {
  return (
    <div>
      {/* <h1>Welcome to VSidebarComponent!</h1> */}

      <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            {/* close button */}
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-4 focus:ring-blue-300"
            >
              <span className="sr-only">Close</span>
              {/* <!-- Heroicon name: outline/x --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="m-7">
              <form id="form">
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Duration
                  </label>

                  <select
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    name="duration"
                    id="duration"
                  >
                    <option value="30min">30 min</option>
                    <option value="45min">45 min</option>
                    <option value="60min">60 min</option>
                  </select>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Event types
                    </label>

                    {/* Show tooltip on right */}
                    <button
                      data-tooltip-target="tooltip-right"
                      data-tooltip-placement="right"
                      type="button"
                      className="mb-2 ml-3 md:mb-0 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0,5 text-center"
                    >
                      i
                    </button>
                    <div
                      id="tooltip-right"
                      role="tooltip"
                      className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 invisible"
                      data-popper-reference-hidden=""
                      data-popper-escaped=""
                      data-popper-placement="right"
                      // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(1162px, 1620px, 0px);"
                    >
                      Information about event types on right
                      <div
                        className="tooltip-arrow"
                        data-popper-arrow=""
                        // style="position: absolute; top: 0px; transform: translate3d(0px, 28px, 0px);"
                      ></div>
                    </div>
                  </div>
                  <select
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    name="eventType"
                    id="eventType"
                  >
                    <option value="share">Share slots</option>
                    <option value="discard">Discard slots</option>
                    <option value="duplicate">Duplicate slots</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Save placeholders
                  </label>

                  {/* checkbox */}
                  <input
                    className="m-6 focus:ring-4 focus:ring-blue-300 "
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked
                  />

                  <input
                    type="text"
                    name="placeholderName"
                    id="placeholderName"
                    placeholder="Type placeholder name here"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="availibilities"
                    id="availibilities"
                    placeholder="Start selecting availibilities you would like to share on the calendar"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    Copy to clipboard
                  </button>
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VSidebarComponent;
