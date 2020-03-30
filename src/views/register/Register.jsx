import React from 'react';
import Form from '../../components/Form';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './register.css';

export default class Register extends React.Component{
    render(){
        return(
            <>
                <Form>
                        <form>
                            <h3 className = 'teste'>
                                <Link to = '/login'>
                                <FiArrowLeft padding-top = "10px" color = '888'/>
                                </Link> SIGN UP</h3>
                            

                            <div className = 'form-group app mb-2 mt-2 '>
                                <small><label className = ' app d-flex align-left mb-1'>Name</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group app mb-2 mt-2'>
                                <small><label className = ' app d-flex align-left mb-1'>Usename</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group app mb-2 mt-2'>
                                <small><label className = ' app d-flex align-left mb-1'>E-mail</label></small>
                                <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group app mb-2 mt-2'>
                                <small><label className = ' app d-flex align-left mb-1'>Password</label></small>
                                <input type = 'password' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className = 'form-group app mb-2 mt-2'>
                                <small><label className = ' app d-flex align-left mb-1'>Confirm Pasword</label></small>
                                <input type = 'password' className = 'form-control' onChange = {this.updateLogin}>
                                </input>
                            </div>

                            <div className="form-check app d-flex align-item-left">
                                <input className="form-check-input" id="remember" type="checkbox" onChange = {this.updateCheckbox}/>
                                <small><label className="form-check-label" htmlFor="remember">Acept Terms of Service</label></small>
                            </div>

                            <div className="form-group mt-2">
                                <button className="bbutton btn btn-success w-100 " type = 'submit'>Sign Up</button>
                            </div>
                        </form>
                </Form>
            </>
        )
    }
}   