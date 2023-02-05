import React,{useState} from "react"
export default function Meme(){
    const[meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(()=>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])
  
    function getMeme(){

        const randomNumber=Math.floor(Math.random()*allMemes.length)
        const url=allMemes[randomNumber].url
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage:url
            }
        })
    }

    function handleChange(event){
        const {name,value}= event.target
        setMeme(prevMeme=>({
                ...prevMeme,
                [name]:value
        })
        )
    }

    return (
        <main>
            <div className="form">
                <input
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button className="form-button" onClick={getMeme}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt=" " className="meme-image"></img>
            <h2 className="meme--text top"> {meme.topText}</h2>
            <h2 className="meme--text bottom"> {meme.bottomText}</h2>
            </div>
        </main>
    )
}