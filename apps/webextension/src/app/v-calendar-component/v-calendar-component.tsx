import './v-calendar-component.module.css';
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

/* eslint-disable-next-line */
export interface VCalendarComponentProps {
  availabilities?: Array<string>;
}

// interface Set<availabilityValue> {
//   add(value: availabilityValue): Set<availabilityValue>;
//   has(value: availabilityValue): boolean;
//   delete(value: availabilityValue): boolean;
// }

export function VCalendarComponent(props: VCalendarComponentProps) {
  //duration will come from form component TBD
  const duration = 15;
  // const [availabilitiesValues, setAvailabilities] = useState(new Set());
  const [selectedIntervals, setSelectedIntervals] = useState([]);
  const selectedAvailableIntervals = JSON.stringify(selectedIntervals);

  const [selectedDates, setSelectedDates] = useState<
    DateObject | DateObject[]
  >();
  const selectedAvailableDates = JSON.stringify(selectedDates);
  const textToCopy = `Following dates ${selectedAvailableDates} and time slots ${selectedAvailableIntervals}`

  // const handleSelectAvailabilities = (
  //   e: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const selectedValue = e.target.value;
  //   console.log(selectedValue);
  //   if (!availabilitiesValues.has(selectedValue)) {
  //     availabilitiesValues.add(selectedValue);
  //   } else {
  //     availabilitiesValues.delete(selectedValue);
  //   }
  //   console.log(availabilitiesValues);
  //   setAvailabilities(availabilitiesValues);
  // };

  // generate array of objects for drop-down values based on duration
  function getTimeStops(start: any, end: any) {
    const startTime = moment(start, 'HH:mm');
    const endTime = moment(end, 'HH:mm');
    const duration = 15;

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    const timeStops = [];

    while (startTime <= endTime) {
      const newMoment = moment(startTime).format('HH:mm');
      timeStops.push(newMoment);
      startTime.add(duration, 'minutes');
    }
    return timeStops;
  }

  const timeStops = getTimeStops('08:00', '20:00');
  console.log('timeStops ', timeStops);
  // format array
  const formattedTimeStops = timeStops.map((val, i) => {
    return {
      label: `${val} - ${timeStops[i + 1]}`,
      value: `${val} - ${timeStops[i + 1]}`,
    };
  });
  formattedTimeStops.pop();
  console.log('newTimeStops ', formattedTimeStops);

  return (
    <div>
      <h1>Welcome to VCalendarComponent!</h1>
      {/* 
      <div className="mb-6">
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
          Availabilities
        </label>

        <select
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          name="availabilities"
          id="availabilities"
          multiple={true}
          onChange={(e) => handleSelectAvailabilities(e)}
        >
          {formattedTimeStops.map((i) => {
            return <option value={i.value}>{i.label}</option>;
          })}
        </select>
      </div> */}

      <div>
        <MultiSelect
          //className="w-200 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          options={formattedTimeStops}
          value={selectedIntervals}
          onChange={setSelectedIntervals}
          labelledBy="Selected"
        />
        <h1>Selected intervals</h1>
        <pre>{JSON.stringify(selectedIntervals)}</pre>
      </div>

      <DatePicker
        className="w-200 px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
        format="MM/DD/YYYY"
        value={selectedDates}
        multiple
        plugins={[<DatePanel />]}
        onChange={(dateObject) => dateObject && setSelectedDates(dateObject)}
        // onChange={(dateObject) => {
        //   console.log('dateObject', JSON.stringify(dateObject));
        // }}
      />
      <div className="mb-6 mt-6">
        <textarea
          name="availibilities"
          id="availibilities"
          rows={7}
          placeholder="Start selecting availibilities you would like to share on the calendar"
          className="w-200 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          required
          //onChange={setAvailibilities}
          //value={form?.availabilities}
          value={textToCopy}
        ></textarea>
      </div>
      <button
        className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
        onClick={() =>
          navigator.clipboard.writeText(textToCopy)
        }
      >
        Copy to Clipboard
      </button>
    </div>
  );
}

export default VCalendarComponent;
