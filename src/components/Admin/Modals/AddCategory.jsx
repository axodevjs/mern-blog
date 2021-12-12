import Input from "../../Atoms/Input";
import Grid from "../../Atoms/Grid";
import {useState} from "react";
import Button from "../../Atoms/Button";
import {useDispatch} from "react-redux";
import {hideModal} from "../../../reducers/modalReducer";
import {createCategory} from "../../../actions/category";

const AddCategory = (props) => {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [background, setBackground] = useState("")

    const dispatch = useDispatch()

    const addHandler = () => {
        const data = {
            "name": name,
            "color": color,
            "background": background
        }
        dispatch(createCategory(data))
        dispatch(hideModal())
    }

    return (
        <Grid>
            <Input value={name} setValue={setName} placeholder={"Name"}/>
            <Input value={color} setValue={setColor} margin={"14px 0 0 0"} padding={"0 0 14px 0"} placeholder={"HEX Text color"}/>
            <Input value={background} setValue={setBackground} margin={"14px 0 0 0"} placeholder={"HEX Background color"}/>

            <Grid margin={"28px 0 0 0"} columns={"1fr"} justifyItems={"center"}>
                <div>
                    <Button typ background={"#3354FF"} justifySelf={"center"} onClick={addHandler}>Add</Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default AddCategory