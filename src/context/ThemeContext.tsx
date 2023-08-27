import { createContext, useState } from "react";

export const ThemeContext = createContext({
    isSecondary: false,
    toggleTheme: ()=>{}
})

type Props = {
  children?: React.ReactNode
}

const ThemeProvider = (props:Props )=>{
    const [isSecondary, setIsSecondary]=useState(false);

    const toggleTheme = ()=>{
        setIsSecondary(!isSecondary)
    }

    return (
        <ThemeContext.Provider value={{isSecondary, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider