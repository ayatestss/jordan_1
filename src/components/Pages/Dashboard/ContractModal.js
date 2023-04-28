import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CONTRACT_BY_ID } from "./graphql/QueryContract";

import {
  Box,
  Typography,
  Modal,
  Container,
  CircularProgress,
  Stack,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflow: "scroll",
  p: 4,
};

const ContractModal = ({ open, handleClose, id }) => {
  const { loading, error, data } = useQuery(QUERY_CONTRACT_BY_ID, {
    variables: { id: id },
  });

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading || !id ? (
            <Container
              container
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                height="100%"
                alignItems="center"
              >
                <CircularProgress size={200} />
              </Stack>
            </Container>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6">
                {`${data.contractById?.client.firstName} ${data.contractById?.client?.lastName}`}
              </Typography>
              <Typography id="modal-modal-title" variant="h6">
                Email: {`${data.contractById?.client?.email}`}
              </Typography>
              <Typography id="modal-modal-title" variant="h6">
                ETA:{" "}
                {`${data.contractById?.eta ? data.contractById?.eta : "N/A"}`}
              </Typography>
              <Typography id="modal-modal-title" variant="h6">
                Stage: {`${data.contractById?.stage}`}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "center",
                  overflow: "scroll",
                }}
              >
                {data?.contractById?.photos.map((photo) => (
                  <>
                    <Box
                      sx={{
                        height: "100%",
                        width: "25%",
                      }}
                    >
                      <img src={photo} />
                    </Box>
                  </>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ContractModal;
