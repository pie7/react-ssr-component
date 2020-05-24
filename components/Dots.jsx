import React from "react";

const Dots = ({ items = [], idx = 0 }) => {
    return (
        <>
            <ol className="dots__container">
                {items.map((item, index) =>
                    <li key={index} className={`dots__dot ${idx === index ? 'active' : ''}`}>
                        <button></button>
                    </li>
                )}
            </ol>

            <style jsx>{`
                .dots__container {
                    display: flex;
                    justify-content: center;
                    margin-top: 16px;
                }
                .dots__dot {
                    background-color: #222;
                    width: 30px;
                    height: 3px;
                    cursor: pointer;
                    margin: 0 3px;
                    opacity: .3;
                }

                .dots__dot.active {
                    opacity: .9;
                }
            `}</style>
        </>
    )
}
export default Dots