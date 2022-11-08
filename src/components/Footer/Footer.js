
import {Footer, Container } from './FooterStyles'




export default function Footer2(){

    return (<>
        <Footer>
            <Container class="container text-white">
                <div class="row py-3">
                    <div class="col-12 col-md-4 text-center text-md-left ">
                        &copy; 2022 - Ecommerce
                    </div> 
                    <div class="col-12 col-md-4 text-center">
                        <a href="#" class="texte-decotarion-none text-white">Política de Privacidade</a>
                    </div>
                    <div class="col-12 col-md-4 text-center text-white">
                        <a href="../login" class="texte-decotarion-none text-dark text-white">Login</a>
                    </div>
                </div>
            </Container>
        </Footer>
    </>)

}