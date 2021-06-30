import React from 'react'

const Profile = () => {
  return (
    <div>
      <h2 className="text-center">Profile</h2>
      <section className="user-section text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col">
              <h3>Hello User</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="user-favorites text-center">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col">
              <h3>Here are some of your favorite movies</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile