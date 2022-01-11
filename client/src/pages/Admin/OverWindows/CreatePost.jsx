import Grid from "../../../components/Atoms/Grid";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../../components/Atoms/Input";
import Button from "../../../components/Atoms/Button";
import Select from "react-select";
import {createPost} from "../../../redux/actions/post";

const CreatePost = () => {
  const [selectValue, setSelectValue] = useState("");
  const categories = useSelector((state) => state.category.categories);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const handleChangeCategory = selectValue => {
    setSelectValue(selectValue);
  };

  const handleChangeContent= selectValue => {
    setContent(selectValue.target.value);
  };

  const submitHandler = () => {
    dispatch(createPost({
      title: title,
      content: content,
      category_id: categories.filter(category => category.name === selectValue.value)[0]._id
    }))
  }

  return (
    <Grid>
      <Grid columns={"1fr 1fr 1fr"}>
        <div />
        <Grid justifyContent={"center"}>          
          <Select 
          options={categories.map((category) => {
            return {value: category.name, label: category.name}
          })} 
          value={selectValue} 
          onChange={handleChangeCategory} 
          />

          <Input
            margin={"20px 0 0 0"}
            type={"text"}
            value={title}
            setValue={setTitle}
            placeholder={"Article title..."}
          />
        </Grid>
        <div />
      </Grid>
      <Grid name={"editor"} justifyContent={"center"} margin={"41px 0 0 0"}>
        <textarea value={content} onChange={handleChangeContent}/>
      </Grid>
      <Grid></Grid>
      <Grid justifyItems={"center"}>
        <div>
          <Button onClick={submitHandler} margin={"20px 0 0 0"} primary>
            Create
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
