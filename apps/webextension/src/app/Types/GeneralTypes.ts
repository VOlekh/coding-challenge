import { IGeneralState } from '../Reducers/GeneralReducer';

export interface IStore {
  general: IGeneralState;
}

export interface IReduxAction {
  type: string;
  payload: any;
}
