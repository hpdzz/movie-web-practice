import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
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
import { Switch, Button, Container } from "react-materialize";
import { Link } from "react-router-dom";
import * as Yup from "yup";
export default function Add() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const baseUrl = "https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData";
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      trailer: "",
      year: "",
      nation: "",
      time: "",
      info: "",
      adult: false,
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      image: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      trailer: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      year: Yup.number().integer().typeError("Please enter a valid number"),
      nation: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
      time: Yup.number().integer().typeError("Please enter a valid number"),
      info: Yup.string()
        .required("Required.")
        .min(5, "Must be 5 characters or more"),
    }),
    onSubmit: (values) => {
      fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setOpen(true))
        .catch((error) => console.log(error.message));
    },
  });

  return (
    <div
      style={{
        paddingBottom: "30px",
        // backgroundImage: `url("https://cdn.popsww.com/blog-kids/sites/3/2022/04/songoku.jpg")`,
      }}
    >
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <h1 style={{ color: "#26a69a" }}>Add a film</h1>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.title && formik.touched.title && (
                <Typography variant="caption" color="red">
                  {formik.errors.title}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Image"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.image && formik.touched.image && (
                <Typography variant="caption" color="red">
                  {formik.errors.image}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Trailer"
                name="trailer"
                value={formik.values.trailer}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.trailer && formik.touched.trailer && (
                <Typography variant="caption" color="red">
                  {formik.errors.trailer}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Year"
                name="year"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.year && formik.touched.year && (
                <Typography variant="caption" color="red">
                  {formik.errors.year}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Nation"
                name="nation"
                value={formik.values.nation}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.nation && formik.touched.nation && (
                <Typography variant="caption" color="red">
                  {formik.errors.nation}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Genres
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  label="Genres"
                  name="genres"
                  value={formik.values.genres}
                  onChange={formik.handleChange}
                >
                  <MenuItem value={0}>
                    <em>Please select genres</em>
                  </MenuItem>
                  <MenuItem value={"Action"}>Action</MenuItem>
                  <MenuItem value={"Adventure"}>Adventure</MenuItem>
                  <MenuItem value={"Drama"}>Drama</MenuItem>
                  <MenuItem value={"Romance"}>Romance</MenuItem>
                </Select>
              </FormControl>
              <br />
              {formik.errors.genres && formik.touched.genres && (
                <Typography variant="caption" color="red">
                  {formik.errors.genres}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                label="Time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
              />
              <br />
              {formik.errors.time && formik.touched.time && (
                <Typography variant="caption" color="red">
                  {formik.errors.time}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <TextField
                sx={{ m: 1, minWidth: 300 }}
                id="outlined-multiline-static"
                label="Info"
                multiline
                rows={4}
                name="info"
                value={formik.values.info}
                onChange={formik.handleChange}
              />
            </Grid>
            {formik.errors.info && formik.touched.info && (
              <Typography variant="caption" color="red">
                {formik.errors.info}
              </Typography>
            )}
            <Grid item>
              <FormControlLabel
                control={<Switch />}
                label="Adult film"
                name="adult"
                value={formik.values.agree}
                onClick={formik.handleChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" size="small" type="submit">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Congraturation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>Adding successful!</AlertTitle>
            </Alert>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
