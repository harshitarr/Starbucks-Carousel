# Starbucks-Infinite Carousel with Smooth Transition

A stylish and smooth infinite carousel component built with React.  
This carousel showcases coffee product cards with image, title, price, description, and navigation arrows. It features seamless infinite sliding by cloning the first and last slides and smooth CSS transitions.


## Features

- Infinite looping carousel with seamless slide transitions  
- Smooth slide animations with controlled timing  
- Dynamic background color based on active slide  
- Responsive layout using Tailwind CSS  
- Navigation arrows for previous and next slide  
- Product cards display image, title, price, subtitle, and description  
- Prevents user actions during animation to avoid glitches  



## Screenshot

![Screenshot 1](https://github.com/harshitarr/Starbucks-Carousel/blob/main/starbucks/public/screenshot1.png)  
![Screenshot 2](https://github.com/harshitarr/Starbucks-Carousel/blob/main/starbucks/public/screenshot2.png)  


## Demo
[Starbucks-Carousel](https://drive.google.com/file/d/1odWdG2zYIFy1ymh9fnulkAwnhmEp07QA/view?usp=sharing)  

## Technologies Used

- React (functional components with hooks)  
- Tailwind CSS for styling  
- Lucide React icons (ChevronLeft, ChevronRight)  



## Installation

1.Clone the repository  
   ```bash
   git clone https://github.com/harshitarr/Starbucks-Carousel.git
   cd Starbucks-Carousel
   ```

2.Install dependencies
  ```bash
   npm install
  ```
3.Start the development server
```bash
npm run dev
```

4.Open your browser at http://localhost:3000 to see the carousel.

## Folder Structure
```bash
/public
  /1.png
  /2.png
  /3.png
  /4.png
  /logo.png
/src
  /components
    Home.js
  /styles
    (Tailwind CSS config and styles)
package.json
README.md
```

## Code Highlights
- extendedSlides clones the first and last slide to create an infinite loop effect.
- index state tracks the current slide index with special handling for looping.
- slideRef handles CSS transform to animate the slide container.
- handleTransitionEnd resets the slide position instantly when the carousel loops around to maintain seamless animation.
- Navigation buttons disable during animation to prevent double clicks



        
 
