import Grid from "../../Atoms/Grid"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import Input from "../../Atoms/Input";
import styled from 'styled-components'

import 'highlight.js/styles/atom-one-dark.css'
import 'react-quill/dist/quill.snow.css'
import {useQuill} from 'react-quilljs';
import {formats, modules} from "./QuillConfig";
import Button from "../../Atoms/Button";

const EditPost = () => {
    const [selectedValue, setSelectedValue] = useState("");
    const categories = useSelector(state => state.category.categories)
    const [title, setTitle] = useState("")
    const {quill, quillRef} = useQuill({modules: modules, formats: formats});

    // Insert Image(selected by user) to quill
    const insertToEditor = (url) => {
        let range = quill.getSelection();
        let value = prompt('What is the image URL');
        if(value){
            quill.insertEmbed(range.index, 'image', value, "user");
        }
    };

    useEffect(() => {
       if (quill) {
           quill.getModule('toolbar').addHandler('image', insertToEditor);
       }
    }, [quill]);

    return (
        <Grid>
            <Grid columns={"1fr 1fr 1fr"}>
                <div/>
                <Grid justifyContent={"center"}>
                    <select>
                        {
                            categories.map((category) => (
                                <option key={category._id} value={category.name}>{category.name}</option>
                            ))
                        }
                    </select>
                    <Input margin={"20px 0 0 0"} type={"text"} value={title} setValue={setTitle}
                           placeholder={"Article title..."}/>
                </Grid>
                <div/>
            </Grid>
            <Grid name={"editor"} justifyContent={"center"} margin={"41px 0 0 0"}>
                <Grid>
                    <div>
                        <div>
                            <div ref={quillRef}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid></Grid>
            <Grid justifyItems={"center"}>
                <div>
                    <Button margin={"20px 0 0 0"} primary>Edit</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default EditPost