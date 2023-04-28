import {
  Alert,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import { useDropzone } from "react-dropzone";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, maxHeight } from "@mui/system";

const dropzoneStyle = {
  width: "100%",
  height: "200px",
  cursor: "pointer",
  border: "1px solid black",
};

export default function PhotoUploadForm(props) {
  const formikProps = useFormikContext();
  const [fileErrors, setFileErrors] = useState();
  const [files, setFiles] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // console.log(files);
  useEffect(() => {
    if (formikProps.errors) {
      setFileErrors(formikProps.errors.file);
    }
  }, [formikProps.errors, files]);

  useEffect(() => {
    if (formikProps.values.file?.length > 0) {
      setFiles(
        formikProps.values.file.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
  }, []);

  const remove = (file) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(
      newFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );

    formikProps.setFieldValue("file", newFiles.length === 0 ? null : newFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      formikProps.setFieldValue("file", acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const myThumbs = (
    <ImageList
      sx={{ width: "100%", maxHeight: 300 }}
      cols={3}
      rowHeight={matches ? 300 : 164}
      // rowHeight={400}
    >
      {files.map((item, index) => (
        <ImageListItem key={index}>
          <Box sx={{ width: "100%", maxHeight: "100%" }}>
            <img
              src={`${item.preview}`}
              srcSet={`${item.preview}`}
              alt={item.name}
              style={{
                width: "100%",
                height: matches ? "300px" : "164px",
                objectFit: "fit",
              }}
              loading="lazy"
              // Revoke data uri after image is loaded
              onLoad={() => {
                URL.revokeObjectURL(item.preview);
              }}
              onClick={() => {
                remove(item);
              }}
            />
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <Stack height="100%" pt={4}>
        <div {...getRootProps({ className: "dropzone", style: dropzoneStyle })}>
          <input {...getInputProps()} />
          <Typography variant="h6" textAlign="center" justifyContent="center">
            Drag 'n' drop some files here, or click to select files
          </Typography>
        </div>

        {myThumbs}

        <Typography variant="h6" pt={3}>
          Uploaded Files:{" "}
          {formikProps.values.file?.length ? formikProps.values.file.length : 0}
        </Typography>
        {fileErrors ? <Alert severity="error">{fileErrors}</Alert> : <></>}
      </Stack>
    </>
  );
}
