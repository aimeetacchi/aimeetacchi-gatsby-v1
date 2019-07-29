---
title: 'Setting up your first React App and component'
description: A blog about making your first react component, and setting up create react app.
date: '24-07-2019'
image: react.png
---

#Setting up your first React app and component.

If this is your first time using React here are a few things you should know before diving into it. You should know HTML, CSS and some ES6 Javascript, such as Arrow Functions, Classes, Destructuring, Template literals (Template strings). If you know all that then you are good to go.

The first thing you want to do if you don’t have it is install node (higher than version 8.10), you can install that from https://nodejs.org you can either download it or install via the command line. To install via the command line you will do `brew install node` If you have homebrew installed. This will install you nodeJS which will also install npm for you. To check the versions you can do `npm -v` and `node -v` in the command line and it will show you the versions you have installed.

Once you are all setup with that, you can get into installing React. We are going to use Create React App, which sets you up a boiler place app you can begin with. To install this you will run in your command line - `npm install -g create-react-app`

This will install you Create React app globally on your machine, this just makes our lives easier. Next you will want to cd into your projects folder, desktop or wherever you want to set up the react app you are going to create.

Run `create-react-app my-first-app`

my-first-app as you have probably guessed is the name of our app so you can call it whatever you want.

Then `cd my-first-app` which will take you into the directory.

Next you want to do npm start this will start your app running. You will see the boilerplate react app.

Congrats you have setup your very first react app, now let's create our first component, open your project in VScode or any editor of your choice I use VScode. You will see a lot of folders and files don’t worry about it. Go into your src folder and open up App.js and you will see a component. This is a functional component, there’s two types of components. You can have functional components or class components. It’s best to make your components functional ones.

So lets make our component that this one will use. In the src folder, make a new folder called components and inside that make a file called card.js we are going to make a card component that will hold all our code for a card that has some text, and an image and link. Open that file you just created.

The first line we need to write is
`import React from 'react'`

This will import React for us so we can make use of all it’s functions and methods.
Next you need to set up your component, so type -

```
function Card() {
return (

<div style={{width: '340px', backgroundColor: 'black', color: 'white', border: '1px solid'}} className="card">
<img style={{width: '100%'}} src="https://dummyimage.com/640x4:3/" alt=""/>
<section style={{padding: '20px'}} className="card\_\_content">
<h1 className="title">Title of Card</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
<a style={{color: 'white'}} href="#"> MORE INFO</a>
</section>
</div>
)
}

export default Card
```

The code inside the return looks like HTML doesn’t it. It’s actually JSX when the app gets compiled it will all turn in to Javascript. You will also see that class for styling CSS is called className this is because class is a reserved word in Javascript so we have to use className and you write your styles like they are objects, and use camelCase.
export default Card, is so you can use this component in another file. Save this file and go back to App.js

At the top of the file, write -
`import Card from './components/card';`

This is bringing in our Card component we just created so we can use it in the App component. To display it all you need to do now is go into the return and below the end of `</header>` tag.

Type `<Card/>` then Save the file, the app will refresh and you will see your card component on the screen. Congrats You just created your very first react component. Now you can use that component again and again. Add another two `<Cards/>` below..

Now you will have a row of three card components, awesome huh! Each of these cards can have their own properties called props so they can have different title, text, image, link but that will be for another post. Have Fun!
