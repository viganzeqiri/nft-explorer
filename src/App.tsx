import { Box } from "@chakra-ui/react";
import Router from "routes";
import { Header } from "components/header";

function App() {
  return (
    <Box>
      <Header />
      <Router />
    </Box>
  );
}

export default App;
