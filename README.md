# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](./images/Kapture%202022-06-08%20at%2010.32.23.gif)

### Links

- Live Site URL: [https://selt0.github.io/expensesChart-component/](https://selt0.github.io/expensesChart-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/)
- [Chart.js](https://getbootstrap.com/)

### What I learned

I wasn't sure how I wanted to implement the chart. I did a quick google search and found Chart.js. A great tool to display charts. I spent some time reading the docs and some googling about specific tasks such as getting the cursor to become a pointer on hover. I learned how web development is all about reading the docs and seeing some examples in order to create your own implementation. No need to memorize anything. As long as you can look it up (and know what to google), you can create anything! The code to create the hover is posted below:

```html
<canvas id="canvas"height="200px"></canvas>
```
```js
  options: {
    onHover: (event, chartElement) => {
      const target = event.native ? event.native.target : event.target;
      target.style.cursor = chartElement[0] ? 'pointer' : 'default';
    },
```

### Continued development

I want to get comfortable with the idea that I don't need to memorize everything. No need to get demoralized for not knowing how something works. As long as you have access to the docs, you're good to go!

### Useful resources

- [Show cursor pointer on hover](https://stackoverflow.com/questions/45149062/chart-js-how-to-show-cursor-pointer-for-labels-legends-in-line-chart) - This helped me for find the code to implement the hover. As versions changed, I had to make sure I was using the proper implementation.
- [Chart.js Docs](https://getbootstrap.com/) - Although things might be hard to find at first, the docs provide all kinds of information you'll need to use the tool in your projects

## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)
