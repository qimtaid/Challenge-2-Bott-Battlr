import React, {useState, useEffect} from "react";
import axios from "axios";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8002/bots")
    .then(res => {
      setBots(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)){
      setArmy([...army, bot]);
    };
  };



  return (
    <div>
      <YourBotArmy army={army} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
