// import styles from './app.module.css';
// import { Sidebar } from '@coding-challenge/ui';
import VFormComponent from './v-form-component/v-form-component';
import VSidebarComponent from './v-sidebar-component/v-sidebar-component';
import VCalendarComponent from './v-calendar-component/v-calendar-component';

export function App() {
  return (
    <div className="flex justify-start items-start h-screen w-screen">
      {/* Replace the below div with your sidebar component from @coding-challenge/ui! */}
      <div className="flex justify-start items-start h-screen w-screen">
        <VSidebarComponent />
      </div>

      <VCalendarComponent />
    </div>
  );
}

export default App;
