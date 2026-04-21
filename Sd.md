What is monolithic architecture?
Ans:Monolithic Architecture means the whole application is built as one single unit.
All parts of the application are inside one codebase and one deployment.
Monolithic architecture is a software architecture where the entire application is built and deployed as a single unit containing all modules like authentication, business logic, and database access.
e.g. Ecommerce Application:
In Monolithic Architecture, all these modules are inside one application.
Ecommerce App
 ├── User Module
 ├── Product Module
 ├── Cart Module
 ├── Payment Module
 └── Order Module
Everything ispart of one backend service.
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

Advantages
✅ Easy to develop
✅ Easy to deploy
✅ Good for small applications
✅ Simple debugging

Disadvantages
❌ Hard to scale specific feature
❌ Large codebase becomes complex
❌ One bug can crash entire application
❌ Difficult for large teams

Microservices Architecture
Microservices Architecture means the application is divided into multiple small services, and each service works independently.
Each service:
Has its own logic
Can have its own database
Can be deployed separately

Microservices architecture is a design pattern where an application is divided into multiple small independent services that communicate through APIs or message queues.

e.g.
Instead of one big application, we create multiple small services.
Client
   |
API Gateway
   |
----------------------------------
| User Service      | Product Service |
| Order Service     | Payment Service |
----------------------------------
User Service → handles login/signup
Product Service → handles products
Order Service → handles orders
Payment Service → handles payments

Each service runs separately:
node user-service/app.js
node order-service/app.js
node product-service/app.js

Communication between Services
axios.get("http://user-service:3001/users/123")

Advantages
✅ Easy to scale specific service
✅ Independent deployment
✅ Smaller codebases
✅ Different teams can work independently

Disadvantages
❌ More complex architecture
❌ Harder debugging
❌ Network latency
❌ Service communication complexity

API Gateway
An API Gateway is the single entry point for all client requests.
Instead of calling many services directly, the client calls one gateway, and the gateway forwards the request to the correct service.

E.g.
Client
   |
API Gateway
   |
--------------------------------
| User Service | Order Service |
| Chat Service | Payment Service |
--------------------------------
What API Gateway Handles

API Gateway can manage:
Authentication
Rate limiting
Logging
Request routing
Caching

Node.js E.g.
app.use('/users', proxy('http://user-service:3001'))
app.use('/orders', proxy('http://order-service:3002'))

So client calls
api.myapp.com/users
Gateway forward to user services.

Load Balancer
A Load Balancer distributes traffic across multiple servers.
Instead of sending all requests to one server, it spreads them across many servers.
Simple E.g.
           Load Balancer
                |
        ---------------------
        |        |        |
   Node Server  Node Server  Node Server

Benefits
✅ Prevents server overload
✅ Improves performance
✅ High availability

Why API Gateway?
Answer:
single entry point
authentication
rate limiting
logging
routing to microservices

Why Load Balancer?
Answer:
distribute traffic
high availability
scalability