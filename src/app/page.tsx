import { Login } from "@/components/login"
import Image from "next/image"
import styles from "../components/home.module.css"
export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.loginSection}>
        <Login />
      </section>
      <aside className={styles.imageSection}>
        <Image
          src="/login.jpg"
          alt="Imagem ilustrativa"
          width={1920}
          height={1080}
          className={styles.image}
        />
      </aside>
    </main>
  )
}
