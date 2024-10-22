"use client";
import "./github_user.scss";

async function getUserGithubAPI(user) {
  return fetch(`https://api.github.com/users/${user}`).then((res) =>
    res.json()
  );
}

export default async function Page({ params }) {
  const user = await getUserGithubAPI(params.id);

  return (
    <>
      <div className="User_Profile">
        <img
          src={user.avatar_url}
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
          className="User_Avatar"
        ></img>
        <p className="User_Name">{user.name}</p>
        <p className="User_Bio">{user.bio}</p>
      </div>
    </>
  );
}
