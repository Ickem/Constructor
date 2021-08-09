import React from 'react';
import Element from './HTMLElement/Element';
import './Sidebar.css';

const Sidebar = ({elements, drag}) => (
    <aside className="sidebar">
        {elements.map(element => (
            <Element
                key={element.id}
                element={element}
                drag={drag}
            />
        ))}
    </aside>
);

export default Sidebar;