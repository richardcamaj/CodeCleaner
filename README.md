# CodeCleaner version 1.0.3

![version: 1.0.3](https://img.shields.io/badge/flat-1.0.3-brightgreen.svg?label=version)
![status: stable](https://img.shields.io/badge/flat-stable-brightgreen.svg?label=status)
![licence: mit](https://img.shields.io/badge/flat-mit-brightgreen.svg?label=license)

Simple and easy to use HTML code cleaning from tags and attributes.

- cleans the HTML from attributes
- cleans the HTML from tags
- easy to use
- Compatibility with all browsers
- user-friendly license: MIT


### Example 1

Remove tag <span> from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTags(tag array, code);
code = codeCleaner0.removeTags(["span"], code);

/* 
returns string without SPAN tag
code = '<p>  For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website. </p><p> <em>Lorem Ipsum</em> </p>'
*/
```

### Example 2

Remove attributes class and style from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeAttribs(array with attributes, code);
code = codeCleaner0.removeAttribs(["class", "style"],code);

/* 
returns string without attributes class and style
code = '<p> <span> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></span> </p>'
*/
```

### Example 3

Remove tags SPAN and EM from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTags(tag array, code);
code = codeCleaner0.removeTags(["span", "em"], code);

/* 
returns string without <span> and <em> tags
code = '<p>  For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website. </p><p> </p>'
*/
```

### Example 4

Remove tags SPAN + EM and attributes REL from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTags(tag array, code);
code = codeCleaner0.removeTags(["span", "em"], code);

// codeCleaner0.removeAttribs(array with attributes, code);
code = codeCleaner0.removeAttribs(["rel"],code);

/* 
returns string without <span>, <em> tags and attributes rel
code = '<p>  For more information visit the <a href="example.com" target="_blank">Example.com</a> website. </p><p> </p>'
*/
```

### Changelog
- v 1.0.3: updated regular expression for attributes


License
----

MIT


I thank [josefburger](https://github.com/burger92) for useful remarks and testing
