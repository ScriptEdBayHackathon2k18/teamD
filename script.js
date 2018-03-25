var progress = 0;
var dialogue = [
  //stage1
  [
    "You are an astronaut on a space exploration, Artemis. This spaceship is heading for Gliese 667Cc, a rocky exoplanet, that may inhabit life. You have spent the last 25 years on this spaceship, along with eleven other people. When you arrive by this planet, people of the ship start to point out the moving objects of this planet, life.",
    "The people controlling this mission tell you to explore it. You and the group have three choices: ",
    [
      ["Retreat",1],
      ["Explore",2],
      ["Observe",3]
    ],
    [
    "http://www.stickpng.com/assets/images/580b585b2edbce24c47b2d2c.png",
    "http://www.hpcf.upr.edu/~abel/phl/SER_Gliese667Cc_With_Stars.jpg"
    ]
  ],
  //stage2
  //Retreat
  [
    "You and the people in the spaceship decided to go back to Earth without getting any data on the planet. The moment everyone gets back, the government prohibited space travel and everyone who dares defy the authority is killed.",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "http://www.naingoo88.co.uk/2006/images/astronaut.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_7KEcBBtD-5TmgvyiNm-XdVUM2dbJ_L0FGWJDXak10i36sOJ"
    ]
  ],
  //
  [
    "The people of the spaceship agree with you. They decide to dock the ship on a mountain of the planet. When you and your buddies get off the ship with data-sampling tools, they start collecting information. After taking enough information of the surrounding area, the group is told to explore a different area.",
    "The group sees two areas that stand out:",
    [
      ["A valley",4],
      ["A lower plateau",5],
      [-1,0]
    ],
    [
    "http://www.naingoo88.co.uk/2006/images/astronaut.png",
    "http://cdn.sci-news.com/images/2013/06/image_1174_2-gliese-667c.jpg"
    ]
  ],
  [
    "You and the people on the spaceship decide to observe and research the aliens. After researching the activities and behaviors of the aliens, you want to drink a soda.",
    "You make a decision:",
    [
      ["Ask a rookie to get you a soda",6],
      ["You get a soda for yourself",7],
      [-1,0]
    ],
    [
    "",
    ""
    ]
  ],
  //stage3
  //explore down heree
  [
    "The group packs up the many samples they have collected and start moving downwards. Along the way, you catch a glimpse of one of the creatures. This creature slowly approaches your group. It tries to speak to you in a foreign language.",
    "The Artemis team wants to back off, what do you do?:",
    [
      ["Confront the alien",8],
      ["Run away",9],
      [-1,0]
    ],
    [
    "http://www.naingoo88.co.uk/2006/images/astronaut.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gliese_667_Cc_sunset.jpg/1200px-Gliese_667_Cc_sunset.jpg"
    ]
  ],
  [
    "Your group decided to go inspect the lower plateau. In there you guys discovered some specimen that could cure cancer. All of you went back to the spaceship to study it further. Once you guys proved that it is indeed a cure for cancer, you went back to Earth and announce your discovery to the public. Your group were seen as heroes, and were given a lot of recognition. ",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "http://www.naingoo88.co.uk/2006/images/astronaut.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gliese_667_Cc_sunset.jpg/1200px-Gliese_667_Cc_sunset.jpg"
    ]
  ],
  //this is observe
  [
    "You decide the ask the rookie. He accidentally set off the flares of the spaceship alerting the life forms on the planet. You do not realize that it was that big of a deal until 20 minutes later, a projectile is flying towards your ship. You begin to panic. The projectile seems to be a missile flying towards you and you die from the explosion.",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "",
    ""
    ]
  ],
  [
    "You decide to get the soda yourself to prevent the risk of something going wrong. Your thirst has been quenched you begin to research some more and realize that life forms on the planet is contacting you. You begin to communicate with the life forms on the planet. They invite you to land on their planet but you are skeptical. You and your men are deciding what to do.",
    "You can choose:",
    [
      ["Decline their offer ",10],
      ["Accept their offer",11],
      [-1,0]
    ],
    [
    "",
    ""
    ]
  ],
  //stage4
  [
    "You tell the Artemis Exploration to stay and try to communicate with this creature. It takes a while but your decoder manages to decrypt the language of this creature. The creature is trying to take you to their leader, where they can get a proper introduction. You agree and follows this being. You are led to a modernized base similar to buildings back at home. The leader introduces himself, and he wants to help you out. ",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "",
    ""
    ]
  ],
  [
    "The alien pointed a weapon at you and your group. All of you were forced to go with the creature, and when you reached the destination in which you guys are led to, the aliens killed you. The people on Earth found out what happened to your group and they wage a war against the aliens. The aliens lose the battle because the humans had time to prepare and plan their attack. ",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "https://cdn.pixabay.com/photo/2017/08/30/16/09/astronaut-2697654_960_720.png",
    "http://cdn.sci-news.com/images/2013/06/image_1174_2-gliese-667c.jpg"
    ]
  ],
  //observer brachen
  [
    "You decline their offer and decided to just stay and research. The aliens become skeptical about your decision so they destroyed you with your ship without hesitation.",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "",
    ""
    ]
  ],
  [
    "You accepted their offer and go to their territory. You go to their base, their structures was much like the buildings at home. The leader introduces himself and shows you around the planet. As the first outside living organism to find this planet the leader asks you if you would like to have an alliance with their planet. This was not an alliance deal where you can simply decline. If you decline the leader promises you, that if you do not ally with them, they will destroy all humans.So you allied with them. You and the aliens are safe and do not have tension with one another. Both living beings lives.",
    -1,
    [
      ["choice1",0],
      ["choice2",0],
      ["choice3",0]
    ],
    [
    "http://www.naingoo88.co.uk/2006/images/astronaut.png",
    "http://cdn.sci-news.com/images/2013/06/image_1174_2-gliese-667c.jpg"
    ]
  ],
];
var isTypingDialogue = false;

function showDialogue(target, message, index, interval) {  
  isTypingDialogue = true;
    if (index === message.length) {
      isTypingDialogue = false;
    }
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showDialogue(target, message, index, interval); }, interval);
    }
};
var state;
function draw(state) {
  $(".dialogue").empty();
  $(".prompt").empty();
  $("#choice1").empty();
  $("#choice2").empty();
  $("#choice3").empty();
  showDialogue(".dialogue",dialogue[state][0],0,10);
  // $(".dialogue").text(dialogue[state][0]);
  var prompt = dialogue[state][1];
  var choice1 = dialogue[state][2][0][0];
  var choice2 = dialogue[state][2][1][0];
  var choice3 = dialogue[state][2][2][0];
  var direct1 = dialogue[state][2][0][1];
  var direct2 = dialogue[state][2][1][1];
  var direct3 = dialogue[state][2][2][1];
  if (prompt !== -1) {
    $("#choice3").hide();
    if (choice3 !== -1) {
      $("#choice3").show();
      $("#choice3").text(choice3);
      $("#choice3").click(function(){choice(direct3)});
    }
    $(".prompt").text(prompt);
    $("#choice1").text(choice1);
    $("#choice1").click(function(){choice(direct1)});
    $("#choice2").text(choice2);
    $("#choice2").click(function(){choice(direct2)});
  } else {
    $(".choice").empty();
    $(".choice").text("GAME OVER");
  }
  
  var newSubject = dialogue[state][3][1];
  var newBackground = dialogue[state][3][2];
  $("#subject").attr("src",newSubject);
  $(".visual").css("background-image","url("+newBackground+")");
};
function choice(direct) {
  var state = direct;
   if (isTypingDialogue === false){
    draw(state);
  }
}
draw(0);