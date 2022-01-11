import * as S from "./Styled";
import Grid from "../../Atoms/Grid";
import {Heading} from "../../Atoms/Typography";
import ArrowLeft from "../../../assets/images/arrow-left.svg";
import {useDispatch, useSelector} from "react-redux";
import {hideWindow} from "../../../redux/reducers/overWindowReducer";

const OverWindow = () => {
    const overWindow = useSelector((state) => state.overWindow);
    const dispatch = useDispatch();

    return (
        <S.StyledOverWindow show={overWindow.show}>
            <S.Wrapper>
                <Grid columns={"1fr 1fr 1fr"}>
                    <Grid justifyItems={"start"}>
                        <img
                            onClick={() => {
                                dispatch(hideWindow());
                            }}
                            style={{cursor: "pointer"}}
                            src={ArrowLeft}
                            alt=""
                        />
                    </Grid>
                    <Grid justifyItems={"center"}>
                        <Heading level={2}>{overWindow.title || "Test"}</Heading>
                    </Grid>
                    <div></div>
                </Grid>
                <Grid margin={"35px 0 0 0"}>{overWindow.component || "test text"}</Grid>
            </S.Wrapper>
        </S.StyledOverWindow>
    );
};

export default OverWindow;
