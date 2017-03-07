import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAddCurrency } from '../actions'

class AddCurrency extends Component {
    constructor(props) {
        super(props)
    }
    addCurrency() {
        let payload = {
            full_name: this.textInputFullNameCurrency.value,
            name: this.textInputNameCurrency.value
        }
        this.textInputFullNameCurrency.value = this.textInputNameCurrency.value = '';
        this.props.addCurrency(payload);
    }
    render() {
        return (
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Добавление валюты</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="inputKat">Полное название:</label>
                                <input id="inputKat" type="text" placeholder="Введите полное название" ref={(inputFullNameCurrency) => { this.textInputFullNameCurrency = inputFullNameCurrency; }} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputComment">Сокращенное название:</label>
                                <input id="inputComment" type="text" placeholder="Введите сокращенное название" ref={(inputNameCurrency) => { this.textInputNameCurrency = inputNameCurrency; }} className="form-control"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        <button type="button" onClick={::this.addCurrency} className="btn btn-primary" data-dismiss="modal">Добавить операцию</button>
                    </div>
                </div>

        )
    }
}

function dispatchToProps(dispatch) {
    return {
        addCurrency: bindActionCreators(actionAddCurrency, dispatch)
    }
}

export default connect(null,dispatchToProps)(AddCurrency)