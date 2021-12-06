import * as S from './Styled';
import {CategoryBtn} from "../../../components/Atoms/CategoryBtn";
import {Category, Wrapper} from "./Styled";
import {Text} from "../../../components/Atoms/Typography";

const ShortPost = () => {
    return (
        <Wrapper>
            <S.Categories>
                <Category>
                    <CategoryBtn>Next</CategoryBtn>
                </Category>
                <Category>
                    <CategoryBtn>Next</CategoryBtn>
                </Category>
            </S.Categories>
            <S.TitleBlock>
                <Text margin={"13px 0 0 0"} fontSize={"24px"} fontWeight={"700"}>Hello world or why this blog exists</Text>
                <Text fontSize={"18px"} fontWeight={"400"}>Jul 24 2021 </Text>
            </S.TitleBlock>
            <Text fontSize={"18px"} margin={"20px 0 0 0"}>Vitae consequat imperdiet in pellentesque egestas egestas consectetur pretium. Id condimentum phasellus a amet aenean auctor. Sapien pellentesque massa in nunc imperdiet ut tristique. Integer adipiscing massa, at pharetra dui...</Text>
        </Wrapper>
    );
}

export default ShortPost;