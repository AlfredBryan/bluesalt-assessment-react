/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GrClose } from "react-icons/gr";

import { sidebarData } from "./data";
import SidebarItem from "./SidebarItem";
import Logo from "../../assets/images/Logo.png";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    handleSetMobileMenu();
  }, [pathname]);
  const handleSetMobileMenu = () => {
    if (window.screen.width < 768) {
      setIsMenuOpen(() => false);
    }
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && (
        <Box
          overflow="scroll"
          pos={{ base: "absolute", md: "fixed" }}
          left="0"
          top="0"
          zIndex={{ base: "1000" }}
          h="100%"
        >
          <Box
            bgColor="#990D81"
            w={{ base: "100vw", md: "253px" }}
            h={{ base: "100%", md: "100vh" }}
            color="#242424"
            pl="20px"
          >
            <Flex
              w="100%"
              justify={{ base: "space-between", lg: "center" }}
              pt="30px"
            >
              <img src={Logo} alt="logo" />
              <Box
                cursor="pointer"
                onClick={handleMenu}
                display={{ lg: "none" }}
                color="#fff"
                pr="20px"
              >
                {isMenuOpen && <GrClose />}
              </Box>
            </Flex>
            <Box opacity="0.1" pr="15px" pb="25px" pt="11px">
              <Box borderBottom="1px solid #FFFFFF" />
            </Box>
            {sidebarData.map((el, id) => (
              <Flex
                align="center"
                key={id}
                h="34px"
                mb="3rem"
                transition=".5s"
                color="rgb(255,255,255,0.6)"
                as={NavLink}
                to={el.path}
                p="15px"
                exact
                activeClassName="activeRoute"
              >
                <SidebarItem icon={el.icon} text={el.name} path={el.path} />
              </Flex>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export { Sidebar };
