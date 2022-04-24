import store from "./Services/redux.service";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "./App.scss";

import { MDT } from "./Apps";

const theme = createTheme({
    palette: {
        mode: "light",
    },
});

declare module "@mui/material/styles" {
    interface Palette {
        // idk: Palette["primary"];
    }
    interface PaletteOptions {
        // idk: PaletteOptions["primary"];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
}

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <div className="App">
                        <MDT />
                    </div>
                </LocalizationProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
