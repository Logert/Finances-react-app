import { ADD_OPERATION } from '../constants/Journal'

export const selectRow = (table) => {
    console.log('You clicked to row: ', table.id)
    return {
        type: 'ROW_CLICKED',
        payload: table
    }
}
export const addRow = () => ({type: ADD_OPERATION})