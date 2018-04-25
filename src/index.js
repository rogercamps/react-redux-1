import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyCnyQthJkv71MInTj15SMlBBggtRAwRTqQ'

// Create new component. This component should produce some HTML. MAKE THE COMPONENT

const App = () => {
  return <div>Hi!</div>
}

// Take this component's geenerated HTML and put it on the page (a.k.a: the DOM). SHOW IT IN THE PAGE
ReactDOM.render(<App />, document.querySelector('.container'))
