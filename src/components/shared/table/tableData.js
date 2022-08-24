import Dp1 from "../../../assets/images/team-2.png";
import Dp2 from "../../../assets/images/marie.png";
import Dp3 from "../../../assets/images/visuals.png";
import Dp4 from "../../../assets/images/ivana.png";

export const recent_requests = [
  {
    img: Dp1,
    name: "Michael Olu",
    email: "michael@mail.com",
    type: "New Agent",
    status: "Pending",
    date: "23/04/18",
  },
  {
    img: Dp2,
    name: "Chioma James",
    email: "alexa@mail.com",
    type: "Account Deactivation",
    status: "Pending",
    date: "23/12/20",
  },
  {
    img: Dp3,
    name: "Boluwatife Ade",
    email: "laure@mail.com",
    type: "New User",
    status: "Active",
    date: "13/04/19",
  },
  {
    img: Dp4,
    name: "Miriam Eric",
    email: "miriam@mail.com",
    type: "Email Auth",
    status: "Active",
    date: "03/04/21",
  },
];

export const tableCols = [
  {
    Header: "Name/Email",
    accessor: "col1",
  },
  {
    Header: "Type",
    accessor: "col2",
  },
  {
    Header: "Status",
    accessor: "col3",
  },
  {
    Header: "Date",
    accessor: "col4",
  },
  {
    Header: "",
    accessor: "col5",
  },
];
