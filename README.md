## Ringa Ringa

Just another carousel. 

Most of the carousel I found written in React were using some sort of DOM calculation to figure out the size of the carousel and then set the width of the carousel based on the box it is put it. The problem here was the calculation seems to be off when used with CSS Grid and fr units. Since, I haven't built a carousel, felt I would write my own. 

Supports autoplay, infinite cycling though carousel items. The default interval is set to 3seconds, you can change the interval by passing in `interval` prop with value in milliseconds. Ex. 5s would be 5000.

It supports passing in a svg component for showing icons for previous and next arrows. 

The default set of props are, 
```js
  interval: 3000
  pauseOnHover: true,
  autoPlay: false,
  direction: "ltr",
  prevButtonLabel: "Previous",
  nextButtonLabel: "Next",
  showControls: true,
  prevButtonComponent: <PrevButtonComponent />,
  nextButtonComponent: <NextButtonComponent />,
  infinite: false,
  showIndicators: true
```

### Things to do
- Use Render prop pattern to allow users to specify their own components for indicators and arrows
- Use CSS variables to handle small css changes like arrow widths, colors for indicators so base styling can be used. 
- Write unit tests
- Storybook/ React styleguist to showcase

