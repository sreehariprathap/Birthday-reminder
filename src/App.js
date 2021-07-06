
import './App.css';
import { useState } from 'react';
import {data} from './data'

function App() {
const [person,setPerson] = useState(data)

const removeItem=(id)=>{
  let newPerson = person.filter((person)=>person.id!==id)
setPerson(newPerson)
}
  return (
    <>

<h1>Birthdays This month</h1>

<div className="cards">
  {person.map((birthdayboy)=>{
    const {id,name,birthday} = birthdayboy;
    return (
      <div className="birthday" key={id}>
        <h3>{name}</h3>
        {/* <h4>{birthday}</h4> */}
        <button className="done" onClick={
          ()=>removeItem(id)
        }>Done</button>
      </div>
    )
  })

  }

</div>

    </>

  );
}

export default App;
