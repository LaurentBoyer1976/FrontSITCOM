import {type ReactNode, type FC } from 'react';

type HeaderElementProps = { children: ReactNode };

const HeaderElement : FC<HeaderElementProps> = ({ children }) => {
    return(
        <header className="header">
            {children}
        </header>
    );
};

export default HeaderElement;