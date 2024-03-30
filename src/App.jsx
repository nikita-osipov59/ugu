import { useState } from "react";

import Auth from "./components/Auth";
import Reg from "./components/Reg";
import { Container } from "./components/ui/Container";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <Auth /> : <Reg />}
      <Container></Container>
    </>
  );
}

export default App;
