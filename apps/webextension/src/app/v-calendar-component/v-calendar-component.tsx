import './v-calendar-component.module.css';
import React, { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import moment from 'moment';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

/* eslint-disable-next-line */
export interface VCalendarComponentProps {}

export function VCalendarComponent(props: VCalendarComponentProps) {
  //duration will come from FormComponent TBD using Redux
  const duration = 15;
  const [selectedIntervals, setSelectedIntervals] = useState([]);

  const [selectedDates, setSelectedDates] = useState<
    DateObject | DateObject[]
  >();

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
    // console.log('dates: ', dateStrings);
    // console.log('intervals: ', intervalStrings);
    const result = Array<string>();
    if (dateStrings.length === 0 || intervalStrings.length === 0) {
      result.push('Error: choose both dates and intervals');
    }
    dateStrings.forEach((dateString) => {
      intervalStrings.forEach((intervalString) =>
        result.push(dateString + ' ' + intervalString )
      );
    });

    return result;
  }

  //console.log('Dates :', selectedDates);
  const parsedDates = parseDates(selectedDates);
  const parsedIntervals = parseIntervals(selectedIntervals);
  const datesAndIntervals = combineDatesAndIntevals(
    parsedDates,
    parsedIntervals
  );

  const textToCopy = `Following time slots were selected ${datesAndIntervals}`;

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
  const formattedTimeStops = timeStops.map((val, i) => {
    return {
      label: `${val} - ${timeStops[i + 1]}`,
      value: `${val} - ${timeStops[i + 1]}`,
    };
  });
  formattedTimeStops.pop();

  return (
    <div>
      <h1>VCalendarComponent</h1>
      <div className="mb-6 mt-6">
        <DatePicker
          className="w-200 px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          format="MM/DD/YYYY"
          value={selectedDates}
          multiple
          plugins={[<DatePanel />]}
          onChange={(dateObject) => dateObject && setSelectedDates(dateObject)}  
          placeholder ="Select dates..."
        />
      </div>

      <div className="mb-6 mt-6 ">
        <MultiSelect
          //className="w-200 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          options={formattedTimeStops}
          value={selectedIntervals}
          onChange={setSelectedIntervals}
          labelledBy="Selected"
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
    </div>
  );
}

export default VCalendarComponent;
