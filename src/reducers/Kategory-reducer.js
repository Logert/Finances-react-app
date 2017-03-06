import { ADD_KATEGORY, DEL_KATEGORY, EDIT_KATEGORY } from '../constants/Kategory'

let id = 0;

const initialState = [
    {
        id: id++,
        name: 'Личное',
        image: ''
    },
    {
        id: id++,
        name: 'Коммунальные',
        image: ''
    }
]

export default function KategoryReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_KATEGORY: return [...state, {
            id: id++,
            name: 'test',
            image: ''
        } ];
        case DEL_KATEGORY: return state;
        case EDIT_KATEGORY: return state;
        default: return state;
    }
}