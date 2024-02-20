import React, {useLayoutEffect} from "react";

const FrameSearchAPI = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="article">
            <div className="title-article">Frame Search API</div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <figure>
                    <img src="/src/assets/clip.png" height="400" width="auto" />
                    <figcaption>Figure 1: CLIP - text-image foundation model.</figcaption>
                </figure>
                </div>
            <div className="abstract-article">
                <div>
                    <p>Is it possible to quickly search through highly specified image data such as autonomous driving data and extract the most relevant samples with a text prompt?</p>

                    <p>The short answer is: Yes!</p>
                </div>
            </div>
            <div className="keywords">
                <div className="keyword-box">Pytorch</div>
                <div className="keyword-box">AWS</div>
                <div className="keyword-box">Feature Caching</div>
            </div>
            <div className="article-section">
                <div className="section-title">Problem Statement</div>
                <div className="section-description">
                    <p>The project originated from the following hypothesis: The project originated from the following hypothesis: The project originated from the following hypothesis: The project originated from the following hypothesis: The project originated from the following hypothesis:</p>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Methods</div>
                <div className="section-description">
                    <p>Methods used here are:</p>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Results and Discussion</div>
                <div className="section-description">
                    <p>Results used here are:</p>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Conclusions</div>
                <div className="section-description">
                    <p>Conclusions used here are:</p>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">References</div>
                <div className="section-description">
                    <p>[1] - piwo</p>
                
                </div>
            </div>
        </div>
    )
};

export default FrameSearchAPI