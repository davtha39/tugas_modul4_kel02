import { useEffect, useState } from "react";

export function getList() {
    return fetch('https://reqres.in/api/unknown')
      .then(data => data.json())
  }
  
export function setItem(item) {
   return fetch('https://reqres.in/api/unknown', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ item })
   })
     .then(data => data.json())
}

export default function Useeffect(){
    const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
        {list.map(item => <li key={item.id}>{item.year}</li>)}
        {list.map(item => <li key={item.id}>{item.color}</li>)}
        {list.map(item => <li key={item.id}>{item.pantone_value}</li>)}
      </ul>
      <form>
       <label>
         <p>New Item</p>
         <input type="text" />
       </label>
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}