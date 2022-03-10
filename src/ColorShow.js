import { useParams } from "react-router-dom";

const ColorShow = () => {
    const {color} = useParams()
    return(
        <h1>this is {color}</h1>
    )
}

export default ColorShow;