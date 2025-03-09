# Background Color Switcher

A simple yet elegant web application that allows users to change the background color of the page with a single click.

**Visit the website at : [Background Color Switcher](https://0xaupy.github.io/Background-Color-Changer/)**


## Features

- Clean, modern user interface with a minimalist design
- Six distinct color options: Grey, Purple, Blue, Yellow, Teal, and Coral
- Interactive color buttons with hover and click animations
- Semi-transparent container to better showcase the background color changes
- Responsive design that works on all device sizes
- Visual feedback showing the currently selected color
- Smooth transitions between color changes


## Technologies Used

- HTML5
- CSS
- JavaScript


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/0xAupy/Background-Color-Changer.git
   ```
2. Open `index.html` in your browser or use a local development server.


## Usage

Simply click on any of the color buttons to change the background color of the page. The current selected color will be displayed in the information panel at the bottom of the screen.

## Customization

### Adding New Colors

To add a new color to the palette:

1. Add a new color button in the HTML:
   ```html
   <div class="color-option">
     <span class="button" id="your-color" title="Your Color"></span>
     <p class="color-name">Your Color</p>
   </div>
   ```

2. Add the corresponding CSS:
   ```css
   #your-color {
     background: linear-gradient(145deg, #primary-shade, #secondary-shade);
   }
   ```

3. Update the JavaScript color names object:
   ```javascript
   const colorNames = {
     // existing colors...
     "your-color": "Your Color"
   };
   ```


## Acknowledgments

- Color palette inspired by Material Design
- Design elements influenced by modern UI/UX principles
