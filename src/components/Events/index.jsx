import { useState } from "react";
import EventItiem from "./components/EvensItem";
import EventsJSON from "../../data/events.json";





const Events = () => {
    const [data] = useState(EventsJSON);
    const events = data._embedded.events;

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ', id);
    };

    const eventsComponent = events.map((evenItem) => (
        <EventItiem 
            key={`event-item-${evenItem.id}`}
            name={evenItem.name}
            info={evenItem.info}
            image={evenItem.images[0].url}
            onEventClick={handleEventItemClick}
            id={evenItem.id}
        />
    ));


    return (
        <div>
            Eventos
            {eventsComponent} 
        </div>
    );
};

export default Events;