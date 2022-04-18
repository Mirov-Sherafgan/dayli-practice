import React from 'react';
import users from "../../images/user.png";
import location from "../../images/location.png";
import server from "../../images/Server.png";

const Statistics = () => {
    const icons = [
        {id: 1, src: users, alt: 'Users', name: 'Users', quantity: 90},
        {id: 2, src: location, alt: 'Locations', name: 'Locations', quantity: 30},
        {id: 3, src: server, alt: 'Server', name: 'Servers', quantity: 50}
    ]
    return (
        <div>
            {icons.map(icon => <span key={icon.id}>
                    <img src={icon.src} alt={icon.alt}/>
                    <h3>{icon.quantity}+</h3>
                    <p>{icon.name}</p>
                </span>)}
        </div>
    );
};

export default Statistics;