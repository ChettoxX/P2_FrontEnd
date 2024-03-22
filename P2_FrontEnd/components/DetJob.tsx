import { FunctionComponent } from "preact";
import { Job } from "../types.ts";

const JobDetail: FunctionComponent<Job> = (props) => {
    const { company_name, title, remote, tags, location, description, url } = props;

    const descriptions = [
        `
        <p>💼 Hibrido</p>
        <p>🏢 De 1.001 a 5.000 empleados · Servicios y tecnología de la información</p>
        <p>👨🏼‍💻 3 antiguos empleados de la empresa trabajan aquí · 1 antiguo empleado de la universidad trabaja aquí</p>
        <p>✔ 7 de 10 aptitudes coinciden con tu perfil, podrías encajar muy bien</p>
        <p>💡 Ve una comparación con los otros 12 solicitantes</p>
        `,
        `
        <p>💼 Remoto</p>
        <p>🏢 Menos de 500 empleados · Marketing digital</p>
        <p>👨🏼‍💻 2 antiguos empleados de la empresa trabajan aquí · 2 antiguos empleados de la universidad trabajan aquí</p>
        <p>✔ 5 de 8 aptitudes coinciden con tu perfil, buena coincidencia</p>
        <p>💡 Compara tu perfil con 10 otros solicitantes</p>
        `,
        `
        <p>💼 Presencial</p>
        <p>🏢 Más de 10.000 empleados · Finanzas y seguros</p>
        <p>👨🏼‍💻 5 antiguos empleados de la empresa trabajan aquí · 2 antiguos empleados de la universidad trabajan aquí</p>
        <p>✔ 8 de 10 aptitudes coinciden con tu perfil, eres un candidato ideal</p>
        <p>💡 Compara tu perfil con los 15 otros solicitantes</p>
        `,
        `
        <p>💼 Flexible / Remoto</p>
        <p>🏢 De 500 a 1.000 empleados · Salud y bienestar</p>
        <p>👨🏼‍💻 4 antiguos empleados de la empresa trabajan aquí · 3 antiguos empleados de la universidad trabajan aquí</p>
        <p>✔ 6 de 8 aptitudes coinciden con tu perfil, tienes un buen potencial</p>
        <p>💡 Descubre cómo te comparas con los 8 otros solicitantes</p>
        `,
        `
        <p>💼 Remoto total</p>
        <p>🏢 Startup de 50 a 200 empleados · Tecnología y software</p>
        <p>👨🏼‍💻 1 antiguo empleado de la empresa trabaja aquí · Ningún antiguo empleado de la universidad trabaja aquí</p>
        <p>✔ 4 de 6 aptitudes coinciden con tu perfil, podría ser una buena oportunidad</p>
        <p>💡 Mira cómo te posicionas entre los 5 otros solicitantes</p>
        `,
        `
        <p>💼 Hibrido</p>
        <p>🏢 De 200 a 500 empleados · Energía renovable</p>
        <p>👨🏼‍💻 2 antiguos empleados de la empresa trabajan aquí · 1 antiguo empleado de la universidad trabaja aquí</p>
        <p>✔ 9 de 10 aptitudes coinciden con tu perfil, estás en la cima de la lista</p>
        <p>💡 Examina las habilidades de los otros 7 solicitantes</p>
        `,
        `
        <p>💼 Presencial con opciones de teletrabajo</p>
        <p>🏢 Multinacional de 5.001 a 10.000 empleados · Manufactura y producción</p>
        <p>👨🏼‍💻 6 antiguos empleados de la empresa trabajan aquí · 4 antiguos empleados de la universidad trabajan aquí</p>
        <p>✔ 7 de 9 aptitudes coinciden con tu perfil, tienes grandes posibilidades</p>
        <p>💡 Ve cómo se comparan los otros 10 solicitantes</p>
        `
    ];
    

    const randomIndex = Math.floor(Math.random() * descriptions.length);
    const randomDescription = descriptions[randomIndex];

    return (
        <div class="job-detail w-50">      
            <h1>{title}</h1>
            <p class="job-detail-location">{location}</p>
            <div dangerouslySetInnerHTML={{ __html: randomDescription }} />
            <br></br>
            
           
            <div class="action-buttons">
                <a class="link-oferta" href={url}>Solicitar</a>
                <a class="link-oferta" href={url}>Guardar</a> 
            </div>
    
            <div>
                <br></br>
                <h2> Acerca del empleo</h2>
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
    
};

export default JobDetail;
