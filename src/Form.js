import React from 'react';


export default class Form extends React.Component{
    render(){
        return(
            <div className="app d-flex align-items-center justify-content-center h-100">
                <form>
                    <h3 className = 'app d-flex align left w-80'>Sign in</h3>
                    <div className = 'form-group'>
                        <label className = ' app d-flex align-left'>Login:</label>
                        <input type = 'text' className = 'form-control'>
                        </input>
                    </div>

                    <div className = 'form-group'>
                        <label className = ' app d-flex align-left'>Password:</label>
                        <input type = 'password' className = 'form-control'>
                        </input>
                    </div>

                    <div className="form-check app d-flex align-item-left">
                        <input className="form-check-input" id="remember" type="checkbox" />
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                    </div>

                    <div className="form-group mt-2">
                        <button className="btn btn-success w-100">Sign In</button>
                    </div>

                    <div className="form-group">
                        <button type="button" className="btn btn-outline-secondary w-100">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }


}