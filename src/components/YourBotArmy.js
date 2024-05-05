import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, handleDischarge}) {
  //your bot army code here...
  console.log(army);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.length > 0 ? army.map(bot => (
            <BotCard 
              key={bot.id}
              bot={bot}
              handleDischarge={handleDischarge}
            />
          )) : <p>No bots in your army yet.</p>  }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
