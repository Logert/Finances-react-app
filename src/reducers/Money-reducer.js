import { ADD_SCHET,DEL_SCHET, CHANGE_SCHET } from '../constants/Money'

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
        case CHANGE_SCHET: state.map((el) => {
            if (el.id == action.id) {
                if (action.opType == 0) {
                    el.value -= action.value
                }
                if (action.opType == 1) {
                    el.value += action.value
                }
            }
        }); return state
        default: return state;
    }
}
