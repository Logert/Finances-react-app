import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { actionDelOperation, actionEditOperation } from '../actions'
import AddOperation from './Journal-addOperation'
import './Journal.scss'

class Journal extends Component {
    tableList() {
        return (
            this.props.journal.map((table) => {
                let rowClass = classNames({
                    'success': table.type == '+',
                    'danger': table.type == '-'
                })
                return (
                    <tr className={rowClass} key={table.id}>
                        <td>{table.date}</td>
                        <td>{table.type=='+' ? '+' : '-'}{table.sum}</td>
                        <td>
                            <div>{table.kat}</div>
                            <small>{table.comment}</small>
                        </td>
                        <td className="journal__btnMore">
                            <button className="btn btn-default" onClick={::this.editOp}><span className="glyphicon glyphicon-pencil"></span></button>
                            <button className="btn btn-default" onClick={()=>{::this.delOpConfirm(table.id)}}><span className="glyphicon glyphicon-remove"></span></button>
                            <button className="btn btn-default"><span className="glyphicon glyphicon-file"></span></button>
                        </td>
                    </tr>
                )
            })
        )
    }
    delOpConfirm(id) {
        if (confirm('Вы действительно хотите удалить операцию?')) {
            this.props.delOperation(id)
        }
    }
    editOp() {
        let op = {
            id: 1,
            date: '1.01.2017',
            sum: 250,
            type: '+',
            kat: 'Личное',
            comment: 'тест'
        }
        this.props.editOperation(op)
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

                        <button type="button" className="btn btn-primary btn__menu" data-toggle="modal" data-target="#myModal">Добавить операцию</button>
                        <button className="btn btn-default btn__menu" disabled={true}>Загрузить выписку</button>
                        {/*modal_start*/}
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <AddOperation/>
                            </div>
                        </div>
                        {/*modal_end*/}

                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Сумма</th>
                            <th>Категория</th>
                            <th></th>
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
        delOperation: bindActionCreators(actionDelOperation, dispatch),
        editOperation: bindActionCreators(actionEditOperation, dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Journal)