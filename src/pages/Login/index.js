import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Button, H3, Div } from "./style.js";
import './style.css'

export function Login(){

    const Navigate = useNavigate()

    const handleLogin = () => {
        Navigate ("/cadastro")
    }

    return (
    <>
        <div >
            <Header></Header>
            <Div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <H3 className="Auth-form-title">Login</H3>
                    <div className="form-group mt-3">
                        <label>Email:</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Digite seu email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha:</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Digite a senha"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button type="submit" className="btn-primary" onClick={handleLogin}>
                        Entrar
                        </Button>
                    </div>
                    
                    </div>
                </form>
            </Div>

            <div className="home-footer position-relative top-100">
                <Footer></Footer>
            </div>
        </div>
    </>
    )
}