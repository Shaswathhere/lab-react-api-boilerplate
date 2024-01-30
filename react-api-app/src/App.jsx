import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => setData(res.data.books))
    .catch((error) => console.error(error))
  },[])

  return (
    <>
      {
        data.map(items => {
          return(
            <div>
              <h1>{items.title}</h1>
              <img src={items.imageLinks.thumbnail} alt="" />
              {items.authors.map((ele, i) => {
                return <p key={i}>{ele}</p>
              })}
              <p>{items.description}</p>
            </div>
           
          )
        })
      }
    </>
  )
}

export default App