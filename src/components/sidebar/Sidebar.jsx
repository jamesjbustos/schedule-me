import React, { useContext } from "react";
import "./sidebar.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import { auth, signOut } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch({
        type: "LOGOUT",
      });
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <EventRoundedIcon className="logoIcon" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ScheduleMe</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">HOME</p> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <EditCalendarRoundedIcon className="icon" />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <PersonRoundedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <FormatListBulletedRoundedIcon className="icon" />
            <span>Tasks</span>
          </li>
          <li>
            <ViewDayOutlinedIcon className="icon" />
            <span>Events</span>
          </li>
          <li>
            <FavoriteBorderRoundedIcon className="icon" />
            <span>Health</span>
          </li>
          <li>
            <TuneRoundedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
