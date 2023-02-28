import { useState } from "react"

export default function TicketForm({ onAddTicket }) {
    const [text, setText] = useState("")
    // const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTicket(text)
        // onAddTicket(name)
        setText("")
        // setName("")
        // console.log(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Ticket</label>
            {/*<input*/}
            {/*    type="name"*/}
            {/*    id="name"*/}
            {/*    value={name}*/}
            {/*    onChange={(e) => setName(e.target.value)}*/}
            {/*/>*/}
            <input
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Ticket</button>
        </form>
    )
}