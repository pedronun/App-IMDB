import { Image } from "react-native";
import { Button } from "../../components/Button/Button";
import { Container, Subtitle, Title } from "./welcome.styles";

interface WelcomeProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Welcome({setIsAuthenticated}: WelcomeProps) {
  return (
    <Container>
      <Image source={require("../../assets/welcome-page-banner.png")} />
      <Title>Onboarding</Title>
      <Subtitle>Watch everything you want {"\n"} for free!</Subtitle>
      <Button title={"Enter now"} onPress={() => setIsAuthenticated(true)} />
    </Container>
  );
}
