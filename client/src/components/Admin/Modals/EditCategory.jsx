import Input from "../../Atoms/Input";
import Grid from "../../Atoms/Grid";
import {useEffect, useState} from "react";
import Button from "../../Atoms/Button";
import {useDispatch, useSelector} from "react-redux";
import {hideModal, showModal} from "../../../reducers/modalReducer";
import {putCategory} from "../../../actions/category";

const EditCategory = (props) => {
    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [background, setBackground] = useState("")

    const current_category = useSelector(state => state.category.currentCategory)

    const dispatch = useDispatch()

    useEffect(() => {
        setName(current_category.name)
        setColor(current_category.color)
        setBackground(current_category.background)
    }, [current_category]);

    const editHandler = () => {
        dispatch(showModal())
        const data = {
            "_id": current_category._id,
            "name": name,
            "color": color,
            "background": background
        }
        dispatch(putCategory(data))
        dispatch(hideModal())
    }

    return (
        <Grid>
            <Input value={name} setValue={setName} placeholder={"Name"}/>
            <Input value={color} setValue={setColor} margin={"14px 0 0 0"} padding={"0 0 14px 0"} placeholder={"HEX Text color"}/>
            <Input value={background} setValue={setBackground} margin={"14px 0 0 0"} placeholder={"HEX Background color"}/>

            <Grid margin={"28px 0 0 0"} columns={"1fr"} justifyItems={"center"}>
                <div>
                    <Button background={"#3354FF"} justifySelf={"center"} onClick={editHandler}>Edit</Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default EditCategory