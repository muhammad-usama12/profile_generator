const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let profile = {}

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  profile["name"] = answer;

rl.question("What's an activity you like doing?", (answer) => {
    profile["activity"] = "Gym";

    rl.question("What do you listen to while doing that?", (answer) => {
      profile["music"] = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.", (answer) => {
        profile["meal"] = answer;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          profile["dish"] = answer;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            profile["sport"] = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              profile["superpower"] = answer;

              console.log(`Your profile details are as follows - Name: ${profile.name}. Favorite Activity: ${profile.activity} & favourite music while doing the activity ${profile.music}. Favourite Go-to Meal: ${profile.meal}, and favorite dish is ${profile.dish}. Favorite sport: ${profile.sport}. Secret superpower is ${profile.superpower}!`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});