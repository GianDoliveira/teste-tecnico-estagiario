"use client"
import styles from "./components.module.css";
const { useState, useEffect } = require("react");

function Count() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(10);
    }, []);

    const Increases = () => {
        setCount(count + 1);
    };
    const Decreases = () => {
        setCount(count - 1);
    };
    return (
        <section className={styles.containerCount}>
            <h1>Contador: {count}</h1>
            <div className={styles.buttonCount}>
                <button onClick={Increases}>+</button>
                <button onClick={Decreases}>-</button>
            </div>
        </section>
    )
};

export default Count;