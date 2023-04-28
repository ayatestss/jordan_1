import { useQuery } from "@apollo/client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableBody,
  Container,
  Typography,
  Divider,
  Modal,
} from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ContractModal from "./ContractModal";
import { MEMBER_CONTRACTS } from "./graphql/MemberContracts";

export default function Dashboard() {
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeContract, setActiveContract] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { loading, error, data } = useQuery(MEMBER_CONTRACTS, {
    variables: { id: "631df9a8a9e499f3251e951d" },
  });

  useEffect(() => {
    if (!loading) {
      console.log(data);
      const testData = data.memberById?.contracts;
      const testRows = testData.map((contract) => {
        return {
          id: contract.id,
          client: contract.client.firstName,
          date: moment(parseInt(contract.updatedAt)).format("MMMM Do YYYY"),
          //   time: moment(parseInt(contract.updatedAt)).format("h:mm:ss a"),
          time: moment(parseInt(contract.updatedAt)).startOf("min").fromNow(),
        };
      });

      setRows(testRows);
    }
  }, [loading]);

  if (rows.length > 0) {
    return (
      <>
        <ContractModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          id={activeContract}
        />
        <Container
          container
          sx={{
            bgcolor: "white",
            height: "380px",
          }}
        >
          <TableContainer
            sx={{
              bgcolor: "white",
            }}
          >
            <Table
              sx={{ minWidth: 650, maxHeight: 380 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Created</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.client}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell align="center">
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                          setActiveContract(row.id);
                          handleOpen();
                        }}
                      >
                        View More Info
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="white"
        width="100%"
        height="380px"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">No Quotes</Typography>
        <Typography variant="h6" fontWeight={300} py={2}>
          Send out your link to start getting quotes!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/member/631df9a8a9e499f3251e951d`
            );
          }}
        >
          Copy to clipboard
        </Button>
        {/* <a
          href={`${window.location.origin}/member/631df9a8a9e499f3251e951d`}
          target="blank"
          replace
        > */}
        {/* </a> */}
      </Box>
    </>
  );
}
