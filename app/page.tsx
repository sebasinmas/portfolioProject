import CSS from "csstype";
import { CSSProperties } from "react";

const navBar:CSSProperties = {
    margin:'0',
    padding:'0',
    listStyleType:'none'
};
const navBarEl:CSSProperties = {
    margin:'0',
    padding:'0',
    listStyleType:'none'
};


const Home = () =>{
    return(
        <div>
            <nav>
                <ul style={navBar}>
                    <li>Inicio</li>
                    <li>Contacto</li>
                    <li>Creditos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;

