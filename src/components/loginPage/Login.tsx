import { Button, Heading, Box } from "@chakra-ui/react";
import LoginContainer from "./LoginContainer";
import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field } from "formik";

import { login } from "../services/auth.service";
import { logout } from "../services/auth.service";

import styled from "styled-components";
import { Helmet } from "react-helmet";

const StyledField = styled(Field)`
  border: 1px solid #ccc;
  padding: 9px 130px 7px 8px;
  width: 100%;
  margin: 5px;
  border-radius: 6px;
  background-color: rgb(36 35 35);
  border-color: black;
`;

type Props = {};

const Login: React.FC<Props> = () => {
  logout();

  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    usernameOrEmail: string;
    password: string;
  } = {
    usernameOrEmail: "",
    password: "",
  };

  const handleLogin = (formValue: {
    usernameOrEmail: string;
    password: string;
  }) => {
    const { usernameOrEmail, password } = formValue;

    setMessage("");
    setLoading(true);

    login(usernameOrEmail, password).then(
      () => {
        navigate("/gamepage");
      },
      (error) => {
        alert("Invalid data. Check your email address and password.");
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(error);
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Login · Telegram Statistics</title>
      </Helmet>
      <LoginContainer>
        <Box padding="4" maxW="lg" bg="#151515" width="90%">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleLogin(values)}
          >
            <Form>
              <Heading margin={4} color="#dcdcdc">
                Welcome Back!
              </Heading>

              <div>
                <StyledField
                  type="email"
                  name="usernameOrEmail"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div>
                <StyledField
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <Button
                type="submit"
                colorScheme="gray"
                margin={4}
                padding={5}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </Button>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </Box>
      </LoginContainer>
    </>
  );
};

export default Login;
