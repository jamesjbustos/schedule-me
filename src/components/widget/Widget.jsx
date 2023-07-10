import "./widget.scss";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "upcoming":
      data = {
        title: "Upcoming Events",
        items: ["Algebra Tutoring", "Physics Lab", "Workout Session"],
        link: "See all events",
        icon: (
          <EventNoteIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tasks":
      data = {
        title: "Priority Tasks",
        items: [
          "Finish Algebra Homework",
          "Prepare for Physics Lab",
          "Buy groceries",
        ],
        link: "See all tasks",
        icon: (
          <ListAltIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "friends":
      data = {
        title: "Friends' Shared Events",
        items: [
          "John's Birthday Party",
          "Algebra Study Group",
          "FIU Soccer Game",
        ],
        link: "See shared events",
        icon: (
          <GroupIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "academic":
      data = {
        title: "Academic Calendar",
        items: ["Exam Week", "Spring Break", "Semester Ends"],
        link: "See academic events",
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <ul className="items">
          {data.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
