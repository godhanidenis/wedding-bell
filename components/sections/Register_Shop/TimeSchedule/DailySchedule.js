import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  CustomAuthModal,
  CustomTextField,
} from "../../../core/CustomMUIComponents";
import EditableTimeTableRow from "./EditableTimeTableRow";
import ScheduleDesign from "./ScheduleDesign";
import TimeEditModal from "./TimeEditModal";
import WeekDaySelection from "./WeekDaySelection";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // bgcolor: "background.paper",
  bgcolor: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DailySchedule = () => {
  const [currentChoosenStartTime, setcurrentChoosenStartTime] = useState();
  const [currentChoosenEndTime, setcurrentChoosenEndTime] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { TimeTable ,startTime ,endTime,isTimeTableSet} = useSelector((state) => state.shopReducer);

  // useEffect(()=>{
  //   if(isTimeTableSet===true){
  //   const arr = TimeTable.map((data)=>{
  //     delete data.val;
  //     return data;
  //   })
  //   console.log("9999999999999999999999",arr)}
  // },[TimeTable, isTimeTableSet])
  console.log("redux", TimeTable);

  return (
    <div className="flex flex-col border-cyan-700 ">
      {(isTimeTableSet===false) && <ScheduleDesign />}

      <div className="w-96">
        {Object.keys(TimeTable).map((day, index) => {
          return (
            <>
              <EditableTimeTableRow
                day={TimeTable[day].week}
                startTime={TimeTable[day].open_time}
                end={TimeTable[day].close_time}
                edit={handleOpen}
              />
            </>
          );
        })}
      </div>
      <TimeEditModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
};

export default DailySchedule;
