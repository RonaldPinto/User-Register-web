import React, { Fragment } from 'react';
import './StartSession.scss'
import logo from '../../img/user.png'

class StartSession extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            breakRed: false,
            errorEmail: true,
            erroremailempty: true,
            password: ""
        }
    }

    validateField = (value) => {

        let retorno = false;
        const reg = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(String(value).toLowerCase())=== true) {
          this.setState({errorEmail: true, breakRed: false, erroremailempty: true});
          retorno=true;
        } else if (value === ""){
          this.setState({erroremailempty: false, breakRed: true, errorEmail: true});
          retorno=false;
        } else {
          retorno=false;
          this.setState({errorEmail: false, breakRed: true, erroremailempty: true});
        }
        return retorno;
      }

      handleBlur = (e) => {
        e.preventDefault();
        const { email } = this.state;
    
        if(this.validateField(email)){
          this.setState({errorEmail: true, breakRed: false});
        }
      }

      handleBlurPass = (e) => {
        e.preventDefault();
        const { password } = this.state;
    
        if(this.validateField(password)){
          //this.setState({errorEmail: true, breakRed: false});
        }
      }

      validatePassword = (value) => {

      }

    render(){

        const { errorEmail, breakRed, erroremailempty } = this.state;

        return (
            <Fragment>
            <div className="header-line"></div>
            <div className="header-inf"></div>
            <div className="grilla">
                <form className="box-container">
                    <div className="container-img">
                        <img 
                            className="img-user"
                            src={logo}
                             alt="Canvas Logo"
                        />
                    </div>
                    <div className="input__fieldSearchForm">
                        <h1 className="title-box">Inicio sesion</h1>
                    </div>
                    <div className="input__fieldSearchForm">
                    <label htmlFor="user" className="label-title">
                    Email
                    </label>
                        <div className="container-input">
                            <input
                            type='text'
                            id='user'
                            name='user'
                            className="form-control"
                            aria-invalid={breakRed}
                            onChange={(data) => { this.setState({ email: data.target.value }); }}
                            onBlur={(event) => {this.handleBlur(event)}}
                            />
                        </div>
                        {errorEmail?null:<span aria-describedby='email' id='erroremailformat' className='error-blocked' role='alert'>error 1</span>}
                        {erroremailempty?null:<span aria-describedby='email'id='erroremailempty' className='error-blocked' role='alert'>error 2</span>}
                    </div>
                    <div className="input__fieldSearchForm">
                        <label htmlFor="pass" className="label-title">Contraseña</label>
                        <div className="container-input">
                            <input
                            type='password'
                            id='pass'
                            name='pass'
                            className="form-control"
                            onChange={(data) => { this.setState({ password: data.target.value });}}
                            onBlur={(event) => {this.handleBlurPass(event)}}
                            />
                        </div>
                    </div>
                    <div className="input__fieldSearchForm">
                        <button className="btn-ing">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
            </Fragment>
        )
    }

}

export default StartSession;