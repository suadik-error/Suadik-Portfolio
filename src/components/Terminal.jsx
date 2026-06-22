import { useState } from "react"

export default function Terminal(){

const [input,setInput]=useState("")
const [history,setHistory]=useState([])

const commands={
whoami:"Full Stack MERN Developer",
skills:"HTML CSS JavaScript React Node MongoDB",
projects:"E-commerce platform, Media Upload App",
contact:"Email: your@email.com"
}

const handleCommand=(e)=>{

if(e.key==="Enter"){

const result = commands[input] || "Command not found"

setHistory([...history,`> ${input}`,result])

setInput("")
}

}

return(

<div className="bg-black text-green-400 p-6 font-mono h-screen">

{history.map((line,i)=>(
<p key={i}>{line}</p>
))}

<input
className="bg-black outline-none"
value={input}
onChange={e=>setInput(e.target.value)}
onKeyDown={handleCommand}
/>

</div>

)

}