import React from 'react';
import Form from '../../components/Form'
import Img from './arrow-left.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './register.css'

export default class Register extends React.Component{
    render(){
        return(
            <>
                <Form>
                    <div /*className="app d-flex align-items-center justify-content-center h-100"*/>

                        <form>
                            <h3 className = 'teste'>
                                <Link to = '/login'>
                                <FiArrowLeft padding-top = "10px" color = '888'/>
                                </Link> SIGN UP</h3>
                            

                            <div className = 'form-group'>
                                <small><label className = ' app d-flex align-left'>Name:</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group'>
                                <small><label className = ' app d-flex align-left'>Usename:</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group'>
                                <small><label className = ' app d-flex align-left'>E-mail:</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group'>
                                <small><label className = ' app d-flex align-left'>Password:</label></small>
                                <input type = 'password' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group'>
                                <small><label className = ' app d-flex align-left'>Confirm Pasword:</label></small>
                                <input type = 'password' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className="form-check app d-flex align-item-left">
                                <input className="form-check-input" id="remember" type="checkbox" onChange = {this.updateCheckbox}/>
                                <small><label className="form-check-label" htmlFor="remember">Acept Terms of Service</label></small>
                            </div>

                            <div className="form-group mt-2">
                                <button className="bbutton btn btn-success w-100" type = 'submit'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </Form>
            </>
        )
    }
}