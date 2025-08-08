import "./global.css"
import { Button } from "./components/button";
import styles from "./app.module.css"

function useMessage() {
  function show() {
    console.log('Mensagem do meu hook');
  }
  return { show }
}

export function App() {
  const message = useMessage()

  return (
    <div className={styles.container}>
      <Button name='Adicionar' onClick={() => message.show()}/>
      <span>0</span>
      <Button name='Remover'/>
    </div>
  )
}