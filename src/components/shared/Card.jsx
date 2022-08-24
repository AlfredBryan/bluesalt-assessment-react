import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Card = ({ stat, idx }) => {
  return (
    <Flex
      gap="9px"
      w={{ base: "100%", lg: "23%" }}
      borderRadius="10px"
      bg="#fff"
      p="16px 0px 19px 19px"
    >
      <img
        style={{ width: "60px", height: "60px" }}
        src={stat?.icon}
        alt={`icon ${idx}`}
      />
      <Box>
        <Text mt="5px" fontWeight="600" fontSize="24px" lineHeight="29px">
          {stat?.value}
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          lineHeight="19px"
          color="#AAAAAA"
        >
          {stat?.name}
        </Text>
        <Flex gap="10px" align="center" mt="18px">
          <Flex gap="3px" align="center">
            <img src={stat?.arrow} alt={`trendingArrow ${idx}`} />
            <Text
              fontSize="14px"
              fontWeight="400"
              color={idx < 2 ? "#4BDE97" : idx === 2 ? "#F26464" : "#FFB648"}
            >
              {stat?.percent}
            </Text>
          </Flex>
          <Text fontSize="14px" fontWeight="400" color="#BDBDBD">
            Last month
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
