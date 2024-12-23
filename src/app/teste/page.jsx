import styles from "./teste.module.scss";

async function getUserGithubAPI(user) {
  return fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
}

export default async function Teste() {
  const user = await getUserGithubAPI("troickzin");

  return (
    <div className={styles.red}>
      <h1>Teste</h1>
      <p>{user.name}</p>
      <img
        src={user.avatar_url}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      ></img>
      <p>{user.bio}</p>
    </div>
  );
}
