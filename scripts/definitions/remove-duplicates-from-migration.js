const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

// TODO: remove from this list the words that are already in DB
const wordsToSort = [
{ word: "asinine", definition: "Extremely stupid or foolish" },
{ word: "colloquy", definition: "A conversation" },
{ word: "commodious", definition: "Roomy and comfortable" },
{ word: "cupidity", definition: "Greed for money or possessions" },
{ word: "didactic", definition: "Intended to teach, particularly in having moral instruction as an ulterior motive" },
{ word: "effrontery", definition: "Insolent or impertinent behaviour" },
{ word: "effulgent", definition: "Shining brightly; radiant." },
{ word: "foment", definition: "Instigate or stir up (an undesirable or violent sentiment or course of action)" },
{ word: "gargantuan", definition: "Enormous" },
{ word: "hackneyed", definition: "(of a phrase or idea) having been overused; unoriginal and trite" },
{ word: "illimitable", definition: "Without limits or an end" },
{ word: "imperious", definition: "Arrogant and domineering" },
{ word: "imperturbable", definition: "Unable to be upset or excited; calm" },
{ word: "impervious", definition: "Not allowing fluid to pass through" },
{ word: "impolitic", definition: "Failing to possess or display prudence; unwise" },
{ word: "impugn", definition: "Dispute the truth, validity, or honesty of (a statement or motive); call into question" },
{ word: "inadvertent", definition: "Not resulting from or achieved through deliberate planning" },
{ word: "incandescent", definition: "Emitting light as a result of being heated" },
{ word: "innocuous", definition: "Not harmful or offensive" },
{ word: "insuperable", definition: "(of a difficulty or obstacle) impossible to overcome" },
{ word: "interminable", definition: "Endless or apparently endless (often used hyperbolically)" },
{ word: "irascible", definition: "Having or showing a tendency to be easily angered" },
{ word: "legerdemain", definition: "Skilful use of one's hands when performing conjuring tricks." },
{ word: "loquacious", definition: "Tending to talk a great deal; talkative" },
{ word: "malediction", definition: "A magical word or phrase uttered with the intention of bringing about evil; a curse" },
{ word: "mendicant", definition: "Given to begging." },
{ word: "munificent", definition: "Characterized by or displaying great generosity" },
{ word: "neophyte", definition: "A person who is new to a subject or activity" },
{ word: "ossify", definition: "Turn into bone or bony tissue" },
{ word: "panegyric", definition: "A public speech or published text in praise of someone or something" },
{ word: "penitent", definition: "Feeling or showing sorrow and regret for having done wrong; repentant" },
{ word: "peremptory", definition: "Insisting on immediate attention or obedience, especially in a brusquely imperious way" },
{ word: "pertinacious", definition: "Holding firmly to an opinion or a course of action" },
{ word: "precipitous", definition: "Dangerously high or steep" },
{ word: "precocious", definition: "(of a child) having developed certain abilities or inclinations at an earlier age than is usual or expected" },
{ word: "preponderance", definition: "The quality or fact of being greater in number, quantity, or importance" },
{ word: "progenitor", definition: "A person or thing from which a person, animal, or plant is descended or originates; an ancestor or parent" },
{ word: "prognosticate", definition: "Foretell or prophesy (a future event)" },
{ word: "puerile", definition: "Childishly silly and immature" },
{ word: "pulchritude", definition: "Beauty" },
{ word: "pusillanimous", definition: "Showing a lack of courage or determination; timid." },
{ word: "rapprochement", definition: "(especially in international affairs) an establishment or resumption of harmonious relations" },
{ word: "reproach", definition: "Express to (someone) one's disapproval of or disappointment in their actions" },
{ word: "sacrosanct", definition: "(especially of a principle, place, or routine) regarded as too important or valuable to be interfered with" },
{ word: "somnolent", definition: "Sleepy; drowsy." },
{ word: "stratagem", definition: "A plan or scheme, especially one used to outwit an opponent or achieve an end" },
{ word: "supercilious", definition: "Behaving or looking as though one thinks one is superior to others" },
{ word: "tantamount", definition: "Equivalent in seriousness to; virtually the same as" },
{ word: "temerity", definition: "Excessive confidence or boldness; audacity" },
{ word: "extemporaneous", definition: "Spoken or done without preparation" },
{ word: "tendentious", definition: "Expressing or intending to promote a particular cause or point of view, especially a controversial one" },
{ word: "tyro", definition: "A beginner or novice." },
{ word: "umbrage", definition: "Offence or annoyance" },
{ word: "unctuous", definition: "Excessively flattering or ingratiating; oily" },
{ word: "unsullied", definition: "Not spoiled or made impure" },
{ word: "winsome", definition: "Attractive or appealing in a fresh, innocent way" },
{ word: "benison", definition: "A blessing" },
{ word: "ignominious", definition: "Deserving or causing public disgrace or shame" },
{ word: "mendacious", definition: "Not telling the truth; lying" },
{ word: "variegated", definition: "Exhibiting different colours, especially as irregular patches or streaks" },
{ word: "verity", definition: "A true principle or belief, especially one of fundamental importance" },
{ word: "accoutre", definition: "Clothe or equip in something noticeable or impressive" },
{ word: "adventitious", definition: "Happening as a result of an external factor or chance rather than design or inherent nature" },
{ word: "animus", definition: "Hostility or ill feeling" },
{ word: "apoplexy", definition: "Unconsciousness or incapacity resulting from a cerebral haemorrhage or stroke" },
{ word: "appal", definition: "Greatly dismay or horrify" },
{ word: "apropos", definition: "With reference to; concerning" },
{ word: "apparition", definition: "A ghost or ghostlike image of a person" },
{ word: "argot", definition: "The jargon or slang of a particular group or class" },
{ word: "arroyo", definition: "A steep-sided gully formed by the action of fast-flowing water in an arid or semi-arid region, found chiefly in the south-western US." },
{ word: "artifice", definition: "Clever or cunning devices or expedients, especially as used to trick or deceive others" },
{ word: "atelier", definition: "A workshop or studio, especially one used by an artist or designer." },
{ word: "brackish", definition: "(of water) slightly salty, as in river estuaries" },
{ word: "bucolic", definition: "Relating to the pleasant aspects of the countryside and country life" },
{ word: "burlesque", definition: "An absurd or comically exaggerated imitation of something, especially in a literary or dramatic work; a parody" },
{ word: "cadaverous", definition: "Very pale, thin, or bony" },
{ word: "concordat", definition: "An agreement or treaty, especially one between the Vatican and a secular government relating to matters of mutual interest" },
{ word: "controvert", definition: "Deny the truth of (something)" },
{ word: "corollary", definition: "A proposition that follows from (and is often appended to) one already proved." },
{ word: "cortege", definition: "A solemn procession, especially for a funeral" },
{ word: "coruscate", definition: "(of light) flash or sparkle" },
{ word: "culvert", definition: "A tunnel carrying a stream or open drain under a road or railway." },
{ word: "cynosure", definition: "A person or thing that is the centre of attention or admiration" },
{ word: "decrepitude", definition: "The state of being decrepit" },
{ word: "defray", definition: "Provide money to pay (a cost or expense)" },
{ word: "denouement", definition: "The final part of a play, film, or narrative in which the strands of the plot are drawn together and matters are explained or resolved" },
{ word: "deposition", definition: "The action of deposing someone, especially a monarch" },
{ word: "desuetude", definition: "A state of disuse" },
{ word: "diminution", definition: "A reduction in the size, extent, or importance of something" },
{ word: "dishevel", definition: "Make (a person's hair or clothes) untidy" },
{ word: "disinter", definition: "Dig up (something that has been buried, especially a corpse)" },
{ word: "dissonance", definition: "Lack of harmony among musical notes" },
{ word: "dolorous", definition: "Feeling or expressing great sorrow or distress" },
{ word: "duenna", definition: "An older woman acting as a governess and companion in charge of girls, especially in a Spanish family; a chaperone." },
{ word: "eclat", definition: "Brilliant display or effect" },
{ word: "elegiac", definition: "Relating to or characteristic of an elegy" },
{ word: "embryonic", definition: "Relating to an embryo" },
{ word: "eviscerate", definition: "Disembowel (a person or animal)" },
{ word: "exegesis", definition: "Critical explanation or interpretation of a text, especially of scripture" },
{ word: "exigency", definition: "An urgent need or demand" },
{ word: "exiguous", definition: "Very small in size or amount" },
{ word: "factitious", definition: "Artificially created or developed" },
{ word: "factotum", definition: "An employee who does all kinds of work" },
{ word: "fiat", definition: "A formal authorization or proposition; a decree" },
{ word: "firebrand", definition: "A person who is very passionate about a particular cause" },
{ word: "flagellate", definition: "Flog (someone), either as a religious discipline or for sexual gratification" },
{ word: "frivolity", definition: "Lack of seriousness; light-heartedness" },
{ word: "halcyon", definition: "Denoting a period of time in the past that was idyllically happy and peaceful" },
{ word: "hibernal", definition: "Of, characteristic of, or occurring in winter" },
{ word: "homily", definition: "A religious discourse which is intended primarily for spiritual edification rather than doctrinal instruction." },
{ word: "humus", definition: "The organic component of soil, formed by the decomposition of leaves and other plant material by soil microorganisms." },
{ word: "imprimatur", definition: "An official licence issued by the Roman Catholic Church to print an ecclesiastical or religious book" },
{ word: "inclement", definition: "(of the weather) unpleasantly cold or wet" },
{ word: "incapacitate", definition: "Prevent from functioning in a normal way" },
{ word: "ineffable", definition: "Too great or extreme to be expressed or described in words" },
{ word: "ineluctable", definition: "Unable to be resisted or avoided; inescapable" },
{ word: "inimitable", definition: "So good or unusual as to be impossible to copy; unique" },
{ word: "inopportune", definition: "Occurring at an inconvenient or inappropriate time" },
{ word: "inordinate", definition: "Unusually or disproportionately large; excessive" },
{ word: "insouciant", definition: "Showing a casual lack of concern" },
{ word: "insubordinate", definition: "Defiant of authority; disobedient to orders" },
{ word: "inveigle", definition: "Persuade (someone) to do something by means of deception or flattery" },
{ word: "laity", definition: "Lay people, as distinct from the clergy." },
{ word: "lave", definition: "Wash" },
{ word: "masticate", definition: "Chew (food)" },
{ word: "miasma", definition: "An unpleasant or unhealthy smell or vapour" },
{ word: "modish", definition: "Conforming to or following what is currently popular and fashionable" },
{ word: "mottled", definition: "Marked with spots or smears of colour" },
{ word: "mountebank", definition: "A person who deceives others, especially in order to trick them out of their money; a charlatan." },
{ word: "minutiae", definition: "The small, precise, or trivial details of something" },
{ word: "mulct", definition: "Extract money from (someone) by fine or taxation" },
{ word: "nubile", definition: "(of a young woman) sexually attractive" },
{ word: "obituary", definition: "A notice of a death, especially in a newspaper, typically including a brief biography of the deceased person" },
{ word: "opprobrium", definition: "Harsh criticism or censure" },
{ word: "orison", definition: "A prayer." },
{ word: "penurious", definition: "Extremely poor; poverty-stricken" },
{ word: "peregrination", definition: "A journey, especially a long or meandering one" },
{ word: "plebiscite", definition: "The direct vote of all the members of an electorate on an important public question such as a change in the constitution" },
{ word: "plumb", definition: "Measure (the depth of a body of water)" },
{ word: "poltroon", definition: "An utter coward" },
{ word: "prate", definition: "Talk foolishly or at tedious length about something" },
{ word: "preternatural", definition: "Beyond what is normal or natural" },
{ word: "primp", definition: "Spend time making minor adjustments to one's hair, make-up, or clothes" },
{ word: "proboscis", definition: "The nose of a mammal, especially when it is long and mobile such as the trunk of an elephant or the snout of a tapir." },
{ word: "profusion", definition: "An abundance or large quantity of something" },
{ word: "prophylactic", definition: "Intended to prevent disease" },
{ word: "propound", definition: "Put forward (an idea or theory) for consideration by others" },
{ word: "proviso", definition: "A condition or qualification attached to an agreement or statement" },
{ word: "puissant", definition: "Having great power or influence" },
{ word: "putative", definition: "Generally considered or reputed to be" },
{ word: "quorum", definition: "The minimum number of members of an assembly or society that must be present at any of its meetings to make the proceedings of that meeting valid." },
{ word: "raiment", definition: "Clothing" },
{ word: "recumbent", definition: "(especially of a person or effigy) lying down" },
{ word: "regale", definition: "Entertain or amuse (someone) with talk" },
{ word: "repine", definition: "Feel or express discontent; fret" },
{ word: "retribution", definition: "Punishment inflicted on someone as vengeance for a wrong or criminal act" },
{ word: "sacerdotal", definition: "Relating to priests or the priesthood; priestly." },
{ word: "sanctimonious", definition: "Making a show of being morally superior to other people" },
{ word: "sapid", definition: "Having a strong, pleasant taste" },
{ word: "saturnine", definition: "(of a person or their manner) gloomy" },
{ word: "scarify", definition: "Cut and remove debris from (a lawn) with a scarifier." },
{ word: "sedulous", definition: "(of a person or action) showing dedication and diligence" },
{ word: "sepulchre", definition: "A small room or monument, cut in rock or built of stone, in which a dead person is laid or buried." },
{ word: "serried", definition: "(of rows of people or things) standing close together" },
{ word: "shibboleth", definition: "A custom, principle, or belief distinguishing a particular class or group of people, especially a long-standing one regarded as outmoded or no longer important" },
{ word: "shrew", definition: "A small insectivorous mammal resembling a mouse, with a long pointed snout and tiny eyes." },
{ word: "semblance", definition: "The outward appearance or apparent form of something, especially when the reality is different" },
{ word: "skinflint", definition: "A person who spends as little money as possible; a miser." },
{ word: "skittish", definition: "(of an animal, especially a horse) nervous or excitable; easily scared" },
{ word: "skulduggery", definition: "Underhand, unscrupulous, or dishonest behaviour or activities" },
{ word: "spectral", definition: "Of or like a ghost" },
{ word: "splenetic", definition: "Bad-tempered; spiteful" },
{ word: "spry", definition: "(especially of an old person) active; lively" },
{ word: "spume", definition: "Froth or foam, especially that found on waves" },
{ word: "stratum", definition: "A layer or a series of layers of rock in the ground" },
{ word: "sultry", definition: "(of the air or weather) hot and humid" },
{ word: "sundry", definition: "Of various kinds; several" },
{ word: "supernumerary", definition: "Present in excess of the normal or requisite number." },
{ word: "sylvan", definition: "Consisting of or associated with woods; wooded" },
{ word: "tantalize", definition: "Torment or tease (someone) with the sight or promise of something that is unobtainable" },
{ word: "taper", definition: "Diminish or reduce in thickness towards one end" },
{ word: "tarry", definition: "Like or covered with tar" },
{ word: "taurine", definition: "An amino acid containing sulphur and important in the metabolism of fats." },
{ word: "tempo", definition: "The speed at which a passage of music is or should be played." },
{ word: "tentative", definition: "Not certain or fixed; provisional" },
{ word: "terrapin", definition: "A freshwater turtle, especially one of the smaller kinds of the Old World." },
{ word: "thespian", definition: "Relating to drama and the theatre" },
{ word: "traduce", definition: "Speak badly of or tell lies about (someone) so as to damage their reputation" },
{ word: "truckle", definition: "A small barrel-shaped cheese, especially Cheddar." },
{ word: "tutelage", definition: "Protection of or authority over someone or something; guardianship" },
{ word: "unassuming", definition: "Not pretentious or arrogant; modest" },
{ word: "vagary", definition: "An unexpected and inexplicable change in a situation or in someone's behaviour" },
{ word: "vassal", definition: "A holder of land by feudal tenure on conditions of homage and allegiance." },
{ word: "venial", definition: "Denoting a sin that is not regarded as depriving the soul of divine grace" },
{ word: "viand", definition: "An item of food" },
{ word: "vitreous", definition: "Like glass in appearance or physical properties" },
{ word: "vituperative", definition: "Bitter and abusive" },
{ word: "vulpine", definition: "Relating to a fox or foxes" },
{ word: "waggish", definition: "Humorous in a playful, mischievous, or facetious manner" },
{ word: "wastrel", definition: "A wasteful or good-for-nothing person" },
{ word: "waylay", definition: "Stop or interrupt (someone) and detain them in conversation or trouble them in some other way" },
{ word: "winnow", definition: "Blow a current of air through (grain) in order to remove the chaff" },
{ word: "wrest", definition: "Forcibly pull (something) from a person's grasp" },
{ word: "abettor", definition: "A person who encourages or assists someone to do something wrong, in particular to commit a crime" },
{ word: "actuarial", definition: "Relating to actuaries or their work of compiling and analysing statistics to calculate insurance risks and premiums" },
{ word: "anthropoid", definition: "Resembling a human being in form" },
{ word: "cerebration", definition: "The working of the brain; thinking." },
{ word: "demesne", definition: "A piece of land attached to a manor and retained by the owner for their own use" },
{ word: "diadem", definition: "A jewelled crown or headband worn as a symbol of sovereignty." },
{ word: "disavowal", definition: "The denial of any responsibility or support for something; repudiation" },
{ word: "disport", definition: "Enjoy oneself unrestrainedly; frolic" },
{ word: "durance", definition: "Imprisonment or confinement" },
];


MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;

  console.log(">>> Connected");
  const db = client.db(DB);

  db.collection("definitions")
    .find({ $or: wordsToSort })
    .toArray((err, results) => {
      if (err) throw err;
      results.forEach((res) => {
        console.log(">>> res: ", res.word);
      })
      client.close();
    });
  // db.collection("definitions").count({ $or: wordsToSort }, (err, res) => {
  //   console.log(">>> res: ", res);
  //   client.close();
  // });
});
