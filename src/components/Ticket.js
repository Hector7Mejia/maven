
export default function Ticket({ name, description, id, onDelete }) {

    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    )
}