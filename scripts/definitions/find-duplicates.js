const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

const wordsToCheck = [
  { word: "calumny" },
  { word: "canard" },
  { word: "capricious" },
  { word: "censorious" },
  { word: "chary" },
  { word: "cherubic" },
  { word: "chicanery" },
  { word: "chimerical" },
  { word: "choleric" },
  { word: "circumlocution" },
  { word: "cognate" },
  { word: "cognomen" },
  { word: "compunction" },
  { word: "conflagration" },
  { word: "consanguinity" },
  { word: "continence" },
  { word: "contusion" },
  { word: "coquette" },
  { word: "countenance" },
  { word: "curmudgeon" },
  { word: "debutante" },
  { word: "deleterious" },
  { word: "desiccate" },
  { word: "diatribe" },
  { word: "dilettante" },
  { word: "disconsolate" },
  { word: "discursive" },
  { word: "distend" },
  { word: "dotage" },
  { word: "efface" },
  { word: "elucidate" },
  { word: "encomium" },
  { word: "enervate" },
  { word: "enjoin" },
  { word: "entreat" },
  { word: "evanescent" },
  { word: "evince" },
  { word: "execrable" },
  { word: "exhort" },
  { word: "exonerate" },
  { word: "expiate" },
  { word: "fastidious" },
  { word: "expunge" },
  { word: "filch" },
  { word: "filial" },
  { word: "foible" },
  { word: "fracas" },
  { word: "frond" },
  { word: "fulminate" },
  { word: "gainsay" },
  { word: "garrulous" },
  { word: "gossamer" },
  { word: "harangue" },
  { word: "hermetic" },
  { word: "immure" },
  { word: "impecunious" },
  { word: "impertinent" },
  { word: "importune" },
  { word: "inchoate" },
  { word: "incipient" },
  { word: "inculcate" },
  { word: "indigent" },
  { word: "indomitable" },
  { word: "ingratiate" },
  { word: "inscrutable" },
  { word: "internecine" },
  { word: "invective" },
  { word: "inveigh" },
  { word: "inveterate" },
  { word: "invidious" },
  { word: "itinerant" },
  { word: "lampoon" },
  { word: "largess" },
  { word: "libertine" },
  { word: "licentious" },
  { word: "lissom" },
  { word: "lugubrious" },
  { word: "malapropism" },
  { word: "malefactor" },
  { word: "malodorous" },
  { word: "martinet" },
  { word: "maudlin" },
  { word: "mawkish" },
  { word: "mercurial" },
  { word: "multifarious" },
  { word: "missive" },
  { word: "mollify" },
  { word: "obloquy" },
  { word: "obsequious" },
  { word: "obsequy" },
  { word: "obstreperous" },
  { word: "opprobrious" },
  { word: "ostentatious" },
  { word: "overweening" },
  { word: "paean" },
  { word: "palliate" },
  { word: "panoply" },
  { word: "pathos" },
  { word: "peccadillo" },
  { word: "pedagogue" },
  { word: "pellucid" },
  { word: "perennial" },
  { word: "perfidious" },
  { word: "peripatetic" },
  { word: "phlegmatic" },
  { word: "pillory" },
  { word: "potentate" },
  { word: "premeditate" },
  { word: "prolix" },
  { word: "promontory" },
  { word: "propinquity" },
  { word: "propitiate" },
  { word: "propitious" },
  { word: "proselytise" },
  { word: "prurient" },
  { word: "pugnacious" },
  { word: "punctilious" },
  { word: "raconteur" },
  { word: "rapacious" },
  { word: "recidivism" },
  { word: "recondite" },
  { word: "recreant" },
  { word: "requite" },
  { word: "resplendent" },
  { word: "retrench" },
  { word: "ribald" },
  { word: "scintilla" },
  { word: "scurrilous" },
  { word: "sententious" },
  { word: "seraphic" },
  { word: "solecism" },
  { word: "solicitous" },
  { word: "soliloquy" },
  { word: "soporific" },
  { word: "stentorian" },
  { word: "stricture" },
  { word: "stultify" },
  { word: "sublimate" },
  { word: "stymie" },
  { word: "tawdry" },
  { word: "ancillary" },
  { word: "authoritarian" },
  { word: "bifurcated" },
  { word: "centripetal" },
  { word: "chauvinist" },
  { word: "determinate" },
  { word: "felicitous" },
  { word: "heterogeneous" },
  { word: "retroactive" },
  { word: "theocracy" },
  { word: "toady" },
  { word: "torpid" },
  { word: "truculent" },
  { word: "tryst" },
  { word: "turbid" },
  { word: "turpitude" },
  { word: "vacillate" },
  { word: "vicissitude" },
  { word: "vitiate" },
  { word: "vitriolic" },
  { word: "vociferous" },
  { word: "welter" },
  { word: "zephyr" },
  { word: "amphibian" },
  { word: "apothegm" },
  { word: "asperity" },
  { word: "augury" },
  { word: "aver" },
  { word: "beatific" },
  { word: "benighted" },
  { word: "burnish" },
  { word: "cavalcade" },
  { word: "celerity" },
  { word: "cession" },
  { word: "chattel" },
  { word: "circumscribe" },
  { word: "clairvoyant" },
  { word: "complaisant" },
  { word: "descry" },
  { word: "diffidence" },
  { word: "discomfit" },
  { word: "discordant" },
  { word: "dissimulate" },
  { word: "distaff" },
  { word: "doughty" },
  { word: "effluvium" },
  { word: "excoriate" },
  { word: "exculpate" },
  { word: "expatiate" },
  { word: "fervid" },
  { word: "gambol" },
  { word: "hallow" },
  { word: "impious" },
  { word: "improvident" },
  { word: "incarnadine" },
  { word: "indenture" },
  { word: "iridescent" },
  { word: "jettison" },
  { word: "jingoism" },
  { word: "languor" },
  { word: "lapidary" },
  { word: "lionize" },
  { word: "nuptial" },
  { word: "objurgate" },
  { word: "opalescent" },
  { word: "orotund" },
  { word: "pastiche" },
  { word: "peculation" },
  { word: "pediment" },
  { word: "philology" },
  { word: "penumbra" },
  { word: "plangent" },
  { word: "politic" },
  { word: "potable" },
  { word: "primordial" },
  { word: "ramshackle" },
  { word: "rectitude" },
  { word: "refectory" },
  { word: "remediable" },
  { word: "rococo" },
  { word: "roil" },
  { word: "sinuous" },
  { word: "sluggard" },
  { word: "sophist" },
  { word: "sophomoric" },
  { word: "threnody" },
  { word: "upbraid" },
  { word: "vaunted" },
  { word: "vernal" },
  { word: "abase" },
  { word: "abeyance" },
  { word: "abhor" },
  { word: "abjure" },
  { word: "ablution" },
  { word: "abstruse" },
  { word: "abut" },
  { word: "acclivity" },
  { word: "accolade" },
  { word: "acquiesce" },
  { word: "acrimonious" },
  { word: "actuate" },
  { word: "adduce" },
  { word: "adjunct" },
  { word: "adulation" },
  { word: "acme" },
  { word: "aegis" },
  { word: "affray" },
  { word: "agape" },
  { word: "aggrandize" },
  { word: "allay" },
  { word: "amortize" },
  { word: "appellation" },
  { word: "archetype" },
  { word: "aria" },
  { word: "avuncular" },
  { word: "badinage" },
  { word: "bagatelle" },
  { word: "beatitude" },
  { word: "bereft" },
  { word: "besmirch" },
  { word: "bauble" },
  { word: "casuistry" },
  { word: "codicil" },
  { word: "cohere" },
  { word: "comport" },
  { word: "cordon" },
  { word: "cruet" },
  { word: "debonair" },
  { word: "depredation" },
  { word: "dialectic" },
  { word: "disputatious" },
  { word: "disquisition" },
  { word: "dissolute" },
  { word: "distrait" },
  { word: "doggerel" },
  { word: "educe" },
  { word: "effete" },
  { word: "emeritus" },
  { word: "extirpate" },
  { word: "factious" },
  { word: "febrile" },
  { word: "genuflect" },
  { word: "harridan" },
  { word: "hegira" },
  { word: "histrionic" },
  { word: "hortatory" },
  { word: "hoyden" },
  { word: "hummock" },
  { word: "ichthyology" },
  { word: "imponderable" },
  { word: "inalienable" },
  { word: "iniquitous" },
  { word: "insensate" },
  { word: "integument" },
  { word: "lambent" },
  { word: "lectern" },
  { word: "mellifluous" },
  { word: "menial" },
  { word: "mien" },
  { word: "miscegenation" },
  { word: "nugatory" },
  { word: "oblation" },
  { word: "odoriferous" },
  { word: "offertory" },
  { word: "palpitate" },
  { word: "pandemonium" },
  { word: "parapet" },
  { word: "paroxysm" },
  { word: "parvenu" },
  { word: "peculate" },
  { word: "perforce" },
  { word: "perigee" },
  { word: "peroration" },
  { word: "picaresque" },
  { word: "pied" },
  { word: "piquant" },
  { word: "polity" },
  { word: "portend" },
  { word: "primogeniture" },
  { word: "propellant" },
  { word: "proscenium" },
  { word: "prosody" },
  { word: "provender" },
  { word: "purblind" },
  { word: "purloin" },
  { word: "purview" },
  { word: "quail" },
  { word: "rankle" },
  { word: "recrimination" },
  { word: "redoubtable" },
  { word: "refraction" },
  { word: "reparation" },
  { word: "repartee" },
  { word: "roseate" },
  { word: "rubicund" },
  { word: "salutary" },
  { word: "sanguinary" },
  { word: "satyr" },
  { word: "sarcophagus" },
  { word: "scuttle" },
  { word: "sebaceous" },
  { word: "sequacious" },
  { word: "sidereal" },
  { word: "smattering" },
  { word: "somatic" },
  { word: "succour" },
  { word: "suffuse" },
  { word: "suture" },
  { word: "tarn" },
  { word: "timbre" },
  { word: "tithe" },
  { word: "tocsin" },
  { word: "troglodyte" },
  { word: "uncouth" },
  { word: "undulate" },
  { word: "untenable" },
  { word: "venturesome" },
  { word: "visage" },
  { word: "viscid" },
  { word: "votary" },
  { word: "aberration" },
  { word: "abnegation" },
  { word: "abominate" },
  { word: "abrade" },
  { word: "accretion" },
  { word: "acetic" },
  { word: "acidulous" },
  { word: "acquiescence" },
  { word: "acquittal" },
  { word: "addle" },
  { word: "adjuration" },
  { word: "adjure" },
  { word: "admonition" },
  { word: "agitation" },
  { word: "alimentary" },
  { word: "allusion" },
  { word: "alluvial" },
  { word: "amalgamate" },
  { word: "andirons" },
  { word: "antecede" },
  { word: "apogee" },
  { word: "appurtenances" },
  { word: "aquiline" },
  { word: "arrant" },
  { word: "asceticism" },
  { word: "athwart" },
  { word: "aureole" },
  { word: "barb" },
  { word: "bawdy" },
  { word: "bedizen" },
  { word: "bedraggle" },
  { word: "benignant" },
  { word: "braggadocio" },
  { word: "brocade" },
  { word: "buffoonery" },
  { word: "bugaboo" },
  { word: "bumptious" },
  { word: "bibulous" },
  { word: "canker" },
  { word: "canto" },
  { word: "caparison" },
  { word: "carillon" },
  { word: "carmine" },
  { word: "ciliated" },
  { word: "clangour" },
  { word: "clarion" },
  { word: "coadjutor" },
  { word: "cockade" },
  { word: "coeval" },
  { word: "collier" },
  { word: "comestible" },
  { word: "comity" },
  { word: "conclave" },
  { word: "condign" },
  { word: "connubial" },
  { word: "cormorant" },
  { word: "cornice" },
  { word: "cozen" },
  { word: "crabbed" },
  { word: "credo" },
  { word: "crepuscular" },
  { word: "dastard" },
  { word: "debenture" },
  { word: "decollete" },
  { word: "deducible" },
  { word: "deify" },
  { word: "delusive" },
  { word: "demoniacal" },
  { word: "depilate" },
  { word: "descant" },
  { word: "desideratum" },
  { word: "devolve" },
  { word: "dint" },
  { word: "disapprobation" },
  { word: "dishabille" },
  { word: "dissuasion" },
  { word: "docket" },
  { word: "dowdy" },
  { word: "efflorescent" },
  { word: "elusory" },
  { word: "elysian" },
  { word: "emendation" },
  { word: "empyreal" },
  { word: "encomiastic" },
  { word: "noisome" },
  { word: "antediluvian" },
  { word: "approbation" },
  { word: "ascendancy" },
  { word: "aspersion" },
  { word: "ascribe" },
  { word: "astringent" },
  { word: "beleaguer" },
  { word: "castigate" },
];

MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;

  console.log(">>> Connected");
  const db = client.db(DB);

  db.collection("definitions")
    .find({ $or: wordsToCheck })
    .toArray((err, results) => {
      if (err) throw err;
      results.forEach((res) => {
        console.log(">>> res: ", res.word);
      })
      client.close();
    });
  // db.collection("definitions").count({ $or: wordsToCheck }, (err, res) => {
  //   console.log(">>> res: ", res);
  //   client.close();
  // });
});
