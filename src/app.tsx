import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TopLevel from './components/top_level';

function render() {
    const container = document.getElementById("app-body");
    const root = createRoot(container);
    root.render(<TopLevel />);
}

render();