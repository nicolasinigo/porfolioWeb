import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";


const Home = () => {

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
        <>
        <Header datos={datos}/>
        <Main datos={datos}/>
        <Footer datos={datos}/>
        </>
    )
}
 
export default Home;