import { useState } from 'react'
import lilpook from './assets/images/lilpook.png'
import lilpook2 from './assets/images/lilpook2.png'
import lilpook3 from './assets/images/lilpook3.png'
import lilpook4 from './assets/images/lilpook4.png'
import ally from './assets/images/ally.png'
import jack from './assets/images/jack.png'
import ducky from './assets/images/ducky.png'
import './App.css'

function App() {
  const [noClickCount, setNoClickCount] = useState(0)
  const [showValentine, setShowValentine] = useState(false)

  const lilpookImages = [lilpook, lilpook2, lilpook3, lilpook4]


  const messages = [
    "WILL YOU BE MY VALENTINE? 💝",
    "WHAT DO YOU MEAN, NO....?!",
    "You don't wanna be my valentine?! But... 🥺",
    "LAST CHANCE!!!! Pretty please? 🙏"
  ]

  const handleNoClick = () => {
    if (noClickCount < 3) {
      setNoClickCount(noClickCount + 1)
    }
  }

  const handleYesClick = () => {
    setShowValentine(true)
  }

  if (showValentine) {
    return (
      <div key="valentine" className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-200 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-6xl mb-8 text-pink-600 animate-bounce">
           Yay!! Happy Valentine's Day, Bobby!
          </h1>
          <p className="text-2xl text-pink-700 mb-8">
            I love you! 💝
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <img src={ally} alt="Ally" className="w-24 sm:max-w-48 mb-4 animate-bounce" />
              <img src={ducky} alt="Ducky" className="w-24 sm:max-w-48 mb-4" />
            <img src={jack} alt="Jack" className="w-24 sm:max-w-48 animate-bounce" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-pink-300 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl mx-auto">
        <img src={lilpookImages[noClickCount]} 
        alt="Lil Pook" 
        className={`w-32 mx-auto mb-4 object-cover ${
          noClickCount === 0 ? 'animate-bounce' :
          noClickCount >= 2 ? 'shake-animation' : ''}`} />

        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 leading-tight">
          {messages[noClickCount]}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Yes Button - gets bigger */}
          <button
            onClick={handleYesClick}
            className={`
              bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full
              transform transition-all duration-300 hover:scale-110 max-w
              ${noClickCount > 0 ? 'scale-125' : 'scale-100'}
              ${noClickCount > 1 ? 'scale-150' : ''}
              ${noClickCount > 2 ? 'scale-170' : ''}
            `}
            style={{
              fontSize: `${1 + noClickCount * 0.2}rem`,
              padding: `${1 + noClickCount * 0.5}rem ${2 + noClickCount * 0.5}rem`
            }}
          >
            Yes!!
          </button>

          {/* No Button - gets smaller and moves */}
          {noClickCount < 3 && (
            <button
              onClick={handleNoClick}
              className={`
                bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full
                transform transition-all duration-300 shadow-lg
                ${noClickCount > 0 ? 'scale-75' : 'scale-100'}
                ${noClickCount > 1 ? 'scale-50' : ''}
                ${noClickCount > 2 ? 'scale-25' : ''}
              `}
              style={{
                transform: `
                  scale(${1 - noClickCount * 0.25})
                  translateX(${noClickCount * 50}px)
                  translateY(${noClickCount * 30}px)
                `,
                fontSize: `${1 - noClickCount * 0.1}rem`,
                padding: `${0.75 - noClickCount * 0.2}rem ${1.5 - noClickCount * 0.3}rem`
              }}
            >
              No...
            </button>
          )}
        </div>

        {noClickCount === 3 && (
          <div className="mt-8">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-110 animate-pulse"
            >
             You have no choice-- Say Yes!
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
