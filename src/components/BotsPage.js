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
    .catch(error => console.error('Eror fetching bots', error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)){
      setArmy([...army, bot]);
    };
  };

  const dischargeBot = (botId) => {
    console.log(botId);
    axios.delete(`http://localhost:8002/bots/${botId}`)
    .then (()=> {
      setBots(bots.filter(bot => bot.id !== botId));
      setArmy(army.filter(bot => bot.id !== botId));
    })
    .catch(error => console.error('Error deleting bot', error));
  }; 



  return (
    <div>
      <YourBotArmy army={army} handleDischarge={dischargeBot} />
      <BotCollection bots={bots} dischargeBot={dischargeBot} enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
