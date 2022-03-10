import { useState } from "react"
import { Link } from "react-router-dom"
import './Colors.css'

const colors = ["red", "blue", "green"]
const Colors = () => {
    const onAddButtonClick = () => {
        setShowColorForm(true)
    }
    const onFormChange = (evt) => {
        setSelectedColor(evt.target.value)
    }
    const handleAddColor = (evt) => {
        colors.push(selectedColor)
        setShowColorForm(false)
    }
    const [showColorForm, setShowColorForm] = useState(false)
    const [selectedColor, setSelectedColor] = useState("")
    if(showColorForm){
        return(
            <form>
                <input type="text" onChange={onFormChange} value={selectedColor}></input>
                <button onClick={handleAddColor}>Add Color</button>
            </form>
        )
    }
    const colorLinks = colors.map(color => <Link to={`/colors/${color}`}> {color} </Link>)
    return(
        <>
            <div className="colorButton">
                <button onClick={onAddButtonClick}>Add a color</button>
            </div>
            <div className="colors">
                {colorLinks}
            </div>
        </>

    )
}

export default Colors;