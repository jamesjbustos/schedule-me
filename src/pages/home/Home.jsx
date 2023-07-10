import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="upcoming" />
          <Widget type="tasks" />
          <Widget type="friends" />
          <Widget type="academic" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Study Hours Over the Week" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Assignments</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
