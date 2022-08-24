import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Sidebar } from "../components";
import { MenuContext, MenuContextProvider } from "../context/mobileMenu";
import { Home } from "../pages";

const Dashboard = () => {
  return (
    <MenuContextProvider>
      <DashboardChild />
    </MenuContextProvider>
  );
};

const DashboardChild = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <Router>
      <Box pos="relative">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Box
          m={{ base: "0px 0 0px", lg: "0px 0 0 246px" }}
          p={{ base: "90px 5px 20px 5px", lg: "120px 28px 50px 20px" }}
          bg="#E5E5E5"
          h="100%"
        >
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
};

export { Dashboard };
