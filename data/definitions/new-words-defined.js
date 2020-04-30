const journeymanWords = [
  { word: "arid", definition: "lacking sufficient water or rainfall", difficulty: "journeyman", eloRating: 1300 },
  { word: "acknowledgment", definition: "the state or quality of being recognized", difficulty: "journeyman", eloRating: 1300 },
  { word: "adequate", definition: "having the requisite qualities or resources to meet a task", difficulty: "journeyman", eloRating: 1300 },
  { word: "applause", definition: "a demonstration of approval by clapping the hands together", difficulty: "journeyman", eloRating: 1300 },
  { word: "assessment", definition: "the act of judging a person or situation or event", difficulty: "journeyman", eloRating: 1300 },
  { word: "available", definition: "obtainable or accessible and ready for use or service", difficulty: "journeyman", eloRating: 1300 },
  { word: "basin", definition: "a bowl-shaped vessel used for holding food or liquids", difficulty: "journeyman", eloRating: 1300 },
  { word: "bias", definition: "a partiality preventing objective consideration of an issue", difficulty: "journeyman", eloRating: 1300 },
  { word: "classic", definition: "of recognized authority or excellence", difficulty: "journeyman", eloRating: 1300 },
  { word: "cognitive", definition: "relating to or involving the mental process of knowing", difficulty: "journeyman", eloRating: 1300 },
  { word: "combat", definition: "the act of fighting; any contest or struggle", difficulty: "journeyman", eloRating: 1300 },
  { word: "concept", definition: "an abstract or general idea inferred from specific instances", difficulty: "journeyman", eloRating: 1300 },
  { word: "constrain", definition: "hold back", difficulty: "journeyman", eloRating: 1300 },
  { word: "context", definition: "the set of facts or circumstances that surround a situation", difficulty: "journeyman", eloRating: 1300 },
  { word: "controversy", definition: "a dispute where there is strong disagreement", difficulty: "journeyman", eloRating: 1300 },
  { word: "covert", definition: "secret or hidden", difficulty: "journeyman", eloRating: 1300 },
  { word: "diversity", definition: "noticeable variety", difficulty: "journeyman", eloRating: 1300 },
  { word: "dominant", definition: "most frequent or common", difficulty: "journeyman", eloRating: 1300 },
  { word: "effective", definition: "producing or capable of producing an intended result", difficulty: "journeyman", eloRating: 1300 },
  { word: "efficient", definition: "being effective without wasting time, effort, or expense", difficulty: "journeyman", eloRating: 1300 },
  { word: "eloquent", definition: "expressing yourself readily, clearly, effectively", difficulty: "journeyman", eloRating: 1300 },
  { word: "emission", definition: "the act of causing to flow forth", difficulty: "journeyman", eloRating: 1300 },
  { word: "encompass", definition: "include in scope", difficulty: "journeyman", eloRating: 1300 },
  { word: "endow", definition: "give qualities or abilities to", difficulty: "journeyman", eloRating: 1300 },
  { word: "enhancement", definition: "an improvement that makes something more agreeable", difficulty: "journeyman", eloRating: 1300 },
  { word: "enormous", definition: "extraordinarily large in size or extent or degree", difficulty: "journeyman", eloRating: 1300 },
  { word: "environment", definition: "the totality of surrounding conditions", difficulty: "journeyman", eloRating: 1300 },
  { word: "ethnic", definition: "distinctive of the ways of living of a group of people", difficulty: "journeyman", eloRating: 1300 },
  { word: "eventually", definition: "after an unspecified period of time or a long delay", difficulty: "journeyman", eloRating: 1300 },
  { word: "evident", definition: "clearly revealed to the mind or the senses or judgment", difficulty: "journeyman", eloRating: 1300 },
  { word: "expanse", definition: "a wide and open space or area as of surface or land or sky", difficulty: "journeyman", eloRating: 1300 },
  { word: "export", definition: "sell or transfer abroad", difficulty: "journeyman", eloRating: 1300 },
  { word: "finance", definition: "the commercial activity of providing funds and capital", difficulty: "journeyman", eloRating: 1300 },
  { word: "framework", definition: "the underlying structure", difficulty: "journeyman", eloRating: 1300 },
  { word: "habitat", definition: "the type of environment in which an organism normally lives", difficulty: "journeyman", eloRating: 1300 },
  { word: "harass", definition: "annoy continually or chronically", difficulty: "journeyman", eloRating: 1300 },
  { word: "harassment", definition: "the act of tormenting by persistent attacks and criticism", difficulty: "journeyman", eloRating: 1300 },
  { word: "hybrid", definition: "a composite of mixed origin", difficulty: "journeyman", eloRating: 1300 },
  { word: "immerse", definition: "cause to be submerged", difficulty: "journeyman", eloRating: 1300 },
  { word: "immigrant", definition: "a person who comes to a country in order to settle there", difficulty: "journeyman", eloRating: 1300 },
  { word: "incident", definition: "a single distinct event", difficulty: "journeyman", eloRating: 1300 },
  { word: "income", definition: "the financial gain accruing over a given period of time", difficulty: "journeyman", eloRating: 1300 },
  { word: "integrate", definition: "make into a whole or make part of a whole", difficulty: "journeyman", eloRating: 1300 },
  { word: "laud", definition: "praise, glorify, or honor", difficulty: "journeyman", eloRating: 1300 },
  { word: "legislate", definition: "make laws or bills", difficulty: "journeyman", eloRating: 1300 },
  { word: "mayhem", definition: "violent and needless disturbance", difficulty: "journeyman", eloRating: 1300 },
  { word: "motivate", definition: "give an incentive for action", difficulty: "journeyman", eloRating: 1300 },
  { word: "muster", definition: "gather or bring together", difficulty: "journeyman", eloRating: 1300 },
  { word: "outwit", definition: "beat through cleverness", difficulty: "journeyman", eloRating: 1300 },
  { word: "percent", definition: "a proportion in relation to a whole", difficulty: "journeyman", eloRating: 1300 },
  { word: "plummet", definition: "to drop sharply", difficulty: "journeyman", eloRating: 1300 },
  { word: "predict", definition: "to tell in advance", difficulty: "journeyman", eloRating: 1300 },
  { word: "reliance", definition: "the state of depending on something", difficulty: "journeyman", eloRating: 1300 },
  { word: "reliant", definition: "depending on another for support", difficulty: "journeyman", eloRating: 1300 },
  { word: "saga", definition: "a narrative telling the adventures of a hero or a family", difficulty: "journeyman", eloRating: 1300 },
  { word: "scold", definition: "censure severely or angrily", difficulty: "journeyman", eloRating: 1300 },
  { word: "seasoned", definition: "aged or processed", difficulty: "journeyman", eloRating: 1300 },
  { word: "sector", definition: "a particular aspect of life or activity", difficulty: "journeyman", eloRating: 1300 },
  { word: "segment", definition: "one of several parts that fit with others to make a whole", difficulty: "journeyman", eloRating: 1300 },
  { word: "spatial", definition: "pertaining to the expanse in which things are located", difficulty: "journeyman", eloRating: 1300 },
  { word: "spur", definition: "a prod on a rider's heel used to urge a horse onward", difficulty: "journeyman", eloRating: 1300 },
  { word: "stagnant", definition: "not growing or changing; without force or vitality", difficulty: "journeyman", eloRating: 1300 },
  { word: "strategy", definition: "an elaborate and systematic plan of action", difficulty: "journeyman", eloRating: 1300 },
  { word: "sustainable", definition: "capable of being prolonged", difficulty: "journeyman", eloRating: 1300 },
  { word: "swamp", definition: "low land that is seasonally flooded", difficulty: "journeyman", eloRating: 1300 },
  { word: "thesis", definition: "an unproved statement advanced as a premise in an argument", difficulty: "journeyman", eloRating: 1300 },
  { word: "threshold", definition: "the starting point for a new state or experience", difficulty: "journeyman", eloRating: 1300 },
  { word: "tradition", definition: "a specific practice of long standing", difficulty: "journeyman", eloRating: 1300 },
  { word: "transformation", definition: "the act of changing in form or shape or appearance", difficulty: "journeyman", eloRating: 1300 },
  { word: "trivia", definition: "something of small importance", difficulty: "journeyman", eloRating: 1300 },
  { word: "verdict", definition: "findings of a jury on issues submitted to it for decision", difficulty: "journeyman", eloRating: 1300 },
  { word: "vulnerable", definition: "capable of being wounded or hurt", difficulty: "journeyman", eloRating: 1300 },
  { word: "widespread", definition: "widely circulated or diffused", difficulty: "journeyman", eloRating: 1300 },
  { word: "yearn", definition: "desire strongly or persistently", difficulty: "journeyman", eloRating: 1300 },
]

const expertWords = [
  { word: "participation", definition: "the act of sharing in the activities of a group", difficulty: "expert", eloRating: 1900 },
  { word: "facilitate", definition: "make easier", difficulty: "expert", eloRating: 1900 },
  { word: "indict", definition: "accuse formally of a crime", difficulty: "expert", eloRating: 1900 },
  { word: "infrastructure", definition: "the basic features of a system or organization", difficulty: "expert", eloRating: 1900 },
  { word: "livelihood", definition: "the financial means whereby one supports oneself", difficulty: "expert", eloRating: 1900 },
  { word: "abash", definition: "cause to be embarrassed", difficulty: "expert", eloRating: 1900 },
  { word: "abate", definition: "become less in amount or intensity", difficulty: "expert", eloRating: 1900 },
  { word: "abdicate", definition: "give up, such as power, as of monarchs and emperors", difficulty: "expert", eloRating: 1900 },
  { word: "abstain", definition: "refrain from doing, consuming, or partaking in something", difficulty: "expert", eloRating: 1900 },
  { word: "abstruse", definition: "difficult to understand", difficulty: "expert", eloRating: 1900 },
  { word: "adjudicate", definition: "hear a case and sit as the judge at the trial of", difficulty: "expert", eloRating: 1900 },
  { word: "adversity", definition: "a state of misfortune or affliction", difficulty: "expert", eloRating: 1900 },
  { word: "amicable", definition: "characterized by friendship and good will", difficulty: "expert", eloRating: 1900 },
  { word: "analogous", definition: "similar or equivalent in some respects", difficulty: "expert", eloRating: 1900 },
  { word: "annul", definition: "cancel officially", difficulty: "expert", eloRating: 1900 },
  { word: "apprehension", definition: "fearful expectation or anticipation", difficulty: "expert", eloRating: 1900 },
  { word: "aquatic", definition: "operating or living or growing in water", difficulty: "expert", eloRating: 1900 },
  { word: "arbitrary", definition: "based on or subject to individual discretion or preference", difficulty: "expert", eloRating: 1900 },
  { word: "aristocracy", definition: "a privileged class holding hereditary titles", difficulty: "expert", eloRating: 1900 },
  { word: "articulation", definition: "the manner in which things come together and are connected", difficulty: "expert", eloRating: 1900 },
  { word: "aspiration", definition: "a cherished desire", difficulty: "expert", eloRating: 1900 },
  { word: "assimilate", definition: "make alike", difficulty: "expert", eloRating: 1900 },
  { word: "asylum", definition: "a shelter from danger or hardship", difficulty: "expert", eloRating: 1900 },
  { word: "avert", definition: "turn away or aside", difficulty: "expert", eloRating: 1900 },
  { word: "bemoan", definition: "regret strongly", difficulty: "expert", eloRating: 1900 },
  { word: "bewildered", definition: "perplexed by many conflicting situations or statements", difficulty: "expert", eloRating: 1900 },
  { word: "boisterous", definition: "full of rough and exuberant animal spirits", difficulty: "expert", eloRating: 1900 },
  { word: "brazen", definition: "unrestrained by convention or propriety", difficulty: "expert", eloRating: 1900 },
  { word: "brusque", definition: "rudely abrupt or blunt in speech or manner", difficulty: "expert", eloRating: 1900 },
  { word: "canny", definition: "showing self-interest and shrewdness in dealing with others", difficulty: "expert", eloRating: 1900 },
  { word: "capability", definition: "the quality of being able to do something", difficulty: "expert", eloRating: 1900 },
  { word: "capitulate", definition: "surrender under agreed conditions", difficulty: "expert", eloRating: 1900 },
  { word: "caveat", definition: "a warning against certain acts", difficulty: "expert", eloRating: 1900 },
  { word: "chaff", definition: "material consisting of seed coverings and pieces of stem", difficulty: "expert", eloRating: 1900 },
  { word: "chronic", definition: "long-lasting or characterized by long suffering", difficulty: "expert", eloRating: 1900 },
  { word: "circumvent", definition: "surround so as to force to give up", difficulty: "expert", eloRating: 1900 },
  { word: "coherence", definition: "the state of sticking together", difficulty: "expert", eloRating: 1900 },
  { word: "collaborate", definition: "work together on a common enterprise or project", difficulty: "expert", eloRating: 1900 },
  { word: "commemorate", definition: "call to remembrance", difficulty: "expert", eloRating: 1900 },
  { word: "commission", definition: "the act of granting authority to undertake certain functions", difficulty: "expert", eloRating: 1900 },
  { word: "comply", definition: "act in accordance with someone's rules, commands, or wishes", difficulty: "expert", eloRating: 1900 },
  { word: "condescending", definition: "characteristic of those who treat others with arrogance", difficulty: "expert", eloRating: 1900 },
  { word: "conjunction", definition: "the state of being joined together", difficulty: "expert", eloRating: 1900 },
  { word: "conspicuous", definition: "obvious to the eye or mind", difficulty: "expert", eloRating: 1900 },
  { word: "corollary", definition: "an inference following from the proof of another proposition", difficulty: "expert", eloRating: 1900 },
  { word: "corrugated", definition: "shaped into alternating parallel grooves and ridges", difficulty: "expert", eloRating: 1900 },
  { word: "decipher", definition: "convert code into ordinary language", difficulty: "expert", eloRating: 1900 },
  { word: "defunct", definition: "no longer in force or use; inactive", difficulty: "expert", eloRating: 1900 },
  { word: "delineate", definition: "represented accurately or precisely", difficulty: "expert", eloRating: 1900 },
  { word: "efficacy", definition: "capacity or power to produce a desired result", difficulty: "expert", eloRating: 1900 },
  { word: "elliptical", definition: "rounded like an egg", difficulty: "expert", eloRating: 1900 },
  { word: "embellish", definition: "make more attractive, as by adding ornament or color", difficulty: "expert", eloRating: 1900 },
  { word: "explicit", definition: "precisely and clearly expressed or readily observable", difficulty: "expert", eloRating: 1900 },
  { word: "extravagant", definition: "recklessly wasteful", difficulty: "expert", eloRating: 1900 },
  { word: "fiduciary", definition: "relating to or of the nature of a legal trust", difficulty: "expert", eloRating: 1900 },
  { word: "frugality", definition: "prudence in avoiding waste", difficulty: "expert", eloRating: 1900 },
  { word: "hereditary", definition: "occurring among people descended from a common ancestor", difficulty: "expert", eloRating: 1900 },
  { word: "heritage", definition: "that which is inherited", difficulty: "expert", eloRating: 1900 },
  { word: "illegitimate", definition: "contrary to or forbidden by law", difficulty: "expert", eloRating: 1900 },
  { word: "imperative", definition: "requiring attention or action", difficulty: "expert", eloRating: 1900 },
  { word: "implicit", definition: "suggested though not directly expressed", difficulty: "expert", eloRating: 1900 },
  { word: "improbable", definition: "having a chance of occurring too low to inspire belief", difficulty: "expert", eloRating: 1900 },
  { word: "indigenous", definition: "originating where it is found", difficulty: "expert", eloRating: 1900 },
  { word: "inimical", definition: "not friendly", difficulty: "expert", eloRating: 1900 },
  { word: "innovative", definition: "being like nothing done or experienced or created before", difficulty: "expert", eloRating: 1900 },
  { word: "jurisdiction", definition: "the territory within which power can be exercised", difficulty: "expert", eloRating: 1900 },
  { word: "kaleidoscope", definition: "an optical toy in a tube", difficulty: "expert", eloRating: 1900 },
  { word: "laudatory", definition: "full of or giving praise", difficulty: "expert", eloRating: 1900 },
  { word: "mandate", definition: "a document giving an official instruction or command", difficulty: "expert", eloRating: 1900 },
  { word: "methodology", definition: "the techniques followed in a particular discipline", difficulty: "expert", eloRating: 1900 },
  { word: "migratory", definition: "(of animals) moving seasonally", difficulty: "expert", eloRating: 1900 },
  { word: "nonetheless", definition: "despite anything to the contrary", difficulty: "expert", eloRating: 1900 },
  { word: "notorious", definition: "known widely and usually unfavorably", difficulty: "expert", eloRating: 1900 },
  { word: "obliterate", definition: "remove completely from recognition or memory", difficulty: "expert", eloRating: 1900 },
  { word: "omnipotent", definition: "having unlimited power", difficulty: "expert", eloRating: 1900 },
  { word: "pandemic", definition: "existing everywhere", difficulty: "expert", eloRating: 1900 },
  { word: "paradigm", definition: "a standard or typical example", difficulty: "expert", eloRating: 1900 },
  { word: "pecuniary", definition: "relating to or involving money", difficulty: "expert", eloRating: 1900 },
  { word: "perceive", definition: "become aware of through the senses", difficulty: "expert", eloRating: 1900 },
  { word: "perception", definition: "the process of becoming aware through the senses", difficulty: "expert", eloRating: 1900 },
  { word: "perpetual", definition: "continuing forever or indefinitely", difficulty: "expert", eloRating: 1900 },
  { word: "phenomenon", definition: "any state or process known through the senses", difficulty: "expert", eloRating: 1900 },
  { word: "pledge", definition: "a binding commitment to do or give or refrain from something", difficulty: "expert", eloRating: 1900 },
  { word: "plight", definition: "a situation from which extrication is difficult", difficulty: "expert", eloRating: 1900 },
  { word: "poise", definition: "to hold or carry in equilibrium", difficulty: "expert", eloRating: 1900 },
  { word: "precipice", definition: "a very steep cliff", difficulty: "expert", eloRating: 1900 },
  { word: "premise", definition: "a statement that is held to be true", difficulty: "expert", eloRating: 1900 },
  { word: "prestige", definition: "a high standing achieved through success or influence", difficulty: "expert", eloRating: 1900 },
  { word: "quench", definition: "satisfy, as thirst", difficulty: "expert", eloRating: 1900 },
  { word: "reciprocal", definition: "concerning each of two or more persons or things", difficulty: "expert", eloRating: 1900 },
  { word: "trajectory", definition: "the path followed by an object moving through space", difficulty: "expert", eloRating: 1900 },
  { word: "swindler", definition: "a person who steals by means of deception or fraud", difficulty: "expert", eloRating: 1900 },
  { word: "transition", definition: "the act of passing from one state or place to the next", difficulty: "expert", eloRating: 1900 },
  { word: "rupture", definition: "the act of making a sudden noisy break", difficulty: "expert", eloRating: 1900 },
  { word: "rehabilitation", definition: "treatment of physical disabilities by massage and exercises", difficulty: "expert", eloRating: 1900 },
  { word: "vicinity", definition: "a surrounding or nearby region", difficulty: "expert", eloRating: 1900 },
  { word: "wrought", definition: "shaped to fit by altering the contours of a pliable mass", difficulty: "expert", eloRating: 1900 },
  { word: "xenophobia", definition: "a fear of foreigners or strangers", difficulty: "expert", eloRating: 1900 },
];

const masterWords = [
  { word: "aberration", definition: "a state or condition markedly different from the norm", difficulty: "master", eloRating: 2900 },
  { word: "boondoggle", definition: "work of little or no value done merely to look busy", difficulty: "master", eloRating: 2900 },
  { word: "clairvoyant", definition: "someone who can perceive things not present to the senses", difficulty: "master", eloRating: 2900 },
  { word: "inalienable", definition: "incapable of being repudiated or transferred to another", difficulty: "master", eloRating: 2900 },
  { word: "intransigence", definition: "stubborn refusal to compromise or change", difficulty: "master", eloRating: 2900 },
  { word: "jurisprudence", definition: "the branch of philosophy concerned with the law", difficulty: "master", eloRating: 2900 },
  { word: "engender", definition: "to call forth", difficulty: "master", eloRating: 2900 },
  { word: "malediction", definition: "the act of calling down a curse that invokes evil", difficulty: "master", eloRating: 2900 },
  { word: "stipulate", definition: "make an express demand or provision in an agreement", difficulty: "master", eloRating: 2900 },
  { word: "untenable", definition: "incapable of being defended or justified", difficulty: "master", eloRating: 2900 },
  { word: "unequivocal", definition: "admitting of no doubt or misunderstanding", difficulty: "master", eloRating: 2900 },
  { word: "yeoman", definition: "a free man who cultivates his own land", difficulty: "master", eloRating: 2900 },
];

module.exports = {
  journeymanWords,
  expertWords,
  masterWords
};