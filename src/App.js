import React, {useState} from "react";
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App(props){
  const[currentElement, setCurrentElement] = useState('');
  function dragOverHandler(e){
    e.preventDefault();
    if(e.target.className==='element'){
      e.target.style.boxShadow = '0 4px 3px gray';
      e.target.style.backgroundColor = '#454533';
    }
    if(e.target.className==='dashboard'){
      e.target.className = 'dashboard drag-over';
    }
  }

  function dragLeaveHandler(e){
    if(e.target.className==='element'){
      e.target.style.boxShadow = 'none';
      e.target.style.backgroundColor = 'blue';
    }
    if(e.target.className==='dashboard drag-over'){
      e.target.className = 'dashboard';
    }
  }

  function dragEndHandler(e){
    e.target.style.boxShadow = 'none';
    e.target.style.backgroundColor = 'blue';

  }
  function dragHandler(e, element){
    setCurrentElement(element);
    console.log(currentElement)
  }

  function dragStartHandler(e, element){
    //setCurrentElement(element);

  }

  function dropHandler(e, element){
    e.preventDefault();
    console.log(element);
    if(e.target.className==='dashboard drag-over'){
      e.target.className = 'dashboard';
      let nodeElement = document.createElement(element.element);
      nodeElement.innerHTML = 'Text';
      e.target.append(nodeElement)
    }
  }

  const drag = {
    dragOverHandler,
    dragLeaveHandler,
    dragEndHandler,
    dragHandler,
    dragStartHandler,
    dropHandler
  };


  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar
          elements={props.elements}
          drag={drag}
        />
        <Dashboard
            element={currentElement}
            drag={drag}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  elements: state.elements
});

export default connect(mapStateToProps, null)(App);
