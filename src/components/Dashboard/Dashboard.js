import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Alert,
  AlertTitle,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mui/material/Icon";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [APIData, setAPIData] = useState([]);
  const baseURL = `https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData`;
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  };

  const deleteMovies = (id) => {
    fetch(`https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json().then((response) => {
          console.warn(response);
          getMovies();
        });
      })
      .then((film) => setOpen(false));
  };
  return (
    <div>
      <div className="dashboard">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#ff5500" }}>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Trailer</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Nation</TableCell>
                <TableCell>Genres</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Info</TableCell>
                <TableCell style={{ paddingLeft: "30px" }}>Action</TableCell>
                <TableCell>
                  <Link
                    style={{
                      paddingLeft: "20px",
                      textDecoration: "none",
                      color: "green",
                    }}
                    to="/add"
                  >
                    <Icon>add</Icon>
                  </Link>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {APIData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="row">
                    {data.id}
                  </TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.img}</TableCell>
                  <TableCell>{data.trailer}</TableCell>
                  <TableCell>{data.year}</TableCell>
                  <TableCell>{data.nation}</TableCell>
                  <TableCell>{data.genres}</TableCell>
                  <TableCell>{data.time}</TableCell>
                  <TableCell>{data.info}</TableCell>

                  <TableCell>
                    <Link to={`/update/${data.id}`}>
                      <Button>
                        <EditIcon style={{ color: "green" }} />
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button>
                      <DeleteIcon
                        style={{ color: "red" }}
                        onClick={() => setOpen(true)}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Container> */}
        {APIData.map((film) => (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Congraturation"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <AlertTitle>Do you want to delete this movie?</AlertTitle>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => deleteMovies(film.id)}
                style={{ color: "red" }}
              >
                Yes
              </Button>
              <Button autoFocus onClick={handleClose}>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
