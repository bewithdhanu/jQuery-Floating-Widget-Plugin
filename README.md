
# jQuery Floating Widget Plugin

## Overview

The jQuery Floating Widget plugin is a lightweight and customizable JavaScript library that enables the creation of floating widgets on a webpage. These widgets can smoothly follow a specified gap behind a target element, providing a dynamic and visually appealing user interface.

## Features

- **Responsive Positioning:** The floating widget intelligently adjusts its position to maintain a specified gap behind a target element.
- **Initial Positioning:** You can set the initial X and Y coordinates for the widget.
- **Smooth Animation:** The widget's movements are animated, providing a polished and seamless user experience.
- **Show/Hide Functionality:** Easily control the visibility of the floating widget.
- **Follow/Stop Follow:** Toggle between following the target element and stopping the follow behavior.

## Usage

### Installation

1. Include jQuery in your HTML file:

```html
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
```

2. Include the `floatingWidget` plugin:

```html
<script src="path/to/jquery.floatingWidget.js"></script>
```

### Initialization

```javascript
// Example Usage
$(document).ready(function () {
    const gap = 10; // Specify the desired gap between the target element and the floating widget
    const initialX = 0; // Initial X coordinate of the floating widget
    const initialY = 0; // Initial Y coordinate of the floating widget

    // Initialize the floating widget
    const widget = $('#yourTargetElement').floatingWidget(gap, initialX, initialY);

    // Use the widget methods
    widget.startFollow(); // Start following the target element
    widget.refreshPosition(newX, newY); // Manually refresh the widget position
    widget.show(); // Show the widget
    widget.hide(); // Hide the widget
    widget.stopFollow(); // Stop following the target element
    widget.isVisible(); // Check if the widget is visible
});
```

## API Reference

### `refreshPosition(newX, newY)`

Manually refreshes the position of the floating widget based on new X and Y coordinates.

### `stopFollow()`

Stops the widget from following the target element and makes it static at its current position.

### `startFollow()`

Starts or resumes the widget's follow behavior, adjusting its position based on the target element.

### `show()`

Displays the floating widget.

### `hide()`

Hides the floating widget and stops its follow behavior.

### `isVisible()`

Returns a boolean indicating whether the widget is currently visible.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
