// import { useMessage } from "./hooks/useMessage";
import { Button } from "./components/button";
import { useState, useEffect } from "react";
import styles from "./app.module.css"
import "./global.css"

export function App() {
  const [count, setCount] = useState(0)
  // const message = useMessage({name: 'Israel'})

  useEffect(() => {
    if (count != 0) {
      console.log(`O valou mudou para ${count}`);
    }
  }, [count])

  return (
    <div className={styles.container}>
      <Button name='Adicionar' onClick={() => setCount(count + 1)}/>
      <span>{count}</span>
      <Button name='Remover' onClick={() => setCount(count - 1)}/>
    </div>
  )
}