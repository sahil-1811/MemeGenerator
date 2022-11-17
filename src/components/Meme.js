import React,{useState} from "react"
import memesData from "./memesData"
export default function Meme(){
    const[meme,setMeme]=useState({
        topText:"",
        botttomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getMeme(){
        const memesArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage:url
            }
        })

    }
    return (
        <main>
            <div className="form">
                <input
                type="text"
                placeholder="Top Text"
                className="form--input"
                />
                <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                />
                <button className="form-button" onClick={getMeme}>
                    Get a new meme image 🖼
                </button>

            </div>
            <img src={meme.randomImage} alt=" " className="Meme-image"></img>
        </main>
    )
}