import { useState, useEffect } from "react";
import "./css/Home.css";
import HomeSideBar from "./HomeSideBar";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allpost", {
      headers: {
        Authorization: "Sammi " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  return (
    <div className="home">
      <div className="post__items">
        <div className="left__side">
          {data
            .map((item) => {
              return (
                <div className="card" key={item._id}>
                  <p className="card-title postedBy">{item.postedBy.name}</p>
                  <div className="card-image">
                    <img src={item.photo} alt={item._id} />
                  </div>
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    <input type="text" placeholder="Add A Comment" />
                  </div>
                </div>
              );
            })
            .reverse()}
        </div>
        <div className="right__side">
          <h2 style={{ color: "#fff", fontFamily: "'Grand Hotel', cursive" }}>
            Mening postlarim
          </h2>
          <HomeSideBar />
        </div>
      </div>
    </div>
  );
}
