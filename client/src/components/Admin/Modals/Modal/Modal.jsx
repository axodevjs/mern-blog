import * as S from './Styled';
import Button from "../../../Atoms/Button";
import Grid from "../../../Atoms/Grid";
import {Heading} from "../../../Atoms/Typography";

const Modal = (props) => {
    const showModal = props.showModal;
    const handleClose = props.handleClose;

    return (
        <S.StyledModal showModal={showModal}>
            <S.Background onClick={handleClose}/>
            <S.ModalWrapper>
                <Heading padding={"0 0 23px 0"}  textAlign={"center"} level={3}>{props.title}</Heading>
                {props.children}
            </S.ModalWrapper>
        </S.StyledModal>
    )
}

export default Modal;