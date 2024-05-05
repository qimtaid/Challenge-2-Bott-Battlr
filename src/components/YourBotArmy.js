import React from "react";

function YourBotArmy({army}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
