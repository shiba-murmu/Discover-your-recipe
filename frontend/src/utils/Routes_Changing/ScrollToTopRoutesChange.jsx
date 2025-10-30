import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ScrollToTopRoutesChange() {
    // This component scroll to top whenever the routes change.

    const pathname = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // this component does't render anything.
}

export default ScrollToTopRoutesChange