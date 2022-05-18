import styles from './Section.module.css';
import React, {useEffect, useState} from 'react';

const Section = () => {
  const [show, setShow] = useState(0);
  const [input, setInput] = useState("");
  const [manual, setManual] = useState("");
  const [count, setCount] = useState(0);


  useEffect(() => {
    setCount(input - show);
  }, [show]);

  return (
    <div style={{margin: "0 auto"}} className={styles.Section}>
       <div className={styles.headerContainer}>
      <h1 className={styles.Header}>Money saving app</h1>
    </div>
      <div className="sth">
      <p className={styles.stl}>How much money I have?</p>
      <input className={styles.howMuch} placeholder='Amount of money' onChange={event => setInput(event.target.value)}></input>
      <p className={styles.stl}>Select how much you want to save</p>
      <button className={styles.btn} onClick={() => {setShow(input * 0.1); }}>10%</button>
      <button className={styles.btn} onClick={() => {setShow(input * 0.25); }}>25%</button>
      <button className={styles.btn} onClick={() => {setShow(input * 0.5); }}>50%</button>
      <button className={styles.btn} onClick={() => {setShow(input * 0.75); }}>75%</button>
      <p className={styles.stl}>Input percentage manually</p>
      <input className={styles.howMuch} placeholder='Percents' onChange={event => setManual(event.target.value)}></input>
      <br />
      <button className={styles.btn} onClick={() => {setShow(input * manual / 100 ); setCount(input - show)}}>Calculate!</button>
      <p className={styles.stl}>Put into savings: <span className={styles.spn}>{show}</span> Euros</p>
      <p className={styles.stl}>Money left to spend <span className={styles.spn}>{count}</span> Euros</p>
      </div>
    </div>
  );
};

export default Section;
