import React from 'react';
import './pro.css';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {ImMail} from 'react-icons/im';
import {MdOutlineLocationOn} from 'react-icons/md';
import {BiSolidPhoneCall} from 'react-icons/bi';
import ProfilePictureUpload from './Picupload';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  icon: {
    margin: theme.spacing(1),
    cursor: 'pointer',
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <div className="back" >
      {/* <Navbar /> */}
      <br></br>
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="mainH">Profile</h1>
         
        </div>
        <div className="profile-details">
          <div className="profile-info">
            
            <div>
              <ProfilePictureUpload/>
            </div>
            <div className='cent'>

            <p className="profile-info-item">
              <span className="profile-info-label">Name:</span>XXXXX
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><ImMail></ImMail>:</span> XYXY@gmail.com
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><BiSolidPhoneCall></BiSolidPhoneCall>:</span> 9874563210
            </p>
            <p className="profile-info-item">
              <span className="profile-info-label"><MdOutlineLocationOn></MdOutlineLocationOn>:</span> Coimbatore
            </p>
            </div>
          </div>
        
        </div>
        
      </div>
      <div className='footer'>

        <InstagramIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <LinkedInIcon className={classes.icon} />
      </div>
    </div>
  );
};

export default ProfilePage;