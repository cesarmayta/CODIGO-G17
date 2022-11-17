import React from 'react';
import AuthService from '../services/auth.service';
import {createBrowserHistory} from 'history';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usuario : '',
            password : '',
            loading : false,
            message : ''
        }
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handlerLogin = this.handlerLogin.bind(this);
    }

    onChangeUsuario(e){
        this.setState({
            usuario : e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }
    

    handlerLogin(e){
        e.preventDefault();

        this.setState({
            message:'',
            loading:true
        })

        console.log('usuario : ' + this.state.usuario);
        console.log('password : ' + this.state.password);

        AuthService.login(this.state.usuario,this.state.password).then(
            ()=>{
                const history = createBrowserHistory();
                history.push('/');
                window.location.reload();
            },
            error =>{
                const mensajeError = 'datos no validos';
                this.setState({
                    loading:false,
                    message:mensajeError
                })
            }
        )

    }

    render(){
        return(
            <div id="layoutAuthentication" class="bg-primary">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form onSubmit={this.handlerLogin}>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" 
                                                    id="inputText"
                                                    type="text" 
                                                    placeholder="usuario"
                                                    value={this.state.usuario}
                                                    onChange={this.onChangeUsuario}
                                                    />
                                                    <label for="inputEmail">Usuario</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input className="form-control" 
                                                    id="inputPassword" 
                                                    type="password" 
                                                    placeholder="Password" 
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}/>
                                                    <label for="inputPassword">Password</label>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                    <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="password.html">Forgot Password?</a>
                                                    <input type="submit" className='btn btn-primary' value='Login' />
                                                </div>
                                            </form>
                                            {this.state.message && (
                                                <div className='form-group'>
                                                    <div className='alert alert-danger'>
                                                        {this.state.message}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-footer text-center py-3">
                                            <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Auth;