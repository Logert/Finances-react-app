import { ADD_OPERATION } from '../constants/Journal'
import { CHANGE_SCHET } from '../constants/Money'

export const selectRow = (table) => {
    console.log('You clicked to row: ', table.id)
    return {
        type: 'ROW_CLICKED',
        payload: table
    }
}
export const actionAddOperation = (payload) => (
    {
        type: ADD_OPERATION,
        op_type: payload.op_type,
        sum: payload.sum,
        kat: payload.kat,
        comment: payload.comment
    }
)

export const actionChangeMoney = (money) => (
    {
        type: CHANGE_SCHET,
        id: money.id,
        opType: money.opType,
        value: money.value
    }
)