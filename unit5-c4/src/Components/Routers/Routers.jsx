import { Routes, Route } from "react-router-dom";
import { AddMeetup } from "../AddMeetup/AddMeetup";
import { Event } from "../Event/Event";
import { Home } from "../Home/Home";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { Navbar } from "../Navbar/Navbar";
import { NotFound } from "../NotFound/NotFound";

export const Routers = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginsignup" element={<LoginSignUp></LoginSignUp>} />
          <Route path="/meetup" element={<AddMeetup></AddMeetup>} />
          <Route path="/event" element={<Event></Event>} />
          <Route path="/404" element={<NotFound></NotFound>} />
        </Routes>
      </div>
    );
}