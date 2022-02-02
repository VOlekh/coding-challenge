import { render } from '@testing-library/react';

import VFormComponent from './v-sidebar-component';

describe('VFormComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VFormComponent />);
    expect(baseElement).toBeTruthy();
  });
});
