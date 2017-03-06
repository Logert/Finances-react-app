import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectRow } from '../actions'

class Kategory extends Component {

    kategoryList() {
        return (
            this.props.kategory.map((table,id) => {
                return (
                    <tr key={id} onClick={ () => { this.props.selectRow(table) }} >
                        <td>{table.id}</td>
                        <td>{table.image}</td>
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
                        <h3>Список категорий</h3>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Добавить категорию</button>
                        {/*modal_start*/}
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">

                            </div>
                        </div>
                        {/*modal_end*/}
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Изображение</th>
                        <th>Имя</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.kategoryList()}
                    </tbody>
                </table>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        kategory: state.KategoryReducer
    }
}

function dispatchToProps(dispatch) {
    return {
        selectRow: bindActionCreators(selectRow, dispatch)
    }
}

export default connect(mapStateToProps, dispatchToProps)(Kategory)
