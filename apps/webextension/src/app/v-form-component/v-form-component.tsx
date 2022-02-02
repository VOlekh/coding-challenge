import './v-form-component.module.css';
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';


//TBD here and below in code
//TBD proper form logic and user story to be clarifyed "Save placeholder functionality" is unclear
//TBD Refactore code with proper types
//TBD Each child in a list should have a unique "key" prop.
//TBD Refactor with Redux, currently component is too big
export interface VFormComponentProps {
  duration?: Array<string>;
  eventType?: Array<string>;
  savePlaceholders?: boolean;
  placeholderName?: string;
}

const duration = [
  { key: '30', value: '30 min' },
  { key: '60', value: '1 h' },
  { key: '120', value: '2 h' },
];

const eventType = [
  { key: 'Share', value: 'Share slots' },
  { key: 'Discard', value: 'Discard slots' },
  { key: 'Modify', value: 'Modify slots' },
];
//TBD Refactore code with proper types
export function VFormComponent(props: VFormComponentProps) {
  const [durationValue, setDurationValue] = useState(30);
  const [eventTypeValue, setEventTypeValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [placeholderName, setPlaceholderName] = useState('');
  const [form, setForm] = useState<VFormComponentProps>();
  const [selectedIntervals, setSelectedIntervals] = useState([]);
  const [selectedDates, setSelectedDates] = useState<
    DateObject | DateObject[]
  >();

  // ---

  const handleSelectDuration = (e: any) => {
    setDurationValue(e.target.value);
  };

  const handleSelectEventTypeValue = (e: any) => {
    setEventTypeValue(e.target.value);
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  console.log('checked', checked);
  const handlePlaceholderName = (e: any) => {
    setPlaceholderName(e.target.value);
    console.log('placeholderName', placeholderName);
  };

  // const setPlaceholderName = (e: any) => {
  //   setForm({
  //     ...form,
  //     placeholderName: e.target.value,
  //   });
  //   console.log('placeholderName', e.target.value);
  // };

  function parseDates(selectedDates: DateObject | DateObject[] | undefined) {
    const result = Array<string>();

    if (selectedDates === undefined) {
      return result;
    }

    if (Array.isArray(selectedDates)) {
      result.push(
        ...selectedDates.map((dateObject) => dateObject.format('YYYY/MM/DD'))
      );
    } else {
      result.push(selectedDates.format('YYYY/MM/DD'));
    }

    return result;
  }

  function parseIntervals(selectedIntervals: any) {
    return selectedIntervals.map((i: any) => i.value);
  }

  function combineDatesAndIntevals(
    dateStrings: Array<string>,
    intervalStrings: Array<string>
  ) {
    const result = Array<string>();
    if (dateStrings.length === 0 || intervalStrings.length === 0) {
      result.push('Please choose both dates and intervals');
    }
    dateStrings.forEach((dateString) => {
      intervalStrings.forEach((intervalString) =>
        result.push(dateString + ' ' + intervalString)
      );
    });

    return result;
  }

  const parsedDates = parseDates(selectedDates);
  const parsedIntervals = parseIntervals(selectedIntervals);
  const datesAndIntervals = combineDatesAndIntevals(
    parsedDates,
    parsedIntervals
  );
  // const formattedDates = parsedDates.map((i) => {
  //   const result = `- ${i}`;
  //   console.log(result);
  //   return result;
  // });

  //TBD: format data for output
  const textToCopy = ` ${eventTypeValue} ${placeholderName} ${datesAndIntervals} `;

  // generate array of objects for drop-down values based on duration
  function getTimeStops(start: any, end: any, durationValue: any) {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    const timeStops = [];

    while (startTime <= endTime) {
      const newMoment = moment(startTime).format('HH:mm');
      timeStops.push(newMoment);
      startTime.add(durationValue, 'minutes');
    }
    return timeStops;
  }

  const timeStops = getTimeStops('08:00', '20:00', durationValue);
  const formattedTimeStops = timeStops.map((val, i) => {
    return {
      label: `${val} - ${timeStops[i + 1]}`,
      value: `${val} - ${timeStops[i + 1]}`,
    };
  });
  formattedTimeStops.pop();

  return (
    <div>
      <div className="flex items-top min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div>
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
                    onChange={handlePlaceholderName}
                    // onChange={setPlaceholderName}
                    // value={form?.placeholderName}
                  />
                </div>

                {/* date picker*/}
                {/* TBD styles */}

                <div className="w-full">
                  <DatePicker
                    format="MM/DD/YYYY"
                    value={selectedDates}
                    multiple
                    plugins={[<DatePanel />]}
                    onChange={(dateObject) =>
                      dateObject && setSelectedDates(dateObject)
                    }
                    placeholder="Select dates..."
                  />
                </div>

                {/* interval multiselect*/}
                {/* TBD formatting text, conditionally shpow text and scroll to be added*/}
                <div className="mb-6 mt-6 ">
                  <MultiSelect
                    //className="w-200 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    options={formattedTimeStops}
                    value={selectedIntervals}
                    onChange={setSelectedIntervals}
                    labelledBy="Selected"
                    //TBD add placeholderText
                    //placeholderText ="Select intervals..."
                  />
                </div>
                <div className="mb-6 mt-6">
                  <textarea
                    name="availibilities"
                    id="availibilities"
                    rows={7}
                    placeholder="Start selecting availibilities you would like to share on the calendar"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    required
                    value={textToCopy}
                  ></textarea>
                </div>
                <button
                  className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  onClick={() => navigator.clipboard.writeText(textToCopy)}
                >
                  Copy to Clipboard
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VFormComponent;
