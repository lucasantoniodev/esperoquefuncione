import { MainRoutes } from "./routes/MainRoutes";
import GlobalStyles from "./styles/globalStyles";
import ThemesProvider from "./styles/ThemesProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { QueryContextProvider } from "./contexts/QueryContext";

function App() {
  return (
    <>
      <QueryContextProvider>
        <ThemesProvider>
          <GlobalStyles />
          <MainRoutes />
        </ThemesProvider>
        <ToastContainer />
      </QueryContextProvider>
    </>
  );
}

export default App;
