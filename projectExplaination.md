I built a Social Media API with a multi-level comment system where users can create posts, add comments, and reply to comments in a nested thread, similar to Instagram or Reddit.
The backend is built using Node.js, Express, and MongoDB, and the frontend is in Angular.

I implemented secure authentication using JWT and bcrypt, where passwords are hashed and users access protected APIs using tokens.

For comments, I used a parent–child data model in MongoDB, where each comment stores a parentCommentId. This allows unlimited nested replies in a scalable way.

Users can also upload images with posts. I handled file uploads using Multer and stored them in AWS S3, saving only the image URLs in MongoDB for better performance.

Overall, the project is designed to be secure, scalable, and production-ready, with clean REST APIs, centralized error handling, and a responsive Angular UI.”



Tour Booking Application
I built a Tour Booking application using React, Context API, Node.js, Express, and MongoDB.
It has JWT-based authentication where passwords are encrypted using bcrypt, and a token is used to protect all secure APIs.
Users can register, login, view tours, and book tours, while admins can manage tours and users.
All data is stored in MongoDB using Mongoose, and I implemented full CRUD operations for users, tours, and bookings.
The backend has centralized error handling and validation to ensure consistent and secure API responses.”