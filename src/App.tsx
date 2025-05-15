import { useState, useRef } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const ctnRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            {/* Render pdf */}
            <div id="ctn-pdf" ref={ctnRef}>
                <p>PDF Vorschau</p>
            </div>
        </>
    );
}

export default App;
