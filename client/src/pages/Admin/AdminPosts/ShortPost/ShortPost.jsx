import * as S from "./Styled";
import {CategoryBtn} from "../../../../components/Atoms/CategoryBtn";
import {Category, Wrapper} from "./Styled";
import {Text} from "../../../../components/Atoms/Typography";
import Grid from "../../../../components/Atoms/Grid";
import Button from "../../../../components/Atoms/Button";
import {useDispatch, useSelector} from "react-redux";
import {delPost} from "../../../../actions/post";
import {updateCurrentCategory} from "../../../../reducers/categoryReducer";
import {setWindow, showWindow} from "../../../../reducers/overWindowReducer";
import EditPost from "../../OverWindows/EditPost";

const ShortPost = (props) => {
    const posts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch()

    const EditHandler = () => {
        dispatch(updateCurrentCategory(props.category));
        dispatch(
            setWindow("Edit post", <EditPost post={posts.filter(post => post._id === props.post._id)} />)
        );
        dispatch(showWindow());
    };

    return (
        <Wrapper>
            <S.Categories>
                <Category>
                    <CategoryBtn
                        color={props.category.color}
                        background={props.category.background}
                    >
                        {props.category.name}
                    </CategoryBtn>
                </Category>
            </S.Categories>
            <S.TitleBlock>
                <Text margin={"13px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>
                    {props.post.title}
                </Text>
                {/*<Text fontSize={"18px"} fontWeight={"400"}>*/}
                {/*    Jul 24 2021*/}
                {/*</Text>*/}
            </S.TitleBlock>
            <Text fontSize={"18px"} margin={"20px 0 0 0"}>
                {props.post.content}
            </Text>
            <Grid justifyItems={"end"}>
                <div style={{marginTop: "28px"}}>
                    <Button onClick={EditHandler} primary>Edit</Button>
                    <Button
                        onClick={() => {
                                dispatch(delPost(props.post._id));
                        }}
                        danger
                        margin={"0 0 0 15px"}
                    >
                        Delete
                    </Button>
                </div>
            </Grid>
        </Wrapper>
    );
};

export default ShortPost;
