import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { selectRow, ActionAddOperation } from '../actions'
import './Journal.scss'

class Journal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggledButton: true,
            op_type: '+'
        }
    }

    toggleButtonOff() {
        this.setState(() => ({
            toggledButton: false,
            op_type: '-'
        }));
    }
    toggleButtonOn() {
        this.setState(() => ({
            toggledButton: true,
            op_type: '+'
        }));
    }


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
    addOperation() {
        let payload = {
            op_type: this.state.op_type,
            sum: this.textInputSum.value,
            kat: this.textInputKat.value,
            comment: this.textInputComment.value
        }
        this.textInputSum.value = 0;
        this.textInputKat.value = this.textInputComment.value = '';
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
                                        <form>
                                        <div className="form-group">
                                            {/*toggle_start*/}
                                            <div className="btn-group" data-toggle="buttons">
                                                {/*<label onClick={::this.toggleButtonOn} className="btn btn-info active">*/}
                                                    {/*<input type="radio" />Доход*/}
                                                {/*</label>*/}
                                                {/*<label onClick={::this.toggleButtonOff} className="btn btn-info">*/}
                                                    {/*<input type="radio" />Расход*/}
                                                {/*</label>*/}
                                                <button onClick={::this.toggleButtonOn} className={classNames('btn btn-info', {active: this.state.toggledButton})}>Доход</button>
                                                <button onClick={::this.toggleButtonOff} className={classNames('btn btn-info', {active: !this.state.toggledButton})}>Расход</button>
                                            </div>
                                            {/*toggle_end*/}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputSum">Сумма</label>
                                            <div className="input-group" id="inputSum">
                                                <span className="input-group-addon">BYN</span>
                                                <input type="number" defaultValue='0' ref={(inputSum) => { this.textInputSum = inputSum; }} className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputKat">Категория</label>
                                            <input id="inputKat" type="text" placeholder="Введите категорию" ref={(inputKat) => { this.textInputKat = inputKat; }} className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputComment">Комментарий</label>
                                            <textarea rows="3" placeholder="Введите комментарий" id="inputComment" ref={(inputComment) => { this.textInputComment = inputComment; }} className="form-control"/>
                                        </div>
                                        </form>
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