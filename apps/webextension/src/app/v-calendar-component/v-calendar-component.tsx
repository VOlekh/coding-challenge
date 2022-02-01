import './v-calendar-component.module.css';
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';
import DatePicker from 'react-multi-date-picker';
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
  const [selected, setSelected] = useState([]);
  const selectedAvailabilities = JSON.stringify(selected);
  const [value, setValue] = useState(new Date());

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

      <div className="mb-6 w-full">
        <MultiSelect
          //className="w-full py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          options={formattedTimeStops}
          value={selected}
          onChange={setSelected}
          labelledBy="Select availabilities"
        />
        <h1>Selected availabilities</h1>
        <pre>{JSON.stringify(selected)}</pre>
      </div>
      <button
        onClick={() => navigator.clipboard.writeText(selectedAvailabilities)}
      >
        Copy
      </button>

      <DatePicker
        format="MM/DD/YYYY"
        value={value}
        multiple
        plugins={[<DatePanel />]}
        // onChange={setValue}
        onChange={(dateObject) => {
          console.log('dateObject', JSON.stringify(dateObject));
        }}
      />
    </div>
  );
}

export default VCalendarComponent;
