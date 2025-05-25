import useEventData from "../../hooks/useEventsData";
import EventItiem from "./components/EvensItem";


const Events = ({searchTerm}) => {
    const { events } = useEventData();

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ', id);
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