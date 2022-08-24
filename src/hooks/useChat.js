export const useChat = () => {
  const apData = {
    labels: ["", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [15, 8, 24, 23, 27, 25, 30, 35, 53],
        borderColor: "#4EDC97",
      },
      {
        data: [26, 26, 49, 35, 27, 60, 24, 15, 25],
        borderColor: "#5F2EEA",
      },
    ],
  };

  const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [900, 700, 500, 1000, 800],
        backgroundColor: "#fff",
        borderRadius: 10,
        barThickness: 10,
      },
    ],
  };

  return { apData, userData };
};
