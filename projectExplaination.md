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

Current Role:
I am currently working as a Software Developer at Route Mobile Limited. My primary role involves developing and maintaining backend services using Node.js and building scalable features for enterprise messaging solutions.

Currently, I am working on a customer communication platform that enables businesses to interact with their customers through multiple messaging channels such as WhatsApp, RCS, and Viber. We integrate with Meta APIs to provide seamless messaging capabilities.

My responsibilities include developing Node.js microservices, designing and integrating REST APIs, implementing cron jobs for scheduled tasks, and building real-time communication features using Socket.io/WebSockets for our Live Agent Chat Panel.

On the frontend, I also contribute to Angular and React applications by implementing new features and optimizing performance. Additionally, I collaborate closely with Product, QA, and DevOps teams in an Agile environment to deliver production-ready features.


Response latency reduced by 35%.
The Live Agent Chat Panel initially relied on frequent API polling to check for new messages. This introduced delays because the client had to wait until the next polling interval to receive updates.

To improve responsiveness, we implemented Socket.io, which maintains a persistent WebSocket connection between the client and server. Whenever a customer or agent sent a message, the server instantly emitted an event to the connected recipient instead of waiting for the next API request.

We also optimized the message flow by:

Broadcasting events only to the intended user or room instead of all connected clients.
Sending only the newly received message rather than refreshing the entire conversation.
Reducing unnecessary database queries where possible.

As a result, messages appeared almost instantly, and the response latency improved by approximately 35%, creating a much smoother real-time chat experience.

Optimized page load by 30%
In one of our messaging modules, the page was taking around 4–5 seconds to load because multiple APIs were being called simultaneously and a large amount of data was rendered on initial load.
To improve this, I:
Implemented lazy loading for modules so only required modules were loaded initially.
Reduced unnecessary API calls by caching frequently used data.
Added pagination so we loaded only the required records instead of the complete dataset.

How did you measure 30%?
We compared the page load time before and after the optimization using the browser's Developer Tools (Network and Performance tabs). We also observed improved response times during QA testing.

Chat Application:
Points:
1. One Socket Connection per sesion (means login session)
2. For reply i add reply_id in same chat_table.
3. And For reactions i create an different table (because one chat gives multiple user reactions so it's hard to maintain while updating and deleting)
4. For delete for everyone in chat table is_delete_for_everyone and delete timestamp column are there and for rendering if is_delete_for_everyone is true i show 'This message was deleted'.
5. For delete for me chat there is seperate table id,userid messageid and deletetimestamp is there while fetching i check there is no messageid include where particualr room id is there.
One of my personal projects is a real-time chat application that allows users to communicate through one-to-one as well as group conversations.

I built this project using React.js on the frontend, Node.js and Express.js on the backend, SQL as the database, Socket.io for real-time communication, and JWT for authentication.

Users can register and log in securely using JWT-based authentication. Once authenticated, they can create groups, invite members, send direct or group messages, and manage conversations.

The application supports messaging features such as editing messages, deleting messages, replying to messages, emoji reactions, document sharing, and delete-for-me/delete-for-everyone functionality with an undo option.
For delete For EveryOne in chat table is_delete_for_everyOne & delte timestamp is there 
And For delete For me we have seperated table and releation with chat table is user_id.

For real-time communication, I integrated Socket.io. When a user sends a message, it is stored in the SQL database through the Node.js backend, and at the same time the server emits a Socket.io event so the recipient receives the message instantly without refreshing the page.

On the frontend, I used Redux Toolkit for state management to efficiently manage user sessions, conversations, and message updates while keeping the UI responsive.