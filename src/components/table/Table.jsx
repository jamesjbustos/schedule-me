import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "MAD2104",
      homework: "Algebra Practice",
      professor: "Dr. John Smith",
      dueDate: "10 July",
      subject: "Math",
      status: "Completed",
    },
    {
      id: "AFH5905",
      homework: "Civil War Essay",
      professor: "Prof. Michael Doe",
      dueDate: "15 July",
      subject: "History",
      status: "In Progress",
    },
    {
      id: "BSC3400",
      homework: "DNA Sequencing",
      professor: "Dr. Jane Smith",
      dueDate: "20 July",
      subject: "Science",
      status: "Completed",
    },
    {
      id: "CEN3721",
      homework: "Software Engineering II",
      professor: "Dr. April Doe",
      dueDate: "25 July",
      subject: "Computer Science",
      status: "In Progress",
    },
    {
      id: "COP3503",
      homework: "Data Structures",
      professor: "Prof. Rodrigo Smith",
      dueDate: "24 July",
      subject: "Computer Science",
      status: "Not Started",
    },
    {
      id: "COPL3502",
      homework: "Programming Languages",
      professor: "Prof. Rodrigo Smith",
      dueDate: "24 July",
      subject: "Computer Science",
      status: "Not Started",
    },
    // more rows as needed...
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Course ID</TableCell>
            <TableCell className="tableCell">Homework</TableCell>
            <TableCell className="tableCell">Professor</TableCell>
            <TableCell className="tableCell">Due Date</TableCell>
            <TableCell className="tableCell">Subject</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.homework}</TableCell>
              <TableCell className="tableCell">{row.professor}</TableCell>
              <TableCell className="tableCell">{row.dueDate}</TableCell>
              <TableCell className="tableCell">{row.subject}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status.replace(" ", "\\ ")}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
