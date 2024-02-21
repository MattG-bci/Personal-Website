import React, {useLayoutEffect} from "react";

const Overfitting = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="article">
            <div className="title-article">Navigating the Pitfalls of Overfitting: Strategies to Enhance Model Generalization</div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                <figure>
                    <img src="/src/assets/overfitting.png" height="400" width="auto" />
                    <figcaption>Figure 1: Decision boundary of an overfitted model.</figcaption>
                </figure>
                </div>
            <div className="abstract-article">
                <div>
                </div>
            </div>
            <div className="keywords">
                <div className="keyword-box">Machine Learning</div>
                <div className="keyword-box">Complexity</div>
            </div>
            <div className="article-section">
                <div className="section-title">Introduction</div>
                <div className="section-description">
                    <p>
                    In the realm of machine learning, overfitting is a common challenge that practitioners encounter when developing predictive models. 
                    Overfitting occurs when a model learns the training data too well, capturing noise and specific patterns that may not generalize well to new, unseen data. 
                    This phenomenon can lead to reduced performance on real-world applications, as the model essentially memorizes the training set rather than learning underlying patterns.
                    </p>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Understanding Overffitting</div>
                <div className="section-description">
                    <p>
                    Overfitting occurs when a model becomes too complex relative to the complexity of the underlying data. 
                    Essentially, the model fits the noise in the training data rather than identifying the true underlying patterns. 
                    This can result in poor performance when applied to new, unseen data, as the model struggles to generalize beyond the examples it has been trained on.
                    </p>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Typical Indicators of Overfitting</div>
                <div className="section-description">
                    <p>Typically, the overffitting might occur given the following:</p>
                    <ul>
                        <li> 
                            The model achieves high accuracy on the training set but performs poorly on a separate validation or test set. 
                            This discrepancy suggests that the model is too tailored to the training data and fails to generalize.
                        </li>
                        <li>
                            Overly complex models, such as those with too many parameters or layers, are more prone to overfitting. 
                            While complex models can capture intricate patterns, they may also pick up on noise in the data.
                        </li>
                        <li>
                            In cases where the training dataset is small, models are more susceptible to overfitting as they may memorize 
                            the limited examples rather than learning generalizable patterns.
                        </li>
                    </ul>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Methods to Address Overffitting</div>
                <div className="section-description">
                    <p>Fortunately, there are several ways to overcome overffitting: </p>
                    <ul>
                        <li>
                            <b>Cross-Validation: </b>Implementing cross-validation techniques, such as k-fold cross-validation, helps evaluate a model's performance on multiple subsets of the data. 
                            This provides a more robust estimate of the model's generalization performance and helps identify potential overfitting.
                        </li>
                        <li>
                            <b>Regularisation: </b>Regularisation methods, like L1 and L2 regularisation, penalize excessive complexity by adding a regularization term to the loss function. 
                            This discourages the model from assigning too much importance to individual features or parameters, promoting a more generalizable solution.
                        </li>
                        <li>
                            <b>Data Augmentation: </b>Increasing the size of the training dataset through data augmentation can help expose the model to a more diverse set of examples. 
                            This reduces the likelihood of overfitting by ensuring the model does not rely on specific data instances.
                        </li>
                        <li>
                            <b>Feature Selection: </b>Careful selection of relevant features can prevent the model from fitting noise in the data. 
                            Removing irrelevant or redundant features reduces the model's complexity and enhances its ability to generalize.
                        </li>
                        <li>
                            <b>Early Stopping: </b>Monitoring the model's performance on a validation set during training and stopping the training process when the performance starts to degrade can prevent overfitting. 
                            This helps find an optimal balance between training and generalization.
                        </li>
                        <li>
                            <b>Ensemble Learning: </b>Combining predictions from multiple models, known as ensemble learning, can mitigate overfitting. 
                            Techniques like bagging and boosting create diverse models that collectively generalize well to new data.
                        </li>
                    </ul>
                
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">Conclusions</div>
                <div className="section-description">
                    <p>
                        Overfitting is a persistent challenge in machine learning, but understanding its indicators and implementing appropriate strategies can significantly improve model generalization. 
                        A balanced approach that considers model complexity, data quality, and regularization techniques is crucial for developing robust and effective machine learning models. 
                        As the field continues to evolve, staying informed about best practices and experimenting with various techniques will be key to overcoming the hurdles posed by overfitting.
                    </p>
                </div>
            </div>
            <div className="article-section">
                <div className="section-title">References</div>
                <div className="section-description">
                    <p>[1] - I. Goodfellow, Y. Bengio, and A. Courville, Deep learning. MIT press, 2016.</p>
                    <p>[2] - S. Raschka and V. Mirjalili, Python machine learning, 2nd ed., 2019.</p>
                
                </div>
            </div>
        </div>
    )
};

export default Overfitting