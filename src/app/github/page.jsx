"use client";

import "./github.scss";
import { testNavigate } from "@/services/actions";

function search(e) {
  const search = document.getElementById("search_user");
  e.preventDefault();
  console.log();

  testNavigate(search.value.toLowerCase());
}

export default function Page() {
  return (
    <>
      <div className="Container">
        <h1 className="Title">Consumo da API Github</h1>
        <form>
          <input
            type="text"
            name="search"
            id="search_user"
            className="Input_Search"
            placeholder="Usuario do Github"
          />
          <div>
            <input
              type="submit"
              value="Search"
              className="Input_Button"
              onClick={(e) => {
                search(e);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
