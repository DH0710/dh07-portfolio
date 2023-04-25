import React, { useState } from "react"
import data from "./data"



const Portfolio = () => {
  const [item, setItem] = useState(data)

  const filterItem = (cateItem) => {
    const updatedItem = data.filter ((curElem) => {
      return curElem.category === cateItem
    })

    setItem(updatedItem)
  }

  return (
    <div>
      <section id="Portfolio">
      <section className='Portfolio mtop'>
        <div className='container'>
          <div className='head flexSB'>
            <div className='left'>
              <span className='baget'>Portfolio</span>
              <h1 className='title'>Creative Projects</h1>
            </div>
            <div className='links' >
              <ul className='flexSB'>
                <li className='active' onClick={()=> setItem(data)  }>
                  All
                </li>
                <li onClick={()=> filterItem("The Weather App/Random Word Generator")}>Weather App</li>
                <li onClick={()=> filterItem("Note Taker")}>Task Tracker</li>
                <li onClick={()=> filterItem("OTP")} >Password Generator</li>
              </ul>
            </div>
          </div>

          <div className='content-grid-mtop'>
            {
              item.map((elem) => {
                const { cover, title, category, link } = elem
                return (
                  <>
                    <div className='box' >
                      <div className="img">
                        <a href={link}>
                        < img src={cover} alt=""/>
                        </a>
                       
                      </div>
                      <div className="overlay">
                        <h1>{title}</h1>
                        <p>{category}</p>
                        
                        
                      </div>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
      </section>
      </section>
    </div>
  )
}

export default Portfolio
