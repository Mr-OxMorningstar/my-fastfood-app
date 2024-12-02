
import styles from "./page.module.css";
var mobile = require('is-mobile');

export default function Home() {
  console.log(mobile())

  return (
    <div className={styles.page}>
      <p>hello world</p>
    </div>
  );
}
