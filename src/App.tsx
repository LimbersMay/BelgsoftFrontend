import {AppRouter} from "./routes/AppRouter.tsx";
import {SnackbarProvider} from "notistack";
import {SnackbarUtilitiesConfigurator} from "./utils";

function App() {
  return (
    <>
        <SnackbarProvider>
            <SnackbarUtilitiesConfigurator />
            <AppRouter />
        </SnackbarProvider>
    </>
  )
}

export default App
