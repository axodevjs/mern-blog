import styled from "styled-components";
import { ErrText, Heading, Text } from "../../../components/Atoms/Typography";
import Input from "../../../components/Atoms/Input";
import Button from "../../../components/Atoms/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { haveAdmin, login } from "../../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { store } from "../../../redux/reducers";

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
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    const have = await haveAdmin();
    if (have === false) {
      navigate("/admin/registration");
    }
  }, []);

  const loginHandler = () => {
    if (username === "" || password == "") {
      setError("Fill in all the fields");
      return;
    }

    dispatch(login(username, password, setError));
  };

  return (
    <Wrapper>
      <Form>
        <Heading level={3} textAlign={"center"}>
          Admin login
        </Heading>
        <Input
          value={username}
          type={"text"}
          setValue={setUsername}
          margin={"24px 0 0 0"}
          placeholder={"Username"}
        />
        <Input
          value={password}
          type={"password"}
          setValue={setPassword}
          margin={"21px 0 0 0"}
          placeholder={"Password"}
        />
        {error && <ErrText margin={"18px 0 0 0"}>* {error}</ErrText>}
        <ButtonWrapper>
          <Button
            onClick={() => {
              loginHandler();
            }}
            margin={"17px 0 0 0"}
          >
            Login
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default Login;
