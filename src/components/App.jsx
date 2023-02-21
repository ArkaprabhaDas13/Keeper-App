import React from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function createNote(curr){

    console.log(curr);
    return <Note  title={curr.title} content={curr.content}/>
    
}

function App(){
    return <div>
        <Header/>
        
        {notes.map((item)=>{
            return <Note key={item.key} title={item.title} content={item.content}/>
        })}

        {/* {notes.map(createNote)} */}

        <Footer/>
    </div>
}

export default App;