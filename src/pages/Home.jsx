import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { useState } from 'react'


const Home = () => {

    const [color, setColor] = useState(true)
    

    const datos={
        nombre:"Nicolas",
        apellido:"Iñigo",
        legajo:"61199",
        edad:"31",
        carrera:"Tecnicatura Universitaria en Programación",
        lenguajes:["Javascript","Python"],
        desarrollo:["HTML","CSS"],
        biblioteca: "Pandas",
        entornos:["Jupyter Notebook","Visual Studio Code"],
        baseDatos:"MySQL",
        desarrolloWeb:["Boostrap","React"],
        controlVersiones:["Git","GitHub"]
    }

    return ( 
        <div style={{backgroundColor: color===true ?"black":"white"}}>
        <Header datos={datos} color={color} setColor={setColor}/>
        <Main datos={datos}/>
        <Footer datos={datos}/>
        </div>
    )
}
 
export default Home;