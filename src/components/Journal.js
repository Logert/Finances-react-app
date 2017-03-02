import React, { Component } from 'react'

export default class Journal extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title">
                        <h3>Журнал операций</h3>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="btn-group">
                        <button className="btn btn-primary">Добавить операцию</button>
                        <button className="btn btn-default" disabled={true}>Загрузить выписку</button>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Сумма</th>
                            <th>Категория</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                    </tr>
                    <tr>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                    </tr>
                    <tr>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                        <td>qweazxv</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}