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
import Form from "./form.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Intro name="Alexander Lap and Tri Vien Le"/>
            <Title title=""/>
            <h3>All hobbies for Alexander Lap and Tri Vien Le</h3>
            <List list=""/>
            <h3>Hobbies Table</h3>
            <Table table=""/>
            <Form form=""/>
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
