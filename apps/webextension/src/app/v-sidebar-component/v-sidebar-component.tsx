import { CssSyntaxError } from 'postcss';
import styles from './v-sidebar-component.module.css';

import VFormComponent from '../v-form-component/v-form-component';

/* eslint-disable-next-line */
export interface VSidebarComponentProps {}

export function VSidebarComponent(props: VSidebarComponentProps) {
  return (
    <div>
      {/* <!-- component --> */}
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-10/12 bg-white  p-0 shadow-lg">
          <VFormComponent />
        </div>
        <div className="w-9/12">
          <div className="p-4 text-gray-500">Content here...</div>
        </div>
      </div>
    </div>
  );
}

export default VSidebarComponent;
