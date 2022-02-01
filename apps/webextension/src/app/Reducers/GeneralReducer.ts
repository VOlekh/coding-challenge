import ReduxConstants from '../ReduxConstants';
import { IReduxAction } from '../Types/GeneralTypes';
import produce from 'immer';
// import { IEmployee } from 'src/Pages/AddEditEmployee/Employee';
// import { IDepartment } from 'src/Pages/AddEditDepartment/Department';

const { General } = ReduxConstants;

export interface IScreenCallbackItem {
  id?: string;
  method: Function;
}

export interface IGeneralState {
  //   appLanguage: string;
  serviceName?: string;
  //   employees: IEmployee[];
  //   departments: IDepartment[];
  //   userIsValid: boolean;
  //   backgroundIsChanged: boolean;
  //   countries: Array<ICountry>;
}

export default produce(
  (
    state: IGeneralState = {
      //dates: [],
      //slots: [],
      //sidebarIsOpen: false,
      //duration: 'string',
    },
    action: IReduxAction
  ) => {
    switch (action.type) {
      case General.SetServiceName:
        state.serviceName = action.payload;
        break;
      //   case 'UPDATE_EMPLOYEES':
      //     console.log(action);
      //     state.employees.push(action.payload);
      //     break;

      //   case 'POPULATE_COUNTRIES':
      //     console.log('POPULATE_COUNTRIES', action);
      //     //I take data from payload and assign it to state.my value
      //     //from this point
      //     state.countries = action.payload;
      //     break;
    }
    return state;
  }
);
