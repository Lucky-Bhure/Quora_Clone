# Quora Clone (Simple Blog Application)

Quora Clone is a simple blog application built with Express.js. It allows users to create, view, edit, and delete posts. The app is designed to demonstrate the basics of CRUD (Create, Read, Update, Delete) operations in a web application, using Express.js as the backend framework and EJS (Embedded JavaScript) for templating.

## Features

- **Home Page**: Displays a list of all posts.
- **Create Post**: Users can create a new post with a username and content.
- **View Post**: Each post can be viewed individually on its own page.
- **Edit Post**: Users can edit the content of a post.
- **Delete Post**: Posts can be deleted from the home page.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js, used to build the application.
- **EJS**: Templating engine for rendering HTML pages with embedded JavaScript.
- **UUID**: Library for generating unique IDs for each post.
- **Method-Override**: Middleware for supporting PUT and DELETE methods in HTML forms.

## Project Structure

```plaintext
├── public/              # Static files (CSS, images, etc.)
├── views/               # EJS templates
│   ├── home.ejs         # Home page template
│   ├── newpost.ejs      # New post form template
│   ├── show.ejs         # Individual post view template
│   ├── edit.ejs         # Edit post form template
│   └── notfound.ejs     # 404 error template
├── app.js               # Main application file
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/express-blog-app.git
   cd express-blog-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

## Usage

- Navigate to the home page to see a list of posts.
- Click on "New Post" to create a new blog post.
- View any post by clicking on its title.
- Edit or delete posts using the respective buttons on the post's page or the home page.

## Future Enhancements

- Add user authentication for creating and editing posts.
- Implement comments for each post.
- Add pagination to the home page.
- Enhance the UI with a CSS framework like Bootstrap.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like.

---

This `README.md` gives a clear overview of your project, including its features, structure, and how to set it up and use it. It also provides a pathway for future improvements and includes licensing information.
