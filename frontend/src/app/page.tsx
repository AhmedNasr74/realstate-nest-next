import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Nawy Real-state</h1>
                <ol>
                    <li>Welcome To my task</li>
                    <li>Developer: Ahmed Nasr</li>
                    <li>Email: <a className="text-danger"
                                  href="mailto:ahmednasr2589@gmail.com">ahmednasr2589@gmail.com</a></li>
                    <li>Mobile: +201092947418</li>
                </ol>
            </main>
        </div>
    );
}
