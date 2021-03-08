import {useState} from 'react'
const Twoway = () => 
{
    const initialPersons = []
    const initialPerson = {
        name : ''
        
    }

    const [person, setPerson] = useState(initialPerson)
    const[persons, setPersons] = useState(initialPersons)

    const OnChangeInput = (e) => 
    {
        setPerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }

    const addPerson = () => {
        setPersons([
            ...persons,
            person
        ])
        setPerson(initialPerson)
    }

    return(
        <>
        {
            persons.map(item => (
                <p> {item.name}</p>
            ))
        }
        <div>
            <div>
                <label htmlFor="name"> Name : </label>
                {person.name}
                <input 
                type="text"
                name="name"
                id="name"
                onChange={OnChangeInput}
                value={person.name}
                />
            </div>
        </div>
        <button onClick={addPerson}>Add Person</button>
        </>
    )
}

export default Twoway