import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    );
};

export default layout;
