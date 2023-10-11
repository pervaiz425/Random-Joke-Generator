const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious";

const jsonData = {
  "jokes": [
    { "1": "What falls, but never needs a bandage? The rain." },
    { "2": "I was going to tell you a joke about boxing but I forgot the punch line." },
    { "3": "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either." },
    { "4": "Why did the egg hide? It was a little chicken." },
    { "5": "What did the dirt say to the rain? If you keep this up, my name will be mud!" },
    { "6": "Why couldn't the sunflower ride its bike? It lost its petals." },
    { "7": "What's an egg's favorite vacation spot? New Yolk City." },
    { "8": "I ate a sock yesterday. It was very time-consuming." },
    { "9": "What kind of candy do astronauts like? Mars bars." },
    { "10": "I wanted to buy some camo pants but couldn't find any." },
    { "11": "I ordered a chicken and an egg from Amazon. I'll let you know." },
    { "12": "What month is the shortest of the year? May, it only has three letters." },
    { "13": "What did the snail who was riding on the turtle's back say? Wheeeee!" },
    { "14": "I was going to tell a time traveling joke, but you guys didn't like it." },
    { "15": "What do you call a lazy kangaroo? A pouch potato." },
    { "16": "I used to run a dating service for chickens, but I was struggling to make hens meet." },
    { "17": "Why do we tell actors to 'break a leg?' Because every play has a cast." },
    { "18": "What does a pig put on dry skin? Oinkment." },
    { "19": "What do you call it when a snowman throws a tantrum? A meltdown." },
    { "20": "My uncle named his dogs Timex and Rolex. They're his watch dogs." },
    { "21": "Did you hear about the guy whose left side was cut off? He's all right now." },
    { "22": "How do you open a banana? With a mon-key." },
    { "23": "Which is faster, hot or cold? Hot, because you can catch cold." },
    { "24": "What did one plate say to the other plate? Dinner's on me." },
    { "25": "Why do oranges wear sunscreen? So they don't peel." },
    { "26": "My wife told me to stop acting like a flamingo, so I had to put my foot down." },
    { "27": "What do you call a pig that does karate? A pork chop." },
    { "28": "Where does Batman go to the bathroom? The batroom." },
    { "29": "What do you call a pony with a sore throat? A little horse." },
    { "30": "What did the left eye say to the right eye? Between you and me, something smells." },
    { "31": "What did the mama tomato say to the baby tomato? Catch up!" },
    { "32": "Why didn't the melons get married? Because they cantaloupe." },
    { "33": "What do you call a fake noodle? An impasta." },
    { "34": "How did the pig get to the hogspital? In a hambulance." },
    { "35": "I'm so good at sleeping I can do it with my eyes closed!" },
    { "36": "Why does Humpty Dumpty love autumn? Because he had a great fall." },
    { "37": "What happens when a strawberry gets run over crossing the street? Traffic jam." },
    { "38": "Why did the cow jump over the moon? The farmer had cold hands." },
    { "39": "A termite walks into a bar and says, 'So, is the bar tender here?'" },
    { "40": "How does an octopus go into battle? Well-armed." },
    { "41": "What do you call a pudgy psychic? A four-chin teller." },
    { "42": "What did one wall say to the other? I'll meet you at the corner." },
    { "43": "Why don't sharks eat clowns? Because they taste funny." },
    { "44": "A horse walks into a bar. The bartender says, 'Why the long face?'" },
    { "45": "What did the pirate say when he turned 80? Aye matey." },
    { "46": "What's black and white and goes round and round? A penguin in the washing machine." },
    { "47": "How do you organize a space party? You planet." },
    { "48": "Why couldn't the bicycle stand up by itself? It was two tired." },
    { "49": "Did you hear the rumor about butter? Well, I'm not going to spread it." },
    { "50": "Why did the student eat his homework? Because his teacher told him it was a piece of cake." },
    { "51": "What did one hat say to the other? You wait here, I'll go on ahead." },
    { "52": "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks." },
    { "53": "I couldn't figure out why the baseball kept getting larger. Then it hit me." },
    { "54": "What do you call a boomerang that won’t come back? A stick." },
    { "55": "What did the full glass say to the empty glass? You look drunk." },
    { "56": "How do you stop a bull from charging? Cancel its credit card." },
    { "57": "Why don’t we see elephants hiding in trees? Because they’re really good at it." },
    { "58": "What’s the difference between a hippo and a zippo? One’s pretty heavy and the other’s a little lighter." },
    { "59": "Did you hear the one about the roof? Never mind, it's over your head." },
    { "60": "I used to hate facial hair...but then it grew on me." },
    { "61": "A cheese factory exploded in France. Da brie was everywhere." },
    { "62": "What's a ninja's favorite type of shoes? Sneakers." },
    { "63": "What's the best-smelling insect? A deodor-ant." },
    { "64": "What do you call a bear without any teeth? A gummy bear." },
    { "65": "Why was the coach yelling at the vending machine? He wanted his quarter back." }
  ]
}


let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then(data => data.json())
    .then(item => {
      if(item.setup === undefined || item.delivery === undefined) 
      {
        let random = Math.floor(Math.random() * jsonData.jokes.length);
        item.setup = jsonData.jokes[random][`"${random+1}"`];
        item.delivery = "";
        console.log("json data");
      }
      jokeContainer.textContent = `${item.setup} ${item.delivery}`;
      jokeContainer.classList.add("fade");
    })

}

btn.addEventListener("click", getJoke);

getJoke();