import HomeIcon from "../../assets/icons/Home.png";
import RequestIcon from "../../assets/icons/request.png";
import KycIcon from "../../assets/icons/kyc.png";
import ReportIcon from "../../assets/icons/Document.png";
import AuditIcon from "../../assets/icons/Folder.png";
import UsersIcon from "../../assets/icons/Users.png";
import SettingsIcon from "../../assets/icons/Setting.png";

export const sidebarData = [
  {
    name: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: RequestIcon,
  },
  {
    name: "KYCs",
    path: "/kycs",
    icon: KycIcon,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: ReportIcon,
  },
  {
    name: "Audit Trail",
    path: "/audit-trail",
    icon: AuditIcon,
  },
  {
    name: "Users",
    path: "/users",
    icon: UsersIcon,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];
