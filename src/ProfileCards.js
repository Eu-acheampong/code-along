import {useState}from "react";

function  ProfileCard({ writer }) {
  const [showBio, setShowBio] = useState(false);

  const handleClick = (bioData) =>{
    setShowBio(!showBio);
  };

  return (
    <div className="card">
      <div className="cardContent">
        {showBio ? (
          <div className="biowrap">
            <p className="bio"{writer.bio}</p>
            </div>
        )}
      <img
        src={`/images/${writer.avatar}.png`}
        width="300px"
        height="300px"
        alt=""
      />
      <div className="textGroup">
        <h3>{writer.name}</h3>
        <p>{writer.email}</p>
        <p>{writer.phone}</p>
      </div>
    </div>
  );
};
