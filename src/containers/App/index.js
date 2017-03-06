import React, { Component } from 'react'
import { Link } from 'react-router'
import Money from '../../components/Money'
import './App.scss'

class App extends Component {
    render() {
        return (
          <div className='container'>
            <div className="row navbar-top">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Finances</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/journal">Журнал</Link></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Настройки <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/kategory">Категории</Link></li>
                                        <li><Link to="/scheta">Счета</Link></li>
                                        <li><Link to="/valute">Валюты</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Поиск по операциям"/>
                                </div>
                                <button type="submit" className="btn btn-default">Найти</button>
                            </form>
                            <form className="navbar-form navbar-right">
                                <button className="btn btn-primary">Войти</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
              <div className="row">
                  <div className="col-md-3">
                      <Money/>
                  </div>
                  <div className="col-md-9">
                      {this.props.children}
                  </div>
              </div>
          </div>
    )  
  }
}

export default App;