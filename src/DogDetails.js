import { useParams } from "react-router-dom";

const DogDetails = () => {
    const { name } = useParams();
    return(
        <img src={require(`./images/${name.toLowerCase()}.jpg`)} />
    )
}

export default DogDetails;