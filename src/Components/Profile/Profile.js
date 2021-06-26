import React from 'react'

const Profile = () => {
  return (
    <div>
      <h2 className="text-center">Profile</h2>
      <section className="user-section text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col">
              <h3>User Section</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="user-favorites text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col">
              <h3>User Favorites</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile