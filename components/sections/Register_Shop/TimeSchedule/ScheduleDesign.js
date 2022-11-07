import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isDaySelected,
  isTimetableset,
  saveTimeTableData,
  setEndTime,
  setStartTime,
} from "../../../../redux/ducks/shop_register";
import { CustomTextField } from "../../../core/CustomMUIComponents";

const ScheduleDesign = (props) => {
  // const [startTime, setStartTime] = useState();
  // const [endTime, setEndTime] = useState();
  const [isClosed, setIsClosed] = useState(false);
  const dispatch = useDispatch();
  const { TimeTable, startTime, endTime } = useSelector(
    (state) => state.shopReducer
  );

  return (
    <div className="flex flex-col justify-center items-center border-cyan-700   ">
      <div>
        {Object.keys(TimeTable).map((day, index) => {
          return (
            <>
              <button
                key={day}
                className={
                  TimeTable[day].val === false
                    ? "rounded-full border-gray-400 border-solid border-2 border-spacing-1 w-14 h-14 mr-2"
                    : "rounded-full border-pink-700 border-solid border-2 border-spacing-1 w-14 h-14 mr-2"
                }
                onClick={(e) => {
                  dispatch(isDaySelected(day));
                }}
              >
                {TimeTable[day].week[0]}
              </button>
            </>
          );
        })}
      </div>

      <div className="mt-3">
        <input
          type="checkbox"
          name="checkall"
          onChange={(e) => {
            setIsClosed(!isClosed);
          }}
        />
        <label htmlFor="checkall" className="text-colorSecondary">
          Closed
        </label>
      </div>

      {!isClosed && (
        <div className="flex flex-row space-x-8">
          <div>
            <label className="font-bold">Start</label>
            <CustomTextField
              id="input-with-sx"
              type="time"
              // label={"Start Time"}
              variant="standard"
              value={startTime}
              defaultValue={startTime}
              className="w-full mr-4"
              onChange={(a) => {
                // setStartTime(a.target.value);
                dispatch(setStartTime(a.target.value));
              }}
            />
          </div>
          <div>
            <label className="font-bold">End</label>

            <CustomTextField
              id="input-with-sx"
              type="time"
              // label={"End Time"}
              onChange={(a) => {
                // setEndTime(a.target.value);
                dispatch(setEndTime(a.target.value));
              }}
              variant="standard"
              className="w-full"
            />
          </div>
        </div>
      )}
      <button
        className="cursor-pointer text-colorWhite bg-colorPrimary py-2 px-3 rounded ml-2 mt-10 flex justify-end w-16"
        onClick={() => {
          props?.modalClose && props?.modalClose();
          dispatch(isTimetableset(true));

          dispatch(
            saveTimeTableData({
              isClosed: isClosed,
              startTime: startTime,
              endTime: endTime,
            })
          );
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleDesign;
