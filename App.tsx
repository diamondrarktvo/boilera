import { useState } from "react";
import { ThemeProvider } from "@shopify/restyle";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigation } from "_navigations";
import { theme, darkTheme } from "_theme";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <SafeAreaProvider>
        <StackNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
