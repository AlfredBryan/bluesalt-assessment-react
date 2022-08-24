import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  Tooltip,
  CategoryScale,
  BarElement,
  BarController,
  Title,
  Legend,
} from "chart.js";

import { useChat } from "../../hooks";

Chart.register(
  Tooltip,
  CategoryScale,
  BarElement,
  BarController,
  Title,
  Legend
);

export const BarChart = () => {
  const { userData } = useChat();
  return (
    <Box borderRadius="10px" w="100%" bg="brand.purple" h="auto">
      <Box p="12px" w="100%" minH={"278px"}>
        <Bar
          data={userData}
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
            scales: {
              xAxis: {
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  display: false,
                },
              },
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
                  color: "#ffffff",
                  max: 1000, //This is the max dataset value
                  min: 0,
                  stepSize: 200,
                },
                grid: {
                  borderDash: [8, 4],
                  drawBorder: false,
                  borderColor: "#fff",
                  color: "#a3258e",
                },
              },
            },
          }}
        />
      </Box>
      <Box p="12px 12px 22px 23px">
        <Text fontWeight="700" fontSize="16px" color="#fff">
          New Users
        </Text>
        <Text fontSize="14px" color="#fff" fontWeight="700">
          (+23%)
          <Text ml="3px" as="span" fontWeight="400">
            than last week
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
