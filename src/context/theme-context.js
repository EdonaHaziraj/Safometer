import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export default props => {
	const [sidebarNarrow, getNarrowSidebar] = useState(false)

	return (
		<ThemeContext.Provider value={{ sidebarNarrow, getNarrowSidebar }}>
			{props.children}
		</ThemeContext.Provider>
	)
}