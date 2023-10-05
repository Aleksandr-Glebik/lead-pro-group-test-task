import React, { useContext, useReducer } from 'react'
import { reducer, Action } from './reducer'

export interface IStateContext {
    age: string
    sex: string
    city: string
    text: string
    name: string
    phone: string
    check: boolean
}

export interface Store {
    state: IStateContext
    dispatch?: React.Dispatch<Action>
}

export const initialState: IStateContext = {
    age: '',
    sex: '',
    city: '',
    text: '',
    name: '',
    phone: '',
    check: false
}

const MyContext = React.createContext<Store>({ state: initialState, dispatch: () => null })

export const useStateContext = () => useContext(MyContext)

type ChildrenProps = { children: React.ReactNode }

export const StateProvider = ({ children }: ChildrenProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <MyContext.Provider value={{ state, dispatch }} >
            { children }
        </MyContext.Provider>
    )
}
