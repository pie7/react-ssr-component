import React, {useState} from "react";
import Arrow from "../components/Arrow";
import Dots from "../components/Dots";
import Card from "../components/Card";


const SliderContainer = ({ apods }) => {
  const [idx, setIdx] = useState(2)

  return (
    <div className="slider__container">
      <div className="grid">
        <Arrow
          isNext={false}
          setIdx={setIdx} idx={idx}
          visibility={idx !== 0 ? 'visible' : 'hidden'}
        />
        <div className="slider__inner">
          <div className={`card__list`}>
            {apods.map((apod, index) =>
              <Card
                key={index}
                url={apod.url}
                date={apod.date}
                title={apod.title}
                explanation={apod.explanation}
                copyright={apod.copyright}
                media_type={apod.media_type}
              />
            )}
          </div>
        </div>
        <Arrow
          isNext={true}
          setIdx={setIdx} idx={idx}
          visibility={idx !== 2 ? 'visible' : 'hidden'}
        />
      </div>
      <Dots items={apods} idx={idx} />

      <style jsx>{`
          .slider__container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
          }
          .slider__inner {
              width: 640px;
              display:flex;
              flex-wrap: nowrap;
              overflow: auto;
          }
          .slider__inner::-webkit-scrollbar {
              display: none;
          }
          .card__list {
              display: flex;
              flex-direction: row;
              position: relative;
              left: ${idx * -640}px;
              transition: .3s;
          }
          .grid {
              display: flex;
              align-items: center;
              max-width: 960px;
          }
      `}</style>

      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
          }

          button {
              padding: 0;
              margin: 0;
              border: 0;
          }

          ul, ol {
              list-style: none;
              padding: 0;
              margin: 0;
          }

          * {
            box-sizing: border-box;
          }
       `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const newDate = new Date()
  const utcDate = new Date(newDate.getTime())

  const YYYY = utcDate.toLocaleString('en-US', { timeZone: 'America/Yakutat', year: 'numeric' })
  const MM = utcDate.toLocaleString('en-US', { timeZone: 'America/Yakutat', month: '2-digit' })
  const DD = utcDate.toLocaleString('en-US', { timeZone: 'America/Yakutat', day: '2-digit' })

  const apods = []

  for (let index = -2; index <= 0; index++) {
    const date = `${YYYY}-${MM}-${parseInt(DD) + index}`

    const res = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.apiKey}`)
    const apod = await res.json()
    apods.push(apod)
  }

  return {
    props: {
      apods
    },
  }
}
export default SliderContainer