import { useEffect, useRef, useState } from "react"
import lanaguages from "./lanaguages"
import clsx from "clsx";

function App() {
  const [currentWord, setCurrentWord] = useState("react")
  const [guessLetter, setGuessLetter] = useState([]);
  const alphabets = "abcdefghijklmnopqrstuvwxyz";


  // Derived variable 
  const wrongGuessCount = guessLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  
  
  console.log(wrongGuessCount)



  function handleKeyClick(e) {
    let letter = e.currentTarget.value;

    addLetter(letter)
  }

  // add letter 
  function addLetter(letter) {
    setGuessLetter(prevLetters => {
      if(prevLetters.includes(letter)) {
        return prevLetters;
      } 

      return [...prevLetters, letter]
    })
  }

  useEffect(() => {
    const handleKeyBoard = (e) => {
      const letter = e.key.toLowerCase();

      if(/^[a-z]$/.test(letter) && alphabets.includes(letter)) { // .test Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
        addLetter(letter)
      } 
    }

    window.addEventListener('keydown', handleKeyBoard)

    return () => {
      window.removeEventListener('keydown', handleKeyBoard)
    }
  }, [])
  
  return (
    <>
      <header className="min-h-[144px] w-full flex flex-col gap-[20px] items-center mb-12">
        <div className="flex flex-col gap-[4px] items-center">
          <h1 className="text-[20px] font-medium text-[#F9F4DA] text-center">Assembly: EndGame</h1>
          <p className="text-[14px] max-w-[350px] text-center text-[#8E8E8E]">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
        </div>

       {/* Status section */}
       <div className="px-[6px] py-[6px] w-[352px] bg-[#10A95B] rounded-[4px] flex flex-col items-center justify-center">
          <h2 className="text-[20px] text-[#F9F4DA]">You Win!</h2>
          <p className="text-[16px] text-[#F9F4DA]">Well done! 🎉</p>
       </div>
      </header>

      <main className="w-full flex flex-col justify-center items-center">
        {/* lanaguages section */}
        <section className="w-[253.5px] flex flex-wrap gap-[1.5px] content-start justify-center overflow-hidden mb-10">
          {lanaguages.map(lang => {
            return (
              <div 
                key={lang.name}
                className="px-[5px] py-[2px] rounded-[3px] text-[11.5px] font-[700] inline-flex items-center h-max whitespace-nowrap" 
                style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
              >
                {lang.name}
              </div>
            )
          })}
        </section>


        {/* Guest Word section */}
        <section className="flex justify-between gap-[2.5px] mb-10">
          {currentWord.split("").map((letter, index) => {
            const isGussed = guessLetter.includes(letter);
            
            return (
              <span key={index} className="px-[6px] py-[8px] w-[45px] h-[45px] bg-[#323232] text-center text-[18px] border-b border-[#F9F4DA] text-[#F9F4DA] font-bold">
                {isGussed && (
                  letter.toUpperCase()
                )}
              </span>
            )
          })}
        </section>


        {/* Keyboard section */}
        <section className="h-[164px] w-[360px] sm:w-[480px] flex flex-wrap s:gap-[8px] gap-[10px] content-start items-center justify-center sm:mb-[25px] mb-[40px]">
          {alphabets.split("").map((key, index) => {
            const isGuessed = guessLetter.includes(key);
            const isCorrect = isGuessed && currentWord.includes(key);
            const isWrong = isGuessed && !currentWord.includes(key);

            return (
              <button 
                key={index}
                className={clsx("s:w-[40px] s:h-[40px] w-[35px] h-[35px] p-[6px] border border-[#D7D7D7] cursor-pointer flex items-center justify-center bg-[#FCBA29] rounded-[4px] text-[16px] font-[600] active:border-[2px] active:border-black",
                  isCorrect && 'bg-green-500',
                  isWrong && 'bg-red-500'
                )}
                value={key}
                onClick={handleKeyClick}
                // onKeyDown={handleKeyboard}
              >
                {key.toUpperCase()}
              </button>
            )
          })}
        </section>

        
      </main>

      <footer className="flex flex-col items-center justify-center">
        {/* button: new Game */}
          <button className="w-[228px] h-[40px] px-[12px] py-[6px] cursor-pointer bg-[#11B5E5] rounded-[4px] border border-[#D7D7D7] text-[16px] font-[600] text-[#1E1E1E]">
            New Game
          </button>
      </footer>
    </>
  ) 
}

export default App
