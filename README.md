
[![npm version](https://badge.fury.io/js/react-sd-card.svg)](https://badge.fury.io/js/react-sd-card)

React SD Card is a simple and customizable React component library for displaying cards in web applications.Check live sample at my portfolio site (https://shubham10divakar.github.io/showcasehub/)

## Installation

Install `react-sd-card` using npm or yarn:

```bash
npm install react-sd-card

or

bash

yarn add react-sd-card

Usage

Import Card component from react-sd-card and use it in your React application:

jsx

// src/components/PublicationsList.js
import React from 'react';
import PublicationCard from './Card';
import './PublicationsList.css';

const publications = [
  {
    id: 1,
    title: 'Publication 1',
    year: 2021,
    citations: 15,
    imageUrl: 'path/to/image1.jpg',
    abstract: 'Abstract of Publication 1',
    findings: 'Findings of Publication 1',
    details: 'Major details of Publication 1'
  },
  {
    id: 2,
    title: 'Publication 2',
    year: 2020,
    citations: 10,
    imageUrl: 'path/to/image2.jpg',
    abstract: 'Abstract of Publication 2',
    findings: 'Findings of Publication 2',
    details: 'Major details of Publication 2'
  },
  {
    id: 2,
    title: 'Publication 2',
    year: 2020,
    citations: 10,
    imageUrl: 'path/to/image2.jpg',
    abstract: 'Abstract of Publication 2',
    findings: 'Findings of Publication 2',
    details: 'Major details of Publication 2'
  },
  {
    id: 2,
    title: 'Publication 2',
    year: 2020,
    citations: 10,
    imageUrl: 'path/to/image2.jpg',
    abstract: 'Abstract of Publication 2',
    findings: 'Findings of Publication 2',
    details: 'Major details of Publication 2'
  },
  // Add more publications as needed
];

const customCardStyles = {
  background: '#e41111',
  margin: '20px',
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  // Add more custom styles as needed
};

const PublicationsList = () => {
  return (
    <div className="publications-list">
      <h1>My Publications</h1>
      <div className="cards-container">
        {publications.map((pub) => (
          <PublicationCard 
            key={pub.id} 
            id={pub.id} 
            title={pub.title} 
            detail1={pub.year}
            hdetail1='year' 
            detail2={pub.citations}
            hdetail2='citations'
            detail3={pub.citations}
            hdetail3='cit3'
            imageUrl={pub.imageUrl}
            textAlignment='left' 
            // customStyles={customCardStyles}
          />
        ))}
      </div>
    </div>
  );
};

export default PublicationsList;

//Some basic CSS for the above 
/* src/components/PublicationsList.css */

.publications-list {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .publications-list h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
```

# Props


key: React key prop used for list items to help React identify which items have changed, are added, or are removed.

id: Unique identifier for the publication card, typically used for React's reconciliation algorithm.

title: Title of the publication being displayed.

detail1: Value for the first detail information (e.g., publication year).

hdetail1: Header or label for the first detail (e.g., "Year").

detail2: Value for the second detail information (e.g., number of citations).

hdetail2: Header or label for the second detail (e.g., "Citations").

detail3: Value for the third detail information (if applicable).

hdetail3: Header or label for the third detail.

imageUrl: URL for an image associated with the publication (optional).

textAlignment: Alignment of text content within the card ('left', 'center', 'right', etc.).

customStyles: Optional prop for passing custom styles to the card component to customize its appearance.


## About Me
I am Subham Divakar and I am the developer of multiple python and react libraries.
Check out my worksamples on my portfolio site.

## Connect with Me

    LinkedIn: https://www.linkedin.com/in/subham-divakar-a7420a12a/
    GitHub: https://github.com/shubham10divakar
    Portfolio: https://shubham10divakar.github.io/showcasehub/

## Feedback

Your feedback is important! Please share your thoughts and suggestions.
License

This project is licensed under the MIT License.