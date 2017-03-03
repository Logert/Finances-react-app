import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectRow, addRow } from '../actions'

class Journal extends Component {
    constructor(props) {
        super(props)
    }
    tableList() {
        return (
            this.props.journal.map((table,id) => {
                return (
                    <tr key={id} onClick={ () => { this.props.selectRow(table) }} >
                        <td>{table.date}</td>
                        <td>{table.sum}</td>
                        <td>{table.kat}</td>
                    </tr>
                )
            })
        )
    }
    addOperation() {
        return (
            this.props.addOperation()
        )
    }
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
                        <button className="btn btn-primary" onClick={::this.addOperation}>Добавить операцию</button>
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
                    {this.tableList()}
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        journal: state.JournalReducer
    }
}

function dispatchToProps(dispatch) {
    return {
        selectRow: bindActionCreators(selectRow, dispatch),
        addOperation: bindActionCreators(addRow ,dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Journal)