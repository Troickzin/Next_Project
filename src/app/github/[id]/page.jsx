"use client";

async function getUserGithubAPI(user) {
  return fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
}

export default async function Page({ params }) {
  const user = await getUserGithubAPI(params.id);

  return (
    <>
      <p>{user.name}</p>
      <img
        src={user.avatar_url}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      ></img>
      <p>{user.bio}</p>
    </>
  );
}
