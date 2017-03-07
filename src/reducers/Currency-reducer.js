import { ADD_CURRENCY, DEL_CURRENCY, EDIT_CURRENCY } from '../constants/Currency'

let id = 0;

const initialState = [
    {
        id: id++,
        name: 'BYN',
        full_name: 'Белорусские рубли'
    },
    {
        id: id++,
        name: 'RUB',
        full_name: 'Российские рубли'
    },
    {
        id: id++,
        name: 'USD',
        full_name: 'Американский доллар'
    }
]

export default function CurrencyReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY: return [...state, {
            id: id++,
            name: action.name,
            full_name: action.full_name
        } ];
        case DEL_CURRENCY: return state;
        case EDIT_CURRENCY: return state;
        default: return state;
    }
}