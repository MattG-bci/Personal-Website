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
                    <div className="desc">Enrolled in Sheffield Engineering Leadership Academy (SELA), a programme for engineering students to develop soft skills such as communication and leadership.</div>
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
                    <div className="desc">Started a summer internship as a Deep Learning Research Intern to work on semantic segmentation and classification of jaw lesions on panoramic radiographs.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/sheffield.jpeg" height="60" width="60" alt="Sheffield Grad"></img>
                    </div>
                    <div className="date">July 2022</div>
                    <div className="title">Graduated University of Sheffield</div>
                    <div className="desc">Graduated with 1st Class Honours in BEng Bioengineering.</div>
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
                    <div className="desc">Commenced master's studies in Applied Machine Learning at Imperial College London.</div>
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
                    <div className="desc">Joined Fusionride as a Machine Learning Intern, working on multi-modal autonomous driving data.</div>
                </div>
            </div>
            <div className="event">
                <div className="dot"></div>
                <div className="content">
                    <div className="img-container">
                        <img src="src/assets/imperial.png" height="60" width="60" alt="Imperial Grad"></img>
                    </div>
                    <div className="date">October 2023</div>
                    <div className="title">Graduated Imperial College London</div>
                    <div className="desc">Graduated MSc with Distinction. Scored 80% in disseration hence produced a publication-quality work.</div>
                </div>
            </div>
        </div>
  </div>

  );
}

