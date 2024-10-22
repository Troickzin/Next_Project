import Link from "next/link";
import "./github_user.scss";
import { GrFormNextLink } from "react-icons/gr";

export async function getUserGithubAPI(user) {
  let data = await fetch(`https://api.github.com/users/${user}`);
  let posts = await data.json();
  return posts;
}

export default async function Page({ params }) {
  const param = await params;
  const user = await getUserGithubAPI(param.id);
  return (
    <>
      <div className="User_Profile">
        <pre>{user.message}</pre>
        <img
          src={user.avatar_url}
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
          className="User_Avatar"
        ></img>
        <p className="User_Name">{user.name}</p>
        <p className="User_Bio">{user.bio}</p>
        <Link className="User_Button" href={user.html_url} target="_blank">
          <GrFormNextLink className="Icon" />
        </Link>
      </div>
    </>
  );
}
