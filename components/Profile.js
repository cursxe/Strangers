import React from 'react';


const Profile  = ({ user }) => {
    console.log(user);
    return <div>Hi, {user.username} </div>;
};

export default Profile; 