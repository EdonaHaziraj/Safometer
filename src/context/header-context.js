import React, { useState } from 'react'

export const HeaderContext = React.createContext()

export default props => {
	const [isActive, setActiveState] = useState(false)

  const getActiveState = () => {
    setActiveState(!isActive)
  }
	return (
		<HeaderContext.Provider value={{ isActive, getActiveState}}>
			{props.children}
		</HeaderContext.Provider>
	)
}