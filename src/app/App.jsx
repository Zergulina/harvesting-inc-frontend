
import UserContextProvider from "../store/context/UserContextProvider";
import AuthProvider from "./routing/AuthProvider";
import Routes from "./routing/Routes";

function App() {
  return (
    <AuthProvider>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </AuthProvider>
  );
}

export default App;
