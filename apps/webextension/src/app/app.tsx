// import styles from './app.module.css';

//TBD didn't see at the beginning
// import { Sidebar } from '@coding-challenge/ui';
import VHomeComponent from './v-home-component/v-home-component';


export function App() {
  return (
    <div className="flex justify-start items-start h-screen w-screen">
      {/* Replace the below div with your sidebar component from @coding-challenge/ui! */}
      <div className="flex justify-start items-start h-screen w-screen">
        <VHomeComponent />
      </div>

      {/* <VCalendarComponent /> */}
    </div>
  );
}

export default App;
