import { useState, useEffect } from 'react';

const IsResolution = (Resolution: number): boolean => {
    const [IsResolution, SetIsResolution] = useState<boolean>(false);

    useEffect(() => {
        const HandleResize = () => {
            SetIsResolution(window.innerWidth >= Resolution);
        };

        window.addEventListener('resize', HandleResize);
        HandleResize(); // Initial check on mount

        return () => {
            window.removeEventListener('resize', HandleResize);
        };
    }, []);

    return IsResolution;
};

export default IsResolution;