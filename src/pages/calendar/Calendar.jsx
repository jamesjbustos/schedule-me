import "./calendar.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Timetable from "../../components/timetable/Timetable";

const Calendar = () => {
  return (
    <div className="calendar">
      <Sidebar />
      <div className="calendarContainer">
        <Navbar />
        <Timetable />
      </div>
    </div>
  );
};

export default Calendar;
