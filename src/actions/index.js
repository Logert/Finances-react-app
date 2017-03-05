import { ADD_OPERATION } from '../constants/Journal'

export const selectRow = (table) => {
    console.log('You clicked to row: ', table.id)
    return {
        type: 'ROW_CLICKED',
        payload: table
    }
}
export const ActionAddOperation = (payload) => (
    {
        type: ADD_OPERATION,
        op_type: payload.op_type,
        sum: payload.sum,
        kat: payload.kat,
        comment: payload.comment
    })