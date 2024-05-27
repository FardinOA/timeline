# Forum Website Frontend

This project is a React-based frontend for a microservice backend forum website. It allows users to view a timeline of posts, where each post displays the user's name, post title, and post body. Users can also expand each post to view the relevant comments.

## Features

-   View a timeline of posts sorted in descending order of post ID.
-   Each post displays the user's name, post title, and post body.
-   Expand each post to view the relevant comments.

## Technologies Used

-   Next JS: A JavaScript framework for building user interfaces on top of React JS.
-   Tailwind CSS: A utility-first CSS framework for styling the UI.
-   ShadCn UI: A tailwindCSS component library

## Run Locally

Clone the project

```bash
  git clone https://github.com/FardinOA/timeline.git
```

Go to the project directory

```bash
  cd timeline
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Note:

I tried to implement react-window. But I can't handle the dynamic height with react-window and my post card when I expand the card. I will come up with a solution to fix this issue. Then I will implement it.
