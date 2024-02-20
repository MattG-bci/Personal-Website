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
                    <p>
                        Nowadays autonomous driving is one of the most trendy in the tech industry. This resulted in a variety of investments in companies attempting to produce solutions to such problem. 
                        This resulted in an increment in research, employees and amount of data used to build AI solutions. 
                        However, the cost of data annotation is proportional to the amount of data. Moreover, in the autonomous driving the annotations usually
                        revolve around complex tasks such as 3D object detection. Additionally, many companies consider multimodality which adds to the work necessary
                        for data preparation. Therefore, the hypothesis for this project was the following:  
                    </p>

                    <p style={{textAlign: "center", fontWeight: "bold"}}>Is it possible to automatise to some degree the process of annotation for a highly specific data such as autonomous driving image dataset?</p>
                
                    <p>This project considered only the automatisation of image captioning. </p>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Methods</div>
                <div className="section-description">
                    <p>
                        The automatisation of image captioning is nothing else than connecting images with some text.
                        For this task, there are many deep learning models that solve this task, but the most remarkable one
                        is CLIP, an open-source model published by OpenAI [1]. 
                    </p>
                
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