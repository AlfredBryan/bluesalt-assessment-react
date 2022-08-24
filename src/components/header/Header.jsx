import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import { BaseInput } from "../shared";
import Sun from "../../assets/icons/icon-sun.png";
import Dp from "../../assets/images/profile.png";

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      align="center"
      justify={{ base: "flex-end", lg: "space-between" }}
      pos="fixed"
      ml={{ base: "0px", lg: "253px" }}
      p="23px"
      width={{ base: "100%", lg: "calc(100% - 253px)" }}
      bg="#fff"
      h="80px"
      zIndex="500"
    >
      <Heading
        display={{ base: "none", md: "block" }}
        fontSize="24px"
        fontWeight="700"
      >
        Dashboard
      </Heading>
      <Flex align="center" display={{ base: "none", md: "flex" }}>
        <Box>
          <BaseInput
            type="text"
            placeholder="Enter keyword"
            leftIcon={
              <BiSearch fontSize="20px" color="rgba(51, 55, 88, 0.3)" />
            }
          />
        </Box>
        <Flex ml="50px" align="center">
          <Text>EN</Text>
          <RiArrowDropDownLine fontSize="35px" color="rgba(51, 55, 88, 0.3)" />
        </Flex>
        <Box ml="29px">
          <img src={Sun} alt="sun icon" />
        </Box>
        <Box ml="26px" pos="relative">
          <IoMdNotifications pos="relative" fontSize="23px" color="#D6D7E3" />
          <Box
            bottom="60%"
            left="50%"
            pos="absolute"
            bg="#F26464"
            w="9px"
            h="9px"
            borderRadius="50%"
            border="1px solid #FFFFFF"
          />
        </Box>
        <Avatar ml="28px" src={Dp} />
      </Flex>
      <Box
        cursor="pointer"
        onClick={handleMenu}
        ml="9px"
        display={{ lg: "none" }}
      >
        {isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
      </Box>
    </Flex>
  );
};
