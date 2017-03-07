import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectRow } from '../actions'
import AddCurrency from './Currency-addCurrency'

class Currency extends Component {
    currencyList() {
        return (
            this.props.currency.map((table,id) => {
                return (
                    <tr key={id} onClick={ () => { this.props.selectRow(table) }} >
                        <td>{table.id}</td>
                        <td>{table.full_name}</td>
                        <td>{table.name}</td>
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
                        <h3>Список валют</h3>
                    </div>
                </div>
                <div className="panel-body">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Добавить валюту</button>
                        {/*modal_start*/}
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <AddCurrency/>
                            </div>
                        </div>
                        {/*modal_end*/}
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Полное наименование</th>
                        <th>Сокращенное</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.currencyList()}
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        currency: state.CurrencyReducer
    }
}

function dispatchToProps(dispatch) {
    return {
        selectRow: bindActionCreators(selectRow, dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Currency)
