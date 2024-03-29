function About() {
  const handleView = () => {
    window.open("https://github.com/BalazsGergo/Portfolio/blob/main/public/BalazsGerg%C5%91.CV.pdf","_blank")
  }


  return (
    
    <div className="about">
      <img src="Profilpic.JPG" alt="profile picture" />
      <div className="about-text">
        <p>
          Hey there! My name is Gergo Balazs and I'm a Frontend Developer based
          in Miskolc, Hungary. I discovered my love for coding during my journey
          at Codecool, where I dived deep into the world of frontend
          development. I'm constantly expanding my skill set and staying
          up-to-date with the latest technologies and trends in the frontend
          ecosystem. Whether it's mastering the intricacies of React or diving
          into the world of responsive design, I'm always eager to learn and
          grow as a developer. When I'm taking a break from coding, you'll find
          me playing computer games, fishing, or enjoying a board game.
        </p>
          <button id="resume" onClick={handleView}>View Resume</button>
      </div>
    </div>
          
  );
}

export default About;
