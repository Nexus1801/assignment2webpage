import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './intro.tsx'
import './title.tsx'
import './list.tsx'
import Intro from "./intro.tsx";
import Title from "./title.tsx";
import List from "./list.tsx";
import Table from "./table.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <>My First Vite/React Program</>
            <Intro username = ""/>
            <Title title = ""/>
            <List list = ""/>

            <h2>Hobby Table for Alexander Lap and Tri Vien Le</h2>
            <Table table = ""/>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
