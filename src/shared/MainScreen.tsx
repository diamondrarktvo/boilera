import Box from "./Box";
import React from "react";
import Text from "./Text";

type Props = {
  children: React.ReactNode;
  typeOfScreen: string;
  titleTabScreen?: string;
};

type HeaderProps = {
  title?: string | undefined;
};

const HeaderTabTitle = ({ title }: HeaderProps) => {
  return title ? (
    <Box paddingVertical="m" backgroundColor="white">
      <Text variant="headerNavigation">{title}</Text>
    </Box>
  ) : null;
};

const MainScreen = ({ children, typeOfScreen, titleTabScreen }: Props) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="s"
      paddingVertical="m"
      backgroundColor="mainBackground"
    >
      {typeOfScreen === "tab" && <HeaderTabTitle title={titleTabScreen} />}
      {children}
    </Box>
  );
};

export default MainScreen;
