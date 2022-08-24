import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SidebarItem = ({ icon, text }) => {
  return (
    <Flex pos="absolute" align="center">
      <Box id="remove-opacity" boxSize="12px">
        <img src={icon} alt="" />
      </Box>
      <Text ml="24px" lineHeight="16px" fontSize="15px">
        {text}
      </Text>
    </Flex>
  );
};

export default SidebarItem;
