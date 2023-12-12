"use client"
import styles from "./components.module.css";

function Button() {
    return (
        <button 
            className={styles.button} 
            onClick={()=> alert("O botão foi clicado!")}
        >
            Clique-me!
        </button>
    );
}

export default Button;