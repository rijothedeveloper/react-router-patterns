import { useParams } from "react-router-dom";

const ColorShow = () => {
    const {color} = useParams()
    return(
        <h1 style={{backgroundColor: color}}>this is {color}</h1>
    )
}

export default ColorShow;