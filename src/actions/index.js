import { ADD_OPERATION, DEL_OPERATION, EDIT_OPERATION } from '../constants/Journal'
import { CHANGE_SCHET } from '../constants/Money'
import { ADD_CURRENCY } from '../constants/Currency'
import { ADD_KATEGORY } from '../constants/Kategory'


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
export const actionDelOperation = (id) => ( {
        type: DEL_OPERATION,
        payload: id
    }
)
export const actionEditOperation = (op) => (
    {
        type: EDIT_OPERATION,
        id: op.id,
        date: op.date,
        sum: op.sum,
        opType: op.type,
        kat: op.kat,
        comment: op.comment
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

export const actionAddCurrency = (payload) => (
    {
        type: ADD_CURRENCY,
        full_name: payload.full_name,
        name: payload.name
    }
)
export const actionAddKategory = (payload) => (
    {
        type: ADD_KATEGORY,
        name: payload.name
    }
)