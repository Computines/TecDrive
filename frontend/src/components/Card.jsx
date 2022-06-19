import React from "react";
import "../styles/Card.css";

function Card({ person }) {
    
    const names = [
        <>Geovanny García Downing<br/>
        geogd.712@estudiantec.cr</>,
        <>Diana Mejías Hernández<br/>
        dmejias08@estudiantec.cr</>,
        <>Ramsés Gutiérrez Rodríguez<br/>
        ramsensei@estudiantec.cr</>,
        <>Valesska Blanco Montoya<br/>
        valesskablanco@estudiantec.cr</>
    ]
    const texts = [
        "Desarrollar este servicio fue todo un reto y un sueño hecho realidad. Aprendimos de nuevas tecnologías para realizar un trabajo con excelencia Espero que pueda ser de ayuda para muchas personas",
        "El desarrollo de esta aplicación conlleva mucho aprendizaje tanto individual como en equipo. Demostramos lo que somos capaces y nuestras habilidades para aportar en un proyecto conjunto",
        "El proyecto ha sido muy revelador e inspirador impulsando el aprendizaje de múltiples tecnologías para unificarlas en una aplicación única como lo es esta",
        "Nuestro paso por la carrera de Ingeniería en Computadores ha tenido como resultado un gran aprendizaje,  así como grandes retos que como equipo asumimos y con el mayor esfuerzo completamos"
    ]

    return (
        <div className="card">
            <div className="card-img" id={"card-img-" + person}/>
            <p className="card-name">{names[person]}</p>
            <p className="card-content">{texts[person]}</p>
        </div>
    );
}

export default Card;