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

const duration = [
  { key: '120', value: '2 h' },
  { key: '60', value: '1 h' },
  { key: '30', value: '30 min' },
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
  const [form, setForm] = useState<VFormComponentProps>();

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
    console.log('placeholderAvailabilities', e.target.value);
  };

  return (
    <div>
      <div className="flex items-top min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto bg-gray-50 p-5 ">
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
                    {/*duration drop-down options */}
                    {duration.map((i) => {
                      return <option value={i.key}>{i.value}</option>;
                    })}
                  </select>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Event types
                    </label>

                    {/* tooltip on top-right */}
                    <div className="relative ">
                      <div className="group cursor-pointer relative inline-block  text-center">
                        <button
                          data-tooltip-target="tooltip-right"
                          data-tooltip-placement="right"
                          type="button"
                          className="mb-2 ml-2 md:mb-0 text-white bg-blue-500 hover:bg-blue-800 focus:ring-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0,5 text-center"
                        >
                          i
                        </button>

                        <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml--24 px-3 pointer-events-none">
                          Event types information
                          <svg
                            className="absolute text-black h-2 w-full -left-4 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                          >
                            <polygon
                              className="fill-current"
                              points="0,0 127.5,127.5 255,0"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <select
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    name="eventType"
                    id="eventType"
                    onChange={handleSelectEventTypeValue}
                  >
                    {/* slots drop-down options */}
                    {eventType.map((i) => {
                      return <option value={i.key}>{i.value}</option>;
                    })}
                  </select>
                </div>

                <div className="mb-6">
                  <div className="flex direction-row ">
                    <div className="flex justify-start ">
                      <label className="text-sm text-gray-600 dark:text-gray-400 ">
                        Save placeholders
                      </label>
                    </div>

                    {/* checkbox */}
                    <label className="flex justify-end">
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
                  </div>
                  {/* placeholder input*/}
                  <input
                    type="text"
                    name="placeholderName"
                    id="placeholderName"
                    placeholder="Placeholder name"
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
