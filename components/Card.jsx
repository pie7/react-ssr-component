import React, {useState} from "react";

function Card({ url, date, title, explanation, copyright, media_type }) {
    const [isLoad, setIsLoad] = useState(false)
    return (
        <div className="card__container">
            <div className="card__image">
                {media_type === "image"
                    ? <img src={url} onLoad={() => setIsLoad(true)} />
                    :
                    <iframe
                        src={url}
                        onLoad={() => setIsLoad(true)}
                        frameBorder="0"
                        allowFullScreen
                        width="640"
                        height="320"
                    />
                }
            </div>
            <p>{date}</p>
            <p className="card__title">
                {title}
            </p>
            <p className="card__explanation">
                {explanation}
            </p>
            <p className="card__footer">
                {copyright}
            </p>

            <style jsx>{`
                .card__container {
                    padding: 20px;
                    margin: 20px;
                    width: 600px;
                    height: 800px;
                    overflow: hidden;
                    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
                }

                .card__image {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card__image img {
                    max-height: 320px;
                    width: auto;
                    height: auto;
                }

                .card__title {
                    font-size: 1.5rem;
                }

                .card__explanation {
                    font-size: 1rem;
                }

                .card__footer {
                    font-weight: 700;
                }
            `}</style>

        </div>
    )
}
export default Card