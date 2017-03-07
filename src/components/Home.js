import React, { Component } from 'react'
import { Link } from 'react-router'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Главная</h1>
                <p>Объедините все ваши финансы в одной системе. Воспользуйтесь возможностями домашней онлайн-бухгалтерии для учета, анализа и планирования расходов - эффективных способов держать свою финансовую жизнь под контролем!</p>
                <p><Link className="btn btn-primary btn-lg" role="button" to="/journal">Перейти в журнал</Link></p>
            </div>
        )
    }
}