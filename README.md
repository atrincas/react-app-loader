# react-app-loader

Small utility function to inject a new react app into the DOM.

## Why?

If for any reason you want to use multiple react-apps concurrently.

## How it works

- Fetches a react-app from the given url.
- After that it will inject the react-app script into the DOM.
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
import { loadApp } from 'react-app-loader'

// Inside your main react-app:

const [loading, setLoading] = useState(false)
const handleLoadApp = async () => {
  setLoading(true)
  const loaded = await loadApp('https://wwww.example.com/app-2','app-2')
  if (loaded) {
    setLoading(false)
  }
}

if (loading) {
  // You can show a loading spinner
  return <RandomLoadingSpinner />
}

  return (
    <div id="app-1">
    <h1>
      This is the main React app
    </h1>
    <button onClick={handleLoadApp}>Load second App</button>
    </div>
    <div id="app-2"></div>
  )
}


// The rest of your react-app:


```

## API Methods

```
loadApp(url, appId, [options]) => promise<true>

removeApp(appId): Removes the app script and its container element

removeAppScript(appId): Removes only the app script
```

## API Arguments

```
url: string

appID:string (The same id of the div element where the react-app will be mounted)

options?: {
  appendDiv: boolean
}

```