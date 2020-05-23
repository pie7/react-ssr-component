import React from "react";
import SVGArrowBack from "../assets/SVGArrowBack";
import SVGArrowForward from "../assets/SVGArrowForward";

const Arrow = ({ isNext = false, setIdx, idx, visibility  }) => {
    return (
        <div className="arrows__button">
            <button onClick={() => { isNext ? idx !== 2 && setIdx(idx + 1) : idx !== 0 && setIdx(idx - 1) }}>
                {isNext ? <SVGArrowForward /> : <SVGArrowBack />}
            </button>
            <style jsx>{`
            .arrows__button button {
                cursor: pointer;
                visibility: ${visibility};
            }
            `}</style>
        </div>
    )
}
export default Arrow