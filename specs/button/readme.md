# Button Spec

<%- info.__docGenRaw.description %>

## Properties

<%- info.__docGenHTML %>

## Dependencies

<%- info.__dependenciesHTML %>

## Basic button

```jsx
<Button>Default Button</Button>
```

## Testcases

### Length
```jsx
let values = require('lodash/values');
let lengths = values(require('./data/lengthcases'));

<div>
	{lengths.map((item) => <Button size={'size1'} color={'color1'}>{item}</Button>)}
</div>
```

### Size
```jsx
let sizes = Object.keys(require('./css/size.css'));

<div>
	{sizes.map((item) => <Button size={item} color={'color1'}>{'A button'}</Button>)}
</div>
```

### Color
```jsx
let colors = Object.keys(require('./css/color.css'));

<div>
	{colors.map((item) => <Button size={'size1'} color={item}>{'A button'}</Button>)}
</div>
```
