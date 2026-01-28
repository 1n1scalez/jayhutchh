import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash, state } = useLocation();

    useEffect(() => {
        if (!hash && !(state as any)?.preventScroll) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, state]);

    return null;
};

export default ScrollToTop;
