# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly


### Links

- Solution URL: [Github repository](https://github.com/KristaCalleja/coming_soon_layout)
- Live Site URL: [Live site URL here](https://kristacalleja.github.io/coming_soon_layout)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Regex

### What I learned

I first started this challenge in August 2020, and I am now finalising it a year later (Aug 2021). I am glad to say that my code has become cleaner, more succinct and more responsive, as it is supposed to be.

In the past months I have mastered CSS code writing and also got familiar with the DOM and DOM manipulation through Vanilla JavaScript.

This exercise also makes use of the .test() method, as well as Regular Expressions.

This is some code I am proud of: 

```js
const checkRegex = regex.test(string); 
```

### Continued development

Unfortunately I was not able to successfully clear the prompt helper once success or error message is displayed. Since the div is created inside the email validation function, I was unable to access it through a new function which would clear the results. I considered adding an option to the event handler, like so: 
```js
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateEmail();
    }, { once: true }
);
```
however it wasn't what I was looking for. I will take some time and get back to this later. 
Meanwhile, if you are reading this and would like to help me to solve this problem, I would love to hear from you and your pull request. 

## Author

- Website - [Krista Calleja](https://kristacalleja.github.io)
- Frontend Mentor - [Krista Calleja](https://www.frontendmentor.io/profile/kristacalleja)

## Acknowledgments

Thank you to the Front End Mentor Slack group who helped me find the correct Regular Expression to this email validation form. 
