import { IStateContext } from './rootState';

export enum ActionType {
    SET_AGE = 'SET_AGE',
    SET_SEX = 'SET_SEX',
    SET_CITY = 'SET_CITY',
    SET_TEXT = 'SET_TEXT',
    SET_NAME = 'SET_NAME',
    SET_PHONE = 'ET_PHONE',
}

export type Action =
 | { type: ActionType.SET_AGE, payload: string }
 | { type: ActionType.SET_SEX, payload: string }
 | { type: ActionType.SET_CITY, payload: string }
 | { type: ActionType.SET_TEXT, payload: string }
 | { type: ActionType.SET_NAME, payload: string }
 | { type: ActionType.SET_PHONE, payload: string }

 export const reducer = (state: IStateContext, action: Action): any => {
    switch (action.type) {
        case ActionType.SET_AGE:
          return { ...state, age: action.payload }
        case ActionType.SET_SEX:
          return { ...state, sex: action.payload }
        case ActionType.SET_CITY:
          return { ...state, city: action.payload }
        case ActionType.SET_TEXT:
          return { ...state, text: action.payload }
        case ActionType.SET_NAME:
          return { ...state, name: action.payload }
        case ActionType.SET_PHONE:
          return { ...state, phone: action.payload }
        default:
          return state
      }
 }