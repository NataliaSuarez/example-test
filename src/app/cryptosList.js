import Image from "next/image";
import styles from "./cryptos.module.css";

export default function CryptosList() {
  // esto es un listado de criptos,
  // que en principio yo solamente recibo este listado
  // y por cada elemento voy a mostrar una card y el nombre
  const criptos = [
    { id: 1, name: "Ethereum", icon: "/ethereum-icon.png" }, // objeto
    { id: 2, name: "Polygon", icon: "/ethereum-icon.png" },
    { id: 3, name: "Gnosis Safe", icon: "/ethereum-icon.png" },
    { id: 4, name: "Snapshop", icon: "/ethereum-icon.png" },
    { id: 5, name: "ENS", icon: "/ethereum-icon.png" },
    { id: 6, name: "Open Sea", icon: "/ethereum-icon.png" },
  ]; // array o un listado

  const listadoLetras = ["a", "b", "e", "g"];

  return (
    <div className={styles.center}>
      <ul className={styles.cryptosList}>
        {criptos.map((c) => {
          return (
            <li className={styles.crypto} key={c.id}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                    <Image
                    src={c.icon}
                    alt="Logo"
                    width={21}
                    height={33}
                    />
                </div>
              </div>
              <div>{c.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
