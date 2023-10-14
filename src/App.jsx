import './App.css';
import {useState} from 'react';
import PersonList from './conponents/PersonList/PersonList.jsx';

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'David K',
      image: 'https://randomuser.me/api/portraits/men/20.jpg'
    }
  ])

  const clearListHandler = () => {
    setPersons([])
  }

  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-teal-600">
        <h1 className="text-white text-3xl font-bold mb-3" data-test="title">Birthday Remider App</h1>
        <section className="w-5/6 h-auto flex flex-col justify-stretch items-center bg-white shadow-2xl p-2 rounded">
          <p className="self-end text-gray-900 font-thin p-3 ">{persons?.length} birhtdays today!</p>
          <PersonList persons={persons}  />
          <div className="inline-flex w-full border-t-2 pt-2">
            <button className="w-fit bg-teal-900 hover:bg-teal-700 text-white p-3 mr-2 rounded" onClick={clearListHandler} data-testid="clear">X</button>
            <button className="w-full flex-grow bg-teal-700 hover:bg-teal-800 text-white p-3 rounded">Add Item +</button>
          </div>
        </section>
      </div>
  )
}

export default App
