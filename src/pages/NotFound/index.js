import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { H1 } from "./style";




export function NotFound(){


    return (<>
        <Header></Header>

        <H1>Ops...<br/>Página não encontrada.</H1>
        <div className="home-footer position-relative top-100">
            <Footer></Footer>
        </div>
    </>)
}