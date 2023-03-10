import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clerk','Diana','Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'vue'
        }
    ]
    
    // const personList = persons.map(person => <Person key= {person.id} person = {person} />)
    const nameList = names.map((name, index) => <h2 key = {index} > {index} {name}</h2>)
    // const names = ['Bruce','Clerk','Diana']
    // <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    
    
    return (
        <div>
            {nameList}
            { /* <h2>{ names[0] }</h2> 
           <h2>{ names[1] }</h2> 
           <h2>{ names[2] }</h2> */}
        </div>
    )

}
export default NameList