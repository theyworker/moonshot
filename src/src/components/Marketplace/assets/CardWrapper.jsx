import React from 'react';
import { TicketCard } from '../TicketCard';

export const CardWrapper = ({children}) => {
    const locations = ['New York', 'Los Angeles', 'Miami', 'Chicago', 'San Francisco', 'Seattle', 'Boston', 'Las Vegas', 'Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Quebec City', 'Edmonton', 'Winnipeg', 'Halifax', 'Victoria'];
    const getRandomDate = () => {
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(Math.random() * 10));
        return date;
    }
    const getRandomPrice = () => {
        return Math.floor(50 + Math.random() * 100);
    }

    const getRandomRoute = () => {
        const from = locations[Math.floor(Math.random() * locations.length)];
        let to;
        do {
            to = locations[Math.floor(Math.random() * locations.length)];
        } while (to === from);
        return `${from} to ${to}`;
    }
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: '20px'}}>
            {Array.from({ length: 12 }).map((_, index) => (
                <TicketCard 
                key={index}
                route={getRandomRoute()} 
                date={getRandomDate()} 
                price={getRandomPrice()}
                />
            ))}
        </div>
    );
}