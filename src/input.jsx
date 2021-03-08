import { useState } from 'react'

const Input = () => 
{
    const [input, setInput] = useState ({
        user : ''
    });

    const {user} = useState (input) ;

    const onChangeInput = (e) => 
    {
        setInput ({
            ...input,
            [e.target.name] : e.target.value
        }); 
    }

    return(
        <>
        {
            input.map(item => (
                <span> {item.user} </span>
            ))
        }
        <div>
            <label htmlFor="input"> Masukan </label>
            {input.user}
            <br/>
            <input type="text"
            name="user"
            onChange={onChangeInput}
            value={user}
            />
            </div>
        <button onClick={onChangeInput}>ON</button>
        </>
    )
}

export default Input