import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { theme } from "../../global/global";
import { Blur, ImageIcon } from "./Icon.styles";

interface IconProps {
  url: string;
}

export function Icon({ url }: IconProps) {
  return (
    <View>
      <LinearGradient
        colors={[theme.colors.green, theme.colors.purple]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={{
          height: 53,
          width: 53,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 200,
          marginRight: 9,
          zIndex: 1,
        }}
      >
        <ImageIcon source={{ uri: url }} />
      </LinearGradient>
      <Blur
        source={require("../../assets/blur-icon.png")}
        style={{
          transform: [{ translateX: -50 }, { translateY: -50 }],
        }}
      />
    </View>
  );
}
