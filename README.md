## About NODE.js API

This project is created to implement Restful CRUD API with Node.js, Express and MongoDB.

If you want to learn how the project is developed. You can contact me via email: wisdomdzontoh@gmail.com

### API Features

The application can create, read, update and delete data, for example: products, in a database.

#TO RUN THIS APPLICATION

1. Make sure that you have installed node.js on your computer. If not, download it from [here](https://nodejs.org/en/). YOU NEED TO INSTALL THE FOLLOWING SOFTWARE ON YOUR YOU NEED TO INSTALL THE FOLLOWING SOFTWARE ON YOUR YOU NEED TO HAVE.
2. install express, mongoose, cors and axion using the following commands
   npm i express
   npm i mongoose
   npm i cors
   npm i axion
3. start your server by running "node app" on terminal or command prompt using (npm run dev)
4. open your favorite browser and type "http://localhost:3000" to see all available endpoints
5. use Postman, nsomnia or any HTTP client of your choice to interact with these APIs.

### API Endpoints

1. POST /api/products - Add new product(s).
   Request Body:  
    {
   name:"Product Name",
   description:"Product Description",
   price:99.99
   }
   Response:  
    { message: 'New Product added!', id: '607c8eeaadcfbafdcb9febe' }

2. GET /api/products - Get all products.
   Response:  
    [
   {
   _id: '607c8eeaadcfbafdcb9febe',
   name: 'Iphone 13 Pro Max',
   description: 'iPhone 13 Pro Max features a 6.7-inch OLED display that delivers stunning visuals. It also packs an advanced camera system with
   description: 'iPhone 13 Pro Max features a 6.7-inch OLED display...',
   price: 999.99
   },
   ...
   ]

3. GET /api/products/:id - Get one product by its ID.
   Parameters :  
    id - The ID of the product you want to get.
   Response:  
    {
   \_id: '607c8eeaadcfbafdcb9febe',
   name: 'Iphone 13 Pro Max',
   description: 'iPhone 13 Pro Max features a 6.7-inch OLED display...',
   price: 999.99,
   }

4. PUT /api/products/:id - Update existing product.
   Parameters :  
    id - The ID of the product you want to update.
   Request Body:  
    { any fields that you want to update (name, description or price) }
   Response:
   { message: 'Product updated!' }

5. DELETE /api/products/:id - Delete a product by its ID.
   Parameters :  
    id - The ID of the product you want to delete.
   Response:  
    { message: 'Deleted product!' }
   ### User Routes

User routes are used for handling user data and operations such as creating new users, getting information about specific users, updating user information, and deleting users from the database.
User routes are accessed at `http://localhost:3000/user/`

1. POST /signup - Sign up a new user.
   Request body:
   {
   username: 'testuser',
   email: 'test@email.com',
   password: 'password'
   }
   Response:
   {
   username: 'testuser',
   email: 'test@email.com',
   \_id: '607ca2ecacdfbafdcb9fecc'
   }

2. POST /login - Log in an existing user.
   Request body:
   {
   email: 'test@email.com',
   password: 'password'
   }
   Response:
   Send back session token for use in future requests.

`Note:` All responses will include a status code and if there is a success message it will look like this `{message:'success'}`. If there was an error it would look something like
`Note:` All responses will include a JWT token which can be used in the Authorization header like so: `Authorization: Bearer <token>`. This is how protected routes know who
`Note:` All responses will include a JWT token which is required for all subsequent requests unless otherwise stated. To include this token in your headers add following line before each request:
`Note:` All responses will include a JWT token which can be used as the "Authorization" header for protected endpoints.
`Note:` All responses will come with a status code and if there is a success message it will look like this: `{ status: 'success', message: 'This is the message' }
`Note:`All responses will include a status code and if there is a success message it will look like this`{message:'successful'}`. If there was an error it would look something like 3. GET /profile - Get current users profile information.
Authentication required, send token in header as "Authorization" with value "Bearer [token]".
Response:
{
username: 'testuser',
email: 'test@email.com',
products: [] // Array of IDs of products currently in cart
}

4. PUT /updateProfile - Update the current user’s profile information.
   Authentication required, send token in header as "Authorization" with value "Bearer [token]".
   Request body:
   Same as profile get request, but can update any field.
5. DELETE /deleteAccount - Delete the current account and all associated data.
   Authentication required, send token in header as "Authorization" with value "Bearer [token]".
6. POST /logout - Log out the current user by clearing the session token
   No request body needed. Just send the request to this endpoint.

The server should maintain a list of users, each with fields including username, email, hashed password, and possibly other info such as phone number or shipping address. The server will also
Response: 204 No Content (empty response)

### Product Endpoints

1. GET /product?category=:category - Get a list of all products in a specific category.
   Query params:
   category - Category name (e.g., "Electronics").
   Auth not required.
   Response: An array of product objects that belong to the specified category. Each object contains at least the following fields:
   Response: An array of product objects sorted by relevance.

Example response:
[
{
_id: '607c8f3aadbfbafdcb91e92e',
name: 'Nexus 5',
description: 'A great phone!',
price: 399.99,
quantity: 10,
image: '/images/phone.jpg'
},
...
]

2. GET /product/:id - Get info on a single product.
   Path param :id - ID of the product you want to retrieve.
   Auth not required.
   Response: A product object. See example below.

Example response:
{
\_id: '607c8f3aadbfbafdcb91e92e',
name: 'iPhone XR',
description: 'The iPhone XR is an iOS smartphone released by Apple Inc.' +
'on September 13, 2017. It was announced alongside the iPhone XS,' +  
 ' XS Max, and XR in September 2017. The device features an OLED' +  
 ' display, similar technology to the X series, but at a lower pixel density.' +  
 ' The device has a 5.81-inch screen with a resolution of 1080 x 2536 pixels.' +  
 ' It has a dual-lens camera setup consisting of a 12.2 megapixel' +  
 ' wide-angle lens and a 12 megapixel telephoton . The device is powered' +  
 ' by Apple’s A11 Bionic chip, which provides fast performance for multitasking' +  
 ' as well as improved gaming performance. It supports Wi-Fi 6 and has a' +  
 ' non-removable battery with a capacity of 4 GB or 6 GB depending on the model.' +  
 '\_specifications:' +  
 ' {processor: "A11 Bionic", camera: "12 MP", memory:"4GB/6GB", storage:"64GB"}' +  
}

3. DELETE /product/:id - Remove a product from the database.
   Path param :id - ID of the product you want to delete.
   Auth required (only admin).
   204 No Content if successful.

4. PUT /product/:id - Update information about a product.
   Path param :id - ID of the product you want to update.
   Body: JSON representation of the updated product.
   Auth required (admin).
   If there are validation errors, return a 400 Bad Request and send back a JSON
   object describing the error fields.
   If successful, return a 200 OK and send back a JSON object with the updated
   product.
