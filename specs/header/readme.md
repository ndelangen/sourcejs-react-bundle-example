# Header Spec

The header components in a singleton on a page in the application.

It's always placed at the top of the page.

<%- info.__docGenRaw.description %>

## Properties

<%- info.__docGenHTML %>

## Dependencies

<%- info.__dependenciesHTML %>

## Example implementation

```jsx
<Header back={true} text="The title"></Header>
```

## Fixed examples

### Default (no back button)
```jsx
<Header {...require('./data/default')}></Header>
```
### In Detail (with back button)
```jsx
<Header {...require('./data/detailed')}></Header>
```
