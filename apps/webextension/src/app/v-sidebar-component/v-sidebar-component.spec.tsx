import { render } from '@testing-library/react';

import VSidebarComponent from './v-sidebar-component';

describe('VSidebarComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VSidebarComponent />);
    expect(baseElement).toBeTruthy();
  });
});
