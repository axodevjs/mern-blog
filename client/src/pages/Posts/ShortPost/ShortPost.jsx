import * as S from "./Styled";
import {CategoryBtn} from "../../../components/Atoms/CategoryBtn";
import {Category, Wrapper} from "./Styled";
import {Text} from "../../../components/Atoms/Typography";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ShortPost = (props) => {
    const categories = useSelector((state) => state.category.categories);

    return (
        <Link to={`/posts/${props.post._id}`}>
            <Wrapper>
                {props.category ? (
                    <S.Categories>
                        <Category>
                            <CategoryBtn background={props.category.background}
                                         color={props.category.color}>{props.category.name}</CategoryBtn>
                        </Category>
                    </S.Categories>
                )
                :
                    (categories)
                }

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
            </Wrapper>
        </Link>
    );
};

export default ShortPost;
