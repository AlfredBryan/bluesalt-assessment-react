import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

export const BaseInput = ({
  placeholder,
  type,
  readonly,
  leftIcon,
  width,
  ...rest
}) => {
  return (
    <Box>
      <InputGroup>
        <Input
          focusBorderColor="brand.purple"
          fontSize="1.3rem"
          type={type}
          bg="#F7F9FB"
          border="none"
          borderRadius="3px"
          h="40px"
          w={width || "271px"}
          px="1.6rem"
          pl="35px"
          placeholder={placeholder}
          readOnly={readonly}
          {...rest}
        />
        <InputLeftElement left="3%" top="50%" transform="translateY(-40%)">
          {leftIcon}
        </InputLeftElement>
      </InputGroup>
    </Box>
  );
};
