import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { selectRow } from '../actions'
import AddOperation from './Journal-addOperation'

class Journal extends Component {

    tableList() {
        return (
            this.props.journal.map((table,id) => {
                let rowClass = classNames({
                    'success': table.type == '+',
                    'danger': table.type == '-'
                })
                return (
                    <tr className={rowClass} key={id} onClick={ () => { this.props.selectRow(table) }} >
                        <td>{table.date}</td>
                        <td>{table.sum}</td>
                        <td>{table.kat}</td>
                    </tr>
                )
            })
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
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Добавить операцию</button>
                        <button className="btn btn-default" disabled={true}>Загрузить выписку</button>
                        {/*modal_start*/}
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <AddOperation/>
                            </div>
                        </div>
                        {/*modal_end*/}
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
        selectRow: bindActionCreators(selectRow, dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Journal)