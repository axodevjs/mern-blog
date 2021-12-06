import styled from 'styled-components'
import {ErrText, Heading, Text} from "../../../components/Atoms/Typography";
import Input from "../../../components/Atoms/Input";
import Button from "../../../components/Atoms/Button";
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {haveAdmin, login, registration} from "../../../actions/user";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  justify-items: center;
  align-content: center;
`;

const Form = styled.form`
  display: grid;
`;

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: center;
`

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    // Redirect to login page if admin exist
    useEffect(async () => {
        const have = await haveAdmin()
        if (have === true) {
            navigate("/admin/login")
        }
    }, [])

    const registrationHandler = async () => {
        if (username === '' || password == '') {
            setError("Fill in all the fields")
            return
        }

        const registered = await registration(username, password, setError)

        if (registered === true) {
            navigate("/admin/login")
        }
    }

    return(
        <Wrapper>
            <Form>
                <Heading level={3} textAlign={"center"}>Create admin account</Heading>
                <Input value={username} type={"text"} setValue={setUsername} margin={"24px 0 0 0"} placeholder={"Username"}/>
                <Input value={password} type={"password"} setValue={setPassword} margin={"21px 0 0 0"} placeholder={"Password"}/>
                {error && (
                    <ErrText margin={"18px 0 0 0"}>* {error}</ErrText>
                )}
                <ButtonWrapper>
                    <Button onClick={() => {registrationHandler()}} margin={"17px 0 0 0"} onClick={(e) => {registration(username, password)}}>Create</Button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    )
}

export default Registration;