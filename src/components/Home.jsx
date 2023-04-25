import React from 'react'

const Home = () => {
  return (
    <div id="Home">
      <section classHome="home">
        <div className='container flexSB'>
            <div className='left-row'>
                <h1><span>DAMIEN HEBERT</span> </h1>
                <h3>
                    Front End Developer
                </h3>
            </div>
            <div className='right-row'>
                <div className="img">
                    <img src="./images/linkedIn-profile.jpg" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Home
