import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../src/assets/logo.png';



function Navbar(){
       const navigation = [
                { name: "Home", path: "/"},
                { name: "About", path: "/about"},
                { name: "Skills", path: "/skills"},
                { name: "Projects", path: "/projects"},
                { name: "Contact", path: "/contact"},
                
                ];

                const socialMedia = [

                    {name: 'FB', path: "/"},
                    {name: 'TW', path: "/"},
                    {name: 'IN', path: "/"},
                    {name: 'LN', path: "/"}
                ]
;


    return(
        <>

<div className="header-navbar">
    <div className="container">
        <div className="header-inner">
<div className="logo logodesigngit">
            <img src={Logo} alt=""/>
        </div>
        
        <nav>
            <ul>

             {navigation.map(item =>(
                <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                    </li>

             ))}
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li> */}
            </ul>
        </nav>

        <div className="request-btn">
            <a href="#">
                Get A Quote!
            </a>
        </div>

        <div className="socialmedia-icons">
            <ul>
                    {socialMedia.map(item =>(
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>

                    ))}

                {/* <li><a href="#">FB</a> </li>
                <li><a href="#">IN</a> </li>
                <li><a href="#">X</a> </li>
                <li><a href="#">YT</a> </li>
                <li><a href="#">LN</a> </li> */}
            </ul>
        </div>
    </div>
        </div>
 

</div>

       
        </>
    )
}

export default Navbar;