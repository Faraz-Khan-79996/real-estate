import React from "react";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import OwnerListings from "../components/profile-component/OwnerListings";

import { useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { AiOutlineMenu } from "react-icons/ai";
import SideBarContent from "../components/profile-component/SideBarContent";
import SavedListings from "../components/profile-component/SavedListings";

function ProfileDashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="">
      <Button onClick={() => setIsOpen(true)} className="m-4 mb-0 ">
        <AiOutlineMenu className="h-6 w-6" />
      </Button>
      <SideBarContent isOpen={isOpen} handleClose={handleClose} />

      {/* profile... */}
      {tab === "profile" && <Profile />}
      {/* posts... */}
      {tab === "your-listings" && <OwnerListings />}
      {/* users */}
      {tab === 'saved' && <SavedListings />}
      {/* comments  */}
      {/* {tab === 'comments' && <DashComments />} */}
      {/* dashboard comp */}
      {/* {tab === 'dash' && <DashboardComp />} */}
    </div>
  );
}

export default ProfileDashboard;
