# sanitize.js
Vanilla JS string sanitize

## Usage
### Node Js
```javascript
var sanitize = require('sanitize');
```

### Browser
```html
<script type="text/javascript" src="sanitize.js"></script>
```

### Documentation
```javascript
var myStr = 'This is An Test Case!! With strängÊ characters';

// From String Prototype
console.log(myStr.sanitize());
// >> this-is-an-test-case

// Directly
console.log(Sanitize(myStr));
// >> this-is-an-test-case

// Modify "gutter"
console.log(myStr.sanitize('_'));
// >> this_is_an_test_case

var title = document.querySelect('#input_text_title').value;
var mySlug = title.sanitize('-');
```
