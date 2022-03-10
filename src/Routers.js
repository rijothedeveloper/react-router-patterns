import { Routes, Route } from "react-router-dom";
import DogDetails from "./DogDetails";
import Dogs from "./Dogs";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Dogs />} />
            <Route path="/dogs/:name" element={<DogDetails />} />
        </Routes>
    )
}

export default Routers;