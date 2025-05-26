// import { Link } from 'react-router-dom'; esto se importa para utilizar <Link to={`/detail/${id}`}>
import './styles.css';
import style from './eventItem.module.css' // se importa el modulo de css para dar estilos

const EventItiem = ({ info, id, name, image, onEventClick }) => {
    
const handlerSeeMoreClick = (evt) => { 
                evt.stopPropagation();
                onEventClick(id)
                };

    return (
        <div className='event-item-container' /*se le debe asignar el className de esta forma = {style.eventItemContainer} esto le asigna un id unico para que no colisionen los estilos*/>
            <img src={image} alt={name} width={200} height={200} />
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info'>{info}</p>
                <button onClick={handlerSeeMoreClick} className='see-more-btn'>
                    {/* <Link to={`/detail/${id}`}>
                        Ver mas
                    </Link> */}
                    Ver mas
                    </button>
            </div>
        </div>
    );
};

export default EventItiem;