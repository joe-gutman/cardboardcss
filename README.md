# Cardboard.CSS 📦

Cardboard.CSS is a CSS framework designed easily make wireframes and prototypes visually appealing with depth and texture. It requires minimal effort through easy-to-use classes, all you have to do is create the structure and put in the content.

## Getting Started

### Installation

To include Cardboard.CSS in your project, follow these steps:

1. Download the Cardboard.CSS repository to your project directory.

2. Inside the downloaded repository, you'll find a `css` folder. Include this folder in your project.

3. Link to the `index.css` file inside the `css` folder in your HTML file:

```html
<link rel="stylesheet" href="css/index.css">
```

### Usage
Cardboard.CSS provides a set of classes that you can add to your HTML elements to give them a cardboard-like appearance. For example:
```html
<div class="cardboard">
  <!-- Your content goes here -->
</div>
```
You can customize the appearance further by combining classes or adjusting element sizes and content.

<b><i>Example:</i></b> div with a paper texture and edges that emulate being cut by scissors.
```html
<div class="paper cut-1">
  <!-- Your content goes here -->
</div>
```

<b><i>Example:</i></b> div with a cardboard texture and a bottom border that shows the wavy inner structure.
```html
<div class="cardboard bottom">
  <!-- Your content goes here -->
</div>
```



### Classes
Here are some of the core classes provided by Cardboard.CSS:

- `.cardboard`: Adds a cardboard texture to an element.
  - If you add a `.top` or `.bottom` class in addition to `.cardboard`, it will add border that shows the wavy inner structure of cardboard.
- `.paper`: Applies a paper-like texture to an element.
- `.cut-[1-4]`: make the edges of an element look as if they were cut by scissors.
- `.distort-[1-4]`: slightly rotates ands skews the element making it look as if it was placed by hand.

Contributing
We welcome contributions from the community. If you have ideas or want to contribute code, please feel free to do so. We believe in open collaboration.

License
Cardboard.CSS is open-source and is licensed under the MIT License.

---
Made with ❤️, glue, and cardboard.
