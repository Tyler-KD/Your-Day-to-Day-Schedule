# Your-Day-to-Day-Schedule

## Description

In Your-Day-to-Day-Schedule project, a daily scheduler was created for users to store data during business hours 9am-5pm.  This project was built in order for me to employ all of my learned Third-Party-API skills including Bootstrap, CSS frameworks, jQuery, and day.JS for purposes of making a webpage more user-friendly.  It solves the problem of needing a dynamic scheduler which keeps track of time-blocks relative to the current hour and allows the storage with display of entries specific to such time-blocks. Some things I learned during the course of this project are the flexibility of day.JS to give specific time formats necessary for functions, the multitude of options traversing the DOM elements using Bootstrap and jQuery, and the ability to customize pages built with Bootstrap to use custom color themes as well as Google Fonts.

## Usage

To use Your-Day-to-Day-Schedule, open up the webpage in a browser and choose a 9am-5pm work hour time-block to make an entry. All of the time-blocks are checked to see if they are before, during, or past the current hour.  If time-blocks take place before the current hour of the day, then those time-blocks will be color-coded green with a CSS future class. If a time-block takes place during the current hour, then that time-block will be color-coded red with a CSS present class. If time-blocks take place after the current hour of the day, then those time-blocks will be color-coded gray with a CSS past class.

After saving entries to time-blocks using the save button icon to the right of each block, then the page can be refreshed with the specified text corresponding to each time-block.  Throughout the day, the text-entries can be edited while the time-blocks change colors depending on the current hour.  All of thes features should give a more aesthetically pleasing  
and dynamic webpage to keep track of daily activities during a 9am-5pm workday schedule.

Attached is a screenshot:

![Screenshot](./assets/images/Your-Day-to-Day-Schedule%20Screenshot.png)

## Deployed Site

[Deployed Site](https://tyler-kd.github.io/Your-Day-to-Day-Schedule/)

## Credits

[event-delegation](https://learn.jquery.com/events/event-delegation/)

[Introduction to Effects](https://learn.jquery.com/effects/intro-to-effects/)

[jQuery Event Basics](https://learn.jquery.com/events/event-basics/)

[Category: Traversing](https://api.jquery.com/category/traversing/)

[.val](https://api.jquery.com/category/traversing/)

[Bootstrap Introduction](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

[Bootstrap Grid System](https://getbootstrap.com/docs/5.1/layout/grid/)

[Each function](https://api.jquery.com/each/#each-function)

## License

MIT License

Copyright (c) 2023 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.