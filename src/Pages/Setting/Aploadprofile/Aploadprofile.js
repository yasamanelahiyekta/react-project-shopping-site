import { Button } from "react-bootstrap"
import "./Aploadprofile.css"
export const Aploadprofile = () => {
    return (
        <>
            <form className="for">
                <input className="inpu" type="file" />
                <Button className="mt-1" variant="outline-light">save</Button>
            </form>

        </>
    )
}
export default Aploadprofile