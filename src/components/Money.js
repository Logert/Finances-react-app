import React, { Component } from 'react'
import { connect } from 'react-redux'

class Money extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Счета</h3>
                    </div>
                    <div className="panel-body">

                        {
                            this.props.money.map((el) => {
                                return (
                                    <h3 key={el.id}>{el.name} <span className="label label-success">{el.value} BYN</span></h3>
                                )
                            })
                        }

                        <br/>
                        <h2>Всего: <span className="label label-primary">
                        {this.props.money.reduce((sum, curr) => {return sum+curr.value},0)} BYN
                    </span>
                        </h2>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        money: state.MoneyReducer
    }
}

export default connect(mapStateToProps)(Money)