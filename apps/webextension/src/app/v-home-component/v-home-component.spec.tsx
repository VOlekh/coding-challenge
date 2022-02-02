import { render } from '@testing-library/react';

import VSidebarComponent from './v-home-component';

describe('VSidebarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VSidebarComponent />);
    expect(baseElement).toBeTruthy();
  });
});
