import ReduxConstants from '../ReduxConstants';
import { IReduxAction } from '../Types/GeneralTypes';
import produce from 'immer';

const { General } = ReduxConstants;

export interface IScreenCallbackItem {
  id?: string;
  //method: Function;
}

export interface IGeneralState {
  serviceName?: string;
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
    }
    return state;
  }
);
