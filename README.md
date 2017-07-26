# CodeCleaner
## version 1.0.2

Simple and easy to use HTML code cleaning from tags and attributes.

- cleans the HTML from attributes
- cleans the HTML from tags
- easy to use
- Compatibility with all browsers
- user-friendly license: MIT


### Example 1

Remove tag <span> from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></a></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTagsFromArray(tag array, code);
code = codeCleaner0.removeTagsFromArray(["span"], code);

/* 
returns string without SPAN tag
code = '<p>  For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website. </p><p> <em>Lorem Ipsum</em></a> </p>'
*/
```

### Example 2

Remove attributes class and style from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></a></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeAttribsFromArray(array with attributes, code);
code = codeCleaner0.removeAttribsFromArray(["class", "style"],code);

/* 
returns string without attributes class and style
code = '<p> <span> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></a></span> </p>'
*/
```

### Example 3

Remove tags SPAN and EM from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></a></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTagsFromArray(tag array, code);
code = codeCleaner0.removeTagsFromArray(["span", "em"], code);

/* 
returns string without <span> and <em> tags
code = '<p>  For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website. </p><p> </a> </p>'
*/
```

### Example 4

Remove tags SPAN + EM and attributes REL from HTML code in JS string

```sh
let code = '<p> <span class="notranslate" style="background-color: rgb(230, 236, 249);"> For more information visit the <a href="example.com" target="_blank" rel="noopener">Example.com</a> website.</span> </p><p> <span><em>Lorem Ipsum</em></a></span> </p>';

let codeCleaner0 = new CodeCleaner();

// codeCleaner0.removeTagsFromArray(tag array, code);
code = codeCleaner0.removeTagsFromArray(["span", "em"], code);

// codeCleaner0.removeAttribsFromArray(array with attributes, code);
code = codeCleaner0.removeAttribsFromArray(["rel"],code);

/* 
returns string without <span>, <em> tags and attributes rel
code = '<p>  For more information visit the <a href="example.com" target="_blank">Example.com</a> website. </p><p> </a> </p>'
*/
```

License
----

MIT

**Free Software, Hell Yeah! :)**
