import "./Background.css";

export default function Background() {
  return (
    <div className="background-container">
        <div className="header">
            <h1 className="title">Background</h1>
        </div>
        <div className="timeline">
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/sheffield.jpeg" height="60" width="60" alt="Sheffield"></img>
                    </div>
                    <div className="date">September 2019</div>
                    <div className="title">Moving to UK to study</div>
                    <div className="desc">Starting BEng Bioengineering at University of Sheffield.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/sela.jpeg" height="60" width="60" alt="SELA"></img>
                    </div>
                    <div className="date">May 2020</div>
                    <div className="title">Joining SELA</div>
                    <div className="desc">Joined Sheffield Engineering Leadership Academy (SELA), a programme for engineering students to develop soft skills such as communication and leadership.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/insigneo.jpeg" height="60" width="60" alt="Insigneo"></img>
                    </div>
                    <div className="date">June 2022</div>
                    <div className="title">Internship at Insigneo Institute</div>
                    <div className="desc">Description of Event 3 goes here.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/sheffield.jpeg" height="60" width="60" alt="Sheffield Grad"></img>
                    </div>
                    <div className="date">July 2022</div>
                    <div className="title">Graduating with 1st Class Honours</div>
                    <div className="desc">Description of Event 4 goes here.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/imperial.png" height="60" width="60" alt="Imperial"></img>
                    </div>
                    <div className="date">October 2022</div>
                    <div className="title">MSc at Imperial College London</div>
                    <div className="desc">Description of Event 4 goes here.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/fusionride.jpeg" height="60" width="60" alt="Fusionride"></img>
                    </div>
                    <div className="date">June 2023</div>
                    <div className="title">Internship at Fusionride</div>
                    <div className="desc">Description of Event 4 goes here.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/imperial.png" height="60" width="60" alt="Imperial Grad"></img>
                    </div>
                    <div className="date">October 2023</div>
                    <div className="title">Graduating ICL with Distinction</div>
                    <div className="desc">Description of Event 4 goes here.</div>
                </div>
            </div>
        </div>
  </div>

  );
}

