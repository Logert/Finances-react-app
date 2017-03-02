import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Finances</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/journal">Журнал</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Настройки <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Поиск операции"/>
                            </div>
                            <button type="submit" className="btn btn-default">Найти</button>
                        </form>
                        <form className="navbar-form navbar-right">
                            <button className="btn btn-primary">Войти</button>
                        </form>
                    </div>


                </div>
            </nav>

            {/*<div className="col-md-3">*/}
                {/*<h1>Logo</h1>*/}
            {/*</div>*/}
            {/*<div className="col-md-6">*/}
                {/*<h1>Search</h1>*/}
            {/*</div>*/}
            {/*<div className="col-md-3">*/}
                {/*<h1>Login </h1>*/}
            {/*</div>*/}
        </div>
          <div className="row">
              <div className="col-md-3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Счета</h3>
                    </div>
                    <div className="panel-body">
                        <h3>Наличные: 0руб</h3>
                        <h3>Visa: 0руб</h3>
                    </div>
                </div>
              </div>
              <div className="col-md-9">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          {this.props.children}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )  
  }
}
