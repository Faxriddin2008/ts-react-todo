import { ChangeEvent, useEffect, useState } from "react";
import styles from "./components/home.module.css";
import { IData } from "./interfaces";

function App() {
  const data: IData[] = [
    {title: "Farruxbek", id: 0, description: "Some description"},
    {title: "Yunusbek", id: 1, description: "Some description"},
    {title: "Diyorbek", id: 2, description: "Some description"},
  ]
  const [arr, setArr] = useState<IData[]>(data)
  const [title, setTitle] = useState<string>()
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const submit = (): void => {
    console.log(title);
    setTitle("")
    data.push({title: title, id: data.length, description: "Some description"})
    console.log(data);
    setArr(data)
    
  }
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>Todo list</h1>
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        className={styles.input}
        placeholder="Enter todo"
        name=""
        id=""
      />

      <button onClick={submit} className={styles.button}>Add Todo</button>
      <div className={styles.card}>
      {arr.map(item => 
        <div key={item.id} className={styles.cardItem}>
          <p>{item.title}</p>
        </div>  
      )}
      </div>
    
    </div>
  );
}

export default App;
