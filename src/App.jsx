import { useContext } from "react";
import { Router } from "./components/Router";
import { UserContext } from "./components/UserProvider";
import ProfileCustomer from "./components/ProfileCustomer";

function App() {
  const { isAuth } = useContext(UserContext);

  return isAuth ? <Router /> : <ProfileCustomer />;
}

export default App;
