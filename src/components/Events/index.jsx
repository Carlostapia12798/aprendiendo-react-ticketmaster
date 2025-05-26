import { useNavigate } from "react-router-dom";  // es otra forma de tratar las rutas sin <Link to={`/detail/${id}`}>
import useEventData from "../../hooks/useEventsData";
import EventItiem from "./components/EvensItem";


const Events = ({searchTerm}) => {
    const { events } = useEventData();
    const navigate = useNavigate();  // se instancia el hook

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`); // se utiliza para definir los parametros en rutas y redirigir
    };

    const renderEvents = () => {
        let eventsFiltered = events;

        if (searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }
        return eventsFiltered.map((evenItem) => (
            <EventItiem 
                key={`event-item-${evenItem.id}`}
                name={evenItem.name}
                info={evenItem.info}
                image={evenItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={evenItem.id}
            />
        ));
    };


    return (
        <div>
            Eventos
            {renderEvents()} 
        </div>
    );
};

export default Events;