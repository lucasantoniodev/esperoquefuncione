import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryProvider } from "./QueryProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
