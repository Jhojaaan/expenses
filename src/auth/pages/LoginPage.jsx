import { useContext,  useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { AuthContext } from "../../authContext";


export const LoginPage = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [name, setName] = useState('')
    const { authStatus, updateAuthStatus } = useContext(AuthContext);


    const inicioSesion = async(e) =>{
        
        e.preventDefault()

        const data = {
            email,
            password
          };

          if(data){

              try {
                const response = await axios.post('http://localhost:5000/api/v1/login', data);
                console.log(response.data);
                if(response.data.ok){
                    updateAuthStatus('authenticated', response.data.name)
                }
              } catch (error) {
                console.error(error);
              }
          }

        
    }

    const registro = async(e) =>{
        e.preventDefault();

        const data = {
            name,
            email: emailReg,
            password: passwordReg
          };

        if(data){
            try {
                const response = await axios.post('http://localhost:5000/api/v1/new', data);
                console.log(response.data);
                if(response.data.ok){
                    updateAuthStatus('authenticated', response.data.name)
                }
              } catch (error) {
                console.error(error);
              }
        }
    }

    return (
        <div className="container login-container">
            <div className="row">
                {/* INGRESO */}
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={inicioSesion}>

                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={password} onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registro}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={name} onChange={(e) => setName(e.target.value)}

                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={emailReg} onChange={(e) => setEmailReg(e.target.value)}

                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={passwordReg} onChange={(e)=>setPasswordReg(e.target.value)}

                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
