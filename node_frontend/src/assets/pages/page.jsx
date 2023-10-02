import "../../../public/assets/static/pages.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="monBody">
        <div className="accueilHead">
          <h1>
            <span>M</span>on_<span>P</span>rojet_<span>N</span>ode
          </h1>
          <div className="divP">
            <Link to={"/calendrier"}><p><i class="fa-solid fa-check"></i>Calendrier</p></Link>
            <Link to={"/todolist"}><p><i class="fa-solid fa-check"></i>TodoList</p></Link>
          </div>
          <div className="divBtn">
            <Link to={"/register"}><button>S'inscrire</button></Link><br />
            <Link to={"/login"}><button>Se connecter</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
