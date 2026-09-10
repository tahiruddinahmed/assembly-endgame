import lanaguages from "./lanaguages"

function App() {
  
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

      <main className="w-full flex justify-center">
        {/* lanaguages section */}
        <section className="w-[253.5px] h-[51.5px] flex flex-wrap gap-[1.5px] content-start justify-center overflow-hidden">
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
      </main>
    </>
  ) 
}

export default App
