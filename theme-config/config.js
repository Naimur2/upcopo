import { extendTheme } from "native-base";
import colors from "./colors";
import { fontConfig, fonts } from "./fontConfig";
import space from "./space";
import typography from "./typography";
 

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
    
};

// extend the theme
const theme = extendTheme({
    typography,
    space,
    colors,
    fontConfig,
    fonts,
    config,
});

export default theme;
