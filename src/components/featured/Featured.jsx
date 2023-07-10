import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Today's Overview</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredItem">
          <EventNoteIcon style={{ fontSize: 35, color: "crimson" }} />
          <div className="itemContent">
            <p className="title">Upcoming High Priority Events</p>
            <p className="amount">5</p>
          </div>
        </div>
        <div className="featuredItem">
          <GroupIcon style={{ fontSize: 35, color: "green" }} />
          <div className="itemContent">
            <p className="title">Shared Events From Friends</p>
            <p className="amount">3</p>
          </div>
        </div>
        <div className="featuredItem">
          <ListAltIcon style={{ fontSize: 40, color: "goldenrod" }} />
          <div className="itemContent">
            <p className="title">Task Progress</p>
            <div className="featuredChart">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
          </div>
        </div>
        <p className="desc">
          ScheduleMe keeps you updated with your important events and tasks for
          the day. Stay organized, be productive!
        </p>
      </div>
    </div>
  );
};

export default Featured;
