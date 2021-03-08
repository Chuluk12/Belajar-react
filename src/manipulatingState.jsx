import {useState} from'react'

const OnChangePersons = () => 
{
    const initialstate = [
        {
            name: "michael",
            age: 20 
        },
        {
            name: "ricky",
            age: 19
        }
        
    ]
    const [person, setPersons] = useState(initialstate)
    const changePersons = () => 
    {
        setPersons([
            {name : 'keysa', age: 21},
            {name : 'adi', age: 19},
            {name : 'silvy', age: 22}
        ])
    }
    return(
    
        <>
        {
            person.map(item => (
                <p>Nama saya {item.name} umur saya {item.age}</p>
           ))
        }
        <button onClick={changePersons}>Ganti State</button>
        </>
    ) 
    
}

export default OnChangePersons