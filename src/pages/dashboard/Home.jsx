import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

import Stat1 from "../../assets/icons/stat1.png";
import Stat2 from "../../assets/icons/stat2.png";
import Stat3 from "../../assets/icons/stat3.png";
import Stat4 from "../../assets/icons/stat4.png";
import trendingUp from "../../assets/icons/trending-up.png";
import trendingDown from "../../assets/icons/trending-down.png";
import trendingStable from "../../assets/icons/stable.png";
import {
  BarChart,
  Card,
  LineChart,
  TableWrapper,
  CustomTable,
} from "../../components";
import {
  recent_requests,
  tableCols,
} from "../../components/shared/table/tableData";

export const Home = () => {
  const tableData = recent_requests?.map((rq, idx) => ({
    col1: (
      <Flex align={"center"}>
        <img
          style={{ borderRadius: "10px" }}
          src={rq?.img}
          alt={`img ${idx}`}
        />
        <Box ml="17px">
          <Text fontSize="16px" fontWeight="600" color="#141414" ml="3px">
            {rq?.name}
          </Text>
          <Text ml="3px">{rq?.email}</Text>
        </Box>
      </Flex>
    ),
    col2: rq?.type,
    col3: (
      <Flex
        align="center"
        justify="center"
        borderRadius="100px"
        w="75px"
        p="2px"
        bg={rq?.status === "Pending" ? "#faeedb" : "#EFF8F2"}
      >
        <Text color={rq?.status === "Pending" ? "#FFB648" : "#63B67F"}>
          {rq?.status}
        </Text>
      </Flex>
    ),
    col4: (
      <Text color={rq?.type === "New Agent" ? "#990D81" : "#8392AB"}>
        {rq.date}
      </Text>
    ),
    col5: (
      <Flex
        align="center"
        justify="center"
        bg="rgba(80, 159, 239, 0.5)"
        h="25px"
        w="25px"
        borderRadius="50%"
      >
        <IoIosArrowForward fontSize="20px" color="#990D81" />
      </Flex>
    ),
  }));

  return (
    <>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        w="100%"
        rowGap={{ base: "20px", lg: "0px" }}
      >
        {stats?.map((stat, idx) => (
          <Card key={idx} stat={stat} idx={idx} />
        ))}
      </Flex>
      <Flex
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        mt="40px"
        w="100%"
        rowGap={{ base: "20px", lg: "0px" }}
      >
        <Box w={{ base: "100%", lg: "74%" }}>
          <LineChart />
        </Box>
        <Box w={{ base: "100%", lg: "23%" }}>
          <BarChart />
        </Box>
      </Flex>
      <Flex w="100%">
        <Box
          mt="27px"
          borderRadius="10px"
          bg="#fff"
          w={{ base: "100%", lg: "74%" }}
          p="27px"
        >
          <Heading fontSize="18px" fontWeight="600">
            Recent Requests
          </Heading>
          <TableWrapper>
            <CustomTable data={tableData} columns={tableCols} />
          </TableWrapper>
        </Box>
      </Flex>
    </>
  );
};

const stats = [
  {
    icon: Stat1,
    value: "1478 286",
    name: "Pending Requests",
    arrow: trendingUp,
    percent: "4.07%",
  },
  {
    icon: Stat2,
    value: "478 520",
    name: "Approved Requests",
    arrow: trendingUp,
    percent: "0.24%",
  },
  {
    icon: Stat3,
    value: "154 872",
    name: "Total Agents",
    arrow: trendingDown,
    percent: "1.64%",
  },
  {
    icon: Stat4,
    value: "167",
    name: "Total Users",
    arrow: trendingStable,
    percent: "0.00%",
  },
];
