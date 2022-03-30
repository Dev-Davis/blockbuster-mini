import React, { useState } from "react";

import "./Profile.css";

const Profile = () => {
  const getUser = require("../../assets/db/user.json");
  const info = getUser.map((user) => {
    return user;
  });

  return (
    <div className="profile">
      <section className="user-section text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col username-display">
              <h2 className="un-dis">{`Hello ${info[0].username}`}</h2>
              <img
                src="https://www.oregonlive.com/resizer/aLf383x5Ra3C_77KwJGweJ_Dbqw=/800x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/65CWZPBP4NC2LEPGABFBRF3ADQ.jpg"
                className="pro-picture text-center"
                alt="current-user-avi"
              />
              {info[0].isMember ? (
                <>
                  <p>Welcome member</p>
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/35af26903d70fb40e85933743adfb24d.jpg"
                    alt="card-member"
                    className="card-member"
                  />{""}
                </>
              ) : (
                <p className="member-app">Sign up for a membership today</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="user-favorites text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col">
              <h3 className="favs-display">Here are some of your favorite games,movies, and snacks</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
