import Head from "next/head";
import { useState } from "react";
import { AccountOption } from "../components/account_option";
import styles from "../styles/Home.module.css";
import { accounts as init } from "./sample_data";

export default function Home() {
  const [accounts, setAccounts] = useState(init);
  function removeAccount(scriptID) {
    setAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account.scriptID != scriptID)
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {accounts.map((account) => (
          <AccountOption
            key={account.scriptID}
            {...account}
            onRemove={(scriptID) => removeAccount(scriptID)}
          />
        ))}
      </main>
    </div>
  );
}
