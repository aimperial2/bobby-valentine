import { useState } from 'react'
import lilpook from './assets/images/lilpook.png'
import './App.css'

function App() {
  const [noClickCount, setNoClickCount] = useState(0)
  const [showValentine, setShowValentine] = useState(false)

  const messages = [
    "WILL YOU BE MY VALENTINE? 💕",
    "WHAT DO YOU MEAN, NO....?!",
    "You don't wanna be my valentine?! But... 🥺",
    "Last chance!!!! Pretty please? 🙏"
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
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-6xl mb-8 text-pink-600 animate-bounce">
            🎉 Yay!! Happy Valentine's Day, Bobby! 🎉
          </h1>
          <p className="text-2xl text-pink-700 mb-8">
            You said YES! 💖
          </p>
          {/* Placeholder for your PNG image */}
          <div className="w-64 h-64 mx-auto bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg mb-8">
            <p className="text-gray-500">Your happy valentine PNG here</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-pink-300 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl mx-auto">
        <img src={lilpook} alt="Lil Pook" className="w-32 mx-auto mb-4 object-cover animate-bounce" />

        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 leading-tight">
          {messages[noClickCount]}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Yes Button - gets bigger */}
          <button
            onClick={handleYesClick}
            className={`
              bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full
              transform transition-all duration-300 hover:scale-110 shadow-lg
              ${noClickCount > 0 ? 'scale-125' : 'scale-100'}
              ${noClickCount > 1 ? 'scale-150' : ''}
              ${noClickCount > 2 ? 'scale-175' : ''}
            `}
            style={{
              fontSize: `${1 + noClickCount * 0.2}rem`,
              padding: `${1 + noClickCount * 0.5}rem ${2 + noClickCount * 0.5}rem`
            }}
          >
            Yes! 💕
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
              No 😔
            </button>
          )}
        </div>

        {noClickCount === 3 && (
          <div className="mt-8">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-110 shadow-lg animate-pulse"
            >
              Okay, fine... Yes! 💕
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
