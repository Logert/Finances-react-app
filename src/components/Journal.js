import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectRow, ActionAddOperation } from '../actions'

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
        let payload = {
            op_type: '+',
            sum: this.textInputSum.value,
            kat: 'test',
            comment: 'test comment'
        }
        this.textInputSum.value='';
        return this.props.addOperation(payload)
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
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="myModalLabel">Добавление операции</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className="input-group">
                                            <span className="input-group-addon">BYN</span>
                                            <input type="number" ref={(inputSum) => { this.textInputSum = inputSum; }} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                                        <button type="button" onClick={::this.addOperation} className="btn btn-primary" data-dismiss="modal">Добавить операцию</button>
                                    </div>
                                </div>
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
        selectRow: bindActionCreators(selectRow, dispatch),
        addOperation: bindActionCreators(ActionAddOperation ,dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Journal)