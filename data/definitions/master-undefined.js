const fs = require("fs");

const masterWords = [
  // "censorious",
  // "chary",
  // "cherubic",
  // "chimerical",
  // "choleric",
  // "cognate",
  // "cognomen",
  // "consanguinity",
  // "continence",
  // "coquette",
  // "countenance",
  // "curmudgeon",
  // "debutante",
  // "deleterious",
  // "desiccate",
  // "diatribe",
  // "dilettante",
  // "disconsolate",
  // "discursive",
  // "distend",
  // "dotage",
  // "efface",
  // "elucidate",
  // "encomium",
  // "enjoin",
  // "entreat",
  // "exonerate",
  // "filch",
  // "filial",
  // "foible",
  // "fracas",
  // "frond",
  // "fulminate",
  // "gainsay",
  // "gossamer",
  // "harangue",
  // "hermetic",
  // "immure",
  // "impertinent",
  // "importune",
  // "incipient",
  // "inculcate",
  // "indigent",
  // "indomitable",
  // "ingratiate",
  // "inscrutable",
  // "inveigh",
  // "invidious",
  // "itinerant",
  // "lampoon",
  // "largess",
  // "libertine",
  // "lissom",
  // "malapropism",
  // "malefactor",
  // "malodorous",
  // "martinet",
  // "mercurial",
  // "missive",
  // "mollify",
  // "obloquy",
  // "obsequious",
  // "obsequy",
  // "opprobrious",
  // "ostentatious",
  // "overweening",
  // "paean",
  // "panoply",
  // "pathos",
  // "peccadillo",
  // "pedagogue",
  // "pellucid",
  // "perennial",
  // "perfidious",
  // "pillory",
  // "premeditate",
  // "prolix",
  // "promontory",
  // "propinquity",
  // "propitiate",
  // "proselytise",
  // "raconteur",
  // "rapacious",
  // "recidivism",
  // "recondite",
  // "requite",
  // "resplendent",
  // "retrench",
  // "ribald",
  // "scintilla",
  // "sententious",
  // "seraphic",
  // "solecism",
  // "soliloquy",
  // "stentorian",
  // "stricture",
  // "stultify",
  // "sublimate",
  // "stymie",
  // "tawdry",
  // "ancillary",
  // "authoritarian",
  // "bifurcated",
  // "centripetal",
  // "chauvinist",
  // "determinate",
  // "felicitous",
  // "heterogeneous",
  // "retroactive",
  // "theocracy",
  // "tryst",
  // "turbid",
  // "vacillate",
  // "vitiate",
  // "welter",
  // "amphibian",
  // "apothegm",
  // "asperity",
  // "augury",
  // "aver",
  // "beatific",
  // "benighted",
  // "burnish",
  // "cavalcade",
  // "celerity",
  // "cession",
  // "chattel",
  // "complaisant",
  // "descry",
  // "diffidence",
  // "discordant",
  // "dissimulate",
  // "distaff",
  // "doughty",
  // "effluvium",
  // "excoriate",
  // "exculpate",
  // "expatiate",
  // "fervid",
  // "gambol",
  // "hallow",
  // "impious",
  // "improvident",
  // "incarnadine",
  // "indenture",
  // "iridescent",
  // "jettison",
  // "jingoism",
  // "languor",
  // "lapidary",
  // "lionize",
  // "nuptial",
  // "objurgate",
  // "opalescent",
  // "orotund",
  // "pastiche",
  // "peculation",
  // "pediment",
  // "philology",
  // "penumbra",
  // "plangent",
  // "politic",
  // "potable",
  // "primordial",
  // "ramshackle",
  // "rectitude",
  // "refectory",
  // "remediable",
  // "rococo",
  // "roil",
  // "sinuous",
  // "sluggard",
  // "sophist",
  // "sophomoric",
  // "threnody",
  // "vaunted",
  // "vernal",
  // "abase",
  // "abeyance",
  // "abhor",


  "ablution",
  "abut",
  "acclivity",
  "accolade",
  "acquiesce",
  "acrimonious",
  "actuate",
  "adduce",
  "adjunct",
  "adulation",
  "acme",
  "aegis",
  "affray",
  "agape",
  "allay",
  "amortize",
  "appellation",
  "archetype",
  "aria",
  "badinage",
  "bagatelle",
  "beatitude",
  "besmirch",
  "bauble",
  "casuistry",
  "codicil",
  "cohere",
  "comport",
  "cordon",
  "cruet",
  "debonair",
  "depredation",
  "dialectic",
  "disputatious",
  "disquisition",
  "dissolute",
  "distrait",
  "doggerel",
  "educe",
  "effete",
  "emeritus",
  "extirpate",
  "factious",
  "febrile",
  "genuflect",
  "harridan",
  "hegira",
  "histrionic",
  "hortatory",
  "hoyden",
  "hummock",
  "ichthyology",
  "imponderable",
  "iniquitous",
  "insensate",
  "integument",
  "lambent",
  "lectern",
  "mellifluous",
  "menial",
  "mien",
  "miscegenation",
  "nugatory",
  "oblation",
  "odoriferous",
  "offertory",
  "palpitate",
  "pandemonium",
  "parapet",
  "paroxysm",
  "parvenu",
  "peculate",
  "perforce",
  "perigee",
  "peroration",
  "picaresque",
  "pied",
  "piquant",
  "polity",
  "portend",
  "primogeniture",
  "propellant",
  "proscenium",
  "prosody",
  "provender",
  "purblind",
  "purloin",
  "purview",
  "quail",
  "rankle",
  "recrimination",
  "refraction",
  "reparation",
  "repartee",
  "roseate",
  "rubicund",
  "salutary",
  "sanguinary",
  "satyr",
  "sarcophagus",
  "scuttle",
  "sebaceous",
  "sequacious",
  "sidereal",
  "smattering",
  "somatic",
  "succour",
  "suffuse",
  "suture",
  "tarn",
  "timbre",
  "tithe",
  "tocsin",
  "troglodyte",
  "uncouth",
  "undulate",
  "venturesome",
  "visage",
  "viscid",
  "votary",
  "abominate",
  "abrade",
  "acetic",
  "acidulous",
  "acquiescence",
  "acquittal",
  "addle",
  "adjuration",
  "adjure",
  "admonition",
  "agitation",
  "alimentary",
  "allusion",
  "alluvial",
  "amalgamate",
  "andirons",
  "antecede",
  "apogee",
  "appurtenances",
  "aquiline",
  "arrant",
  "asceticism",
  "athwart",
  "aureole",
  "barb",
  "bawdy",
  "bedizen",
  "bedraggle",
  "benignant",
  "braggadocio",
  "brocade",
  "buffoonery",
  "bugaboo",
  "bumptious",
  "canker",
  "canto",
  "caparison",
  "carillon",
  "carmine",
  "ciliated",
  "clangour",
  "clarion",
  "coadjutor",
  "cockade",
  "coeval",
  "collier",
  "comestible",
  "conclave",
  "condign",
  "connubial",
  "cormorant",
  "cornice",
  "cozen",
  "crabbed",
  "credo",
  "crepuscular",
  "dastard",
  "debenture",
  "decollete",
  "deducible",
  "deify",
  "delusive",
  "demoniacal",
  "depilate",
  "descant",
  "desideratum",
  "devolve",
  "dint",
  "disapprobation",
  "dishabille",
  "dissuasion",
  "efflorescent",
  "elusory",
  "elysian",
  "emendation",
  "empyreal",
  "encomiastic",
  "ascendancy",
  "ascribe",
  "astringent",
  "beleaguer",
  "castigate",
];

// const filterDuplicates = () => {
//   const filtered = masterWords.filter((w) => {
//     return !duplicates.includes(w);
//   });

//   const fileContent = filtered.join("\n");

//   fs.writeFile(`migrations/temp`, fileContent, function(err) {
//     if (err) throw err;
//     console.log("Success!");
//   });
// };

// filterDuplicates()


module.exports = { masterWords };
