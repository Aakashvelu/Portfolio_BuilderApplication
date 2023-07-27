// import React, { useState } from 'react';

// const TemplatePage = () => {
//   const [templateName, setTemplateName] = useState('');
//   const [templateContent, setTemplateContent] = useState('');

//   const handleTemplateNameChange = (e) => {
//     setTemplateName(e.target.value);
//   };

//   const handleTemplateContentChange = (e) => {
//     setTemplateContent(e.target.value);
//   };

//   const handleTemplateSubmit = (e) => {
//     e.preventDefault();

//     // Here, you can perform further actions with the template data,
//     // such as saving it to a database or using it to render the portfolio.

//     // Clearing the form fields
//     setTemplateName('');
//     setTemplateContent('');
//   };

//   return (
//     <div>
//       <h1>Template Creation</h1>
//       <form onSubmit={handleTemplateSubmit}>
//         <div>
//           <label htmlFor="templateName">Template Name:</label>
//           <input
//             type="text"
//             id="templateName"
//             value={templateName}
//             onChange={handleTemplateNameChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="templateContent">Template Content:</label>
//           <textarea
//             id="templateContent"
//             value={templateContent}
//             onChange={handleTemplateContentChange}
//           ></textarea>
//         </div>
//         <button type="submit">Create Template</button>
//       </form>
//     </div>
//   );
// };

// export default TemplatePage;

import React, { useState } from 'react';
// import './template.css'; 

const TemplatePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobile: '1234567890',
    avatar: 'https://example.com/avatar.jpg', // URL to the user's avatar image
  });

  const [newAvatar, setNewAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setUser({ ...user, avatar: event.target.result });
      setNewAvatar(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpdate = () => {
    // Here, you can perform actions like uploading the new avatar image to a server

    // Resetting the newAvatar state after updating
    setNewAvatar(null);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="avatar-container">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
        <input type="file" accept="image/*" onChange={handleAvatarChange} className="avatar-input" />
      </div>
      {newAvatar && (
        <button onClick={handleAvatarUpdate} className="avatar-update-button">
          Update Avatar
        </button>
      )}
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Mobile: {user.mobile}</p>
      </div>
    </div>
  );
};

export default TemplatePage;
