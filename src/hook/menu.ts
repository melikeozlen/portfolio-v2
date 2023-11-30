import { useState, useEffect } from 'react';

const useScrollSpy = (sectionRefs) => {
    const [activeSection, setActiveSection] = useState("introduction");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            sectionRefs.forEach((sectionRef) => {

                if (sectionRef.current) {

                    const { offsetTop, offsetHeight } = sectionRef.current;

                    if (scrollPosition >= offsetTop - window.innerHeight / 2 && scrollPosition < offsetTop + offsetHeight + window.innerHeight / 2) {
                        setActiveSection(sectionRef.current.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRefs]);

    return activeSection;
};

export default useScrollSpy;
