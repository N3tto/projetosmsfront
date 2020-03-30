import React from 'react';
import Form from '../../components/Form';
import './Login.css';
import Img from '../../assets/imgs/logoPitang.png';

export default class Home extends React.Component{
    state = {
        login : '',
        password : '',
        chekbox : false
    }

    updateLogin = (e)=>{
        this.setState({login : e.target.value})
    }

    updatePassword = (e) =>{
        this.setState({password : e.target.value})
    }

    updateCheckbox = (e, value) =>{
        this.setState({chekbox : !this.state.chekbox ? true : false});
    }

    submit = (e) =>{
        e.preventDefault()
        
        console.log(this.state)
    }

    render(){
        return(
            <>
            <Form>
                    <form onSubmit = {this.submit}>

                        <h3 className = 'hh3 app d-flex align left w-80'>SIGN IN</h3>

                        <div className = 'form-group'>
                            <small><label className = ' app d-flex align-left mb-1'>Login</label></small>
                            <input type = 'text' className = 'form-control' onChange = {this.updateLogin}>
                            </input>
                        </div>

                        <div className = 'form-group'>
                            <small><label className = ' app d-flex align-left mb-1'>Password</label></small>
                            <input type = 'password' className = 'form-control' onChange = {this.updatePassword}>
                            </input>
                        </div>

                        <div className="form-check app d-flex align-item-left">
                            <input className="form-check-input" id="remember" type="checkbox" onChange = {this.updateCheckbox}/>
                            <small><label className="form-check-label" htmlFor="remember">Remember me</label></small>
                        </div>

                        <div className="form-group mt-2">
                            <button className="bbutton btn btn-success w-100" type = 'submit'>Sign In</button>
                        </div>

                        <div className="form-group">
                            <button type="button" className="btn btn-outline-secondary w-100" onClick = {() => this.props.history.push('/register')}>Sign Up</button>
                        </div>
                    </form>
                 </Form>
            </>
        )
    }
}