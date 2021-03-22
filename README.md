# Day 1

## Welcome 🚀

Hello guys and welcome to this JavaScript course, during these 25 hours we will learn to develop a Web platform. They will know both the backen and the frontend, where our users can watch videos, add them to their list, create their account and log in. I share the link of the project that we are going to do: [MoonMakers-Video](https://moonmakers-video.herokuapp.com/). I am Diego Francisco Luna a Full Stack developer, co-founder of MoonMakers a community, MakerSpace and a YouTube channel.

Perfect I would like you to introduce yourself:
* what is your name?
* where are they from?
* What do you like to do?

## What is web development? 1/2 👨‍💻

### Why is it important to learn to program?

Programming is a fundamental tool in the world we live in. In addition, their learning is an opportunity to improve logical reasoning.

### What is web development?

Web development means building and maintaining websites.
A web page has super important characteristics such as speed, appearance, and user experience

## What tools are used in Web development?

The web is made of:

- Html5 what is the structure.
- Css3 which are the styles of a page.
- JS is the functionality of our platform or web application.

When developing we use:

- Libraries that help us speed up tasks.
- Frameworks that are a set of libraries and rules that help us in our projects.

## Terminal -5 minutes-

Let's open the terminal

Mine is a little different because I have a special framework that we are going to download [ohmyz](https://ohmyz.sh/)

For those who have not yet downloaded Git, I share the link through the messages [Git](https://git-scm.com/), we click and start downloading

Git is a very important tool for every programmer because it takes our project from the beginning to the end and we can make changes to it on the timeline

Terminal:

### macOS  and Linux 🔩

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `pwd`              | Where are you                      |
| `ls`               | What files are there               |
| `ls -al`           | We see everything in detail        |
| `cd (binder)`      | We go into folders                 |
| `cd ..`            | Get out of our folder              |
| `mkdir (name)`     | We create a folder                 |
| `rmdir (name)`     | To delete a carpet                 |
| `nano (name.text)` | To create or modify a file         |
| `rm (name)`        | To delete a file                   |
| `history`          | To see what commands you have used |

### Windows ⌨️

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `cd`               | Where are you                      |
| `dir`              | What files are there               |
| `cd (binder)`      | We go into folders                 |
| `cd ..`            | Get out of our folder              |
| `mkdir (name)`     | We create a folder                 |
| `rmdir (name)`     | To delete a carpet                 |
| `del (name)`       | To delete a file                   |
| `doskey /h F7 key` | To see what commands you have used |

## Download -5 minutes-

For those who have not yet downloaded VSCode (url: https://code.visualstudio.com/),

This is a text editor that will allow us to work with JS and many more languages at the same time that we can customize it either in style or in functions.

For those who have not yet downloaded Node.js (url: https://nodejs.org/en/) we download the LTS,

This allows us to work with JavaScript on the server, and NPM is also included, which is a package manager that we will use later.
## Git basics 📦

| Command                                                | Description                                                                            |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| `git --version`                                        | What version of git do we have?                                                        |
| `git init`                                             | We start a repository                                                                  |
| `git config --global user.name "SC"`                   | configure git, name                                                                    |
| `git config --global user.email "noseque@hotmail.com"` | configure git, email                                                                   |
| `git config --list`                                    | configure git                                                                          |
| `git status`                                           | See the files, and see if they are already added to the history or if they are missing |
| `git add (name)`                                       | Add a file to our story                                                                |
| ` git add .`                                           | Add everything to the story.                                                           |
| ` git rm --cached archivo.txt`                         | Remove from prep area                                                                  |

## Basic JS, 45 minutes. 🛠️

We use the VScode extension, called Code Runner.

- Values, Values, (Boolean, null, undefined, array, objects)
- variables
- functions
- scope
- hoisting
- coercion
- Operators
- if
- switch
- arrays
- loops
- objects
- Constructor function

Challenge js, 10 minutes. Rock, paper or scissors

## Create React app 🖇️

React is a JS library that allows us to create platforms such as Facebook, Spotify, Netflix and many more. Which makes it the best option to create.

We open the terminal and put this code:

```
  npx create-react-app moonmakers-video
  cd moonmakers-video
  npm start
```

The official React [documentation](https://reactjs.org/)

The http://localhost:3000/ opens, and we have our application running.

We open VScode and select the folder of our project, we already have the base files of our react project.

We click on App.js, The HTML is the structure of our project, the titles, paragraphs, images, links and more, we will do some examples:

## HTTML 5 📖

We create a title with:

| Html                                   |
| ------------------------------------- |
| ```<h1> Hello world </h1>``` |

A paragraph with:

| Html                                   |
| ------------------------------------- |
| ```<p> welcome to react </p>``` |

A link with:

| Html                                   |
| ------------------------------------- |
| ```<a href="https://moonmakers.org"> Link </a>``` |

A container and a title:

| Html                                   |
| ------------------------------------- |
| ```<div> <h2> hello react </h2> </div>``` |

## CSS 3 📌

We click on the App.css file

The css is the styles of our page, the colors, the size of our letters, animations.

we're going to style our title tag with:

| Css                                   |
| ------------------------------------- |
| `h1 {  }` |

we put the styles:

| Css                                   |
| ------------------------------------- |
| `h1 { font-size: 55px; color: red; }` |

And our paragraph tag:

| Css                                  |
| ------------------------------------ |
| `p { font-size: 25px; color: red; }` |

And our link tag:

| Css |
| --- |
| ``` a { font-size: 25px;  color: white;  text-decoration: none; } ```|

we add classes to our container and title:

| Html |  Css |
| --- | --- |
 ``` <div className="container"> <h2 className="title"> hello react </h2> </div> ```| ``` .container{  height: 500px;  width: 500px;  background-color: white; 	}   .title { color: black; } ```|

We add a hover to it, which is when the mouse is over our label and we add an action to it:

| Css |
| --- |
| ``` h1:hover { color: blue; font-size: 110px; } ```|

For more Css Link: https://cssreference.io/ 

For more Html Link: https://htmlreference.io/ 

## Challenge ⚡︎

replicate the home of MoonMakers Video