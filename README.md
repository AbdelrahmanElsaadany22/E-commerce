## E-commerce app
## Description
   simple E-commerce API.
## Technologies

<div>
    
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  <br>
  <center>
  
  <img src="https://camo.githubusercontent.com/2dbe8dc3b8fa5ac59437c9d8c94323ad3f0052d3ff5ac0e9c258ceb5daba76f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f31362e332e312d646f74656e762d726564">
  <img src="https://camo.githubusercontent.com/71fe39e1c67b1793f22d11c188a2cdd86438a84e5635b783ed1d1691f8e1c8d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e34312e302d636c6f7564696e6172792d626c7565">
  <img src="https://camo.githubusercontent.com/a3ff2a5d02a913cdf673537dea66873aecaf58cb8c770f9225e2d2959712ed6b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e342e352d2d6c74732e312d6d756c7465722d726564">
  <img src="https://camo.githubusercontent.com/e098806c441efac8d7c44cbb0cf5000f113dfc54db28d16bbfcbeddc3ba316ed/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e31302e302d6d6f7267616e2d726564">
  <img src="https://camo.githubusercontent.com/b9fe7b2faa1b963c1d1b77ee18a4a7689a0d46d18cf38a48ae464f2a03357eba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f362e392e342d6e6f64656d61696c65722d726564">
  <img src="https://camo.githubusercontent.com/2aa8d320fc8552d10a9f66e1076360d1f0c9ef2ee5adaea034cd13f68ca1efdc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f352e312e302d6263727970742d726564">
  <img src="https://camo.githubusercontent.com/f73e41f53709208ed3f07c001ccb103454212e26e6d296fa823e02cde579b205/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e322e302d657870726573732d2d6173796e632d2d68616e646c65722d726564">
  <img src="https://camo.githubusercontent.com/bdd58addfeff8b18867ab6606b24bd158319885f8c1918ec13c5786259b6c5ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f372e302e312d657870726573732d2d76616c696461746f722d726564">

  </center>
</dev>

## **Key Features:**

- **User Authentication:** Secure user authentication endpoints using JWT tokens.
- **Cart Option:** Create, retrieve, update, delete and ensure stock is available.
- **User Profiles:** Fetch and update user profiles,fetch all users,including profile pictures,and contact information.
- **Order Option:** Fetch all orders to user, make online payment with Stripe, make COD order.
- **Coupon:** Fetch all Coupuns,specific coupon,update and delete.
- **Brand:** Fetch all Brands,specific Brand,add with image or no,update and delete.
- **Category:** Fetch all Categories,specific Category,add,update and delete.
- **SubCategory:** Fetch all Subcategories,specific subcategory,add,update and delete.
- **Product:** Fetch all Products,specific Product,add with image,update and delete.
- **Rewiew:** Fetch all Reviews,add,update and delete.
- **Upload Images:** Upload and manage images to be included in Product or Brands.
- **Pagination:** Paginate large data sets for efficient retrieval and presentation.
- **Search:** Field that you want to search by it.

## Installation
1. **Clone the Repository:**
   Use the `git clone` command to clone the GitHub repository to your local machine.
   ```bash
   git clone https://github.com/AbdelrahmanElsaadany22/ecom
2. **Initialize a Package.json File (if not already done):**
   If your project doesn't already have a `package.json` file, you can create one by running:
   ```bash
   npm init
   # or
   yarn init
3. **Install depends**
   ```bash
      npm install
5. **Setting up env variables**<br>
   - **Please first specifiy your database engine**
    ```properties
    ## PORT
    PORT=number 
    
    ## Prisma URI
    DB_STRING=connection-string   
    
    ## JWT access token
    SECRET=secret string
    SALT=number
    
    ## CLOUD CONFIG
    CLOUDINARY_CLOUD_NAME=cloud name
    CLOUDINARY_API_KEY=cloud-api-key
    CLOUDINARY_API_SECRET=cloud-api-secret
    MODE=""

    ## STRIPE
    STRIPE_SECRET=stripe-sekret-key
    STRIPE_WEBHOOK_SECRET=STRIPE_WEBHOOK_SECRET
## Project Structure
 ```powershell
[db]
    ├── connection.js
[src]
    ├── bootstrab.js
    ├── [middlewares]
        ├── upload.middleware.js
        └── validation.js
    ├── [modules]
        ├── [auth]
            ├── auth.controller.js
            ├── auth.middleware.js
            ├── auth.routes.js
            └── auth.validate.js
        ├── [cart]
            ├── [controller]
                ├── cart.controller.js
                └── order.controller.js
            ├── [middlewares]
                └── cart.middleware.js
            ├── [models]
                ├── cart.model.js
                └── order.model.js
            ├── [routers]
                ├── cart.routes.js
                └── order.routes.js
            └── [validations]
                └── order.validations.js
        ├── [coupon]
            ├── [controller]
                └── coupon.controller.js
            ├── [models]
                └── coupon.model.js
            ├── [routers]
                └── coupon.routes.js
            └── [validations]
                └── coupon.validations.js
        ├── [image]
            ├── [middlewares]
                └── image.middleware.js
            ├── [models]
                └── image.model.js
            └── [utils]
                └── image.utils.js
        ├── [product]
            ├── [controller]
                ├── brand.controller.js
                ├── category.controller.js
                ├── product.controller.js
                ├── review.controller.js
                └── subcategory.controller.js
            ├── [middlewares]
                └── product.middlewares.js
            ├── [models]
                ├── brand.model.js
                ├── category.model.js
                ├── imageOnProduct.model.js
                ├── product.model.js
                ├── review.model.js
                └── subcategory.model.js
            ├── [routers]
                ├── brand.routes.js
                ├── category.routes.js
                ├── product.routes.js
                ├── review.routes.js
                └── subcategory.routes.js
            └── [validation]
                ├── brand.validation.js
                ├── category.validation.js
                ├── product.validation.js
                ├── review.validations.js
                └── subcategory.validations.js
        └── [user]
            ├── [controller]
                ├── user.controller.js
                └── wishlist.controller.js
            ├── [models]
                └── user.model.js
            ├── [routers]
                └── user.routes.js
            └── [validation]
                └── wishlist.validations.js
    ├── [routers]
        └── v1.routes.js
    └── [utils]
        ├── ApiFeatures.js
        ├── enums.js
        ├── error.handler.js
        ├── image.js
        └── schemas.js
[.env.example]
[.gitignore]
[index.js]
[package-lock.json]
[package.json]
[README.md]
```
## Schemas Explaination
  1 - **USER SCHEMA** <br>
  This schema defines a model called "user" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying users. It auto-increments its value.
- `name`: A string field for the user's name.
- `email`: A string field for the user's email address, marked as unique.
- `password`: A string field for the user's password.
- `role`: A field representing the user's role, with a default value of "USER".
- `wishList`: reference to product Schema , that refer to the products that user hope to buy.
- `createdAt`: A datetime field representing the timestamp when the user account was created, with a default value of the current timestamp.
- `updatedAt`: A datetime field representing the timestamp when the user account was last updated, automatically updated whenever the user data changes.
---

  2 - **PRODUCT SCHEMA** <br>
  This schema defines a model called "product" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying profiles. It auto-increments its value.
- `title`: An string field for proudct's name, marked as unique.
- `slug`:A string field get it from the title, marked as unique.
- `description`: A string field representing information about the product.
- `stock`: An integer field representing the product's quantity at the store.
- `price`: A integer field representing the price of the product.
- `discounted_price`:  A integer field representing the discounted_price of the product if founded.
- `cover_image`:  A field refer to the image filed and it is represent the cover image or base image of this product.
- `features`:  An array of keys and values.
- `subcategory_id`: A field refer to the subcategory that the product in.


---
 3 - **BRAND SCHEMA** <br>
 This schema defines a model called "brand" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `title`: An string field for proudct's name, marked as unique.
- `slug`:A string field get it from the title, marked as unique.
- `logo`:  A field refer to the image filed and it is represent the cover image or base image of this brand.



---

4 - **CATEGORY SCHEMA** <br>
This schema defines a model called "category" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `title`: An string field for proudct's name, marked as unique.
- `slug`:A string field get it from the title, marked as unique.
- `image`:  A field refer to the image filed and it is represent the cover image or base image of this brand.


---

5 - **IMAGEONPRODUCT SCHEMA** <br>
This schema defines a model called "imageOnProduct" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `product_id`: An integer field that refer the product model.
- `image`: A string field representing the URL of the image associated with the story.


---

6 - **REVIEW SCHEMA** <br>
This schema defines a model called "review" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `text`: A string field representing the opinin of specific user about specific product.
- `rating`: An Enum contain values(1,2,3,4,5).
- `product_id`: A field that refer the product model.
- `user_id`: A field that refer the user model.
This schema outlines the structure and relationships of a like entity within a database, typically used to establish connections between users and posts for the like functionality. Additionally, the combination of `postId` and `userId` is used as a composite primary key for the "Like" model.

---

7 - **SUBCATEGORY SCHEMA** <br>
This schema defines a model called "subcategory" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `name`: An string field for subcategory's name, marked as unique.
- `slug`:A string field get it from the title, marked as unique.
- `category_id`:  A field refer to the category model .

---

8 - **IMAGE SCHEMA** <br>
This schema defines a model called "image" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `name`: An string field for subcategory's name, marked as unique.
- `slug`:A string field get it from the title, marked as unique.
- `path`:  An string filed refer to the image url .

---


 9 - **COUPON SCHEMA** <br>
This schema defines a model called "coupon" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `code`: An string field for coupon's name, marked as unique.
- `expiry`:A date field refer to the time that the code will end.
- `discount`:  A integer filed that refer to the number of discount.

---

 10 - **CART SCHEMA** <br>
This schema defines a model called "cart" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `user_id`: A field that refer to the user model.
- `products`:An array that contain product_id and the quantity of you need to buy .
- `coupon_id`:  A field that refer to the coupon model.

---

10 - **ORDER SCHEMA** <br>
This schema defines a model called "order" with various fields and their associated attributes:

- `id`: An integer field that serves as the primary key for identifying follow relations. It auto-increments its value.
- `user_id`: A field that refer to the user model.
- `products`:An array that contain product_id and the quantity of you need to buy .
- `coupon`:  A field that refer to the coupon model.
- `address`:  An string filed that refer to the address of the user.
- `phone_number`:  An string filed that refer to the phone number of the user.
- `payment_type`:  An enum filed that contain two options (COD,card) and the default is COD.
- `is_paid`:  An Boolean filed that refer to the state of the order paied or not and the default is false.
- `is_deliverd`:  An Boolean filed that refer to the state of the order deleverd or not and the default is false.