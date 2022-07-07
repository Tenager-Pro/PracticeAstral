import { useEffect, useState } from "react"
import axios from "axios"

function Main(){
  const [list, setList] = useState([])
  const [curLimit, setCurLimit] = useState(3)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching){
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=' + curLimit)
      .then(response => {
        setList(response.data)
        setCurLimit(curLimit + 3)
        console.log(response.data)
      })
      .finally(() => setFetching(false))
    }
  }, [fetching])

  useEffect(() => {
    document.getElementById('loadButton').addEventListener('click', buttonHandler)
    document.addEventListener('scroll', scroolHandler)
    return function (){
      document.getElementById('loadButton').removeEventListener('click', buttonHandler)
      document.removeEventListener('scroll', scroolHandler)
    };
  }, [])


  const scroolHandler = (e) =>{
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight)<100){
      setFetching(true)
    }
  }
  
  const buttonHandler = () =>{
    setFetching(true)
  }


  return (
    <>
      <div className="List">
              { !!list.length && list.map(card => {
                  return(
                  <div className="Card" key={card.id}>
                    <img className="Image" src={card.url}/>
                    <div className="Body">
                        Дата добавления:
                        <div className="Date">
                        20 Мая
                        </div> 
                    </div>
                    <input className="hiddenBox" type="checkbox" id="button" width="20px"/>
                    <svg className="Like" viewBox="0 0 32 29.6" width="20px">
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                  </div>
              )})}
        </div>
              <div className="ButtonWrapper">
                <div id="loadButton" className="LoadButton">
                 ЗАГРУЗИТЬ ЕЩЕ
                </div>
              </div>
              
              <div className="Page">
                <span>{Math.floor((curLimit-4)/9)+1}</span>
              </div>
        
    </>
    
   
  );
}
export default Main;