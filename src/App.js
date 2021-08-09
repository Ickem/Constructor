import React, {useState} from "react";
import {connect} from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App(props){
  const[currentElement, setCurrentElement] = useState('');

  function resetBoxShadow(e){
    e.target.style.boxShadow = 'none';
    e.target.style.backgroundColor = '#453d52';
  }

  function dragOverHandler(e){
    e.preventDefault();
    if(e.target.className==='element'){
      e.target.style.boxShadow = '0 4px 3px #30D5C8';
      e.target.style.backgroundColor = '#30D5C8';
    }
    if(e.target.className==='dashboard'){
      e.target.className = 'dashboard drag-over';
    }
  }

  function dragLeaveHandler(e){
    if(e.target.className==='element'){
      resetBoxShadow(e);
    }
    if(e.target.className==='dashboard drag-over'){
      e.target.className = 'dashboard';
    }
  }

  function dragEndHandler(e){
    resetBoxShadow(e);
  }

  function dragHandler(e, element){
    setCurrentElement(element);
    console.log(currentElement)
  }

  function dragStartHandler(e, element){

  }

  function dropHandler(e, element){
    e.preventDefault();
    if(e.target.className==='element'){
      resetBoxShadow(e);
    }
    if(e.target.className==='dashboard drag-over'){
      e.target.className = 'dashboard';
      let nodeElement = document.createElement(element.tag);
      switch(element.name){
        case 'Header':
          nodeElement.innerHTML = 'Text';
          e.target.append(nodeElement);
          break;
        case 'Input':
          nodeElement.placeholder = 'Enter your text';
          e.target.append(nodeElement);
          break;
        case 'Button':
          nodeElement.innerHTML = 'Button';
          e.target.append(nodeElement);
          break;
        case 'Image':
          nodeElement.src = 'http://placehold.it/350x100';
          e.target.append(nodeElement);
          break;
        case 'Paragraph':
          nodeElement.innerHTML = 'Lorem ipsum dolor sit amet, ' +
          'consectetur adipisicing elit. Nulla, totam!';
          e.target.append(nodeElement);
          break;
        default: return;
      }
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
