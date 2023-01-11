import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableAnswers = ({ answers }) => {
  const answerRows = answers ? Object.keys(answers).map((key) => {
    const answer = answers[key];
    return {
      UserID: key,
      full_name: answer.full_name,
      email: answer.email,
      DateOfBirth: answer.date_of_birth,
      Country: answer.country
    };
  }) : [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>UserID </TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Date of Birth&nbsp;</TableCell>
            <TableCell align="right">Country&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {answerRows.map((row) => (
            <TableRow key={row.UserID}>
              <TableCell>{row.UserID}</TableCell>
              <TableCell align="right">{row.full_name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.DateOfBirth} </TableCell>
              <TableCell align="right">{row.Country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableAnswers;