import { useState } from 'react'

export const useToggle = (): Return => {
  const [state, setSate] = useState(false)

  const toggle = (): void => setSate(!state)

  return {
    state,
    toggle
  }
}

type Return = {
  state: boolean
  toggle: () => void
}
