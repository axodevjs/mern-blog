import * as S from './StyledPost';
import {Link} from "react-router-dom";
import {Text} from "../../components/Atoms/Typography";
import MainLayout from "../../components/Layouts/MainLayout";

function Post() {
    return (
        <MainLayout>
            <S.StyledPost>
                <Link to={"/"}>
                    <Text fontSize={"18px"} align={"center"}>🏠 Back to homepage</Text>
                </Link>
                <S.TitleWrapper>
                    <Text fontSize={"36px"} fontWeight={"bold"} color={"white"} padding={"0 15px"}
                          background={"#473BF0"}>Hello World! or why this blog exists?</Text>
                </S.TitleWrapper>
                <Text margin={"29px 0 0 0"} color={"#818181"} fontSize={"18px"}>Published Jul 24 2019</Text>
                <div className="article">
                    <p>I think the single most used way to start a React app is using It’s very convenient.</p>
                    <p>One problem you might stumble upon is how to connect it to a backend you already have, or one you
                        might want to create.</p>

                    <h1>Introduction</h1>
                    <p>When developing the app you want to take advantage of hot reloading and all the other convenient
                        features of create-react-app. How can you combine that with a backend without having to use CORS
                        on the server and worry about ports?</p>
                    <p>When developing the app you want to take advantage of hot reloading and all the other convenient
                        features of create-react-app. How can you combine that with a backend without having to use CORS
                        on the server and worry about ports?

                        I am going to provide an example using Express in the post, but this applies to any other
                        framework.</p>
                </div>
            </S.StyledPost>
        </MainLayout>
    );
}

export default Post;
