import React from "react";
import { ReactDOM } from "react";


const today = new Date();
const year = today.getFullYear();
console.log(year);

function Footer(){
    return <footer>
        <p>CopyRight © {year}</p>
    </footer> 
}

export default Footer;