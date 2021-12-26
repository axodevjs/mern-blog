import {Quill} from "react-quill";
import hljs from "highlight.js";
import quill from "quill";

hljs.configure({
    languages: ['javascript', 'python']
})

export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'code-block',
]

export const myToolbar = [
    ['bold', 'italic', 'underline', 'blockquote'],
    [{list: 'ordered'},
        {
            list: 'bullet'
        }
    ],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block'],
    [{size: ['small', false, 'large', 'huge']}],
    [{header: [1, 2, 3, 4, 5, 6, false]}],
]

export const modules = {
    syntax: {
        highlight: text => hljs.highlightAuto(text).value,
    },
    toolbar: {
        container: myToolbar,
        clipboard: {
            matchVisual: false,
        }
    }
}