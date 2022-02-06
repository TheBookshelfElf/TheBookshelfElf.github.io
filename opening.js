async function start() {
    try {
            if(sessionStorage.getItem("LibraryList") == null)
            {
                const libraryBooks = await generateLibrary();
                //console.log(libraryBooks[2])
                const json = JSON.stringify(libraryBooks);
                sessionStorage.setItem("LibraryList", json);
                console.log("library generated")
            }
    } catch (e)
    {
        console.log("There was a problem generating the library list.")
    }
}

start()


function generateLibrary()
{
    bookList = []
    //Create books
        var theAbsolutelyTrueDiary = ["The Absolutely True Diary of a Part-Time Indian", "Sherman Alexie", false, false, false, true, false, true, false, false, false, true, false, false, true, false, false, false, false, true, false, "Sherman Alexie's humorous, semiautobiographical novel, illustrated by Ellen Forney, follows 14-year-old Junior — poor, skinny and with a freakishly big head — as he leaves his school on the Spokane Indian Reservation for a mostly white school in a nearby town. Alexie captures the pain and awkwardness of adolescence while also meditating on the devastation that poverty, racism and alcoholism have wreaked on Native American communities.", "NPR"];
        
        var  caddieWoodlawn = ["Caddie Woodlawn", "Carol Ryrie Brink", false, false, true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, "Caddie Woodlawn isn't interested in being a lady. Living on the Wisconsin frontier with her pioneer family, the free-spirited tomboy — inspired by the memories of Carol Ryrie Brink's grandmother — runs wild, causes trouble, has adventures and befriends the local Indian tribe.", "NPR"];
        
        var houseOnMangoStreet = ["The House on Mango Street", "Sandra Cisneros", false, false, false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, "For Esperanza, a young girl growing up in the Hispanic quarter of Chicago, life is an endless landscape of concrete and rundown tenements. She tells her story in a series of vignettes, as she tries to rise above the hopelessness of her surroundings and come into her own power.", "NPR"];
        
        var theBirchbarkHouse = ["The Birchbark House", "Louise Erdrich", false, false, true, true, false, true, false, false, false, false, true, false, true, false, false, true, false, true, false, "The first young adult novel from the National Book Award-winning novelist Louise Erdrich, The Birchbark House follows Omakayas, a girl from the Ojibwa tribe, as she nurses her family during a devastating smallpox epidemic and discovers a mysterious secret from her past.", "NPR"];
        
        var toKillAMockingbird = ["To Kill a Mockingbird", "Harper Lee", false, false, true, true, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "Author Harper Lee explores racial tensions in the fictional 'tired old town' of Maycomb, Ala., through the eyes of 6-year-old Scout Finch. As her lawyer father, Atticus, defends a black man accused of rape, Scout and her friends learn about the unjust treatment of African-Americans — and their mysterious neighbor, Boo Radley.", "NPR"];
        
        var aLongWayFromChicago = ["A Long Way from Chicago Series", "Richard Peck", false, false, true, true, false, true, false, false, false, true, true, false, true, false, false, true, false, false, false, "Richard Peck's stories follow siblings Joey and Mary Alice, growing up in Chicago in the 1930s. They're city kids, but the real excitement happens during their annual summer trips to rural Illinois — where their larger-than-life grandmother turns small-town visits into big-time fun.", "NPR"];
        
        var esperanzaRising = ["Esperanza Rising", "Pam Munoz Ryan", false, false,  true, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, "Esperanza and her mother are forced to leave their life of wealth and privilege in Mexico and go to work in the labor camps of Southern California, where they must adapt to the harsh circumstances facing Mexican farmworkers on the eve of the Great Depression.", "NPR"];
        
        var aTreeGrowsInBrooklyn = ["A Tree Grows In Brooklyn", "Betty Smith", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "Growing up in the dirty, crime-ridden tenements of Brooklyn in the early 1900s, Francie Nolan has to be tough to survive. Determined to become a writer, Francie fights her way out of the slums with the resilience of the 'Tree of Heaven,' a special tree that can grow and thrive even in the most inhospitable environments.", "NPR"];
        
        var theWitchOfBlackbirdPond = ["The Witch Of Blackbird Pond", "Elizabeth George Speare", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "In 1687 in Connecticut, Kit Tyler, feeling out of place in the rigid Puritan household of her aunt and uncle, befriends an old woman considered a witch by the deeply religious community — and suddenly finds herself standing trial for witchcraft.", "NPR"];
        
        var rollOfThunderHearMyCry = ["Roll Of Thunder, Hear My Cry", "Mildred D. Taylor", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, true, false, "Cassie Logan endures humiliation and witnesses the racism of the KKK as she grows up in Depression-era Mississippi. She learns from her mother, a schoolteacher who refuses to use textbooks that whitewash slavery, and her father, who stops a lynch mob, what it really means to fight back.", "NPR"];
        
        var allOfAKindFamily = ["All-Of-A-Kind Family Series", "Sydney Taylor", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, "Five mischievous sisters live on Manhattan's Lower East Side in the buildup to the First World War. In this sweet series illustrated by Helen John, the girls find fun in the rituals of faith and family as they celebrate the Jewish holidays and treat each day as an adventure.", "NPR"];
        
        var littleHouse = ["Little House Series", "Laura Ingalls Wilder", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, "Laura Ingalls Wilder based the Little House series on her memories of growing up on the American frontier in the 1800s. Illustrated by Garth Williams, the nine books follow the resourceful, resilient pioneer family to the Big Woods, the Prairie, Plum Creek, Silver Lake and beyond..", "NPR"];
        
    
        var watershipDown = ["Watership Down", "Richard Adams", true, false,  false, true, false, false, true, false, true, true, false, false, false, true, false, true, false, false, false, "Often described as 'the Aeneid of rabbits,' this is the story of young rabbit Fiver and his brother Hazel, who set out on an epic journey to find a new home after their own warren is destroyed. Watership Down began as a series of improvised stories author Richard Adams told his young daughters during car trips. Adams also invented the language, Lapine, spoken by Hazel and Fiver.", "NPR"];
        
        var theOneandOnlyIvan = ["The One and Only Ivan", "Katherine Applegate", false, false,  false, false, false, false, false, false, false, true, false, false, false, true, false, true, false, false, false, "Ivan, a silverback gorilla who has spent his life in a down-and-out circus-themed mall, meets Ruby, a baby elephant, and decides that he must find her a better life. The novel is illustrated by Patricia Castelao and inspired by a real gorilla named Ivan, who lived in a mall and later became a celebrity at the Atlanta Zoo.", "NPR"];
        
        var mrPoppersPenguins = ["Mr. Popper's Penguins", "Richard and Florence Atwater", false, false,  false, false, false, false, true, false, true, true, false, false, true, false, false, false, false, false, false, "House painter Mr. Popper receives an unexpected gift, and before he knows it, his house is home to a charming (but expensive) waddle of penguins. Desperate to find a way to make ends meet, Mr. Popper takes the tuxedoed birds on the road as 'Popper's Performing Penguins.' The Atwaters' comical tale is illustrated by Robert Lawson.", "NPR"];
        
        var poppy = ["Poppy", "Avi", true, false,  false, false, false, false, true, false, false, false, true, false, false, true, false, true, false, false, false, "In this whimsical political allegory, beautifully illustrated by Brian Floca, a group of mice fights to regain its liberty from the tyrannical owl Mr. Ocax. He rules the mice with an iron claw, granting them protection from a fearsome porcupine — but only in exchange for their undying obedience.", "NPR"];
        
        var becauseOfWinnDixie = ["Because of Winn-Dixie", "Kate DiCamillo", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, "When 10-year-old India Opal Buloni finds a big, mangy hound wreaking havoc on the local Winn-Dixie supermarket, she takes him home with her to save him from being sent to the pound. She names the stray Winn-Dixie, and he inspires her to start making new friends.", "NPR"];
        
        var mistyOfChincoteague = ["Misty of Chincoteague", "Marguerite Henry", false, false,  true, true, false, true, false, false, false, true, true, false, true, false, false, true, false, false, false, "Paul Beebe and his sister Maureen have their hearts set on buying and taming Phantom, the wildest mare on Assateague Island. Though Phantom remains wild, her daughter Misty becomes an important part of the Beebe family. Marguerite Henry's tale of the wild ponies is illustrated by Wesley Dennis.", "NPR"];
        
        var bunnicula = ["Bunnicula", "James and Deborah Howe", true, false,  false, false, true, false, false, false, false, true, false, false, false, true, false, true, false, false, false, "Chester the cat begins to notice something odd about his family's new pet rabbit. Fangs, capelike markings and a nocturnal disposition harden Chester's conviction: The sweet baby bunny is actually a vampire. James Howe's creepy, furry tale is illustrated by Alan Daniel.", "NPR"];
        
        var redwall = ["The Redwall series", "Brian Jacques", true, false,  false, false, false, false, true, false, false, true, true, false, false, true, false, true, false, false, false, "Deep in the Mossflower Forest lies Redwall Abbey, populated by a motley cast of mice, squirrels, hedgehogs and other forest creatures. This 22-book series covers a vast span of time in the idyllic world of Redwall; jump in anywhere and join heroes like Martin the Warrior and Triss the squirrelmaid as they battle evil in between lavish abbey feasts of Veggible Molebake and Woodland Summercream Pudding.", "NPR"];
        
        var winnieThePooh = ["The Complete Tales of Winnie-The-Pooh", "A. A. Milne", true, false,  false, false, false, false, true, false, true, true, false, false, false, true, false, false, false, false, false, "The collected adventures of A. A. Milne's famous 'Bear of Very Little Brain' and his companions in the Hundred Acre Wood, illustrated by Ernest H. Shepard. Christopher Robin, Piglet, Eeyore, Kanga and Roo, Owl and the rest spend their dappled days boosting Pooh out of Rabbit's doorway, meeting Heffalumps, playing Poohsticks, giving parties and attempting to 'unbounce' the excitable Tigger.", "NPR"];
        
        var mrsFrisbyAndTheRatsOfNIMH = ["Mrs. Frisby and the Rats of NIMH", "Robert C. O'Brien", true, false,  false, false, false, false, true, false, true, false, true, false, false, true, false, true, false, false, false, "A widowed field mouse must enlist the help of a pack of ex-lab rats to save her home from a farmer's plow in this novel playfully illustrated by Zena Bernstein. In exchange, she helps the rats, who are a sophisticated and literate society, as they look to cast off the yoke of human dominance.", "NPR"];
        
        var whereTheRedFernGrows = ["Where the Red Fern Grows", "Wilson Rawls", false, false,  true, true, false, true, true, false, true, true, false, false, true, false, false, false, false, false, false, "Billy roams the Ozarks with his two beloved dogs, Old Dan and Little Ann, teaching them how to hunt raccoons. But when tragedy strikes in the form of a mountain lion, Billy takes comfort in the Native American legend of the red fern, which can be planted only by an angel.", "NPR"];
        
        var theCricketInTimesSquare = ["The Cricket in Times Square", "George Selden and Garth Williams", false, false,  false, false, false, false, true, false, false, true, false, false, false, true, false, true, false, false, false, "Chester the cricket is happy living in a peaceful Connecticut meadow. But when he follows the smell of a picnic-goer's liverwurst all the way to New York's Times Square, he finds he can't get enough of big city life with his new friends, a cat, a mouse and a boy.", "NPR"];
        
        var charlottesWeb = ["Charlotte's Web", "E. B. White", false, false,  false, true, false, false, false, false, true, true, true, false, true, true, false, false, true, false, false, "A little girl, a loquacious spider and 'some pig' star in this beloved story of friendship, ingenuity and the cycle of life, illustrated by Garth Williams. Farm girl Fern loves Wilbur the pig, who is destined for the dinner table until quick-thinking gray spider Charlotte starts spinning his praise in web form — with the comical assistance of Templeton the rat.", "NPR"];
        
        
        var tuckEverlasting = ["Tuck Everlasting", "Natalie Babbitt", true, false,  false, true, false, false, false, false, true, true, true, false, true, false, false, false, false, false, false, "The Tuck family is confronted with an agonizing situation when it discovers that a 10-year-old girl and a malicious stranger now share their secret, about a spring of magical water that prevents the drinker from ever growing any older.", "NPR"];
        
        var jamesAndTheGiantPeach = ["James and the Giant Peach", "Roald Dahl", true, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, "James' parents are trampled by a rhinoceros, and he is sent to live with his abusive aunts in this fantastic tale, illustrated by Quentin Blake. When James accidentally spills magical crocodile tongues on a peach tree, it grows the largest, juiciest, ripest peach imaginable — the perfect vehicle in which to escape his horrid aunts.", "NPR"];
        
        var halfMagic = ["Half Magic", "Edward Eager", true, false,  false, true, false, false, true, false, false, true, true, false, true, false, false, true, false, false, false, "Four cousins spending their summer vacation in a city apartment find an ancient coin and enjoy a series of fantastic adventures when they learn the coin is 'half magic.' Cheerful drawings by N.M. Bodecker illustrate the sometimes unexpected results of the children's wishes.", "NPR"];
        
        var theGraveyardBook = ["The Graveyard Book", "Neil Gaiman", true, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, "Reared by ghosts, werewolves and other residents of the hillside cemetery he calls home, an orphan named Nobody Owens wonders how he will manage to survive among the living having learned all his lessons from the dead. And the man Jack — who killed the rest of Nobody's family — is itching to finish the job. Illustrations by Dave McKean.", "NPR"];
        
        var theBorrowers = ["The Borrowers", "Mary Norton", true, false,  false, true, false, false, false, false, true, false, true, false, false, false, true, true, false, false, false, "Ever wondered why you're constantly losing socks? Or buttons, or paper clips, or postage stamps? Perhaps it's because you unwittingly live with Borrowers, tiny people who furnish their secret homes with castoffs 'borrowed' from 'human beans.' The Clock family — mother Homily, father Pod and daughter Arrietty — live safely out of sight, until one day Pod is spotted by a human boy.", "NPR"];
        
        var harryPotter = ["Harry Potter series", "J.K. Rowling", true, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "The adventures of Harry Potter, the Boy Who Lived, and his wand-wielding friends at the Hogwarts School of Witchcraft and Wizardry. Harry, Ron and Hermione must master their craft and battle the machinations of the evil wizard Voldemort and his Death Eaters.", "NPR"];
        
        var aSeriesOfUnfortunateEvents = ["A Series of Unfortunate Events books", "Lemony Snicket", false, false,  false, true, true, false, true, false, false, true, true, false, true, false, false, true, false, false, false, "The three Baudelaire children are sent to live with the dastardly fortune hunter Count Olaf when their parents die in a fire, and that is just the beginning of their misfortunes. Luckily for readers, the children encounter enough misery to fill 13 books of this deliciously morbid series.", "NPR"];
        
        var maryPoppins = ["Mary Poppins", "P. L. Travers", false, false,  false, true, false, false, false, false, true, false, true, false, true, false, false, true, false, false, false, "A stern but magical English governess is blown into the Banks' lives by the east wind. She slides up the banisters, can produce enormous objects from her carpet bag, and takes the children to a tea party on the ceiling in this beloved children's classic.", "NPR"];
        
        
        var littleWomen = ["Little Women", "Louisa May Alcott", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "In Louisa May Alcott's classic novel, the lives and adventures of the four independent, creative March sisters — Meg, Jo, Beth and Amy — are set against the backdrop of 19th century New England while their father is away during the Civil War.", "NPR"];
        
        var ramona = ["Ramona series", "Beverly Cleary", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, true, false, false, false, "Ramona Quimby, irrepressible owl-wrecker, burr-crown-maker, one-bite-apple-eater, anti-smoking campaigner and toothpaste squeezer, goes from pesty little sister to grown-up 10-year-old over the course of this beloved, humorous series by author Beverly Cleary. Ramona began as an incidental character in a different series, but quickly became a kid-lit icon in her own right.", "NPR"];
        
        var walkTwoMoons = ["Walk Two Moons", "Sharon Creech", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, "Thirteen-year-old Salamanca Tree Hiddle sets off on a cross-country road trip with her grandparents to try to find her mother, who recently left her and her father. On the way, Sal tells them about her friend Phoebe Winterbottom, whose story of an absent mother begins to illuminate Sal's own.", "NPR"];
        
        var theWatsonsGoToBirmingham = ["The Watsons Go to Birmingham - 1963", "Christopher Paul Curtis", false, false,  true, true, false, true, false, false, false, true, false, false, true, false, false, false, false, true, false, "Ten-year-old Kenny and his family, 'the Weird Watsons' of Flint, Mich., go to visit their grandmother in Alabama as racial tensions are peaking. They arrive in Birmingham in time to see the deadly bombing of the Sixteenth Street Baptist Church in this elegant blending of fact and fiction.", "NPR"];
        
        var catherineCalledBirdy = ["Catherine, Called Birdy", "Karen Cushman", false, false,  true, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, "The daughter of a medieval English nobleman, Catherine has been raised for just one thing: marriage. But she has other ideas, and does her best to drive away any potential suitors, until she meets the dreadful and persistent Shaggy Beard, whom she fears she'll never escape.", "NPR"];
        
        var dannyTheChampionOfTheWorld = ["Danny the Champion of the World", "Roald Dahl", false, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, "Danny lives in a converted gypsy caravan with his dad, who runs a gas station and garage — and secretly spends his spare time poaching pheasants from the forest of villainous local landowner Mr. Hazell. When Danny's father is injured by one of Mr. Hazell's man-traps, the two hatch an ingenious plan to wreck the landowner's annual pheasant shooting party by stealing all the pheasants first. Illustrated by Quentin Blake.", "NPR"];
        
        var theSaturdays = ["The Saturdays", "Elizabeth Enright", false, false,  true, true, false, true, false, false, false, true, true, false, true, false, false, true, false, false, false, "In 1940s New York, the four Melendy children decide to pool their allowances to create the Independent Saturday Afternoon Adventure Club (I.S.A.A.C.). Every Saturday, a different child can use the whole amount on an activity of their choice, from concerts to museums to utterly unexpected adventures.", "NPR"];
        
        var sarahPlainAndTall = ["Sarah, Plain and Tall", "Patricia MacLachlan", false, false,  true, false, false, true, false, false, true, true, true, false, true, false, false, true, true, false, false, "When their widowed father invites a mail-order bride to come live with them in their prairie home, Caleb and Anna are captivated by their new mother, Sarah, who sings and makes her own clothes. But when she goes back home, the children fear she'll never return.", "NPR"];
        
        var anneOfGreenGables = ["Anne of Green Gables series", "L.M. Montgomery", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, "In this collection of eight novels by Lucy Maude Montgomery, Matthew and Marilla Cuthbert, a rather prim and elderly brother and sister pair, send away for an orphan boy to help them run their farm on Canada's Prince Edward Island. But when the orphan arrives, he's not a he, he's a she — the loquacious and dreamy red-haired Anne-with-an-E Shirley — who quickly takes up a central place in their hearts.", "NPR"];
        
        var oneCrazySummer = ["One Crazy Summer", "Rita Williams-Garcia", false, false,  true, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, false, "In the tumultuous summer of 1968, Delphine and her two sisters travel from Brooklyn to Oakland, Calif., to spend a month with their mother, a radical poet who sends them to the local Black Panther center for summer camp. There, they begin to learn about the fraught relationship between race and power.", "NPR"];
        
        
        
        var chroniclesOfPrydain = ["The Chronicles of Prydain series", "Lloyd Alexander", true, false,  false, true, false, false, true, true, false, true, false, false, true, false, false, true, false, false, false, "Welsh mythology forms the basis for this tale of assistant pig-keeper Taran, who dreams of being a hero and eventually realizes that dream. Along with his companions Princess Eilonwy, and Gurgi the half-man (and of course, Hen Wen the oracular pig), Taran defends the mythical land of Prydain from the Death-lord Arawn, and in the end must decide if wants to rule Prydain himself.", "NPR"];
        
        var peterPan = ["Peter Pan", "J. M. Barrie", true, false,  false, true, false, false, true, false, true, true, true, false, true, false, false, false, false, false, false, "Peter Pan and Tinker Bell whisk the three Darling siblings off to Neverland in J.M. Barrie's classic story about how 'all children, except one, grow up.' In Neverland, they encounter the Lost Boys as well as the wicked Captain Hook, who loves to feed his enemies to the crocodiles.", "NPR"];
        
        var oz = ["Oz Series", "L. Frank Balm", true, false,  false, false, false, false, true, false, true, true, true, false, true, false, true, true, false, false, false, "After Dorothy, the Tin Man, the Scarecrow and the Cowardly Lion follow the Yellow Brick Road to the magical Land of Oz, new characters — including wooden Jack Pumpkinhead, mechanical Tik-Tok, kind Shaggy Man and beautiful Princess Ozma — are introduced in Frank Baum's imaginative, mysterious world, full of cruel Growleywogs, chatty Rigmaroles, Munchkins and mermaids.", "NPR"];
        
        var aliceInWonderland = ["Alice's Adventures in Wonderland", "Lewis Carroll", true, false,  false, true, false, false, true, false, true, false, true, false, true, false, false, false, false, false, false, "Alice follows a talking white rabbit in a waistcoat down a rabbit hole, and from there, things only get curiouser and curiouser. After run-ins with a Mad Hatter, a hookah-puffing caterpillar, and a disappearing cat with an enigmatic grin, Alice incurs the wrath of a dangerous enemy: The Queen of Hearts.", "NPR"];
        
        var theCityOfEmber = ["The City of Ember", "Jeanne Duprau", false, true,  false, true, false, false, true, false, false, false, true, false, true, false, false, true, false, false, false, "In the year 241, 12-year-old Lina trades jobs on Assignment Day — the day schoolchildren are told what their jobs will be — to become a Messenger so she can run to new places in her decaying but beloved city, and perhaps even glimpse Unknown Regions.", "NPR"];
        
        var theLastOfTheReallyGreatWhangdoodles = ["The Last of the Really Great Whangdoodles", "Julie Edwards", true, false,  false, true, false, false, true, false, false, true, true, false, true, false, false, false, false, false, false, "With help from an eccentric professor, three children succeed in locating the last of the really great Whangdoodles, a wondrous, mooselike creature living in Whangdoodleland. There, they work to grant his heart's greatest wish: a female Whangdoodle for him to love.", "NPR"];
        
        var theEarsthSeaCycle = ["The Earthsea Cycle series", "Ursula K. Le Guin", true, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "Yearning for knowledge and power, Sparrowhawk, a young student at the School for Wizards, becomes overanxious and tries his dangerous powers too soon, unleashing a terrible evil throughout the land, as he prepares for his destiny as the greatest sorcerer in the history of Earthsea.", "NPR"];
        
        var theChroniclesOfNarnia = ["Chronicles of Narnia series", "C.S. Lewis", true, false,  false, true, false, false, true, false, true, true, true, false, true, false, false, true, false, false, false, "The four Pevensie children have been evacuated from London to the countryside during the Blitz — but when youngest child Lucy stumbles through a strange wardrobe and into the magical land of Narnia, an even wilder adventure begins. These six books lay out the history of Narnia from creation to destruction and beyond to its re-creation by the mythical lion Aslan.", "NPR"];
        
        var theGiver = ["The Giver", "Lois Lowry", false, true,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "Jonas lives in a seemingly perfect world: Everyone has an assigned role, there are no choices, and no one experiences pain. But at 12, Jonas is given his lifetime assignment and he becomes the receiver of memories shared by only one other in his community — and discovers the terrible truth about the society in which he lives.", "NPR"];
        
        var theWeeFreeMen = ["The Wee Free Men", "Terry Pratchett", true, false,  false, true, false, false, true, false, false, false, true, false, true, false, false, true, false, false, false, "In a remote corner of Terry Pratchett's Discworld, a young witch-to-be named Tiffany Aching teams up with the Wee Free Men, a clan of rowdy, 6-inch-high blue men, to rescue her baby brother and ward off a sinister invasion from Fairyland.", "NPR"];
        
        var hisDarkMaterials = ["His Dark Materials series", "Philip Pullman", true, false,  false, true, false, false, true, false, false, false, true, false, true, false, false, true, false, false, false, "In this hit series, young Lyra Belacqua tries to prevent kidnapped children from becoming the subject of gruesome experiments; helps Will Parry — a boy from another world — search for his father; and finds that she and Will are caught in a battle between the angelic forces of the Authority and those gathered by her rebel uncle, Lord Asriel.", "NPR"];
        
        var theHobbit = ["The Hobbit", "J.R.R. Tolkien", true, false,  false, false, false, false, true, false, true, true, false, false, false, false, true, true, false, false, false, "Bilbo Baggins, a respectable, well-to-do hobbit, lives comfortably in his hobbit hole until the day the wandering wizard Gandalf chooses him to take part in an adventure from which he may never return.", "NPR"];

        
        var theStrangeCaseOfTheOrigamiYoda = ["The Strange Case of Origami Yoda series", "Tom Angleberger", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, true, false, false, false, "Sixth-grader Dwight is a total loser. But things start to look up when he begins to dispense eerily good advice from an origami finger puppet of Yoda. When a classmate and his Darth Vader finger puppet become determined to end Dwight, can Yoda save him once more?", "NPR"];
        
        var areYouThereGod = ["Are You There God? It's Me, Margaret", "Judy Blume", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, "Sixth-grader Margaret Simon talks to God about faith, bras, periods and boys, in between bosom-building exercises and preteen chants of: 'I must — I must — I must increase my bust!' Torn between the faiths of her Jewish and Christian families, she finds a relationship with God that is all her own.", "NPR"];
        
        var theSecretGarden = ["The Secret Garden", "Frances Hodgson Burnett", false, false,  true, true, false, true, false, false, true, false, true, false, true, false, false, true, false, false, false, "Bratty Mary Lennox, born in India to wealthy and neglectful parents, is sent back to England after a cholera epidemic to live in a rural manor with her uncle. At first rude and angry, Mary is transformed by the kindness of the staff and by her discovery of a neglected garden that once belonged to the late lady of the manor.", "NPR"];
        
        var theHundredDresses = ["The Hundred Dresses", "Eleanor Estes", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, "A poignant tale of bullies and bystanders, The Hundred Dresses tells the story of Wanda Petronski, a Polish schoolgirl whose classmates tease her for wearing tattered clothes. The story, which is illustrated by Louis Slobodkin, was inspired by a little girl author Eleanor Estes remembered from her own childhood who was picked on by other kids.", "NPR"];
        
        var harrietTheSpy = ["Harriet the Spy", "Louise Fitzhugh", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, true, false, false, false, "Harriet wants to become an author, so she keeps a secret notebook full of thoughts and observations about her classmates and friends. But when she misplaces her notebook and it falls into the wrong hands, Harriet knows she is going to have a lot of explaining to do.", "NPR"];
        
        var wonder = ["Wonder", "R.J. Palacio", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, false, false, false, false, "Born with a facial deformity that initially prevented his attendance at public school, August 'Auggie' Pullman enters the fifth grade at Beecher Prep and struggles with the dynamics of being both new and different in this tale about acceptance, self-esteem and the transformative power of human kindness.", "NPR"];
        
        var bridgeToTerabithia = ["Bridge to Terabithia", "Katherine Patterson", false, false,  false, true, false, true, false, false, true, true, false, false, true, false, false, false, false, false, false, "Jess Aarons is the fastest runner in his class — until a newcomer, the tomboyish Leslie, challenges him. Not only is Leslie a tomboy; she's also an atheist and a misfit at their school. But after that rough beginning, Jess and Leslie become close friends, inventing together the magical forest kingdom of Terabithia. A story of friendship, imagination and learning to deal with tragedy.", "NPR"];
        
        var holes = ["Holes", "Louis Sachar", false, false,  false, true, false, true, true, false, false, true, false, false, true, false, false, true, false, false, false, "When Stanley Yelnats, the unlucky hero of Holes, is wrongfully accused of stealing baseball player Clyde 'Sweet Feet' Livingston's shoes, he is sent to a juvenile detention facility in the desert where the inmates must dig 5-foot holes all day. It doesn't help that Stanley carries a family curse passed down from his 'no-good-dirty-rotten-pig-stealing-great-great-grandfather.'", "NPR"];
        
        var okayForNow = ["Okay for Now", "Gary D. Schmidt", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, false, false, false, false, "Fourteen-year-old Doug Swieteck has just moved to a new town where he doesn't have any friends. His teachers and the police think of him as a 'skinny thug.' He finds his way to the library, where he discovers John James Audubon's Birds of America. When he notices that some of the pages are missing, he resolves to track them down.", "NPR"];
        
        var maniacMagee = ["Maniac Magee", "Jerry Spinelli", false, false,  true, true, false, true, false, false, false, true, false, false, true, false, false, false, false, false, false, "Jeffrey Lionel Magee, also known as 'Maniac Magee,' is an orphan and a runaway. He ends up in a small Pennsylvania town torn apart by racial strife, and astounds everyone with his extraordinary athletic feats as he works to heal the painful divide between the town's black and white citizens.", "NPR"];
        
        
        var talesOfAFourthGradeNothing = ["Tales of a Fourth Grade Nothing", "Judy Blume", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, true, false, false, false, "Nine-year-old Peter Hatcher has it rough: His little brother, Farley Drexel (who prefers to be known as Fudge), gets all the attention, despite his tantrums and infuriating behavior. Peter's one consolation is his pet turtle, Dribble — but even Dribble falls victim to Fudge, who ends up in the hospital after swallowing the unfortunate critter.", "NPR"];
        
        var matilda = ["Matilda", "Roald Dahl", false, false,  false, true, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, "Matilda is the story of an exceptionally gifted girl who outsmarts her cruel parents and the brutish school headmistress Miss Trunchbull with the help of her magical abilities and her kind teacher Miss Honey. Illustrated with vivacious drawings by Quentin Blake.", "NPR"];
        
        var thePhantomTollbooth = ["The Phantom Tollbooth", "Norton Juster and Jules Feiffer", true, false,  false, true, false, false, true, false, true, true, false, false, true, false, false, false, false, false, false, "Norton Juster's classic fantasy — with wry illustrations by Jules Feiffer — follows bored young boy Milo after he receives a mysterious gift: a tollbooth that allows him entrance to the magical 'Lands Beyond.' Milo and his traveling companion, Tock the watchdog, restore the princesses Rhyme and Reason to the Kingdom of Wisdom — and in the process Milo discovers the real world has its own charms.", "NPR"];
        
        var diaryOfAWimpyKid = ["Diary of a Wimpy Kid series", "Jeff Kinney", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, true, false, false, false, "Sad-sack sixth-grader Greg Heffley just wants to fit in. His preteen diaries chronicle the dramas of junior high as he and his best friend, Rowley, try to survive as undersized weaklings amid boys who need to shave twice daily. When Rowley grows more popular, Greg takes drastic measures to save their friendship.", "NPR"];
        
        
        var theWolvesOfWilloughbyChase = ["The Wolves of Willoughby Chase", "Joan Aiken", false, false,  true, true, true, false, true, false, false, false, true, false, true, false, false, false, false, false, false, "In an alternative-history version of England during the reign of the (fictitious) King James III, Bonnie, Sylvia and Simon try to foil the plots of their detestable governess, Miss Slighcarp, who holds the household in an iron grip while Bonnie's parents are abroad.", "NPR"];
        
        var theHouseWithAClockInItsWalls = ["The House With a Clock in Its Walls", "John Bellairs", true, false,  false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, "Illustrated by Edward Gorey, a master of macabre, this sinister novel follows Lewis, an orphan who goes to live with his magician uncle in a house that holds a clock counting off the time until the end of the world. When Lewis accidentally raises the dead, he must stop the clock before it strikes for the last time..", "NPR"];
        
        var fromTheMixedUpFiles = ["From the Mixed-Up Files of Mrs. Basil E. Frankweiler", "E.L. Konigsburg", false, false,  false, true, true, false, true, false, true, false, true, false, true, false, false, false, false, false, false, "When Claudia decides to run away from home, she knows any old place won't do, and so settles on the Metropolitan Museum of Art. She and her little brother, Jamie, move into the museum, sleeping in a 16th century bed and bathing in the fountain. While there, they uncover a tremendous secret.", "NPR"];
        
        var theInventionOfHugoCabret = ["The Invention of Hugo Cabret", "Brian Selznick", false, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, "In this magical novel written and illustrated by Brian Selznick, 12-year-old Hugo is an orphan, clock-keeper and petty thief living within the walls of a Paris train station in 1931. Before he died, his father left him a broken automaton, and Hugo labors to uncover the secret hidden inside the machine.", "NPR"];
        
        var whenYouReachMe = ["When You Reach Me", "Rebecca Stead", false, false,  false, true, true, false, false, false, false, false, true, false, true, false, false, false, false, false, false, "In the 1980s, as her mother prepares to be a contestant on a television game show, Miranda tries to make sense of a series of mysterious notes received from an anonymous source that seems to defy the laws of time and space.", "NPR"];
        
        var theEgyptGame = ["The Egypt Game", "Zilpha Keatley Snyder", false, false,  false, true, true, false, false, false, false, false, true, false, true, false, false, false, false, false, false, "Melanie and April are fascinated by ancient Egypt and decide to play their own Egypt game in the storage yard of a mysterious professor's antique shop. But the imaginative game soon takes on a life of its own as the kids get entangled in a murder mystery. With illustrations by Alton Raible.", "NPR"];
        
        
        var darkIsRising = ["The Dark Is Rising series", "Susan Cooper", true, false,  false, true, false, false, true, true, false, true, false, false, true, false, false, true, false, false, false, "Five novels steeped in British and Welsh mythology follow the story of 11-year old Will Stanton, seventh son of a seventh son and last of the Old Ones, in his quest to vanquish the powers of the Dark.", "NPR"];
        
        var bookOfGreekMyths = ["D'Aulaires' Book of Greek Myths", "Ingri D'Aulaire and Edgar D'Aulaire", true, false,  false, false, false, false, false, true, false, true, true, false, true, false, true, false, false, false, false, "Married couple Ingri and Edgar Parin d'Aulaire wrote and illustrated this luminous guide to the Greek gods, from cold, beautiful Artemis — goddess of the hunt — to the mighty father Zeus who lives on Olympus, 'a mountain so high and so steep that no man could climb it and see them in their shining palace.'", "NPR"];
        
        var theLittlePrince = ["The Little Prince", "Antoine de Saint-Exupery", true, false,  false, true, false, false, true, true, true, true, false, false, true, false, true, false, false, false, false, "An aviator whose plane is forced down in the Sahara encounters a little prince who has fallen to Earth from a tiny planet and relates his adventures in seeking the secret of what is important in life. The poetic French novella was translated by Richard Howard.", "NPR"];
        
        var ellaEnchanted = ["Ella Enchanted", "Gail Carson Levine", true, false,  false, true, false, false, true, true, false, false, true, false, true, false, false, false, false, false, false, "At birth, Ella is given the 'gift' of obedience by a meddling fairy — with the result that she's forced to obey any command anyone gives her. When she finds herself falling in love with Prince Char, she knows she can't marry him because anyone who discovers her secret could force her to destroy the kingdom — so Ella must choose between her own happiness and the safety of her country.", "NPR"];
        
        var whereTheMountainMeetsTheMoon = ["Where the Mountain Meets the Moon", "Grace Lin", true, false,  false, true, false, false, true, true, false, false, true, false, true, false, false, false, false, false, false, "Inspired by Chinese folk tales, Grace Lin's novel tells the story of Minli, who lives in the shade of Fruitless Mountain. The bitter Jade Dragon keeps the mountain barren and empty, but Minli (whose name means 'quick thinking') sets out to find a solution from the Old Man of the Moon.", "NPR"];
        
        var percyJackson = ["Percy Jackson and the Olympians series", "Rick Riordan", true, false,  false, true, false, false, true, true, false, true, false, false, true, false, false, true, false, false, false, "This thrilling fantasy quintet follows the life of Percy Jackson, a demigod and the son of Poseidon, god of the sea. Though heavily inspired by classical mythology, the series feels thoroughly modern thanks to Percy's funny, smart-aleck narration.", "NPR"];
        
        var classicFairyTales = ["The Annotated Classic Fairy Tales", "Maria Tatar", true, false,  false, false, false, false, false, true, true, true, true, false, true, false, false, false, false, false, false, "Maria Tatar collects 26 classic fairy tales, pairs them with exquisite illustrations and supplements them with literary, cultural and historical commentary. From 'Little Red Riding Hood' to 'The Princess and the Pea,' these stories are enchanting for kids of all ages.", "NPR"];
        
        var theSwordInTheStone = ["The Sword in the Stone", "T.H. White", true, false,  false, true, false, false, true, true, true, true, false, false, true, false, false, true, false, false, false, "This 1938 children's classic chronicles the boyhood of Wart, the future King Arthur, as he comes under the tutelage of the great wizard Merlin. In this charmingly quirky tale, Merlin teaches Wart about the world by transforming him into various kinds of animals.", "NPR"];
        
        
        var endersGame = ["Ender's Game", "Orson Scott Card", false, true,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "Young Andrew 'Ender' Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.", "NPR"];
        
        var theHouseOfTheScorpion = ["The House of the Scorpion", "Nancy Farmer", false, true,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "In a future where humans despise clones, Matt enjoys special status as the young clone of El Patron, the 142-year-old leader of a corrupt drug empire nestled between Mexico and the United States. Escape is his only chance to survive — but even that may not save him.", "NPR"];
        
        var aWrinkleInTime = ["A Wrinkle in Time series", "Madeleine L'Engle", true, true,  false, true, false, false, true, false, true, true, true, false, true, false, false, true, false, false, false, "Madeleine L'Engle's bestselling series revolves around the precocious Murray children. Plain, bespectacled Meg, brilliant Charles Wallace, the sensible twins Sandy and Dennys, and their friend Calvin travel through time, encounter strange creatures and battle the forces of darkness in these metaphysical science fiction novels.", "NPR"];
        
        
        var mySideOfTheMountain = ["My Side of the Mountain", "Jean Craighead George", false, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "Sam Gribley runs away from his family's cramped, crowded apartment in New York City and lives alone with his pet falcon in the Catskill Mountains, struggling to survive. Hunting and fishing sustain him in the wilderness, but when a terrible storm approaches, Sam has to fight for his life.", "NPR"];
        
        var julieOfTheWolves = ["Julie of the Wolves", "Jean Craighead George", false, false,  false, true, false, false, true, false, false, false, true, false, true, false, false, true, false, false, false, "Fleeing from an arranged marriage, a 13-year-old Eskimo girl gets lost in the desolate Alaskan wilderness and is taken in by a pack of wolves. The wolves accept her as a daughter, and she grows to love them too, but the time comes when she must leave them behind.", "NPR"];
        
        var numberTheStars = ["Number the Stars", "Lois Lowry", false, false,  true, true, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, "Lois Lowry's novel illustrates the power of friendship in the face of terrifying oppression. In Nazi-occupied Denmark, 10-year-old Annemarie helps shelter her best friend from the Nazis while the Danish Resistance works to smuggle thousands of Jews across the sea to Sweden.", "NPR"];
        
        var islandOfTheBlueDolphins = ["Island of the Blue Dolphins", "Scott O'Dell", false, false,  false, true, false, true, false, false, true, false, true, false, true, false, false, false, false, false, false, "Island of the Blue Dolphins is a 1960 children's novel by American writer Scott O'Dell, which tells the story of a 12-year-old girl named Karana, who is stranded alone for years on an island off the California coast. It is based on the true story of Juana Maria, a Nicoleño Native American left alone for 18 years on San Nicolas Island during the 19th century.", "Wikipedia-Island of the Blue Dolphins"];
        
        var hatchet = ["Hatchet", "Gary Paulsen", false, false,  false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "Headed for Canada to visit his father for the first time since his parents' divorce, 13-year-old Brian is the sole survivor of a plane crash, with only the clothes he has on his back and a hatchet to help him live in the wilderness.", "NPR"];
        
        var twentyOneBalloons = ["The Twenty-one Balloons", "William Pene Du Bois", false, false,  false, false, false, false, true, false, false, true, false, false, true, false, false, true, false, false, false, "William Pène du Bois' classic novel documents the incredible adventures of Professor William Waterman Sherman, who in 1883 sets off in a balloon across the Pacific, survives a volcanic eruption, discovers a fantastical diamond-filled island, and is eventually picked up floating in the Atlantic.", "NPR"];
        
        
        var theMightyHeartOfSunny = ["The Mighty Heart Of Sunny St. James", "Ashley Herring Blake", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, true, "Sunny is 12 years old and dealing with a lot of stuff, including a recent heart transplant, trying to find a new BFF, and looking for a boy to have her first kiss with. Then she meets Quinn, who seems like she would be the perfect new best friend. But soon Sunny realizes it might be Quinn she wants to kiss, instead of any boy.", "BookRiot"];
        
        var kingAndTheDragonflies = ["King and the Dragonflies", "Kacen Callender", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, false, false, false, true, "This magical realist story stars 12-year-old Kingston, who is sure his recently passed away brother Khalid has turned into a dragonfly. It would be super helpful if he could turn to his best friend Sandy in this time of grief. But right before he died, Khalid told King he should break off his friendship with Sandy because of a rumor that Sandy is gay.", "BookRiot"];
        
        var pet = ["Pet", "Akwaeke Emezi", true, false,  false, true, false, false, false, false, false, false, true, false, true, false, false, false, false, true, true, "A Black trans girl named Jam lives in a utopian world. Why is it utopian? The angels have eliminated all monsters. Except that one night, a creature that really looks like a monster emerges from a painting Jam’s mom did. The monster asks Jam to call her Pet.", "BookRiot"];
        
        var redwoodAndPonytail = ["Redwood and Ponytail", "K.A. Holt", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, true, "This novel-in-verse is told from the perspective of the two opposites attract 12-year-old girls in a cute romance. Tam is a tomboy athlete and Kate is a femme cheerleader. At first they form an unlikely friendship, which takes an even more unexpected direction.", "BookRiot"];
        
        var theWhispers = ["The Whispers", "Greg Howard", true, false,  false, true, true, false, true, false, false, true, false, false, true, false, false, false, false, false, true, "Eleven-year-old Riley has a lot of wishes that he hopes the “whispers”—magical forest fairies—will answer. He wishes the bullies would stop picking on him, that his 8th grade crush would like him back, and that his mom would come back home. When the investigation into his mother’s disappearance goes nowhere, he takes matters into his own hands and goes on a trip into the wood to talk to the whispers.", "BookRiot"];
        
        var whereTheHeartIs = ["Where The Heart Is", "Jo Knowles", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, true, "Rachel is a 13-year-old who should be enjoying her summer. Instead, she’s worrying about her parents arguing about money, working hard taking care of farm animals, and trying to figure out how to deal with her guy best friend Micah’s romantic feelings for her. Rachel doesn’t reciprocate his feelings and doesn’t think she can feel that way about any boy.", "BookRiot"];
        
        var hurricaneSeason = ["Hurricane Season", "Nicole Melleby", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, true, "Fig is only in grade 6, but she sometimes has to be the parent instead of a kid with her artist dad who has bipolar disorder. When one of her teachers calls social services, Fig feels even more pressure to pretend like everything is okay. At the same time, she’s dealing with her crush on a girl who works at the library.", "BookRiot"];
        
        var theWitchBoy = ["The Witch Boy", "Molly Ostertag", true, false,  false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, "In 13-year-old Aster’s family, all the girls train to be witches, and all the boys grow up to be shapeshifters. So what does it mean that Aster hasn’t shifted yet, and is fascinated by witchcraft? His conundrum becomes even more heightened when a mysterious dangers threatens the boys—and Aster knows he can use witchcraft to help. A tale about rigid gender roles with subtle trans relevance.", "BookRiot"];
        
        var cattywampus = ["Cattywampus", "Ash Van Otterloo", true, false,  false, true, false, false, false, false, false, false, true, true, true, false, false, false, false, false, true, "Two young witches are grappling with big life revelations: one has recently learned that she’s intersex and the other is dealing with her father’s abandonment. On top of that tough stuff, they have just accidentally resurrected an entire graveyard’s worth of fighting ancestors. Time for a counter-curse!", "BookRiot"];
        
        var theBestAtIt = ["The Best At It", "Maulik Pancholy", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, false, false, false, true, "Rahul Kapoor is about to start middle school and he’s pretty nervous. He’s a gay 7th grader living in a small Midwest town. He decides to take his favorite grandfather’s advice, which is: “Find one thing you’re really good at. And become the BEST at it.” But what if Rahul can’t find anything he’s really good at?", "BookRiot"];
        
        var beMyLove = ["Be My Love", "Kit Pearson", false, false,  true, true, false, true, false, false, false, false, true, false, true, false, false, false, false, false, true, "It’s the 1950s after World War II and Maisie has always spent summers on Kingfisher Island with her beloved cousin Una. But this summer Una has changed and is wrapped up in an infatuation with a boy. Maisie doesn’t understand her jealousy, and her attempt to get the magic of their friendship back backfires spectacularly. But there’s still a chance for her to find the inner peace her island home has always given her.", "BookRiot"];
        
        var kenzieKickstartsATeam = ["Kenzie Kickstarts a Team", "Kit Rosewater", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, true, false, false, true, "The first book in the Derby Daredevils series is about two 5th graders, Kenzie and Shelly, realizing their dream of becoming roller derby stars! But first they need to recruit three girls to be on a team with them. But uh-oh—one of them happens to be Kenzie’s crush and Kenzie starts wondering if Shelly’s going to find a new BFF!", "BookRiot"];
        
        var theMoonWithin = ["The Moon Within", "Aida Salazar", false, false,  false, true, false, true, false, false, false, false, true, false, true, false, false, false, false, true, true, "This novel-in-verse features a trans character who is the protagonist’s best friend. Celi Rivera’s coming of age story features her first period, her first attraction to a boy, and her best friend coming out as genderfluid, then identifying as a boy named Marco. The Black Puerto Rican Mexican perspectives on the book’s issues are a welcome addition to the LGBTQ middle grade canon.", "BookRiot"];
        
        var aRandomActOfKindness = ["A Random Act of Kindness", "Nelson 'Skip' Foley", false, false,  false, true, false, true, false, false, false, true, true, false, true, false, false, false, true, false, false, "A Random Act of Kindness Nelson 'Skip' Foley At the end of the school year, Mrs. Smedmeyer gives her fifth-grade class a special assignment: they have to do something helpful for someone else. But there's a catch-the kids have to keep it a secret from the person they're helping. Tammy and Tommy Robins and their cousin Jeremy know exactly the person they want to help. His name is Mr. Mendabe, and he's a nice old man who is always smiling, despite his painful-looking limp, and who sometimes hands out lollipops. The three kids decide to mow his unkempt lawn. When they get to Mr. Mendabe's house, though, they realize the old man needs more than a neatly mown lawn.", "Maine.gov"];
        
        var lostOnAMountainInMaine = ["Lost on a Mountain in Maine", "Donn Fendler & Joseph Egon", false, false,  false, true, false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, "When twelve-year-old Donn Fendler gets impatient with his father and brother as they stand on the summit of Maine's highest peak, he decides to find his own way back to camp. But Donn doesn't count on a fast-moving fog that obscures the path. He doesn't count on falling down an embankment that hides him from sight. And he doesn't count on taking a turn that leaves him alone to wander aimlessly for nearly two weeks in the empty mountain wilderness. Based on a true story.", "Maine.gov"];


    //Add books to book list
    //American Stories - NPR List - 12
    bookList.push(theAbsolutelyTrueDiary);
    bookList.push(caddieWoodlawn);
    bookList.push(houseOnMangoStreet);
    bookList.push(theBirchbarkHouse);
    bookList.push(toKillAMockingbird);
    bookList.push(aLongWayFromChicago);
    bookList.push(esperanzaRising);
    bookList.push(aTreeGrowsInBrooklyn);
    bookList.push(theWitchOfBlackbirdPond);
    bookList.push(rollOfThunderHearMyCry);
    bookList.push(allOfAKindFamily);
    bookList.push(littleHouse);
    
    //Animal Kingdom - NPR List - 13
    bookList.push(watershipDown);
    bookList.push(theOneandOnlyIvan);
    bookList.push(mrPoppersPenguins);
    bookList.push(poppy);
    bookList.push(becauseOfWinnDixie);
    bookList.push(mistyOfChincoteague);
    bookList.push(bunnicula);
    bookList.push(redwall);
    bookList.push(winnieThePooh);
    bookList.push(mrsFrisbyAndTheRatsOfNIMH);
    bookList.push(whereTheRedFernGrows);
    bookList.push(theCricketInTimesSquare);
    bookList.push(charlottesWeb);
    
    //Everday Magic - NPR List - 8
    bookList.push(tuckEverlasting);
    bookList.push(jamesAndTheGiantPeach);
    bookList.push(halfMagic);
    bookList.push(theGraveyardBook);
    bookList.push(theBorrowers);
    bookList.push(harryPotter);
    bookList.push(aSeriesOfUnfortunateEvents);
    bookList.push(maryPoppins);
    
    //Family Life - NPR List - 10
    bookList.push(littleWomen);
    bookList.push(ramona);
    bookList.push(walkTwoMoons);
    bookList.push(theWatsonsGoToBirmingham);
    bookList.push(catherineCalledBirdy);
    bookList.push(dannyTheChampionOfTheWorld);
    bookList.push(theSaturdays);
    bookList.push(sarahPlainAndTall);
    bookList.push(anneOfGreenGables);
    bookList.push(oneCrazySummer);
    
    //Fantasy Worlds - NPR List - 12
    bookList.push(chroniclesOfPrydain);
    bookList.push(peterPan);
    bookList.push(oz);
    bookList.push(aliceInWonderland);
    bookList.push(theCityOfEmber);
    bookList.push(theLastOfTheReallyGreatWhangdoodles);
    bookList.push(theEarsthSeaCycle);
    bookList.push(theChroniclesOfNarnia);
    bookList.push(theGiver);
    bookList.push(theWeeFreeMen);
    bookList.push(hisDarkMaterials);
    bookList.push(theHobbit);
    
    //Friendships And Finding Your Place - NPR List - 10
    bookList.push(theStrangeCaseOfTheOrigamiYoda);
    bookList.push(areYouThereGod);
    bookList.push(theSecretGarden);
    bookList.push(theHundredDresses);
    bookList.push(harrietTheSpy);
    bookList.push(wonder);
    bookList.push(bridgeToTerabithia);
    bookList.push(holes);
    bookList.push(okayForNow);
    bookList.push(maniacMagee);
    
    //Good For A Laugh - NPR List - 4
    bookList.push(talesOfAFourthGradeNothing);
    bookList.push(matilda);
    bookList.push(thePhantomTollbooth);
    bookList.push(diaryOfAWimpyKid);
    
    //Mysteries and Thrillers - NPR List - 6
    bookList.push(theWolvesOfWilloughbyChase);
    bookList.push(theHouseWithAClockInItsWalls);
    bookList.push(fromTheMixedUpFiles);
    bookList.push(theInventionOfHugoCabret);
    bookList.push(whenYouReachMe);
    bookList.push(theEgyptGame);
    
    //Myths And Fairy Tales - NPR List - 8
    bookList.push(darkIsRising);
    bookList.push(bookOfGreekMyths);
    bookList.push(theLittlePrince);
    bookList.push(ellaEnchanted);
    bookList.push(whereTheMountainMeetsTheMoon);
    bookList.push(percyJackson);
    bookList.push(classicFairyTales);
    bookList.push(theSwordInTheStone);
    
    //Science Fiction - NPR List - 3
    bookList.push(endersGame);
    bookList.push(theHouseOfTheScorpion);
    bookList.push(aWrinkleInTime);
    
    //Survival and Adventure - NPR List - 6
    bookList.push(mySideOfTheMountain);
    bookList.push(julieOfTheWolves);
    bookList.push(numberTheStars);
    bookList.push(islandOfTheBlueDolphins);
    bookList.push(hatchet);
    bookList.push(twentyOneBalloons);
    
    //LGBTQ+ books - Bookriot List - 13
    bookList.push(theMightyHeartOfSunny);
    bookList.push(kingAndTheDragonflies);
    bookList.push(pet);
    bookList.push(redwoodAndPonytail);
    bookList.push(theWhispers);
    bookList.push(whereTheHeartIs);
    bookList.push(hurricaneSeason);
    bookList.push(theWitchBoy);
    bookList.push(cattywampus);
    bookList.push(theBestAtIt);
    bookList.push(beMyLove);
    bookList.push(kenzieKickstartsATeam);
    bookList.push(theMoonWithin);
    
    //Maine Books - Maine.gov - 2
    bookList.push(aRandomActOfKindness);
    bookList.push(lostOnAMountainInMaine);

    //console.log(bookList[2])

    return bookList;
}