import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [psLength, setPsLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null)

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    for (let i = 1; i <= psLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [psLength, numberAllow, charAllow, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select()
    // passRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGenerator()
  }, [psLength, numberAllow, charAllow, passGenerator])

  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col">
        <div className="w-full max-w-xl mx-auto rounded-lg p-4 my-12 bg-slate-600 text-white">
          <h1 className='text-2xl mb-4 text-white text-center'>Password Generator</h1>
          <div className="flex rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className='outline-none w-full py-3 px-2 text-black'
              placeholder='Password'
              readOnly
              ref={passRef}
            />
            <button onClick={copyPassToClipboard} className='outline-none bg-black text-white px-5 py-0.5'>
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={16}
                value={psLength}
                className='cursor-pointer'
                onChange={(e) => setPsLength(e.target.value)}
              />
              <label>Length: {psLength}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                className='cursor-pointer'
                onChange={() => setNumberAllow((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                className='cursor-pointer'
                onChange={() => setCharAllow((prev) => !prev)}
              />
              <label>character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
