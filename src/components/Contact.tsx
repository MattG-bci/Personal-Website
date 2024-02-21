import React, { useEffect } from "react";

const Contact = () => {
    const obfuscatedEmail = "&#109;&#97;&#116;&#101;&#117;&#115;&#122;&#46;&#102;&#46;&#103;&#114;&#122;&#121;&#98;&#111;&#119;&#115;&#107;&#105;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;";
    
    const decodeEmail = (obfuscatedEmail : string) => {
        return obfuscatedEmail.replace(/&\#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    };

    useEffect(() => {
        const links = document.querySelectorAll(".link");
        const pic = document.querySelectorAll(".contact-pic");
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.className === "contact-pic") {
                    entry.boundingClientRect
                    entry.target.classList.add("contact-pic-animation-media");
                }

                else {
                    entry.target.classList.add("link-animation-media");
                };
            };
          });
        });
        
        let contents = [pic, links];
        contents.forEach(content => {
            content.forEach(element => {
                observer.observe(element)
            });
        });

        return () => {
            observer.disconnect();
          };
        }, []);
      

    return (
        <div>
            <div className="header">
                <h1 className="title">Contact</h1>
            </div>
            <div className="contact-pic">
                <img src="src/assets/profile.jpeg" className="contact-picture" height="400" width="400"></img>
            </div>
            <div className="contact-form">
                <a href="https://www.linkedin.com/in/mfgrzybowski/" target="_blank" className="link">
                    <div className="contact-linkedin">LinkedIn</div>
                </a>
                <a href="https://github.com/MattG-bci" target="_blank" className="link">
                    <div className="contact-github">Github</div>
                </a>
                <a href={`mailto:${decodeEmail(obfuscatedEmail)}`} className="link">
                <div className="contact-email">Email</div>
                </a>
                <a href="src/assets/CV.pdf" target="_blank" className="link">
                    <div className="contact-cv">CV</div>
                </a>

            </div>
        </div>
    );
};

export default Contact;
