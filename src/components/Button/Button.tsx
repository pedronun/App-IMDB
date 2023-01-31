import { Image, ButtonText, Container } from "./Button.styles";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/global";
import { View, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={[theme.colors.green, theme.colors.purple]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 42,
          width: 211,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Container>
          <ButtonText>{title}</ButtonText>
        </Container>
      </LinearGradient>
      <Image
        source={require("../../assets/blur-button.png")}
        style={{
          transform: [{ translateX: -50 }, { translateY: -50 }],
        }}
      />
    </TouchableOpacity>
  );
}
