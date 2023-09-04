import "./styles/main.scss";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
