import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";

import { useChat } from "../../hooks";

Chart.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
);

export const LineChart = () => {
  const { apData } = useChat();

  return (
    <Box bg="#fff" borderRadius="10px" p="21px" w="100%">
      <Flex justify="space-between" mb="25px">
        <Box>
          <Heading fontSize="18px" fontWeight="600">
            User Inflow Statistics
          </Heading>
          <Text fontSize="14px" color="#B9B9B9" fontWeight="400">
            Nov - July
          </Text>
        </Box>
        <Box>
          <Flex align="center" gap="47px">
            <Flex align="center" gap="8px">
              <Box bg="#5F2EEA" borderRadius="50%" h="8px" w="8px" />
              <Text fontSize="12px" color="#B9B9B9" fontWeight="400">
                AGENTS
              </Text>
            </Flex>
            <Flex align="center" gap="8px">
              <Box bg="#4EDC97" borderRadius="50%" h="8px" w="8px" />
              <Text fontSize="12px" color="#B9B9B9" fontWeight="400">
                USERS
              </Text>
            </Flex>
          </Flex>
          <Flex ml="10px" gap="40px">
            <Text fontWeight="500" fontSize="16px">
              475 273
            </Text>
            <Text fontWeight="500" fontSize="16px">
              782 396
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box w="100%" minH={"250px"}>
        <Line
          data={apData}
          options={{
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.5,
                borderWidth: 2,
              },
            },
            scales: {
              yAxis: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    if (parseInt(value) >= 1000) {
                      return value
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                      return value;
                    }
                  },
                  max: 100, //This is the max dataset value
                  min: 0,
                  stepSize: 25,
                },
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};
