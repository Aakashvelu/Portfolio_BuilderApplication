import React from 'react';
import { Link } from 'react-router-dom';
import './Creation.css';
// import t1 from './images/1.jpeg';
import t1 from './1.jpeg';
import t2 from './2.jpeg';
import t3 from './3.jpeg';
import t4 from './4.jpeg';


const Creation = () => {
  const templates = [
    {
      id: 1,
      name: 'Template 1',
      description: 'A modern and clean template with a minimalist design.',
      image: t1,
    },
    {
      id: 2,
      name: 'Template 2',
      description: 'A creative and colorful template to showcase your work.',
      image:  t2,
    },
    {
      id: 3,
      name: 'Template3',
      description: 'A professional and elegant template for a sophisticated portfolio.',
      image: t3,
    },
    {
      id: 4,
      name: 'Template 4',
      description: 'A bold and dynamic template to make your portfolio stand out.',
      image: t4,
    },
    {
      id: 5,
      name: 'Create'
    }
    

  ];

  return (
    <div className="create-portfolio">
      <div className="create-portfolio-header">
        <h1 className="create-portfolio-title">Create Your Portfolio</h1>
        <p className="create-portfolio-description">Choose a template and start building your professional portfolio.</p>
      </div>
      <div className="create-portfolio-templates">
        {templates.map((template) => (
          <div className="create-portfolio-template" key={template.id}>
            <div className="template-image">
              <img src={template.image} alt={template.name} />
            </div>
            <div className="template-details">
              <h2 className="template-name">{template.name}</h2>
              <p className="template-description">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Creation;