import { API_KEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useQuery } from "react-query";
import { ISearchTitle } from "../../@types/searchTitle";
import { theme } from "../../global/global";
import api from "../../services/api";
import { Container, Content, Title, TextInput } from "./Categories.styles";

export function Categories() {
  const [search, setSearch] = useState<string>("");
  const {
    data: searched,
    isError,
    isLoading,
  } = useQuery<ISearchTitle>("recommendations", async () => {
    console.log('search', search)
    const response = await api.get(`/SearchTitle/${API_KEY}/${search}`);
    return response.data.items;
  });

  console.log('searched', searched, search);

  return (
    <Container>
      <Content>
        <Title>Search for a content</Title>
        <LinearGradient
          colors={[theme.colors.green, theme.colors.purple]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            height: 62,
            width: '100%',
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 26,
            marginTop: 8,
          }}
        >
          <TextInput
            placeholder="Search for a content."
            placeholderTextColor={"#6C6C6C"}
            value={search}
            onChangeText={setSearch}
          />
        </LinearGradient>
      </Content>
    </Container>
  );
}
