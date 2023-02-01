import { View } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import { theme } from "../../global/global";
import { Container, Content, Name, Text, User } from "./Home.styles";
import { useEffect } from "react";
import api from "../../services/api";
import axios from "axios";
import {API_KEY} from '@env'
import { NewRelease } from "../../components/NewRelease/NewRelease";

export function Home() {
  useEffect(() => {
    const fecthData = async () => {
      api
        .get(`/SearchMovie/${API_KEY}/interstellar`)
        .then((response) => {
          console.log(response.data);
        });
    };

    fecthData();
  }, []);

  return (
    <Container>
      <Content>
        <User>
          <Icon url={"https://github.com/pedronun.png"} />
          <View>
            <Text style={{ color: theme.colors.highlight }}>Welcome back</Text>
            <Name style={{ color: theme.colors.highlight }}>Pedro</Name>
          </View>
        </User>
        <NewRelease />
      </Content>
    </Container>
  );
}
