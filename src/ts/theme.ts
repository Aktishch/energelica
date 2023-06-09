const init = (): void => {

  const body = document.body as HTMLBodyElement
  const toggles = body.querySelectorAll('*[data-theme="toggle"]') as NodeListOf<Element>

  let theme: string = 'dark'

  const togglesChecked = (check: boolean): void => {

    toggles.forEach((element: Element): void => {

      const toggle = element as HTMLInputElement

      toggle.checked = check

    })

  }

  const variationTheme = (): void => {

    if (!body.hasAttribute('data-theme')) {

      theme = 'light'
      localStorage.setItem('theme', theme)
      body.setAttribute('data-theme', 'light')

      togglesChecked(true)

    } else {

      theme = 'dark'
      localStorage.setItem('theme', theme)
      body.removeAttribute('data-theme')

      togglesChecked(false)

    }

  }

  if (localStorage.getItem('theme')) {

    theme = String(localStorage.getItem('theme'))

    if (theme == 'light') {

      body.setAttribute('data-theme', 'light')

      togglesChecked(true)

    } else {

      body.removeAttribute('data-theme')

      togglesChecked(false)

    }

  }

  toggles.forEach((element: Element): void => {

    const toggle = element as HTMLInputElement

    toggle.addEventListener('click', variationTheme as EventListener)

  })

  document.addEventListener('keyup', ((event: KeyboardEvent): void => {

    if (event.altKey && event.code == 'Digit5') variationTheme()

  }) as EventListener)

}

export default { init }