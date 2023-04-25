import React from 'react'
import FileSaver from 'file-saver';

const About = () => {

    const saveFile = () => {
        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "./resume/January 2023.pdf", "My_CV.pdf"
        );
        
    }

    const data = [
        {
            cover: "./images/chatbot.png",
            category: "ABOUT ME",
            title: "Creative Front Developer based in Houston, Texas",
            desc: "Hello I'm Damien! I'm a Front End Developer, who is determined and dedicated to my work. I gained my experience from Rice University Coding Bootcamp, which I started Febuary of 2022 and completed my certification in August 2022.My experience at my bootcamp ranged from maximizing the front end using Html, CSS, Javascript, and using the framework React.js. We also made our way to the back end of development utilizing Node.js, MySQL, and Express.js.This course was a 6 month duration in which we met and worked together asynchronously using zoom. I am currently working as a Environmental Field Tech for Montrose Environmental as a third party contractor in Freeport, Tx. I am looking forward to working and improving my skills as a developer to lead into a new career in the software development field",
      },   
    ]




    return (
        <div>
            <section id="About">
            <section className='about'>
                <div className='container flex'>
                    {
                        data.map((value) => {
                            return (
                                <div>
                                    <div className='left-row'>
                                        <img src={value.cover} alt="" />
                                    </div>

                                    <div className='right-row'>
                                        <span className='baget'>{value.category}</span>
                                        <h2>{value.title}</h2>
                                        <p>{value.desc}</p>
                                        <button className="primary-btn" onClick ={saveFile}> <a href="./resume/January 2023.pdf" download = "My_CV.pdf">
                                            Download CV
                                            </a>
                                            </button>
                                    </div>

                                </div>
                            )

                        })}
                </div>

            </section>
            </section>
        </div>
    )
}

export default About
