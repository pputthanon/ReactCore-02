import './index.css';
import React from 'react';
import { createRoot } from 'react-dom';

// React
function App() {
    return (
        <div>
            <h1>Hello React!</h1>
        </div>
    );
}

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
