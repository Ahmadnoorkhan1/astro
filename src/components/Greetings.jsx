import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button style={{backgroundColor:'transparent', border:"1px solid white", padding:"20px 10px"}} onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}