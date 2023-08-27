import { useEffect, useState } from "react";

export default function useScreenWidth(){
    const [windowWidth, setWindowWidth] = useState('');
    const isWindow = typeof window !== 'undefined';

    const getWidth = () => (isWindow ? window.innerWidth.toString() : windowWidth)

    const resize = () => setWindowWidth(getWidth())

    useEffect(() => {
      if (isWindow) {
        setWindowWidth(getWidth())

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
      }
      //eslint-disable-next-line
    }, [isWindow])

    return parseInt(windowWidth)
}