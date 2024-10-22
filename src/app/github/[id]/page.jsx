import Link from "next/link";
import "./github_user.scss";
import { GrFormNextLink } from "react-icons/gr";

export async function getUserGithubAPI(user) {
  let data = await fetch(`https://api.github.com/users/${user}`);
  let posts = await data.json();
  return posts;
}

export async function getGithubOrgs(user) {
  let data = await fetch(`https://api.github.com/users/${user}/orgs`);
  let posts = await data.json();
  return posts;
}

export default async function Page({ params }) {
  const param = await params;
  const user = await getUserGithubAPI(param.id);
  const user_orgs = await getGithubOrgs(param.id);

  return (
    <>
      <div className="User_Profile">
        <div className="Header" />
        <div className="Infos">
          <img
            src={user.avatar_url}
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
            className="User_Avatar"
          ></img>
          <p className="User_Name">{user.name}</p>
          <p className="Follows">
            {user.followers + " Follower ·" + user.following + " Following"}
          </p>
          <p className="User_Bio">{user.bio}</p>
        </div>
        <div className="Orgs">
          {user_orgs.length ? <p>Organizations</p> : <p></p>}
          <div className="Organizations_Content">
            {user_orgs
              ? user_orgs.map((e) => {
                  return <img src={e.avatar_url} width={40} height={40} />;
                })
              : ""}
          </div>
        </div>

        {/* <Link className="User_Button" href={user.html_url} target="_blank">
          <GrFormNextLink className="Icon" />
        </Link> */}
      </div>
    </>
  );
}
