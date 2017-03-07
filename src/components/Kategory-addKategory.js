import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAddKategory } from '../actions'

class AddKategory extends Component {
    constructor(props) {
        super(props)
    }
    addKategory() {
        let payload = {
            name: this.textInputKategory.value
        }
        this.textInputKategory.value = '';
        this.props.addKategory(payload);
    }
    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title" id="myModalLabel">Добавление категории</h4>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputKat">Название:</label>
                            <input id="inputKat" type="text" placeholder="Введите название категории" ref={(InputKategory) => { this.textInputKategory = InputKategory; }} className="form-control"/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                    <button type="button" onClick={::this.addKategory} className="btn btn-primary" data-dismiss="modal">Добавить операцию</button>
                </div>
            </div>

        )
    }
}

function dispatchToProps(dispatch) {
    return {
        addKategory: bindActionCreators(actionAddKategory, dispatch)
    }
}

export default connect(null,dispatchToProps)(AddKategory)