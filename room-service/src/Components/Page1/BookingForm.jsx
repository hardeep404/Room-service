import React, { useState, useEffect } from "react";
import icon from "../../assets/XMLID_67_.svg";
import "../../CSS/BookingForm.css";

const BookingForm = () => {
  const [today, setToday] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, SetRoom] = useState("");
  const [guest, setGuest] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setToday(formattedDate);

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);
    const formatted = futureDate.toISOString().split("T")[0];
    setCheckOut(formatted);
  }, []);

  const handleChange = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().split("T")[0];
    setToday(formattedDate);
  };

  const handleChangeFuture = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().split("T")[0];
    setCheckOut(formattedDate);
  };

  const handleChangeConSole = () => {
    console.log(today);
    console.log(checkOut);
    console.log(room);
    console.log(guest);
  };

  return (
    <>
      <div className="container-top">
        <div className="inner-container">
          <div className="text-con">
            <p>Get Your Luxury Experience Now</p>
          </div>
          <div className="time-ava">
            <div className="curr-dat">
              <span> Check In</span>
              <input type="date" value={today} onChange={handleChange} />
            </div>
            <div className="curr-dat">
              <span> Check In</span>
              <input
                type="date"
                value={checkOut}
                onChange={handleChangeFuture}
              />
            </div>
            <div className="Room-guest">
              <div className="con-room">
                <span>Room</span>
                <input
                  type="number"
                  value={room}
                  onChange={(e) => SetRoom(e.target.value)}
                />
              </div>
              <div className="con-room">
                <span>Guest</span>
                <input
                  type="number"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                />
              </div>
            </div>
            <button className="btn-check" onClick={handleChangeConSole}>
              Check Availability
              <img src={icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
