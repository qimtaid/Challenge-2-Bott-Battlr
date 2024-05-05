import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, enlistBot, dischargeBot}) {
  // Your code here
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => {
          return (
          <BotCard 
          key={bot.id} 
          bot={bot}  
          handleAction={enlistBot}
          handleDischarge={dischargeBot}

          />
          );
        })}
        
        
      </div>
    </div>
  ); 
} 

export default BotCollection;
