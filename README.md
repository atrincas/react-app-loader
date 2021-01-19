# react-app-loader

Small utility function to inject a new react app into the DOM.

## Why?

If for any reason you want to use multiple react-apps concurrently.

## How it works

- The endpoint of the url must return the react script as a string.
- After that it will inject the script into the DOM.
- If needed, it can append a div element where the app will be mounted.

## Installation

npm:

```bash
npm i react-app-loader
```

or yarn:

```bash
yarn add react-app-loader
```

## Usage

This is the most basic example of how you can use the react-app-loader.

```javacript
import {loadApp, removeApp} from 'react-app-loader'

// Inside your main react-app:

const [loading, setLoading] = useState(false)
const [showSecondApp, setShowSecondApp] = useState(false)
const handleLoadApp = async () => {
  setLoading(true)
  const loaded = await loadApp('https://wwww.example.com/app-2','app-2')
  if (loaded) {
    setLoading(false)
  }
  }

if (loading) {
  // You can show a loading spinner
}

  return (
    <div id="app-1">
    <h1>
      This is the main React app
    </h1>
    <button onClick={handleLoadApp}>Load second App</button>
    <button onClick={() => removeApp('app-2')}>Remove second App</button>
    </div>
    {showSecondApp && <div id="app-2"></div>}
  )
  removeApp('app2')
}


// The rest of your react-app:


```

## API

```
loadApp(url, appId, [options]) => promise<true>

url (string): Url of endpoint

appID (string): The id of the app (the same id of the div element where the react-app will be mounted)

options (object): This is optional. At the moment you can pass the property appenDiv which has a boolean value


removeApp(appId)

appId (string): The id of the app (the same id of the div element where the react-app will be mounted)
```
