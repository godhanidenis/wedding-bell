import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ScheduleDesign from "./ScheduleDesign";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // bgcolor: "background.paper",
  bgcolor: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TimeEditModal = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ScheduleDesign modalClose={props.handleClose}/>
        <div
          className="bg-gray-300 rounded-full flex justify-center items-center cursor-pointer"
          style={{
            position: "relative",
            left: 650,
            // right:10,            
            // top:100,
            bottom: 275,
            height: 30,
            width: 30,
            color: "#5cb85c",
          }}
        >
          <CancelIcon
            style={{ color: "black" }}
            onClick={() => {
              props.handleClose();
            }}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default TimeEditModal;
