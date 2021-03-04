export interface Options {
  appendDiv: boolean
}
export async function loadApp(url: string, appId: string, options?: Options) {
  const dataString = await (await fetch(url)).text()

  if (options && options.appendDiv) {
    let oldDiv = document.getElementById(appId)

    if (oldDiv) {
      oldDiv.remove()
    }

    const appDiv = document.createElement('div')
    appDiv.setAttribute('id', appId)
    document.body.appendChild(appDiv)
  }

  let oldScript = document.getElementById(`${appId}-script`)

  if (oldScript) {
    oldScript.remove()
  }

  const script = document.createElement('script')
  script.setAttribute('id', `${appId}-script`)
  script.innerHTML = dataString
  document.body.appendChild(script)

  return true
}

export function removeApp(appId: string) {
  let oldDiv = document.getElementById(appId)
  let oldScript = document.getElementById(`${appId}-script`)

  if (oldDiv && oldScript) {
    oldDiv.remove()
    oldScript.remove()
  } else if (oldScript) {
    oldScript.remove()
  }
}

export function removeAppScript(appId: string) {
  let oldScript = document.getElementById(`${appId}-script`)

  if (oldScript) {
    oldScript.remove()
  }
}
