import { FunctionComponent } from "preact";
import { Job } from "../types.ts";

const ListElement: FunctionComponent<{
    myJob: Job,
    selected: boolean
}> = (props) => {

    const { company_name, title, location } = props.myJob;

    // Función para obtener una imagen aleatoria de tu lista
    const getRandomImage = () => {
        const images = [
            'linkedin1.jpg',
            'linkedin2.jpg',
            'linkedin3.jpg',
            'linkedin4.jpg',
            'linkedin5.jpg',
        ];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    // Obtener la ruta de la imagen aleatoria
    const imageSrc = getRandomImage();

    return (
        <div class={`list-element ${props.selected ? 'selected' : ''}`}>
            <div>
                {/* Utilizar imageSrc como fuente para la etiqueta img */}
                <img src={imageSrc} alt="Imagen de oferta" class="img-oferta" />
                <p class="titulo-oferta">{title}</p>
                <p class="compania-oferta">{company_name}</p>
                <p class="ubicacion-oferta">{location}</p>
                <p class="promocionado">
                    Promocionado
                    <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="Icono de LinkedIn" class="img-linkedin" />
                </p>
            </div>
            <hr />
        </div>
    ); 
};

export default ListElement;


