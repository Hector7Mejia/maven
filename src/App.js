
import './App.css'
import Ticket from './components/Ticket'
import TicketForm from './components/TicketForm'

import { useState, useEffect } from "react"

function App() {
    const [tickets, setTickets] = useState(() => {
        // accessing tickets from local storage using getItem() and key
            const savedTicket = localStorage.getItem("ticket");
            const initialValue = JSON.parse(savedTicket);
            return initialValue || "";
        })

    const handleAddTicket = (description,name) => {
        const ticket = {
            description,
            name,
            id: Math.floor(Math.random() * 1000000)
        }
        setTickets([ticket, ...tickets])
        // console.log("New Ticket:", description)
    }

    useEffect(() => {
        localStorage.setItem("ticket", JSON.stringify(tickets))
    }, [tickets])

    const handleDeleteTicket = (id) => {
        setTickets(tickets.filter(joke => joke.id !== id))
        console.log("delete joke", id)
    }

    const handleSort = () => {
        setTickets([...tickets].sort((a, b) => b.likes - a.likes))
    }

    return (
        <div className="">
            <button onClick={handleSort}>Sort</button>
            <TicketForm onAddTicket={handleAddTicket} />

            {tickets.map(ticket => (
                <Ticket
                    key={ticket.id}
                    onDelete={handleDeleteTicket}
                    {...ticket} />
            ))}
        </div>
    )
}

export default App