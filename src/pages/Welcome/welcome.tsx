import { API_KEY } from "@env";
import { useEffect, useState } from "react";
import { Image } from "react-native";
import { Button } from "../../components/Button/Button";
import api from "../../services/api";
import { Container, Subtitle, Title } from "./welcome.styles";

interface WelcomeProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Welcome({setIsAuthenticated}: WelcomeProps) {
  const [hasReachedMax, setHasReachedMax] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      const response = await api.get(`/Usage/${API_KEY}`);
      
      if (response.data.count > response.data.maximum) {
        setHasReachedMax(true);
      }
    };

    fecthData();
  }, []);

  if (hasReachedMax) {
    alert("You have reached the maximum number of requests allowed. Please try again later.");
  }

  return (
    <Container>
      <Image source={require("../../assets/welcome-page-banner.png")} />
      <Title>Onboarding</Title>
      <Subtitle>Watch everything you want {"\n"} for free!</Subtitle>
      <Button title={"Enter now"} onPress={() => {
        if (!hasReachedMax) {
          setIsAuthenticated(true);
        }
      }} />
    </Container>
  );
}
