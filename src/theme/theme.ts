import { DefaultTheme, Theme } from '@react-navigation/native';


//PALETTE
const palette = {
    darkGreen: "#18534F",
    teal: "#226D68",
    whiteGrey: "#ECF8F6",
    blackChocolate: "#363B48",
    yellow: "#FEEAA1",
    darkYellow: "#D6955B"
}

//NAVIGATION THEME
export const NavigationlightTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: palette.teal,
        background: palette.whiteGrey,
        text: palette.blackChocolate
    }
}
export const NavigationdarkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: palette.teal,
        background: palette.darkGreen,
        text: palette.whiteGrey
    }
}