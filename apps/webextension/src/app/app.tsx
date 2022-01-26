// import styles from './app.module.css';
// import { Sidebar } from '@coding-challenge/ui';
import VFormComponent from './v-form-component/v-form-component';
import VSidebarComponent from './v-sidebar-component/v-sidebar-component';

export function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Replace the below div with your sidebar component from @coding-challenge/ui! */}
      <VSidebarComponent />
      
    </div>
  );
}

export default App;
