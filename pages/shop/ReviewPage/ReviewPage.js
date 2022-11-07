import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import EditableTimeTableRow from "../../../components/sections/Register_Shop/TimeSchedule/EditableTimeTableRow";

const ReviewPage = () => {
  const { TimeTable, Logo, shopImages, backgroudURL } = useSelector(
    (state) => state.shopReducer
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/3">
        <h4>Shop Deatils</h4>
        <div className="flex space-x-2 mt-5">
          <h4>Shop Name : </h4><span>iqashu</span>          
        </div>
        <div className="flex space-x-2">
        <h4>Address : </h4><span>B-164 , pramukhchaya soc., yogi chowk surat</span>
        </div>
        <div className="flex space-x-2">
        <h4>Pincode : </h4><span>395010</span>
        </div>
      </div>
     
      <div className="mt-10">
        <h4>Time schedule</h4>
        <div>
        <div className="w-96 mt-5">
        {Object.keys(TimeTable).map((day, index) => {
          return (
            <>
              <EditableTimeTableRow
                day={TimeTable[day].week}
                startTime={TimeTable[day].open_time}
                end={TimeTable[day].close_time}
               
              />
            </>
          );
        })}
      </div>
        </div>
      </div>
      <div>
        <div>
        <Image
              src={Logo}
              height="150px"
              alt="logoimg"
              width="150px"
              style={{ borderRadius: 100 }}
            />
        <Image
              src={backgroudURL}
              height="150px"
              alt="logoimg"
              width="150px"
              // style={{ borderRadius: 100 }}
            />
        </div>
        <div className="grid grid-flow-cols grid-cols-10  gap-3">
            {shopImages.map((imgURL, index) => {
              return (
                <>
                  <div>
                    <Image
                      key={index}
                      className="pr-12"
                      src={imgURL}
                      height="150px"
                      alt="logoimg"
                      width="150px"
                      style={{ marginRight: 20 }}
                    />
                    
                  </div>
                </>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default ReviewPage;
