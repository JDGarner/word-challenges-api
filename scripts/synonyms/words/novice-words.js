const noviceWords = [
  "breath",
  "damage",
  "detail",
  "company",
  "butter",
  "business",
  "comfort",
  "current",
  "memory",
  "reward",
  "pleasure",
  "destination",
  "approval",
  "discussion",
  "respect",
  "time",
  "expert",
  "danger",
  "winter",
  "bluff",
  "attention",
  "transport",
  "harbour",
  "religion",
  "silver",
  "distance",
  "error",
  "request",
  "cunning",
  "middle",
  "opinion",
  "profit",
  "waste",
  "debris",
  "credit",
  "regret",
  "banish",
  "purpose",
  "smash",
  "society",
  "narrate",
  "sociable",
  "tactic",
  "weather",
  "stamina",
  "ignite",
  "above",
  "age",
  "air",
  "always",
  "angry",
  "answer",
  "appear",
  "arm",
  "arrive",
  "attack",
  "autumn",
  "ball",
  "basket",
  "bean",
  "beautiful",
  "bedroom",
  "beer",
  "begin",
  "behind",
  "bell",
  "below",
  "best",
  "bird",
  "birth",
  "birthday",
  "black",
  "blow",
  "blue",
  "body",
  "border",
  "born",
  "borrow",
  "bottle",
  "bowl",
  "branch",
  "break",
  "breakfast",
  "breathe",
  "bright",
  "brush",
  "build",
  "burn",
  "busy",
  "buy",
  "candle",
  "car",
  "card",
  "careful",
  "careless",
  "carry",
  "cat",
  "catch",
  "central",
  "century",
  "chair",
  "chase",
  "chicken",
  "child",
  "chocolate",
  "class",
  "clean",
  "cloth",
  "clothes",
  "coat",
  "cold",
  "collect",
  "colour",
  "comb",
  "complete",
  "computer",
  "continue",
  "control",
  "cool",
  "copper",
  "corn",
  "correct",
  "cover",
  "cross",
  "cry",
  "cup",
  "cupboard",
  "cut",
  "question",
  "page",
  "pair",
  "paper",
  "partner",
  "party",
  "past",
  "path",
  "peace",
  "people",
  "pepper",
  "perfect",
  "petrol",
  "photograph",
  "picture",
  "pig",
  "plane",
  "plant",
  "plastic",
  "plate",
  "play",
  "pleased",
  "plenty",
  "pocket",
  "polite",
  "pool",
  "popular",
  "possible",
  "pour",
  "present",
  "prevent",
  "price",
  "private",
  "problem",
  "produce",
  "promise",
  "protect",
  "provide",
  "public",
  "pull",
  "punish",
  "pupil",
  "push",
  "object",
  "offer",
  "office",
  "often",
  "open",
  "opposite",
  "order",
  "outside",
  "neck",
  "never",
  "news",
  "newspaper",
  "nice",
  "noble",
  "noise",
  "none",
  "nose",
  "nothing",
  "male",
  "market",
  "meal",
  "mean",
  "measure",
  "meat",
  "medicine",
  "meet",
  "member",
  "milk",
  "million",
  "miss",
  "mistake",
  "modern",
  "moment",
  "money",
  "monkey",
  "month",
  "moon",
  "morning",
  "mother",
  "mountain",
  "mouth",
  "music",
  "radio",
  "restaurant",
  "record",
  "remember",
  "remind",
  "repair",
  "repeat",
  "reply",
  "report",
  "rice",
  "rich",
  "ring",
  "road",
  "rock",
  "rubber",
  "rude",
  "rush",
  "sad",
  "safe",
  "sail",
  "salt",
  "sand",
  "scissors",
  "search",
  "seat",
  "second",
  "sell",
  "sentence",
  "shade",
  "shadow",
  "shake",
  "sharp",
  "shine",
  "shirt",
  "shoe",
  "shoot",
  "shop",
  "short",
  "shoulder",
  "shout",
  "signal",
  "silence",
  "silly",
  "sing",
  "sink",
  "sister",
  "skin",
  "skirt",
  "sleep",
  "slow",
  "small",
  "smell",
  "smile",
  "smoke",
  "snow",
  "soap",
  "sock",
  "soft",
  "sorry",
  "soup",
  "space",
  "speak",
  "special",
  "speed",
  "spoon",
  "sport",
  "spread",
  "spring",
  "stamp",
  "star",
  "start",
  "station",
  "stay",
  "steal",
  "steam",
  "stomach",
  "stone",
  "storm",
  "strange",
  "street",
  "strong",
  "structure",
  "student",
  "study",
  "stupid",
  "subject",
  "substance",
  "sudden",
  "sugar",
  "surprise",
  "sweet",
  "swim",
  "sword",
  "table",
  "talk",
  "tall",
  "taste",
  "teach",
  "telephone",
  "tennis",
  "terrible",
  "thick",
  "thin",
  "threat",
  "tidy",
  "today",
  "together",
  "tomorrow",
  "tonight",
  "tool",
  "tooth",
  "touch",
  "town",
  "train",
  "tram",
  "travel",
  "trouble",
  "trust",
  "ugly",
  "uncle",
  "under",
  "useful",
  "vegetable",
  "voice",
  "warm",
  "watch",
  "wedding",
  "week",
  "weight",
  "welcome",
  "white",
  "wife",
  "wind",
  "window",
  "wine",
  "wise",
  "wonder",
  "worry",
  "yard",
  "yell",
  "young",
  "zero",
  "zoo",
  "dangerous",
  "decide",
  "decrease",
  "deep",
  "deer",
  "difficult",
  "direction",
  "dirty",
  "discover",
  "dish",
  "dream",
  "dress",
  "drink",
  "drive",
  "duck",
  "dust",
  "duty",
  "education",
  "egg",
  "electric",
  "elephant",
  "enemy",
  "enjoy",
  "enter",
  "entrance",
  "escape",
  "event",
  "exact",
  "examination",
  "excited",
  "exercise",
  "expensive",
  "explain",
  "extremely",
  "eye",
  "father",
  "fast",
  "fault",
  "fear",
  "feed",
  "fever",
  "find",
  "float",
  "floor",
  "flour",
  "fool",
  "foot",
  "football",
  "force",
  "foreign",
  "forest",
  "forget",
  "forgive",
  "fork",
  "four",
  "freedom",
  "freeze",
  "fresh",
  "friend",
  "fruit",
  "furniture",
  "future",
  "general",
  "goat",
  "gold",
  "goodbye",
  "grandfather",
  "grandmother",
  "grave",
  "ground",
  "gun",
  "hall",
  "happy",
  "hard",
  "hat",
  "hate",
  "healthy",
  "heavy",
  "height",
  "help",
  "high",
  "hill",
  "hobby",
  "hole",
  "holiday",
  "hospital",
  "hot",
  "house",
  "hundred",
  "hungry",
  "hour",
  "hurry",
  "husband",
  "hurt",
  "ice",
  "idea",
  "important",
  "increase",
  "introduce",
  "invent",
  "iron",
  "invite",
  "island",
  "job",
  "kill",
  "kind",
  "knee",
  "lady",
  "lamp",
  "land",
  "large",
  "last",
  "laugh",
  "lead",
  "lend",
  "length",
  "letter",
  "life",
  "light",
  "lion",
  "lip",
  "list",
  "listen",
  "lock",
  "lonely",
  "baby",
  "able",
  "bake",
  "bank",
  "cage",
  "cake",
  "calm",
  "camp",
  "camera",
  "cancel",
  "candy",
  "dawn",
  "dead",
  "deaf",
  "deal",
  "dear",
  "death",
  "damp",
  "dance",
  "dare",
  "dark",
  "data",
  "date",
  "early",
  "earn",
  "earth",
  "easy",
  "edge",
  "edit",
  "face",
  "fact",
  "fail",
  "fair",
  "faint",
  "faith",
  "fake",
  "fall",
  "false",
  "fame",
  "family",
  "famous",
  "fancy",
  "gain",
  "game",
  "garden",
  "gate",
  "gene",
  "giant",
  "hand",
  "habit",
  "half",
  "hair",
  "harsh",
  "jail",
  "jelly",
  "jewel",
  "joint",
  "joke",
  "juice",
  "jumbo",
  "jump",
  "judge",
  "kick",
  "kneel",
  "king",
  "knife",
  "knock",
  "knit",
  "lake",
  "ladder",
  "late",
  "magic",
  "mail",
  "major",
  "neat",
  "nation",
  "native",
  "oath",
  "obey",
  "ocean",
  "pace",
  "pain",
  "paint",
  "painter",
  "pale",
  "panic",
  "parent",
  "park",
  "queen",
  "quick",
  "quiet",
  "quiz",
  "quit",
  "quote",
  "rage",
  "rain",
  "raise",
  "rank",
  "rapid",
  "rare",
  "tank",
  "teacher",
  "taxi",
  "umbrella",
  "undo",
  "valley",
  "village",
  "wage",
  "wait",
  "waiter",
  "wallet",
  "water",
  "yawn",
  "yesterday",
  "adult",
  "alive",
  "airplane",
  "airport",
  "alarm",
  "anger",
  "alone",
  "animal",
  "ankle",
  "annoy",
  "apple",
  "arch",
  "arena",
  "argue",
  "army",
  "arrow",
  "artist",
  "asleep",
  "aunt",
  "author",
  "bark",
  "barn",
  "barber",
  "bath",
  "beach",
  "beak",
  "beard",
  "bear",
  "belt",
  "beef",
  "bite",
  "blind",
  "blood",
  "bleed",
  "boat",
  "boil",
  "bold",
  "bomb",
  "bone",
  "bonus",
  "book",
  "bossy",
  "brave",
  "bread",
  "bridge",
  "bride",
  "brother",
  "builder",
  "carpet",
  "carrot",
  "cash",
  "castle",
  "cave",
  "chat",
  "cheap",
  "cheat",
  "cheese",
  "chef",
  "chew",
  "chief",
  "chest",
  "cheek",
  "chin",
  "circle",
  "city",
  "clap",
  "clay",
  "clever",
  "cliff",
  "climb",
  "clock",
  "cloud",
  "coal",
  "coffee",
  "coin",
  "coast",
  "cook",
  "cookie",
  "copy",
  "core",
  "cough",
  "country",
  "couple",
  "crazy",
  "crash",
  "create",
  "crew",
  "criminal",
  "debt",
  "defeat",
  "defend",
  "dentist",
  "deny",
  "desk",
  "destroy",
  "diet",
  "diary",
  "dirt",
  "dinner",
  "dislike",
  "dizzy",
  "doctor",
  "dollar",
  "door",
  "double",
  "elbow",
  "empty",
  "essay",
  "evening",
  "evil",
  "exam",
  "farm",
  "farmer",
  "fence",
  "fight",
  "fish",
  "fire",
  "finger",
  "first",
  "flame",
  "flash",
  "flood",
  "free",
  "funny",
  "gift",
  "glad",
  "glue",
  "glow",
  "glove",
  "grass",
  "green",
  "greet",
  "grow",
  "guess",
  "guest",
  "heal",
  "heat",
  "health",
  "hear",
  "heart",
  "heat",
  "heel",
  "hell",
  "heaven",
  "hello",
  "hide",
  "hint",
  "hire",
  "home",
  "hope",
  "horse",
  "horn",
  "holy",
  "hose",
  "hotel",
  "hourly",
  "huge",
  "inch",
  "insect",
  "lazy",
  "leak",
  "learn",
  "lemon",
  "lesson",
  "library",
  "little",
  "limit",
  "liquid",
  "loan",
  "love",
  "lord",
  "luck",
  "lucky",
  "master",
  "marry",
  "marriage",
  "metal",
  "melt",
  "mild",
  "minute",
  "mile",
  "mouse",
  "movie",
  "night",
  "nest",
  "noon",
  "orange",
  "phone",
  "pilot",
  "pink",
  "pity",
  "poem",
  "police",
  "poison",
  "pond",
  "poor",
  "port",
  "potato",
  "power",
  "prince",
  "princess",
  "pretty",
  "prison",
  "prize",
  "reading",
  "rent",
  "remove",
  "rhyme",
  "weak",
  "wheel",
  "wild",
  "windy",
  "wish",
  "wolf",
  "world",
  "wound",
  "vomit",
  "upset",
  "thief",
  "thumb",
  "tree",
  "trash",
  "school",
  "seal",
  "seek",
  "sheep",
  "ship",
  "shin",
  "shy",
  "sick",
  "silk",
  "simple",
  "smart",
  "soil",
  "soldier",
  "speech",
  "sour",
  "square",
  "spill",
  "stress",
  "summer",
  "sunny",
  "piano",
  "science",
  "flower",
];

module.exports = { noviceWords };