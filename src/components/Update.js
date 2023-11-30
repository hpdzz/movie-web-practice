import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";

export default function Update() {
  const [APIData, setAPIData] = useState([]);
  const baseUrl = "https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData";
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [data, setData] = useState({});
  const name = useParams();

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
        const news = data.find((obj) => {
          return obj.id == name.id;
        });
        setData(news);
        setTitle(news.title);
        setImage(news.image);
        setTrailer(news.trailer);
        setTime(news.time);
        setInfo(news.info);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const news = APIData.find((obj) => {
    return obj.id == name.id;
  });
  console.log(news);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  console.log(data.length);
  function refreshPage() {
    window.location.reload(false);
  }
  const formik = useFormik({
    initialValues: {
      title: "",
      img: "",
      trailer: "",
      time: "",
      info: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      img: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      trailer: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      time: Yup.number().required("Required.").min(10, "Must be integer"),
      info: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
    }),
  });

  const update = () => {
    let values = { title, image, info };
    fetch(
      `https://653a098ae3b530c8d9e9051b.mockapi.io/api/v1/filmData/${name.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    )
      .then((result) => {
        result.json().then((response) => {
          console.warn(response);
        });
      })
      .then((data) => setOpen(true));
  };

  return (
    <div>
      <div className="contact">
        {APIData?.length > 0 ? (
          <Container className="">
            <Grid container spacing={2}>
              <Grid xs={12} md={12}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={1}>
                    {/* ID */}
                    <Grid xs={12} sm={12} item>
                      <TextField
                        color="secondary"
                        placeholder="ID"
                        label="ID"
                        variant="outlined"
                        fullWidth
                        name="id"
                        value={APIData.length + 1}
                        onChange={formik.handleChange}
                        readonly
                        type="hidden"
                      />
                    </Grid>
                    {/* Title */}
                    <Grid xs={12} sm={12} item>
                      <TextField
                        color="secondary"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <br />
                      {formik.errors.title && (
                        <Typography variant="caption" color="red">
                          {formik.errors.title}
                        </Typography>
                      )}
                    </Grid>
                    {/* Image */}
                    <Grid item xs={12}>
                      <TextField
                        margin="dense"
                        name="image"
                        label="Image"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />

                      <br />
                      {formik.errors.img && (
                        <Typography variant="caption" color="red">
                          {formik.errors.img}
                        </Typography>
                      )}
                    </Grid>
                    {/* Video */}
                    <Grid item xs={12}>
                      <TextField
                        margin="dense"
                        name="trailer"
                        label="Trailer"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={trailer}
                        onChange={(e) => setTrailer(e.target.value)}
                      />
                      <br />
                      {formik.errors.trailer && (
                        <Typography variant="caption" color="red">
                          {formik.errors.trailer}
                        </Typography>
                      )}
                    </Grid>
                    {/* Date */}
                    <Grid item xs={12}>
                      <TextField
                        margin="dense"
                        name="time"
                        label="Time"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                      <br />
                      {formik.errors.time && (
                        <Typography variant="caption" color="red">
                          {formik.errors.time}
                        </Typography>
                      )}
                    </Grid>
                    {/* Content */}
                    <Grid item xs={12}>
                      <TextField
                        color="warning"
                        label="Info"
                        multiline
                        placeholder="Type your content here"
                        variant="outlined"
                        fullWidth
                        name="info"
                        rows={4}
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch />}
                        label="Adult movie."
                        name="adult"
                        value={formik.values.adult}
                        onClick={formik.handleChange}
                      />
                      {formik.errors.adult && (
                        <Typography variant="caption" color="red">
                          {formik.errors.adult}
                        </Typography>
                      )}
                      <Button
                        variant="contained"
                        size="small"
                        type="submit"
                        onClick={update}
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <div className="empty"></div>
        )}
      </div>

      {/* Dialog */}
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
              <AlertTitle>Update successfully!</AlertTitle>
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
