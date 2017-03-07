import { ADD_KATEGORY, DEL_KATEGORY, EDIT_KATEGORY } from '../constants/Kategory'

let id = 0;

const initialState = [
    {
        id: id++,
        name: 'Автомобиль',
        image: 'glyphicon glyphicon-road'
    },
    {
        id: id++,
        name: 'Банковское обслуживание',
        image: 'glyphicon glyphicon-credit-card'
    },
    {
        id: id++,
        name: 'Дети',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Долги',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Дом',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Досуг и отдых',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Коммунальные платежи',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Медицина',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Образование',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Одежда и обувь',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Отдых и путешествия',
        image: 'glyphicon glyphicon-plane'
    },
    {
        id: id++,
        name: 'Персональный доход',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Питание',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Связь',
        image: 'glyphicon glyphicon-ok'
    },
    {
        id: id++,
        name: 'Транспорт',
        image: 'glyphicon glyphicon-ok'
    }
]

export default function KategoryReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_KATEGORY: return [...state, {
            id: id++,
            name: action.name,
            image: 'glyphicon glyphicon-ok'
        } ];
        case DEL_KATEGORY: return state;
        case EDIT_KATEGORY: return state;
        default: return state;
    }
}