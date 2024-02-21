import React, {useLayoutEffect} from "react";

const DataPreprocessing = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="article">
            <div className="title-article">The Power of Data Preprocessing</div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <figure>
                    <img src="/src/assets/data-preprocessing.png" height="400" width="auto" />
                    <figcaption>Figure 1: Data preprocessing cycle (<a href="https://www.analyticsvidhya.com/blog/2021/08/data-preprocessing-in-data-mining-a-hands-on-guide/">source</a>).</figcaption>
                </figure>
                </div>
            <div className="abstract-article">
                <div>
                </div>
            </div>
            <div className="keywords">
                <div className="keyword-box">Machine Learning</div>
                <div className="keyword-box">Data Preparation</div>
                <div className="keyword-box">Data Cleaning</div>
            </div>
            <div className="article-section">
                <div className="section-title">Introduction</div>
                <div className="section-description">
                    <p>
                        In the world of machine learning, the saying "garbage in, garbage out" holds true – the quality of your model's output is highly dependent on the quality of the data you feed it. This is where data preprocessing steps in, playing a pivotal role in transforming raw data into a format that is suitable for training and optimizing machine learning models. 
                        In this article, we will explore the significance of data preprocessing and the various techniques employed to ensure clean, accurate, and effective data for model development.
                    </p>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">The Importance of Data Preprocessing</div>
                <div className="section-description">
                    <p>One could consider data preprocessing due to the following reasons:</p>
                    <ul>
                        <li>
                            <b>Handling Missing Data: </b>Real-world datasets often contain missing values, whether due to errors, sensor malfunctions, or other reasons. 
                            Data preprocessing involves strategies like imputation, where missing values are filled in using statistical methods or inferred from surrounding data.
                        </li>
                        <li>
                            <b>Dealing with Outliers: </b>Outliers can significantly impact the performance of machine learning models. 
                            Preprocessing techniques, such as removing or transforming outliers, help ensure that the model is not unduly influenced by extreme values.
                        </li>
                        <li>
                            <b>Normalisation and Standardisation: </b>Normalising and standardising numerical features are common preprocessing techniques. 
                            Normalisation scales the values of a feature to a specific range (e.g., between 0 and 1), while standardisation transforms the data to have a mean of 0 and a standard deviation of 1. 
                            These processes promote stability during model training.
                        </li>
                        <li>
                            <b>Feature Scaling: </b>Features with different scales can negatively impact the performance of certain machine learning algorithms. 
                            Standardising or normalising features ensures that all variables contribute equally to the model's learning process, preventing dominance by features with larger scales.
                        </li>
                        <li>
                            <b>Handling Imbalanced Datasets: </b>In scenarios where one class significantly outweighs another in a classification task, the model may become biased towards the majority class. 
                            Techniques like oversampling the minority class or undersampling the majority class help balance the dataset, improving the model's ability to recognize patterns in both classes.
                        </li>
                        <li>
                            <b>Text Cleaning and Tokenisation: </b>Natural language processing (NLP) tasks often involve dealing with unstructured text data. 
                            Text cleaning involves removing irrelevant characters, stopwords, and stemming to extract meaningful information. 
                            Tokenisation breaks down sentences into individual words, allowing models to process textual data effectively.
                        </li>
                        <li>
                            <b>Handling Time-Series Data: </b>Time-series data requires special attention in preprocessing. 
                            Techniques like resampling, interpolation, and lagging are employed to account for temporal dependencies and ensure that the model can effectively learn from sequential patterns.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Conclusions</div>
                <div className="section-description">
                    <p>
                        Data preprocessing is a critical phase in the machine learning pipeline, influencing the success and reliability of models. 
                        By addressing issues like missing data, outliers, and varying scales, preprocessing lays the foundation for models to learn meaningful patterns and make accurate predictions. 
                        As the field of machine learning continues to advance, the role of data preprocessing remains integral, underscoring the importance of clean, well-organized data for unlocking 
                        the full potential of artificial intelligence applications.
                    </p>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">References</div>
                <div className="section-description">
                    <p>[1] - S. Raschka and V. Mirjalili, Python machine learning, 2nd ed., 2019.</p>
                
                </div>
            </div>
        </div>
    )
};

export default DataPreprocessing