### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
RESTful routing provides mapping from HTML (get, post, put, delete) to controller CRUD actions (create, read, update, delete). 

- What is a resource?
a resource is the data associated with a RESTful entity 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
When building a JSON API it's important not to include routes that render a form that when subbitted creates a new user because it's always changing. Once the user is added to a certain list or if there's a constant then it makes more sense. 

- What does idempotent mean? Which HTTP verbs are idempotent?
A function is idepotent if it retruns the same output for the same input or it does what's expected of it to do. Vebs like GET, PUT, HEAD, OPTIONS, DELETE and TRACE are all idepotent. 

- What is the difference between PUT and PATCH?
PUT is when you want to place something somewhere, and PATCH is when you want to modify it. 

- What is one way encryption?
One way encryption is a safety feature that keeps passwords sfe. There is no known way to decrypt an already encrypted string. 


- What is the purpose of a `salt` when hashing a password?
The purpose of salt when hasing a password is that there's an element of randomness in it - making it more difficult to get backed. 

- What is the purpose of the Bcrypt module?
Bcrypt allows us to build a password security platform that always hashes everypassword with salt

- What is the difference between authorization and authentication?
authentication is the process of veryifying who someone is. Authorization is granting permission for the software to do something. 