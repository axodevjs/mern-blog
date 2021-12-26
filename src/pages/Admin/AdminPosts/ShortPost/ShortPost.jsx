import * as S from './Styled';
import {CategoryBtn} from "../../../../components/Atoms/CategoryBtn";
import {Category, Wrapper} from "./Styled";
import {Text} from "../../../../components/Atoms/Typography";
import Grid from "../../../../components/Atoms/Grid";
import Button from "../../../../components/Atoms/Button";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const ShortPost = (props) => {
    const categories = useSelector(state => state.category.categories)
    const [category, setCategory] = useState(categories.filter(category => category._id === props.post.category_id))

    return ( 
        <Wrapper>
            <S.Categories>
                <Category>
                    <CategoryBtn onClick={() => console.log(category)} color={category.color} background={category.background}>{category.name}</CategoryBtn>
                </Category>
            </S.Categories>
            <S.TitleBlock>
                <Text margin={"13px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>{props.post.title}</Text>
                <Text fontSize={"18px"} fontWeight={"400"}>Jul 24 2021</Text>
            </S.TitleBlock>
            <Text fontSize={"18px"} margin={"20px 0 0 0"}>{props.post.content}</Text>
            <Grid justifyItems={"end"}>
                <div style={{marginTop: "28px"}}>
                    <Button primary>Edit</Button>
                    <Button danger margin={"0 0 0 15px"}>Delete</Button>
                </div>
            </Grid>
        </Wrapper>
    );
}

export default ShortPost;