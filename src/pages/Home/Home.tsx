import { ScrollView, View } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import { theme } from "../../global/global";
import { Container, Content, Name, Text, User } from "./Home.styles";
import { NewRelease } from "../../components/NewRelease/NewRelease";
import { ContinueWatching } from "../../components/ContinueWatching/ContinueWatching";
import { Recommendations } from "../../components/Recommendations/Recommendations";

export function Home() {
  return (
    <Container>
      <ScrollView>
        <Content>
          <User>
            <Icon url={"https://github.com/pedronun.png"} />
            <View>
              <Text style={{ color: theme.colors.highlight }}>
                Welcome back
              </Text>
              <Name style={{ color: theme.colors.highlight }}>Pedro</Name>
            </View>
          </User>
          <NewRelease />
          <ContinueWatching />
          <Recommendations />
        </Content>
      </ScrollView>
    </Container>
  );
}
