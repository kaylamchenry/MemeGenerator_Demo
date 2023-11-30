const memeTemplates = [
  {
    id: "87743020",
    name: "Two Buttons",
    alternate_names: [
      "2 red buttons",
      "choice button",
      "which button",
      "daily struggle",
      "hard choice to make",
    ],
  },
  {
    id: "124822590",
    name: "Left Exit 12 Off Ramp",
    alternate_names: ["car drifts off highway", "sharp turn on road"],
  },
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    alternate_names: [
      "drakeposting",
      "drakepost",
      "drake hotline approves",
      "drake no yes",
      "drake like dislike",
      "drake faces",
    ],
  },
  {
    id: "112126428",
    name: "Distracted Boyfriend",
    alternate_names: [
      "distracted bf",
      "guy checking out another girl",
      "man looking at other woman",
      "jealous girlfriend",
      "guy looking back",
      "cheater temptation",
      "wandering eyes",
      "disloyal boyfriend",
    ],
  },
  {
    id: "129242436",
    name: "Change My Mind",
    alternate_names: ["Steven Crowder's sign", "prove me wrong"],
  },
  {
    id: "438680",
    name: "Batman Slapping Robin",
    alternate_names: [],
  },
  {
    id: "217743513",
    name: "UNO Draw 25 Cards",
    alternate_names: [
      "do something you don’t like or draw 25 cards",
      "uno dilemma",
      "uno or draw 25",
      "draw 25",
    ],
  },
  {
    id: "131087935",
    name: "Running Away Balloon",
    alternate_names: [
      "big yellow ball and pink guy",
      "me vs my hopes and dreams",
    ],
  },
  {
    id: "61579",
    name: "One Does Not Simply",
    alternate_names: [
      "one does not simply walk into Mordor",
      "Lord of the Rings Boromir",
    ],
  },
  {
    id: "93895088",
    name: "Expanding Brain",
    alternate_names: [],
  },
  {
    id: "102156234",
    name: "Mocking Spongebob",
    alternate_names: [
      "spongebob mock",
      "spongebob chicken",
      "retarded spongebob",
      "sarcastic spongebob",
      "spongebob stupid",
      "spongebob derp",
      "spongebob bird",
      "spongebob mocking face",
    ],
  },
  {
    id: "4087833",
    name: "Waiting Skeleton",
    alternate_names: ["skeleton waiting on bench in the park"],
  },
  {
    id: "1035805",
    name: "Boardroom Meeting Suggestion",
    alternate_names: ["throw a guy out the boardroom window"],
  },
  {
    id: "101470",
    name: "Ancient Aliens",
    alternate_names: ["Giorgio Tsoukalos", "History Channel Guy"],
  },
  {
    id: "188390779",
    name: "Woman Yelling At Cat",
    alternate_names: [
      "Women yelling",
      "confused cat",
      "girl screaming at cat",
      "angry woman yelling at cat at dinner table",
      "lady screams at cat",
      "woman pointing at cat",
      "smudge the cat",
    ],
  },
  {
    id: "91538330",
    name: "X, X Everywhere",
    alternate_names: [
      "woody and buzz lightyear pointing",
      "toy story",
      "dicks everywhere",
      "toystory everywhere",
    ],
  },
  {
    id: "97984",
    name: "Disaster Girl",
    alternate_names: [],
  },
  {
    id: "247375501",
    name: "Buff Doge vs. Cheems",
    alternate_names: [
      "swole doge vs cheems",
      "strong doge weak doge",
      "big doge small doge",
      "then vs. now",
      "buff doge vs. crying cheems",
    ],
  },
  {
    id: "89370399",
    name: "Roll Safe Think About It",
    alternate_names: [
      "thinking black guy",
      "black guy pointing at his head",
      "can't blank if you don't blank",
      "smart black dude",
      "guy tapping head",
    ],
  },
  {
    id: "61520",
    name: "Futurama Fry",
    alternate_names: ["Not sure if X or Y", "Skeptical Fry"],
  },
  {
    id: "119139145",
    name: "Blank Nut Button",
    alternate_names: [
      "blank blue button",
      "smash button",
      "press button",
      "button slam",
    ],
  },
  {
    id: "131940431",
    name: "Gru's Plan",
    alternate_names: [
      "Grus evil plan",
      "Despicable Me diabolical plan",
      "Gru's diabolical plan",
      "gru 4 panel",
    ],
  },
  {
    id: "222403160",
    name: "Bernie I Am Once Again Asking For Your Support",
    alternate_names: [
      "bernie sanders commercial",
      "bernie sanders 2020 campaign",
      "asking for your financial support",
      "once again bernie",
    ],
  },
  {
    id: "155067746",
    name: "Surprised Pikachu",
    alternate_names: ["shocked pikachu"],
  },
  {
    id: "178591752",
    name: "Tuxedo Winnie The Pooh",
    alternate_names: [
      "winnie the poo",
      "winnie the pooh drake style",
      "classy pooh bear",
      "tuxedo pooh",
      "winnie the pooh elegant",
      "winnie pooh",
      "winnie the pooh tux",
      "fancy pooh",
    ],
  },
  {
    id: "114585149",
    name: "Inhaling Seagull",
    alternate_names: ["inhaling bird"],
  },
  {
    id: "5496396",
    name: "Leonardo Dicaprio Cheers",
    alternate_names: ["The Great Gatsby party with Jay Gatsby", "gatsby toast"],
  },
  {
    id: "123999232",
    name: "The Scroll Of Truth",
    alternate_names: ["I've finally found it... after 15 years", "nyehhh"],
  },
  {
    id: "61532",
    name: "The Most Interesting Man In The World",
    alternate_names: [
      "I dont always... but when I do",
      "Dos Equis Man",
      "I don't always",
    ],
  },
  {
    id: "27813981",
    name: "Hide the Pain Harold",
    alternate_names: ["sad life harold", "maurice"],
  },
  {
    id: "21735",
    name: "The Rock Driving",
    alternate_names: [],
  },
  {
    id: "100777631",
    name: "Is This A Pigeon",
    alternate_names: [
      "is this a pidgeon",
      "anime butterfly guy",
      "oblivious butterfly man anime",
      "is this a bird",
      "is this butterfly",
    ],
  },
  {
    id: "135256802",
    name: "Epic Handshake",
    alternate_names: [
      "arm wrestling",
      "holding hands",
      "grasping hands",
      "epic hand shake",
      "black white arms agreement",
    ],
  },
  {
    id: "226297822",
    name: "Panik Kalm Panik",
    alternate_names: ["panic calm panic", "meme man wurds"],
  },
  {
    id: "8072285",
    name: "Doge",
    alternate_names: ["Shiba Inu"],
  },
  {
    id: "124055727",
    name: "Y'all Got Any More Of That",
    alternate_names: [
      "Tyrone Biggums",
      "Dave Chappelle",
      "Chappelles Show",
      "yall got any more of that stuff",
      "powder lips neck scratch",
    ],
  },
  {
    id: "28251713",
    name: "Oprah You Get A",
    alternate_names: [
      "oprah giveaway",
      "oprah winfrey",
      "oprah you get a car",
      "everyone gets a car",
      "you get an oprah",
      "oprah excited",
    ],
  },
  {
    id: "148909805",
    name: "Monkey Puppet",
    alternate_names: [
      "monkey looking away",
      "monkey puppet avoids eye contact",
      "hiding in plain sight",
      "awkward look monkey",
    ],
  },
  {
    id: "61585",
    name: "Bad Luck Brian",
    alternate_names: [],
  },
  {
    id: "80707627",
    name: "Sad Pablo Escobar",
    alternate_names: [
      "pablo escobar waiting",
      "man waiting",
      "waiting man",
      "lonely man",
      "narcos waiting",
      "narcos bored",
      "narcos alone",
    ],
  },
  {
    id: "61539",
    name: "First World Problems",
    alternate_names: ["fwp", "woman crying"],
  },
  {
    id: "101288",
    name: "Third World Skeptical Kid",
    alternate_names: ["African skeptical child"],
  },
  {
    id: "134797956",
    name: "American Chopper Argument",
    alternate_names: [
      "orange county choppers fight",
      "american chopper hot take",
    ],
  },
  {
    id: "252600902",
    name: "Always Has Been",
    alternate_names: [
      "wait it's all just Ohio",
      "two astronauts betrayal",
      "astronaut gun",
      "astronaut lie",
      "astronaut discovers conspiracy theory",
      "always have been",
      "it always was",
    ],
  },
  {
    id: "161865971",
    name: "Marked Safe From",
    alternate_names: [
      "facebook marked safe",
      "marked safe flag",
      "marked safe today",
      "facebook safe from",
    ],
  },
  {
    id: "6235864",
    name: "Finding Neverland",
    alternate_names: ["Johnny Depp And Little Kid Crying"],
  },
  {
    id: "61556",
    name: "Grandma Finds The Internet",
    alternate_names: [],
  },
  {
    id: "175540452",
    name: "Unsettled Tom",
    alternate_names: [
      "tom face",
      "concerned tom",
      "tom and jerry",
      "disgusted tom",
      "surprised tom",
      "tom staring down",
    ],
  },
  {
    id: "180190441",
    name: "They're The Same Picture",
    alternate_names: [
      "it's the same picture",
      "corporate needs you to find the differences between this picture and this picture",
      "pam from the office",
      "office same picture",
      "spot the difference",
    ],
  },
  {
    id: "61527",
    name: "Y U No",
    alternate_names: [],
  },
  {
    id: "91545132",
    name: "Trump Bill Signing",
    alternate_names: ["executive order trump"],
  },
  {
    id: "84341851",
    name: "Evil Kermit",
    alternate_names: [
      "kermit me to me",
      "kermit inner me",
      "sith kermit",
      "kermit dark side",
    ],
  },
  {
    id: "563423",
    name: "That Would Be Great",
    alternate_names: ["Bill Lumbergh", "office space", "yea that'd be great"],
  },
  {
    id: "61546",
    name: "Brace Yourselves X is Coming",
    alternate_names: [
      "imminent ned from game of thrones",
      "brace yourselves winter is coming",
      "brace yourself",
    ],
  },
  {
    id: "110163934",
    name: "I Bet He's Thinking About Other Women",
    alternate_names: [
      "i bet he's thinking of other woman",
      "i bet he's thinking about other girls",
      "couple in bed",
      "i wonder what he's thinking",
      "guy thinking in bed",
    ],
  },
];

// Populate the dropdown once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("memeSelect");
  memeTemplates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.name;
    selectElement.appendChild(option);
  });
});

function generateMeme() {
  var templateID = document.getElementById("memeSelect").value;
  var text0 = document.getElementById("text0").value;
  var text1 = document.getElementById("text1").value;
  var apiURL = "https://api.imgflip.com/caption_image";

  var formData = new FormData();
  formData.append("template_id", templateID);
  formData.append("username", "kaylatushyy");
  formData.append("password", "kaylatushy123"); // Fill in your password
  formData.append("text0", text0);
  formData.append("text1", text1);

  fetch(apiURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        let message = "URL: " + data.data.url;
        let memeURL = document.getElementById("memeURL");
        memeURL.innerHTML = message;
        console.log(message);
        var img = document.getElementById("memeImage");
        img.src = data.data.url;
        img.style.display = "block";
      } else {
        alert("There was an error generating the meme.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  let element = document.querySelector("#messageArea");
  fetch("http://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {});
}
