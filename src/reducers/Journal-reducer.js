import { ADD_OPERATION,DEL_OPERATION } from '../constants/Journal'

const initialState = [
    {
        id: 1,
        date: '1.01.2017',
        sum: 250,
        type: '+',
        kat: 'Личное',
        comment: 'покупка'
    },
    {
        id: 2,
        date: '21.01.2017',
        sum: 50,
        type: '-',
        kat: 'Коммунальные',
        comment: 'none'
    },
    {
        id: 3,
        date: '2.01.2017',
        sum: 20,
        type: '+',
        kat: 'Личное',
        comment: 'покупка'
    }
]

let id = 3;
let date = new Date().toLocaleDateString();

export default function JournalReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_OPERATION: return [...state, {
            id: id++,
            date: date,
            sum: action.sum,
            type: action.op_type,
            kat: action.kat,
            comment: action.comment
        }];
        case DEL_OPERATION: return [...state];
        default: return state;
    }
}