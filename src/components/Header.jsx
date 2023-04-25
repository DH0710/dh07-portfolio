import React, {useState} from 'react'




const Header = () => {
    const [active, setActive] = useState("nav_menu")
    const [icon, setIcon] = useState("nav_toggler")

    const navToggle = () => {
        if(active === "nav_menu") {
            setActive("nav_menu nav_active")
        } else setActive("nav_menu")


        if(icon === "nav_toggler") {
            setIcon("nav_toggler")
        } else setIcon("nav_toggler")

    }

   

    return (
        <header>
            <div className='headContainer flexSB'>
                <div className='logo'>
                    <img src="./images/services-portfolio.png" alt="" />
                </div>
                <nav>
                    <ul className={active}>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
                <div onClick={navToggle} className={icon}>
                    <i className="fas fa-bars"></i>
                </div>


            </div>
        </header>
    )
}

export default Header
