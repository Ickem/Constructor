import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

import './Element.css';

const Element = ({element, drag}) => (
    <div
        onDragOver={(e)=>drag.dragOverHandler(e)}
        onDragLeave={e=>drag.dragLeaveHandler(e)}
        onDragEnd={e=>drag.dragEndHandler(e)}
        onDrag={e=>drag.dragHandler(e, element)}
        onDragStart={e=>drag.dragStartHandler(e, element)}
        onDrop={e=>drag.dropHandler(e)}
        className="element"
        draggable={true}
    >
        <FontAwesomeIcon icon={faGripVertical} />
        <p>{element.name}</p>
    </div>
);

export default Element;