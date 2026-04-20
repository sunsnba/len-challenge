# Responsive Web UI – Frontend Implementation

This project is a responsive frontend implementation based on a provided Figma design. It focuses on building a pixel-accurate, accessible, and responsive UI using modern React and custom CSS architecture.

## Tech Stack

- React (Vite)
- CSS3 (custom modules, no framework)
- JavaScript (ES6+)

## Features

- Four-tier responsive layout supporting Desktop, Laptop, Tablet, and Mobile viewports
- Pixel-accurate execution with attention to typography, spacing, and visual hierarchy
- Interactive mobile navigation drawer with backdrop overlay and smooth transitions
- Accessible semantic HTML using `<header>`, `<nav>`, and `<section>`
- Modern UI patterns including gradients, flexbox layouts, and optimized font rendering

## Responsive Behavior

- Desktop (1440px and above)  
  Expansive two-column layout with a constrained max-width container for readability

- Laptop (1080px - 1439px)  
  Bridge layout that adjusts typography, spacing, and image scaling to prevent crowding on common laptop screens

- Tablet (834px - 1079px)  
  Maintains a split layout while scaling content and hero illustration appropriately

- Mobile (below 833px)  
  - Fully stacked layout  
  - Collapsible navigation drawer  
  - Full-width inputs and CTA buttons for better usability  

## Implementation Notes

- Laptop bridge breakpoint  
  A targeted media query was introduced to handle the transition zone between desktop and tablet where layout compression can occur

- Hero illustration  
  The illustration is intentionally oversized and cropped using absolute positioning to match the visual style of the design

- Consistent element sizing  
  Input fields and buttons maintain consistent height using shared box model rules

- Performance considerations  
  Navigation animations use transform and opacity for smooth rendering on mobile devices

## Project Structure

src/  
  components/  
    Header.jsx  
    Hero.jsx  
  styles/  
    Header.css  
    Hero.css  
  assets/  
    (icons and illustrations)

## Getting Started

Install dependencies:

npm install

Start the development server:

npm run dev

The app will be available at:

http://localhost:5173