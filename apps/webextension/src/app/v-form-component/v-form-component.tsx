import './v-form-component.module.css';
import React, { useState } from 'react';

/* eslint-disable-next-line */
export interface VFormComponentProps {
  duration?: Array<string>;
  eventType?: Array<string>;
  savePlaceholders?: boolean;
  placeholderName?: string;
  availabilities?: string;
}
interface IKeyValuePair {
  key: string;
  value: string;
}
const duration = [
  { key: '45', value: '45 min' },
  { key: '30', value: '30 min' },
  { key: '20', value: '20 min' },
];

const eventType = [
  { key: 'share', value: 'Share slots' },
  { key: 'discard', value: 'Discard slots' },
  { key: 'modify', value: 'Modify slots' },
];

export function VFormComponent(props: VFormComponentProps) {
  const [durationValue, setDurationValue] = useState('');
  const [eventTypeValue, setEventTypeValue] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSelectDuration = (e: any) => {
    console.log(e.target.value);
    setDurationValue(e.target.value);
  };

  const handleSelectEventTypeValue = (e: any) => {
    console.log(e.target.value);
    setEventTypeValue(e.target.value);
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  console.log('checked', checked);

  const [form, setForm] = useState<VFormComponentProps>();

  const setPlaceholderName = (e: any) => {
    setForm({
      ...form,
      placeholderName: e.target.value,
    });
    console.log('placeholderName', e.target.value);
  };

  const setAvailibilities = (e: any) => {
    setForm({
      ...form,
      availabilities: e.target.value,
    });
    console.log('placeholderAailabilities', e.target.value);
  };

  return (
    <div>
      {/* <h1>Welcome to VSidebarComponent!</h1> */}

      <div className="flex items-top min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-gray-50 p-5 ">
            {/* close button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white rounded-md border-2 rounded border-gray-500 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-4 focus:ring-blue-300"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

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
                    onChange={handleSelectDuration}
                  >
                    {/* drop-down options */}
                    {duration.map((i) => {
                      return <option value={i.key}>{i.value}</option>;
                    })}

                    {/* <option value="30min">30 min</option>
                    <option value="45min">45 min</option>
                    <option value="60min">60 min</option> */}
                  </select>
                  <p>Selected {durationValue} </p>
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
                      style={{
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: 0,
                        transform: 'translate3d(1162px, 1620px, 0px)',
                      }}
                    >
                      Information about event types on right
                      <div
                        className="tooltip-arrow"
                        data-popper-arrow=""
                        //In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.
                        style={{
                          backgroundColor: 'red',
                          position: 'absolute',
                          top: 0,
                          transform: 'translate3d(0px, 28px, 0px)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <select
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    name="eventType"
                    id="eventType"
                    onChange={handleSelectEventTypeValue}
                  >
                    {/* drop-down options */}
                    {eventType.map((i) => {
                      return <option value={i.key}>{i.value}</option>;
                    })}

                    {/* <option value="share">Share slots</option>
                    <option value="discard">Discard slots</option>
                    <option value="duplicate">Duplicate slots</option> */}
                  </select>
                  <p>Selected {eventTypeValue}</p>
                </div>

                <div className="mb-6">
                  {/* checkbox */}
                  <div className="">
                    <label className="text-sm text-gray-600 dark:text-gray-400 ">
                      Save placeholders
                    </label>
                  </div>

                  <label className="flex justify-end items-start">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Save placeholders
                    </label>
                    <div className="bg-white ml-5 mb-2 border-2 rounded border-gray-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-4 focus:ring-blue-300">
                      <input
                        type="checkbox"
                        className="opacity-0 absolute"
                        onChange={handleChange}
                      />
                      <svg
                        className="fill-current hidden w-4 h-4 text-blue-500 pointer-events-none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                  </label>

                  <input
                    type="text"
                    name="placeholderName"
                    id="placeholderName"
                    placeholder="Type placeholder name here"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={setPlaceholderName}
                    value={form?.placeholderName}
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="availibilities"
                    id="availibilities"
                    rows={7}
                    placeholder="Start selecting availibilities you would like to share on the calendar"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    onChange={setAvailibilities}
                    value={form?.availabilities}
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

export default VFormComponent;
