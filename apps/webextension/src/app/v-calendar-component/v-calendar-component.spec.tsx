import { render } from '@testing-library/react';

import VCalendarComponent from './v-calendar-component';

describe('VCalendarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VCalendarComponent />);
    expect(baseElement).toBeTruthy();
  });
});
