function App() {
  return (
    <>
      <header className="h-[144px] w-full flex flex-col gap-[20px] items-center">
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
    </>
  ) 
}

export default App
