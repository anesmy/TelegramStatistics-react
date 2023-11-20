import { Container } from "@chakra-ui/react";

interface Props {
  children: any;
}

const LoginContainer = ({ children }: Props) => {
  return (
    <Container
      marginY="5%"
      textAlign="center"
      maxW="2xl"
      bg="#1e1e1e"
      centerContent
      rounded="lg"
      boxShadow="lg"
    >
      {children}
    </Container>
  );
};

export default LoginContainer;
