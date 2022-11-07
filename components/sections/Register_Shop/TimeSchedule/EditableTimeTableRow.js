import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { editSingleDay } from "../../../../redux/ducks/shop_register";

const EditableTimeTableRow = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-between w-full">
      <p>{props.day}</p>
      <p>{props.startTime}</p>
      <p>{props.end}</p>
      {props.edit && <button
        onClick={() => {
          props.edit();
          dispatch(editSingleDay(props.day));
        }}
      >
        <EditIcon />
      </button>}
    </div>
  );
};

export default EditableTimeTableRow;
