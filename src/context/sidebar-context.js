import React, { useState } from 'react'

export const SidebarContext = React.createContext()

export default props => {
	const [isActive, setActiveState] = useState(false)

  const getActiveState = () => {
    setActiveState(!isActive)
  }
	return (
		<SidebarContext.Provider value={{ isActive, getActiveState}}>
			{props.children}
		</SidebarContext.Provider>
	)
}