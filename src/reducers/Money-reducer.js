import { ADD_SCHET,DEL_SCHET } from '../constants/Money'

let id = 0;

const initialState = [
    {
        id: id++,
        name: 'Наличные',
        value: 15.5
    },
    {
        id: id++,
        name: 'Visa',
        value: 14.2
    }
]

export default function MoneyReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_SCHET: return [...state];
        case DEL_SCHET: return [...state];
        default: return state;
    }
}
