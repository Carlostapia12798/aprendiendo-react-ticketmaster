const EventItiem = ({ info, id, name, image, onEventClick }) => {
    
const handlerSeeMoreClick = (evt) => { 
                evt.stopPropagation();
                onEventClick(id)
                };

    return (
        <div>
            <img src={image} alt={name} width={200} height={200} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handlerSeeMoreClick}>Ver mas</button>
        </div>
    );
};

export default EventItiem;