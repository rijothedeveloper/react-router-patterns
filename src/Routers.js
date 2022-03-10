import { Routes, Route } from "react-router-dom";
import Colors from "./Colors";
import ColorShow from "./ColorShow";
import DogDetails from "./DogDetails";
import Dogs from "./Dogs";
const Routers = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Dogs />} />
            <Route exact path="/dogs/:name" element={<DogDetails />} />
            <Route exact path="/colors/:color" element={<ColorShow />} />
            <Route exact path="/colors" element={<Colors />} />
        </Routes>
    )
}

export default Routers;