import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { actionAddOperation, actionChangeMoney } from '../actions'
import './Journal-addOperation.scss'

class AddOperation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggledButton: true,
            op_type: '+',
            selectedMoney: 0
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
    moneyList () {
        return (
            this.props.money.map((el) => {
                let active = '';

                if(this.state.selectedMoney == el.id){
                    active = 'active';
                }
                return (
                    <a key={el.id}
                       onClick={ () => {
                           this.setState(() => ({selectedMoney: el.id}))
                       }}
                       className={`list-group-item ${active}`}>
                        {el.name} <span className="badge">{el.value}</span> </a>
                )
            })
        )
    }
    kategoryList() {
        return (
            this.props.kategory.map((el) => {
                return (
                    <option key={el.id}>{el.name}</option>
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

        let money = {
            id: this.state.selectedMoney,
            opType: this.state.op_type == '+' ? 1 : 0,
            value: Number(this.textInputSum.value)
        }
        this.textInputSum.value = 0;
        this.textInputComment.value = '';
        this.props.addOperation(payload);
        this.props.changeMoney(money);
    }
    render() {
        return (
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
                                    <button onClick={::this.toggleButtonOn} className={classNames('btn btn-info', {active: this.state.toggledButton})}>Доход</button>
                                    <button onClick={::this.toggleButtonOff} className={classNames('btn btn-info', {active: !this.state.toggledButton})}>Расход</button>
                                </div>
                                {/*toggle_end*/}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputSum">Сумма:</label>
                                <div className="input-group" id="inputSum">
                                    <span className="input-group-addon">BYN</span>
                                    <input type="number" defaultValue='0' ref={(inputSum) => { this.textInputSum = inputSum; }} className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="scheta">На счет:</label>
                                <div className="list-group" id="scheta">
                                    {::this.moneyList()}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputKat">Выберите категорию:</label>
                                <select className="form-control" ref={(inputKat) => { this.textInputKat = inputKat; }}>
                                    {::this.kategoryList()}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputComment">Комментарий:</label>
                                <textarea rows="3" placeholder="Введите комментарий" id="inputComment" ref={(inputComment) => { this.textInputComment = inputComment; }} className="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        <button type="button" onClick={::this.addOperation} className="btn btn-primary" data-dismiss="modal">Добавить операцию</button>
                    </div>
                </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        money: state.MoneyReducer,
        kategory: state.KategoryReducer
    }
}

function dispatchToProps(dispatch) {
    return {
        addOperation: bindActionCreators(actionAddOperation, dispatch),
        changeMoney: bindActionCreators(actionChangeMoney, dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(AddOperation)