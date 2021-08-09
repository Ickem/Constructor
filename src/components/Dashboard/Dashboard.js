import React from 'react';
import './Dashboard.css';

const Dashboard = ({element,drag}) => (
    <main
        onDragOver={(e)=>drag.dragOverHandler(e)}
        onDragLeave={e=>drag.dragLeaveHandler(e)}
        onDragEnd={e=>drag.dragEndHandler(e)}
        onDrop={e=>drag.dropHandler(e, element)}
        className="dashboard"
    >

    </main>
);

export default Dashboard;