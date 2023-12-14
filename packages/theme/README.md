# @vendyx/theme
Components, utils, hooks and contexts related to admin ui.

## Prerequisites
[TailwindCSS](https://tailwindcss.com) installed and configured four your framework

## Setup
`@vendyx/theme` exposes the tailwind object configuration and the css styles (fonts, variables, classes). These are going to be used to make our ui extensions looks like vendyx ui.

### Import CSS file
Import css file into your entry point. This is going to load all our css styles, with this the @vendyx/theme components will have their appropriate styles and our styles will be ready to use by tailwind
```ts
import '@vendyx/theme/dist/style.css';
```

### Use our tailwind config object
In your tailwind config file, import `vendyxStylesForTw` function and spread it in tailwind config object. With this you will be able to use our custom tailwind classes in your ui extensions
```ts
import { vendyxStylesForTw } from '@vendyx/theme';

/** @type {import('tailwindcss').Config} */
export default {
  ...vendyxStylesForTw(),
};
```

## Usage

```jsx
import { Button, ThemeProvider } from '@vendyx/theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <Button>Hello World</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
```

## Icons
```shell
yarn add lucide-react
```