h/**
 * COMMON GROUND DAILY SETS — Venn diagram puzzle data
 *
 * Each puzzle has 3 sets (A, B, C) and 4 placement slots that map to the
 * Venn intersections as follows:
 *
 *   S1 = A ∩ B  (only A and B; NOT C)
 *   S2 = A ∩ C  (only A and C; NOT B)
 *   S3 = B ∩ C  (only B and C; NOT A)
 *   S4 = A ∩ B ∩ C  (all three)
 *
 * Tiles with `correctSlot: null` are distractors — they belong outside the
 * 4 intersection regions (single-set members or unrelated red herrings).
 *
 * IMPORTANT for editors: when designing or fixing a puzzle, verify EACH
 * placed tile against its slot rule above by checking all three set
 * memberships explicitly. Do not rely on intuition about which slot is
 * which — confirm against this comment every time.
 */
window.COMMON_GROUND_DAILY_SETS = [

  {
  date: "2026-05-30",
  easy: {
    title: "Camping + Food + Fire",
    difficultyEstimate: 83,
    labels: { A: "Camping", B: "Food", C: "Fire" },
    tiles: [
      { label: "Dehydrated Meal", correctSlot: "S1", logicNote: "A dehydrated meal is camping food, but it does not itself belong to fire." },
      { label: "Fire Ring", correctSlot: "S2", logicNote: "A fire ring is used at campsites and contains fire, but it is not food." },
      { label: "Charred Steak", correctSlot: "S3", logicNote: "Charred steak is food connected to fire, but it is not specifically a camping item." },
      { label: "Roasted Marshmallow", correctSlot: "S4", logicNote: "A roasted marshmallow is food, it is made with fire, and it is a classic camping treat." },
      { label: "Sleeping Bag", correctSlot: null },
      { label: "Lunch Menu", correctSlot: null },
      { label: "Matchbox", correctSlot: null },
      { label: "City Apartment", correctSlot: null }
    ]
  },
  medium: {
    title: "Movie + Robot + 2000s",
    difficultyEstimate: 58,
    labels: { A: "Movie", B: "Robot", C: "2000s" },
    tiles: [
      { label: "Chappie", correctSlot: "S1", logicNote: "Chappie is a movie about a robot, but it came out after the 2000s." },
      { label: "Mean Girls", correctSlot: "S2", logicNote: "Mean Girls is a movie from the 2000s, but it is not about a robot." },
      { label: "ASIMO", correctSlot: "S3", logicNote: "ASIMO is a robot introduced in the 2000s, but it is not a movie.", fact: "Honda introduced ASIMO in 2000 as a humanoid robot that could walk and run." },
      { label: "Transformers (2007)", correctSlot: "S4", logicNote: "Transformers is a 2000s movie centered on robots, so it fits all three categories." },
      { label: "Film Clapboard", correctSlot: null },
      { label: "Servo Motor", correctSlot: null },
      { label: "Flip Phone", correctSlot: null },
      { label: "Drive-In Screen", correctSlot: null }
    ]
  },
  hard: {
    title: "Nobel + Chemist + Woman",
    difficultyEstimate: 43,
    labels: { A: "Nobel", B: "Chemist", C: "Woman" },
    tiles: [
      { label: "Linus Pauling", correctSlot: "S1", logicNote: "Linus Pauling won Nobel Prizes and was a chemist, but he was not a woman.", fact: "Linus Pauling is one of the few people to receive two unshared Nobel Prizes." },
      { label: "Malala Yousafzai", correctSlot: "S2", logicNote: "Malala Yousafzai is a woman Nobel laureate, but she is not a chemist." },
      { label: "Alice Ball", correctSlot: "S3", logicNote: "Alice Ball was a woman chemist, but she did not receive a Nobel Prize.", fact: "Alice Ball developed an early injectable treatment for leprosy." },
      { label: "Dorothy Hodgkin", correctSlot: "S4", logicNote: "Dorothy Hodgkin was a woman chemist who won the Nobel Prize in Chemistry.", fact: "Hodgkin used X-ray crystallography to determine structures of important biomolecules." },
      { label: "Prize Ceremony", correctSlot: null },
      { label: "Beaker Rack", correctSlot: null },
      { label: "Suffrage Banner", correctSlot: null },
      { label: "Lecture Notes", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-29",
  easy: {
    title: "Weather + White + Falling",
    difficultyEstimate: 84,
    labels: { A: "Weather", B: "White", C: "Falling" },
    tiles: [
      { label: "Cloud", correctSlot: "S1", logicNote: "A cloud is white weather, but it is not usually the thing falling." },
      { label: "Rainfall", correctSlot: "S2", logicNote: "Rainfall is falling weather, but it is not white." },
      { label: "White Confetti", correctSlot: "S3", logicNote: "White confetti is white and falls, but it is not weather." },
      { label: "Snow", correctSlot: "S4", logicNote: "Snow is white, falls from the sky, and is a weather event.", fact: "No two snowflakes are exactly alike because of how their crystals form on the way down." },
      { label: "Weather Vane", correctSlot: null },
      { label: "Printer Paper", correctSlot: null },
      { label: "Dropped Keys", correctSlot: null },
      { label: "Sunglasses", correctSlot: null }
    ]
  },
  medium: {
    title: "Animal + Mythical + Fire",
    difficultyEstimate: 60,
    labels: { A: "Animal", B: "Mythical", C: "Fire" },
    tiles: [
      { label: "Unicorn", correctSlot: "S1", logicNote: "A unicorn is a mythical animal, but it is not especially tied to fire." },
      { label: "Firefly", correctSlot: "S2", logicNote: "A firefly is an animal with fire in the name, but it is not mythical." },
      { label: "Prometheus", correctSlot: "S3", logicNote: "Prometheus is a mythic figure connected with fire, but he is not an animal." },
      { label: "Dragon", correctSlot: "S4", logicNote: "A dragon is a mythical animal famously associated with fire." },
      { label: "Horse Stable", correctSlot: null },
      { label: "Magic Mirror", correctSlot: null },
      { label: "Candle Flame", correctSlot: null },
      { label: "Story Scroll", correctSlot: null }
    ]
  },
  hard: {
    title: "Author + Detective + Woman",
    difficultyEstimate: 44,
    labels: { A: "Author", B: "Detective", C: "Woman" },
    tiles: [
      { label: "Raymond Chandler", correctSlot: "S1", logicNote: "Raymond Chandler was an author known for detective fiction, but he was not a woman." },
      { label: "Virginia Woolf", correctSlot: "S2", logicNote: "Virginia Woolf was a woman author, but she is not known for detective fiction." },
      { label: "Miss Marple", correctSlot: "S3", logicNote: "Miss Marple is a woman detective, but she is a fictional character rather than an author." },
      { label: "Agatha Christie", correctSlot: "S4", logicNote: "Agatha Christie was a woman author famous for detective stories.", fact: "Agatha Christie created both Hercule Poirot and Miss Marple." },
      { label: "Typewriter Ribbon", correctSlot: null },
      { label: "Magnifying Glass", correctSlot: null },
      { label: "Portrait Locket", correctSlot: null },
      { label: "Crime Scene Tape", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-28",
  easy: {
    title: "Cold + Dessert + Stick",
    difficultyEstimate: 85,
    labels: { A: "Cold", B: "Dessert", C: "Stick" },
    tiles: [
      { label: "Sundae", correctSlot: "S1", logicNote: "A sundae is a cold dessert, but it is not served on a stick.", fact: "The ice cream sundae was invented in the late 1800s, with several American towns still arguing over which one served it first." },
      { label: "Icicle", correctSlot: "S2", logicNote: "An icicle is cold and stick-like, but it is not dessert." },
      { label: "Cake Pop", correctSlot: "S3", logicNote: "A cake pop is dessert on a stick, but it is not usually cold." },
      { label: "Popsicle", correctSlot: "S4", logicNote: "A popsicle is cold, it is dessert, and it comes on a stick." },
      { label: "Freezer Door", correctSlot: null },
      { label: "Pie Tin", correctSlot: null },
      { label: "Twig", correctSlot: null },
      { label: "Soup Spoon", correctSlot: null }
    ]
  },
  medium: {
    title: "Country + Mountain + Asia",
    difficultyEstimate: 59,
    labels: { A: "Country", B: "Mountain", C: "Asia" },
    tiles: [
      { label: "Switzerland", correctSlot: "S1", logicNote: "Switzerland is a country famous for mountains, but it is not in Asia." },
      { label: "Singapore", correctSlot: "S2", logicNote: "Singapore is a country in Asia, but it is not known as a mountain place." },
      { label: "Himalayas", correctSlot: "S3", logicNote: "The Himalayas are mountains in Asia, but they are not a country.", fact: "The Himalayas include Mount Everest, the highest mountain above sea level." },
      { label: "Nepal", correctSlot: "S4", logicNote: "Nepal is an Asian country strongly associated with mountains." },
      { label: "National Anthem", correctSlot: null },
      { label: "Climbing Rope", correctSlot: null },
      { label: "Bamboo Forest", correctSlot: null },
      { label: "Coastal Lighthouse", correctSlot: null }
    ]
  },
  hard: {
    title: "Band + Rock + British",
    difficultyEstimate: 43,
    labels: { A: "Band", B: "Rock", C: "British" },
    tiles: [
      { label: "Nirvana", correctSlot: "S1", logicNote: "Nirvana was a rock band, but it was American rather than British." },
      { label: "Spice Girls", correctSlot: "S2", logicNote: "The Spice Girls were a British band, but they were not a rock band." },
      { label: "Glam Rock", correctSlot: "S3", logicNote: "Glam rock is a rock style strongly tied to Britain, but it is not a band." },
      { label: "The Rolling Stones", correctSlot: "S4", logicNote: "The Rolling Stones are a British rock band.", fact: "The Rolling Stones formed in London in 1962." },
      { label: "Tour Van", correctSlot: null },
      { label: "Amplifier Stack", correctSlot: null },
      { label: "Tea Biscuit", correctSlot: null },
      { label: "Backstage Pass", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-27",
  easy: {
    title: "Animal + Black + White",
    difficultyEstimate: 84,
    labels: { A: "Animal", B: "Black", C: "White" },
    tiles: [
      { label: "Crow", correctSlot: "S1", logicNote: "A crow is a dark, black animal, but it is not white.", fact: "Crows can recognize individual human faces and even hold grudges against people who treat them poorly." },
      { label: "Polar Bear", correctSlot: "S2", logicNote: "A polar bear is an animal and white, but it is not black." },
      { label: "Piano Keys", correctSlot: "S3", logicNote: "Piano keys are black and white, but they are not an animal." },
      { label: "Panda", correctSlot: "S4", logicNote: "A panda is an animal with black-and-white coloring.", fact: "Giant pandas spend much of their day eating bamboo." },
      { label: "Zoo Keeper", correctSlot: null },
      { label: "Ink Bottle", correctSlot: null },
      { label: "Cotton Ball", correctSlot: null },
      { label: "Sand Dune", correctSlot: null }
    ]
  },
  medium: {
    title: "Book + Magic + British",
    difficultyEstimate: 58,
    labels: { A: "Book", B: "Magic", C: "British" },
    tiles: [
      { label: "The Wizard of Oz", correctSlot: "S1", logicNote: "The Wizard of Oz is a book with magic, but it is American rather than British." },
      { label: "Jane Eyre", correctSlot: "S2", logicNote: "Jane Eyre is a British book, but it is not a magic story." },
      { label: "Merlin", correctSlot: "S3", logicNote: "Merlin is a British-linked magic figure, but he is not a book himself." },
      { label: "Harry Potter", correctSlot: "S4", logicNote: "Harry Potter is a British book series centered on magic." },
      { label: "Library Ladder", correctSlot: null },
      { label: "Rabbit Hat", correctSlot: null },
      { label: "Red Phone Box", correctSlot: null },
      { label: "Quill Pen", correctSlot: null }
    ]
  },
  hard: {
    title: "Inventor + Airplane + American",
    difficultyEstimate: 42,
    labels: { A: "Inventor", B: "Airplane", C: "American" },
    tiles: [
      { label: "Sir George Cayley", correctSlot: "S1", logicNote: "Sir George Cayley was an aviation inventor, but he was British rather than American.", fact: "Cayley is often called a father of aeronautics." },
      { label: "George Washington Carver", correctSlot: "S2", logicNote: "George Washington Carver was an American inventor, but he is not associated with airplanes." },
      { label: "Charles Lindbergh", correctSlot: "S3", logicNote: "Charles Lindbergh was an American aviation figure, but he was not primarily an inventor." },
      { label: "Orville Wright", correctSlot: "S4", logicNote: "Orville Wright was an American inventor central to early airplane flight.", fact: "The Wright brothers' first powered flight took place in 1903." },
      { label: "Patent Sketch", correctSlot: null },
      { label: "Runway Light", correctSlot: null },
      { label: "Baseball Cap", correctSlot: null },
      { label: "Propeller Blade", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-26",
  easy: {
    title: "Animal + Pet + Small",
    difficultyEstimate: 83,
    labels: { A: "Animal", B: "Pet", C: "Small" },
    tiles: [
      { label: "Horse", correctSlot: "S1", logicNote: "A horse is an animal that can be a pet, but it is not small." },
      { label: "Ant", correctSlot: "S2", logicNote: "An ant is a small animal, but it is not normally a pet." },
      { label: "Tamagotchi", correctSlot: "S3", logicNote: "A Tamagotchi is a small handheld pet, but it is a digital toy rather than a living animal.", fact: "Tamagotchis launched in Japan in 1996 and sold over 80 million units worldwide." },
      { label: "Hamster", correctSlot: "S4", logicNote: "A hamster is a small animal commonly kept as a pet." },
      { label: "Barn Door", correctSlot: null },
      { label: "Dog Bed", correctSlot: null },
      { label: "Pebble Pile", correctSlot: null },
      { label: "Elephant Statue", correctSlot: null }
    ]
  },
  medium: {
    title: "Movie + New York + Music",
    difficultyEstimate: 60,
    labels: { A: "Movie", B: "New York", C: "Music" },
    tiles: [
      { label: "You've Got Mail", correctSlot: "S1", logicNote: "You've Got Mail is a movie set in New York, but it is not a music movie." },
      { label: "La La Land", correctSlot: "S2", logicNote: "La La Land is a movie musical, but it is not set in New York." },
      { label: "Carnegie Hall", correctSlot: "S3", logicNote: "Carnegie Hall is a New York music venue, but it is not a movie.", fact: "Carnegie Hall opened in 1891." },
      { label: "West Side Story", correctSlot: "S4", logicNote: "West Side Story is a New York-set musical movie." },
      { label: "Cinema Marquee", correctSlot: null },
      { label: "Subway Token", correctSlot: null },
      { label: "Sheet Music", correctSlot: null },
      { label: "Beach Resort", correctSlot: null }
    ]
  },
  hard: {
    title: "President + General + World War II",
    difficultyEstimate: 43,
    labels: { A: "President", B: "General", C: "World War II" },
    tiles: [
      { label: "Ulysses S. Grant", correctSlot: "S1", logicNote: "Ulysses S. Grant was both a president and a general, but he was not part of World War II." },
      { label: "Franklin D. Roosevelt", correctSlot: "S2", logicNote: "Franklin D. Roosevelt was a president during World War II, but he was not a general." },
      { label: "George Patton", correctSlot: "S3", logicNote: "George Patton was a World War II general, but he was not president." },
      { label: "Dwight D. Eisenhower", correctSlot: "S4", logicNote: "Dwight D. Eisenhower was a World War II general who later became president.", fact: "Eisenhower was Supreme Allied Commander in Europe during World War II." },
      { label: "Oval Desk", correctSlot: null },
      { label: "Four-Star Insignia", correctSlot: null },
      { label: "Ration Book", correctSlot: null },
      { label: "Battle Map", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-25",
  easy: {
    title: "School + Yellow + Writing",
    difficultyEstimate: 85,
    labels: { A: "School", B: "Yellow", C: "Writing" },
    tiles: [
      { label: "Crossing Guard Vest", correctSlot: "S1", logicNote: "A crossing guard vest is school-related and bright yellow, but it is not used for writing." },
      { label: "Essay Exam", correctSlot: "S2", logicNote: "An essay exam is school-related and involves writing, but it is not yellow." },
      { label: "Legal Pad", correctSlot: "S3", logicNote: "A legal pad is yellow paper used for writing, but it belongs to law offices rather than schools.", fact: "Legal pads are dyed yellow by tradition; one popular story credits an 1888 paper-mill worker who bound scraps of yellow paper for lawyers." },
      { label: "No. 2 Pencil", correctSlot: "S4", logicNote: "A No. 2 pencil is a yellow school tool used for writing.", fact: "Pencils were painted yellow starting in the 1890s to signal premium graphite from China, where yellow was an imperial color." },
      { label: "Sun Lamp", correctSlot: null },
      { label: "Chalkboard Eraser", correctSlot: null },
      { label: "Signature Line", correctSlot: null },
      { label: "Mountain Lake", correctSlot: null }
    ]
  },
  medium: {
    title: "Singer + Actor + Canadian",
    difficultyEstimate: 59,
    labels: { A: "Singer", B: "Actor", C: "Canadian" },
    tiles: [
      { label: "Lady Gaga", correctSlot: "S1", logicNote: "Lady Gaga is both a singer and an actor, but she is American rather than Canadian." },
      { label: "Celine Dion", correctSlot: "S2", logicNote: "Celine Dion is a Canadian singer, but she is not known primarily as an actor." },
      { label: "Ryan Reynolds", correctSlot: "S3", logicNote: "Ryan Reynolds is a Canadian actor, but not a singer." },
      { label: "Drake", correctSlot: "S4", logicNote: "Drake is a Canadian singer/rapper who also acted on Degrassi.", fact: "Before his music career, Drake played Jimmy Brooks on Degrassi: The Next Generation." },
      { label: "Concert Ticket", correctSlot: null },
      { label: "Casting Call", correctSlot: null },
      { label: "Maple Cookie", correctSlot: null },
      { label: "Tour Bus", correctSlot: null }
    ]
  },
  hard: {
    title: "Founder + Tech + Woman",
    difficultyEstimate: 42,
    labels: { A: "Founder", B: "Tech", C: "Woman" },
    tiles: [
      { label: "Steve Jobs", correctSlot: "S1", logicNote: "Steve Jobs was a tech founder, but he was not a woman." },
      { label: "Madam C.J. Walker", correctSlot: "S2", logicNote: "Madam C.J. Walker was a woman founder, but not a tech figure.", fact: "Walker is often cited as one of America's first self-made female millionaires." },
      { label: "Grace Hopper", correctSlot: "S3", logicNote: "Grace Hopper was a woman in computing technology, but she is not known as a company founder." },
      { label: "Whitney Wolfe Herd", correctSlot: "S4", logicNote: "Whitney Wolfe Herd is a woman tech founder, best known for Bumble.", fact: "Whitney Wolfe Herd became one of the youngest female CEOs to take a company public." },
      { label: "Launch Deck", correctSlot: null },
      { label: "Circuit Board", correctSlot: null },
      { label: "Pearl Necklace", correctSlot: null },
      { label: "Office Lease", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-24",
  easy: {
    title: "Water + Sport + Winter",
    difficultyEstimate: 84,
    labels: { A: "Water", B: "Sport", C: "Winter" },
    tiles: [
      { label: "Competitive Swimming", correctSlot: "S1", logicNote: "Competitive swimming is a water sport, but it is not a winter activity." },
      { label: "Frozen Pond", correctSlot: "S2", logicNote: "A frozen pond is water in winter, but it is not a sport." },
      { label: "Alpine Skiing", correctSlot: "S3", logicNote: "Alpine skiing is a winter sport, but it does not happen on water." },
      { label: "Ice Hockey", correctSlot: "S4", logicNote: "Ice hockey is a winter sport played on frozen water." },
      { label: "Water Bottle", correctSlot: null },
      { label: "Scoreboard Light", correctSlot: null },
      { label: "Wool Mittens", correctSlot: null },
      { label: "Summer Picnic", correctSlot: null }
    ]
  },
  medium: {
    title: "TV Show + Lawyer + Chicago",
    difficultyEstimate: 58,
    labels: { A: "TV Show", B: "Lawyer", C: "Chicago" },
    tiles: [
      { label: "Ally McBeal", correctSlot: "S1", logicNote: "Ally McBeal is a TV show about lawyers, but it is set in Boston rather than Chicago." },
      { label: "The Bear", correctSlot: "S2", logicNote: "The Bear is a TV show set in Chicago, but it is not about lawyers." },
      { label: "Chicago Bar Association", correctSlot: "S3", logicNote: "The Chicago Bar Association connects lawyers and Chicago, but it is not a TV show." },
      { label: "The Good Fight", correctSlot: "S4", logicNote: "The Good Fight is a TV legal drama set in Chicago." },
      { label: "Streaming Queue", correctSlot: null },
      { label: "Court Brief", correctSlot: null },
      { label: "Deep Dish Pan", correctSlot: null },
      { label: "Boston Common", correctSlot: null }
    ]
  },
  hard: {
        title: "Brand + Animal + Luxury",
        difficultyEstimate: 48,
        labels: { A: "Brand", B: "Animal", C: "Luxury" },
        tiles: [
          { label: "Puma", correctSlot: "S1", logicNote: "Puma is a brand named after an animal, but it is not a luxury brand." },
          { label: "Rolex", correctSlot: "S2", logicNote: "Rolex is a luxury brand, but it is not named after an animal." },
          { label: "Mink", correctSlot: "S3", logicNote: "Mink is an animal associated with luxury (fur coats), but it is not a brand." },
          { label: "Jaguar", correctSlot: "S4", logicNote: "Jaguar is a luxury car brand named after the big cat — it fits all three categories." },
          { label: "Coca-Cola", correctSlot: null },
          { label: "Goldfish", correctSlot: null },
          { label: "Diamond", correctSlot: null },
          { label: "Bicycle", correctSlot: null }
    ]
  }
},

  {
  date: "2026-05-23",
  easy: {
    title: "Red + Animal + Farm",
    difficultyEstimate: 84,
    labels: { A: "Red", B: "Animal", C: "Farm" },
    tiles: [
      { label: "Ladybug", correctSlot: "S1", logicNote: "A ladybug is an animal and is often red, but it is not a farm item.", fact: "Some ladybugs can eat dozens of aphids in a single day, which is why gardeners like having them around." },
      { label: "Strawberry Patch", correctSlot: "S2", logicNote: "A strawberry patch is red and farm-related, but the patch itself is not an animal." },
      { label: "Pig", correctSlot: "S3", logicNote: "A pig is an animal commonly found on farms, but it is not usually red." },
      { label: "Hereford Cow", correctSlot: "S4", logicNote: "A Hereford cow is a red-and-white farm animal, so it belongs in all three groups.", fact: "Hereford cattle are named for Herefordshire, England, where the breed was developed." },
      { label: "Fire Hydrant", correctSlot: null },
      { label: "Tractor Seat", correctSlot: null },
      { label: "House Cat", correctSlot: null },
      { label: "Mailbox", correctSlot: null }
    ]
  },
  medium: {
    title: "Movie + Ocean + 1970s",
    difficultyEstimate: 59,
    labels: { A: "Movie", B: "Ocean", C: "1970s" },
    tiles: [
      { label: "Moana", correctSlot: "S1", logicNote: "Moana is a movie with ocean travel at its center, but it was not released in the 1970s." },
      { label: "Rocky", correctSlot: "S2", logicNote: "Rocky is a 1970s movie, but it is not an ocean story.", fact: "Rocky won Best Picture for films released in 1976." },
      { label: "The Love Boat", correctSlot: "S3", logicNote: "The Love Boat is a 1970s ocean-set TV show, but it is not a movie." },
      { label: "Jaws (1975)", correctSlot: "S4", logicNote: "Jaws is a 1970s movie built around the ocean, so it hits all three categories.", fact: "Jaws helped create the modern summer blockbuster." },
      { label: "Ticket Stub", correctSlot: null },
      { label: "Harbor Light", correctSlot: null },
      { label: "Bell-Bottom Shirt", correctSlot: null },
      { label: "Mountain Cabin", correctSlot: null }
    ]
  },
  hard: {
    title: "Actor + Martial Artist + Hong Kong",
    difficultyEstimate: 42,
    labels: { A: "Actor", B: "Martial Artist", C: "Hong Kong" },
    tiles: [
      { label: "Chuck Norris", correctSlot: "S1", logicNote: "Chuck Norris is both an actor and a martial artist, but he is not from Hong Kong." },
      { label: "Tony Leung", correctSlot: "S2", logicNote: "Tony Leung is an actor strongly associated with Hong Kong cinema, but he is not known primarily as a martial artist.", fact: "Tony Leung won Best Actor at Cannes for In the Mood for Love." },
      { label: "Ip Man", correctSlot: "S3", logicNote: "Ip Man was a Hong Kong martial artist, but he was not primarily an actor." },
      { label: "Jackie Chan", correctSlot: "S4", logicNote: "Jackie Chan is a Hong Kong actor famous for martial arts action, so he belongs in all three groups.", fact: "Jackie Chan is known for doing many of his own stunts." },
      { label: "Movie Set", correctSlot: null },
      { label: "Karate Belt", correctSlot: null },
      { label: "Victoria Harbour", correctSlot: null },
      { label: "Stunt Double", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-22",
  easy: {
    title: "Morning + Drink + Hot",
    difficultyEstimate: 82,
    labels: { A: "Morning", B: "Drink", C: "Hot" },
    tiles: [
      { label: "Orange Juice", correctSlot: "S1", logicNote: "Orange juice is a morning drink, but it is not hot." },
      { label: "Toaster", correctSlot: "S2", logicNote: "A toaster is associated with morning and gets hot, but it is not a drink." },
      { label: "Mulled Wine", correctSlot: "S3", logicNote: "Mulled wine is a hot drink, but it is not a typical morning item." },
      { label: "Coffee", correctSlot: "S4", logicNote: "Coffee is a hot drink strongly associated with morning.", fact: "Coffee beans are seeds from the fruit of coffee plants." },
      { label: "Alarm Clock", correctSlot: null },
      { label: "Soda Can", correctSlot: null },
      { label: "Fireplace Poker", correctSlot: null },
      { label: "Nightlight", correctSlot: null }
    ]
  },
  medium: {
    title: "City + In USA + On a River",
    difficultyEstimate: 58,
    labels: { A: "City", B: "In USA", C: "On a River" },
    tiles: [
      { label: "Las Vegas", correctSlot: "S1", logicNote: "Las Vegas is a city in the United States, but it is not known as a river city." },
      { label: "Budapest", correctSlot: "S2", logicNote: "Budapest is a city on the Danube River, but it is not in the United States.", fact: "Budapest was formed in 1873 by uniting Buda, Pest, and Obuda." },
      { label: "Hoover Dam", correctSlot: "S3", logicNote: "Hoover Dam is in the United States and sits on the Colorado River, but it is not a city.", fact: "Hoover Dam creates Lake Mead, one of the largest reservoirs in the United States." },
      { label: "New Orleans", correctSlot: "S4", logicNote: "New Orleans is a U.S. city located on the Mississippi River." },
      { label: "Reykjavik", correctSlot: null },
      { label: "Mount Rushmore", correctSlot: null },
      { label: "Fly Fishing", correctSlot: null },
      { label: "Antarctica", correctSlot: null }
    ]
  },
  hard: {
    title: "Novel + Dystopian + British",
    difficultyEstimate: 43,
    labels: { A: "Novel", B: "Dystopian", C: "British" },
    tiles: [
      { label: "Fahrenheit 451", correctSlot: "S1", logicNote: "Fahrenheit 451 is a dystopian novel, but it is American rather than British.", fact: "Fahrenheit 451 was first published in 1953." },
      { label: "Pride and Prejudice", correctSlot: "S2", logicNote: "Pride and Prejudice is a British novel, but it is not dystopian." },
      { label: "Black Mirror", correctSlot: "S3", logicNote: "Black Mirror is British and often dystopian, but it is a TV series rather than a novel." },
      { label: "1984", correctSlot: "S4", logicNote: "1984 is a British dystopian novel, so it fits all three categories.", fact: "George Orwell's 1984 was published in 1949." },
      { label: "Book Cart",
        correctSlot: null },
      { label: "Warning Siren", correctSlot: null },
      { label: "Union Jack", correctSlot: null },
      { label: "Ink Bottle", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-21",
  easy: {
    title: "Outdoor + Wooden + Toy",
    difficultyEstimate: 84,
    labels: { A: "Outdoor", B: "Wooden", C: "Toy" },
    tiles: [
      { label: "Picnic Table", correctSlot: "S1" },
      { label: "Beach Ball", correctSlot: "S2" },
      { label: "Rocking Horse", correctSlot: "S3" },
      { label: "Treehouse", correctSlot: "S4" },
      { label: "Hiking Trail", correctSlot: null },
      { label: "Antique Dresser", correctSlot: null },
      { label: "Stuffed Teddy Bear", correctSlot: null },
      { label: "Refrigerator", correctSlot: null }
    ]
  },
  medium: {
    title: "Music + Computer + Apple",
    difficultyEstimate: 60,
    labels: { A: "Music", B: "Computer", C: "Apple" },
    tiles: [
      { label: "Spotify", correctSlot: "S1" },
      { label: "The Beatles", correctSlot: "S2" },
      { label: "Macintosh", correctSlot: "S3" },
      { label: "iTunes", correctSlot: "S4" },
      { label: "Guitar Amp", correctSlot: null },
      { label: "Linux", correctSlot: null },
      { label: "Granny Smith", correctSlot: null },
      { label: "Coffee Bean", correctSlot: null }
    ]
  },
  hard: {
    title: "King + French + Beheaded",
    difficultyEstimate: 45,
    labels: { A: "King", B: "French", C: "Beheaded" },
    tiles: [
      { label: "Louis XIV", correctSlot: "S1" },
      { label: "Charles I", correctSlot: "S2" },
      { label: "Marie Antoinette", correctSlot: "S3" },
      { label: "Louis XVI", correctSlot: "S4" },
      { label: "Henry VIII", correctSlot: null },
      { label: "Joan of Arc", correctSlot: null },
      { label: "Anne Boleyn", correctSlot: null },
      { label: "Robin Hood", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-20",
  easy: {
    title: "Yellow + Vehicle + Children",
    difficultyEstimate: 84,
    labels: { A: "Yellow", B: "Vehicle", C: "Children" },
    tiles: [
      { label: "NYC Cab", correctSlot: "S1" },
      { label: "Big Bird", correctSlot: "S2" },
      { label: "Tricycle", correctSlot: "S3" },
      { label: "School Bus", correctSlot: "S4" },
      { label: "Banana", correctSlot: null },
      { label: "Bicycle", correctSlot: null },
      { label: "Crayon Box", correctSlot: null },
      { label: "Parking Meter", correctSlot: null }
    ]
  },
  medium: {
    title: "Inventor + Italian + Renaissance",
    difficultyEstimate: 55,
    labels: { A: "Inventor", B: "Italian", C: "Renaissance" },
    tiles: [
      { label: "Alessandro Volta", correctSlot: "S1" },
      { label: "Johannes Gutenberg", correctSlot: "S2" },
      { label: "Michelangelo", correctSlot: "S3" },
      { label: "Leonardo da Vinci", correctSlot: "S4" },
      { label: "Thomas Edison", correctSlot: null },
      { label: "Gelato", correctSlot: null },
      { label: "William Shakespeare", correctSlot: null },
      { label: "Beethoven", correctSlot: null }
    ]
  },
  hard: {
    title: "Robot + Sci-Fi + Friendly",
    difficultyEstimate: 52,
    labels: { A: "Robot", B: "Sci-Fi", C: "Friendly" },
    tiles: [
      { label: "Terminator T-1000", correctSlot: "S1" },
      { label: "Roomba", correctSlot: "S2" },
      { label: "Yoda", correctSlot: "S3" },
      { label: "WALL-E", correctSlot: "S4" },
      { label: "Drone", correctSlot: null },
      { label: "Alien", correctSlot: null },
      { label: "Cuddly Teddy Bear", correctSlot: null },
      { label: "Coffee Maker", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-19",
  easy: {
    title: "Dog + Big + Fluffy",
    difficultyEstimate: 84,
    labels: { A: "Dog", B: "Big", C: "Fluffy" },
    tiles: [
      { label: "Great Dane", correctSlot: "S1" },
      { label: "Pomeranian", correctSlot: "S2" },
      { label: "Polar Bear", correctSlot: "S3" },
      { label: "Saint Bernard", correctSlot: "S4" },
      { label: "Pug", correctSlot: null },
      { label: "Elephant", correctSlot: null },
      { label: "Cotton Ball", correctSlot: null },
      { label: "Lizard", correctSlot: null }
    ]
  },
  medium: {
    title: "Video Game + Animal + Blue",
    difficultyEstimate: 61,
    labels: { A: "Video Game", B: "Animal", C: "Blue" },
    tiles: [
      { label: "Donkey Kong", correctSlot: "S1" },
      { label: "Mega Man", correctSlot: "S2" },
      { label: "Peacock", correctSlot: "S3" },
      { label: "Sonic the Hedgehog", correctSlot: "S4" },
      { label: "Game Controller", correctSlot: null },
      { label: "Safari Hat", correctSlot: null },
      { label: "Denim Jeans", correctSlot: null },
      { label: "Speed Shoes", correctSlot: null }
    ]
  },
  hard: {
    title: "Poet + Female + Civil Rights",
    difficultyEstimate: 53,
    labels: { A: "Poet", B: "Female", C: "Civil Rights" },
    tiles: [
      { label: "Sylvia Plath", correctSlot: "S1" },
      { label: "Langston Hughes", correctSlot: "S2" },
      { label: "Rosa Parks", correctSlot: "S3" },
      { label: "Maya Angelou", correctSlot: "S4" },
      { label: "Walt Whitman", correctSlot: null },
      { label: "Marilyn Monroe", correctSlot: null },
      { label: "Martin Luther King Jr.", correctSlot: null },
      { label: "Library Card", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-18",
  easy: {
    title: "Cold + Food + White",
    difficultyEstimate: 84,
    labels: { A: "Cold", B: "Food", C: "White" },
    tiles: [
      { label: "Ice Pop", correctSlot: "S1" },
      { label: "Snowball", correctSlot: "S2" },
      { label: "Rice", correctSlot: "S3" },
      { label: "Vanilla Ice Cream", correctSlot: "S4" },
      { label: "Winter Coat", correctSlot: null },
      { label: "Dinner Plate", correctSlot: null },
      { label: "Chalk Dust", correctSlot: null },
      { label: "Candle", correctSlot: null }
    ]
  },
  medium: {
    title: "Country + Desert + Africa",
    difficultyEstimate: 59,
    labels: { A: "Country", B: "Desert", C: "Africa" },
    tiles: [
      { label: "Saudi Arabia", correctSlot: "S1" },
      { label: "Nigeria", correctSlot: "S2" },
      { label: "Kalahari Desert", correctSlot: "S3" },
      { label: "Egypt", correctSlot: "S4" },
      { label: "Flagpole", correctSlot: null },
      { label: "Cactus Garden", correctSlot: null },
      { label: "Safari Jeep", correctSlot: null },
      { label: "Ocean Reef", correctSlot: null }
    ]
  },
  hard: {
    title: "Sitcom + NYC + 90s",
    difficultyEstimate: 52,
    labels: { A: "Sitcom", B: "NYC", C: "90s" },
    tiles: [
      { label: "How I Met Your Mother", correctSlot: "S1" },
      { label: "Frasier", correctSlot: "S2" },
      { label: "Rudy Giuliani", correctSlot: "S3" },
      { label: "Friends", correctSlot: "S4" },
      { label: "Studio Audience", correctSlot: null },
      { label: "Yellow Cab", correctSlot: null },
      { label: "Tamagotchi", correctSlot: null },
      { label: "Coffee Mug", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-17",
  easy: {
    title: "Round + Food + Hole",
    difficultyEstimate: 83,
    labels: { A: "Round", B: "Food", C: "Hole" },
    tiles: [
      { label: "Meatball", correctSlot: "S1" },
      { label: "Tire", correctSlot: "S2" },
      { label: "Honeycomb", correctSlot: "S3" },
      { label: "Donut", correctSlot: "S4" },
      { label: "Clock Face", correctSlot: null },
      { label: "Hot Dog", correctSlot: null },
      { label: "Cave", correctSlot: null },
      { label: "Paper Square", correctSlot: null }
    ]
  },
  medium: {
    title: "Game + Card + Magic",
    difficultyEstimate: 58,
    labels: { A: "Game", B: "Card", C: "Magic" },
    tiles: [
      { label: "Poker", correctSlot: "S1" },
      { label: "Dungeons & Dragons", correctSlot: "S2" },
      { label: "Tarot Deck", correctSlot: "S3" },
      { label: "Yu-Gi-Oh", correctSlot: "S4" },
      { label: "Dice Tower", correctSlot: null },
      { label: "Greeting Card", correctSlot: null },
      { label: "Top Hat", correctSlot: null },
      { label: "Bookmark", correctSlot: null }
    ]
  },
  hard: {
    title: "Painter + Spanish + Surrealist",
    difficultyEstimate: 46,
    labels: { A: "Painter", B: "Spanish", C: "Surrealist" },
    tiles: [
      { label: "Francisco Goya", correctSlot: "S1" },
      { label: "René Magritte", correctSlot: "S2" },
      { label: "Luis Buñuel", correctSlot: "S3" },
      { label: "Salvador Dalí", correctSlot: "S4" },
      { label: "Andy Warhol", correctSlot: null },
      { label: "Flamenco Dance", correctSlot: null },
      { label: "Daydream", correctSlot: null },
      { label: "Lighthouse", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-16",
  easy: {
    title: "Sports + Ball + Orange",
    difficultyEstimate: 85,
    labels: { A: "Sports", B: "Ball", C: "Orange" },
    tiles: [
      { label: "Soccer", correctSlot: "S1" },
      { label: "Hunter Vest", correctSlot: "S2" },
      { label: "Cheese Ball", correctSlot: "S3" },
      { label: "Basketball", correctSlot: "S4" },
      { label: "Referee Shirt", correctSlot: null },
      { label: "Crystal Ball", correctSlot: null },
      { label: "Carrot", correctSlot: null },
      { label: "Score Sheet", correctSlot: null }
    ]
  },
  medium: {
    title: "Book + Dragon + Movie",
    difficultyEstimate: 58,
    labels: { A: "Book", B: "Dragon", C: "Movie" },
    tiles: [
      { label: "A Song of Ice and Fire", correctSlot: "S1" },
      { label: "The Great Gatsby", correctSlot: "S2" },
      { label: "Reign of Fire", correctSlot: "S3" },
      { label: "The Hobbit", correctSlot: "S4" },
      { label: "Bookmark Tassel", correctSlot: null },
      { label: "Castle Tower", correctSlot: null },
      { label: "Cinema Pass", correctSlot: null },
      { label: "Knight Helmet", correctSlot: null }
    ]
  },
  hard: {
    title: "Dinosaur + Carnivore + Cretaceous",
    difficultyEstimate: 48,
    labels: { A: "Dinosaur", B: "Carnivore", C: "Cretaceous" },
    tiles: [
      { label: "Allosaurus", correctSlot: "S1" },
      { label: "Triceratops", correctSlot: "S2" },
      { label: "Mosasaurus", correctSlot: "S3" },
      { label: "Tyrannosaurus Rex", correctSlot: "S4" },
      { label: "Apatosaurus", correctSlot: null },
      { label: "Saber-Tooth Cat", correctSlot: null },
      { label: "Asteroid Impact", correctSlot: null },
      { label: "Fossil Footprint", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-15",
  easy: {
    title: "Striped + Black + Animal",
    difficultyEstimate: 84,
    labels: { A: "Striped", B: "Black", C: "Animal" },
    tiles: [
      { label: "Referee Shirt", correctSlot: "S1" },
      { label: "Chipmunk", correctSlot: "S2" },
      { label: "Raven", correctSlot: "S3" },
      { label: "Skunk", correctSlot: "S4" },
      { label: "Candy Cane", correctSlot: null },
      { label: "Tuxedo", correctSlot: null },
      { label: "Brown Bear", correctSlot: null },
      { label: "American Flag", correctSlot: null }
    ]
  },
  medium: {
    title: "Cheese + French + Soft",
    difficultyEstimate: 60,
    labels: { A: "Cheese", B: "French", C: "Soft" },
    tiles: [
      { label: "Comté", correctSlot: "S1" },
      { label: "Mozzarella", correctSlot: "S2" },
      { label: "Croissant", correctSlot: "S3" },
      { label: "Brie", correctSlot: "S4" },
      { label: "Cheddar", correctSlot: null },
      { label: "Eiffel Tower", correctSlot: null },
      { label: "Marshmallow", correctSlot: null },
      { label: "Pillow", correctSlot: null }
    ]
  },
  hard: {
    title: "Director + Horror + Canadian",
    difficultyEstimate: 43,
    labels: { A: "Director", B: "Horror", C: "Canadian" },
    tiles: [
      { label: "John Carpenter", correctSlot: "S1" },
      { label: "Denis Villeneuve", correctSlot: "S2" },
      { label: "Ginger Snaps", correctSlot: "S3" },
      { label: "David Cronenberg", correctSlot: "S4" },
      { label: "Maple Leaf", correctSlot: null },
      { label: "Camera Lens", correctSlot: null },
      { label: "Haunted Mask", correctSlot: null },
      { label: "Film Festival", correctSlot: null }
    ]
  }
},
  {
  date: "2026-05-14",
  easy: {
    title: "Red + Fruit + Small",
    difficultyEstimate: 86,
    labels: { A: "Red", B: "Fruit", C: "Small" },
    tiles: [
      { label: "Pomegranate", correctSlot: "S1" },
      { label: "Ruby", correctSlot: "S2" },
      { label: "Blueberry", correctSlot: "S3" },
      { label: "Cherry", correctSlot: "S4" },
      { label: "Fire Truck", correctSlot: null },
      { label: "Coconut", correctSlot: null },
      { label: "Pebble", correctSlot: null },
      { label: "Coffee Mug", correctSlot: null }
    ]
  },
  medium: {
    title: "Office + Digital + Message",
    difficultyEstimate: 62,
    labels: { A: "Office", B: "Digital", C: "Message" },
    tiles: [
      { label: "Spreadsheet", correctSlot: "S1" },
      { label: "Memo Pad", correctSlot: "S2" },
      { label: "Snapchat", correctSlot: "S3" },
      { label: "Email", correctSlot: "S4" },
      { label: "Filing Cabinet", correctSlot: null },
      { label: "Bitcoin", correctSlot: null },
      { label: "Carrier Pigeon", correctSlot: null },
      { label: "Houseplant", correctSlot: null }
    ]
  },
  hard: {
    title: "Singer + One-Name + American",
    difficultyEstimate: 48,
    labels: { A: "Singer", B: "One-Name", C: "American" },
    tiles: [
      { label: "Adele", correctSlot: "S1" },
      { label: "Taylor Swift", correctSlot: "S2" },
      { label: "Oprah", correctSlot: "S3" },
      { label: "Beyoncé", correctSlot: "S4" },
      { label: "Justin Bieber", correctSlot: null },
      { label: "Statue of Liberty", correctSlot: null },
      { label: "Cleopatra", correctSlot: null },
      { label: "Tour Bus", correctSlot: null }
    ]
  }
},

  {
  date: "2026-05-13",
  easy: {
    title: "Bird + Can Fly + Tropical",
    difficultyEstimate: 82,
    labels: {
      A: "Bird",
      B: "Can Fly",
      C: "Tropical"
    },
    tiles: [
      {
        label: "Bald Eagle",
        correctSlot: "S1"
      },
      {
        label: "Cassowary",
        correctSlot: "S2"
      },
      {
        label: "Blue Morpho Butterfly",
        correctSlot: "S3"
      },
      {
        label: "Toucan",
        correctSlot: "S4"
      },
      {
        label: "Penguin",
        correctSlot: null
      },
      {
        label: "Airplane",
        correctSlot: null
      },
      {
        label: "Palm Tree",
        correctSlot: null
      },
      {
        label: "Pyramids of Giza",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Country + Island + In Europe",
    difficultyEstimate: 60,
    labels: {
      A: "Country",
      B: "Island",
      C: "In Europe"
    },
    tiles: [
      {
        label: "Madagascar",
        correctSlot: "S1"
      },
      {
        label: "Spain",
        correctSlot: "S2"
      },
      {
        label: "Sicily",
        correctSlot: "S3"
      },
      {
        label: "Iceland",
        correctSlot: "S4"
      },
      {
        label: "Mongolia",
        correctSlot: null
      },
      {
        label: "Hawaii",
        correctSlot: null
      },
      {
        label: "Athens",
        correctSlot: null
      },
      {
        label: "Sahara Desert",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Author + Russian + 19th Century",
    difficultyEstimate: 43,
    labels: {
      A: "Author",
      B: "Russian",
      C: "19th Century"
    },
    tiles: [
      {
        label: "Aleksandr Solzhenitsyn",
        correctSlot: "S1"
      },
      {
        label: "Charles Dickens",
        correctSlot: "S2"
      },
      {
        label: "Tchaikovsky",
        correctSlot: "S3"
      },
      {
        label: "Leo Tolstoy",
        correctSlot: "S4"
      },
      {
        label: "William Shakespeare",
        correctSlot: null
      },
      {
        label: "Vladimir Putin",
        correctSlot: null
      },
      {
        label: "Napoleon Bonaparte",
        correctSlot: null
      },
      {
        label: "Albert Einstein",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-12",
  easy: {
    title: "Cartoon + Yellow + Has Tail",
    difficultyEstimate: 82,
    labels: {
      A: "Cartoon",
      B: "Yellow",
      C: "Has Tail"
    },
    tiles: [
      {
        label: "Bart Simpson",
        correctSlot: "S1"
      },
      {
        label: "Scooby-Doo",
        correctSlot: "S2"
      },
      {
        label: "Canary",
        correctSlot: "S3"
      },
      {
        label: "Pikachu",
        correctSlot: "S4"
      },
      {
        label: "Lemon",
        correctSlot: null
      },
      {
        label: "Hello Kitty",
        correctSlot: null
      },
      {
        label: "Squirrel",
        correctSlot: null
      },
      {
        label: "Stop Sign",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Coffee + Italian + Machine",
    difficultyEstimate: 62,
    labels: {
      A: "Coffee",
      B: "Italian",
      C: "Machine"
    },
    tiles: [
      {
        label: "Cappuccino",
        correctSlot: "S1"
      },
      {
        label: "Keurig",
        correctSlot: "S2"
      },
      {
        label: "Vespa Scooter",
        correctSlot: "S3"
      },
      {
        label: "Moka Pot",
        correctSlot: "S4"
      },
      {
        label: "Tea Bag",
        correctSlot: null
      },
      {
        label: "Pasta Fork",
        correctSlot: null
      },
      {
        label: "Gearbox",
        correctSlot: null
      },
      {
        label: "Cafe Table",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Mythology + Music + Underworld",
    difficultyEstimate: 42,
    labels: {
      A: "Mythology",
      B: "Music",
      C: "Underworld"
    },
    tiles: [
      {
        label: "Pan's Pipes",
        correctSlot: "S1"
      },
      {
        label: "Persephone",
        correctSlot: "S2"
      },
      {
        label: "Funeral March",
        correctSlot: "S3"
      },
      {
        label: "Orpheus",
        correctSlot: "S4"
      },
      {
        label: "Bagpipes",
        correctSlot: null
      },
      {
        label: "Cemetery Gate",
        correctSlot: null
      },
      {
        label: "Zeus",
        correctSlot: null
      },
      {
        label: "Rock Concert",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-11",
  easy: {
    title: "Tool + Sharp + Kitchen",
    difficultyEstimate: 82,
    labels: {
      A: "Tool",
      B: "Sharp",
      C: "Kitchen"
    },
    tiles: [
      {
        label: "Hedge Shears",
        correctSlot: "S1"
      },
      {
        label: "Whisk",
        correctSlot: "S2"
      },
      {
        label: "Horseradish",
        correctSlot: "S3"
      },
      {
        label: "Chef's Knife",
        correctSlot: "S4"
      },
      {
        label: "Hammer",
        correctSlot: null
      },
      {
        label: "Cookbook",
        correctSlot: null
      },
      {
        label: "Cactus Spike",
        correctSlot: null
      },
      {
        label: "Beach Ball",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Ocean + Music + 1960s",
    difficultyEstimate: 59,
    labels: {
      A: "Ocean",
      B: "Music",
      C: "1960s"
    },
    tiles: [
      {
        label: "Sea Shanty",
        correctSlot: "S1"
      },
      {
        label: "Apollo 11 Splashdown",
        correctSlot: "S2"
      },
      {
        label: "Motown",
        correctSlot: "S3"
      },
      {
        label: "The Beach Boys",
        correctSlot: "S4"
      },
      {
        label: "Harbor Buoy",
        correctSlot: null
      },
      {
        label: "Go-Go Boots",
        correctSlot: null
      },
      {
        label: "Tie-Dye Shirt",
        correctSlot: null
      },
      {
        label: "Coral",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Poet + Doctor + American",
    difficultyEstimate: 44,
    labels: {
      A: "Poet",
      B: "Doctor",
      C: "American"
    },
    tiles: [
      {
        label: "John Keats",
        correctSlot: "S1"
      },
      {
        label: "Emily Dickinson",
        correctSlot: "S2"
      },
      {
        label: "Benjamin Rush",
        correctSlot: "S3"
      },
      {
        label: "William Carlos Williams",
        correctSlot: "S4"
      },
      {
        label: "Stanza",
        correctSlot: null
      },
      {
        label: "Prescription Pad",
        correctSlot: null
      },
      {
        label: "Fourth of July",
        correctSlot: null
      },
      {
        label: "Hospital Bracelet",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-10",
  easy: {
    title: "Weather + Clothing + Waterproof",
    difficultyEstimate: 83,
    labels: {
      A: "Weather",
      B: "Clothing",
      C: "Waterproof"
    },
    tiles: [
      {
        label: "Scarf",
        correctSlot: "S1"
      },
      {
        label: "Storm Window",
        correctSlot: "S2"
      },
      {
        label: "Wetsuit",
        correctSlot: "S3"
      },
      {
        label: "Raincoat",
        correctSlot: "S4"
      },
      {
        label: "Cloud Icon",
        correctSlot: null
      },
      {
        label: "T-Shirt",
        correctSlot: null
      },
      {
        label: "Plastic Wrap",
        correctSlot: null
      },
      {
        label: "Thermostat",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "TV Show + Hospital + Comedy",
    difficultyEstimate: 58,
    labels: {
      A: "TV Show",
      B: "Hospital",
      C: "Comedy"
    },
    tiles: [
      {
        label: "ER",
        correctSlot: "S1"
      },
      {
        label: "Parks and Recreation",
        correctSlot: "S2"
      },
      {
        label: "Clown Doctor",
        correctSlot: "S3"
      },
      {
        label: "Scrubs",
        correctSlot: "S4"
      },
      {
        label: "Episode List",
        correctSlot: null
      },
      {
        label: "Medical Chart",
        correctSlot: null
      },
      {
        label: "Punchline",
        correctSlot: null
      },
      {
        label: "Waiting Room",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "President + Lawyer + Illinois",
    difficultyEstimate: 43,
    labels: {
      A: "President",
      B: "Lawyer",
      C: "Illinois"
    },
    tiles: [
      {
        label: "Bill Clinton",
        correctSlot: "S1"
      },
      {
        label: "Ronald Reagan",
        correctSlot: "S2"
      },
      {
        label: "Clarence Darrow",
        correctSlot: "S3"
      },
      {
        label: "Barack Obama",
        correctSlot: "S4"
      },
      {
        label: "White House",
        correctSlot: null
      },
      {
        label: "Law School",
        correctSlot: null
      },
      {
        label: "Chicago Flag",
        correctSlot: null
      },
      {
        label: "Debate Podium",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-09",
  easy: {
    title: "Dog + Small + Asia",
    difficultyEstimate: 80,
    labels: {
      A: "Dog",
      B: "Small",
      C: "Asia"
    },
    tiles: [
      {
        label: "Chihuahua",
        correctSlot: "S1"
      },
      {
        label: "Akita",
        correctSlot: "S2"
      },
      {
        label: "Bonsai Tree",
        correctSlot: "S3"
      },
      {
        label: "Shih Tzu",
        correctSlot: "S4"
      },
      {
        label: "Great Dane",
        correctSlot: null
      },
      {
        label: "Mount Fuji",
        correctSlot: null
      },
      {
        label: "Mouse",
        correctSlot: null
      },
      {
        label: "Pyramid",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Beverage + Fermented + Asian",
    difficultyEstimate: 58,
    labels: {
      A: "Beverage",
      B: "Fermented",
      C: "Asian"
    },
    tiles: [
      {
        label: "Beer",
        correctSlot: "S1"
      },
      {
        label: "Bubble Tea",
        correctSlot: "S2"
      },
      {
        label: "Kimchi",
        correctSlot: "S3"
      },
      {
        label: "Sake",
        correctSlot: "S4"
      },
      {
        label: "Soda Pop",
        correctSlot: null
      },
      {
        label: "Sourdough Bread",
        correctSlot: null
      },
      {
        label: "Chopsticks",
        correctSlot: null
      },
      {
        label: "Glass Mug",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Spanish + Painter + Surrealist",
    difficultyEstimate: 42,
    labels: {
      A: "Spanish",
      B: "Painter",
      C: "Surrealist"
    },
    tiles: [
      {
        label: "Diego Velázquez",
        correctSlot: "S1"
      },
      {
        label: "Luis Buñuel",
        correctSlot: "S2"
      },
      {
        label: "René Magritte",
        correctSlot: "S3"
      },
      {
        label: "Salvador Dalí",
        correctSlot: "S4"
      },
      {
        label: "Diego Rivera",
        correctSlot: null
      },
      {
        label: "André Breton",
        correctSlot: null
      },
      {
        label: "Flamenco Dancer",
        correctSlot: null
      },
      {
        label: "Sigmund Freud",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-08",
  easy: {
    title: "Green + Vegetable + Long",
    difficultyEstimate: 85,
    labels: {
      A: "Green",
      B: "Vegetable",
      C: "Long"
    },
    tiles: [
      {
        label: "Broccoli",
        correctSlot: "S1"
      },
      {
        label: "Green Snake",
        correctSlot: "S2"
      },
      {
        label: "Parsnip",
        correctSlot: "S3"
      },
      {
        label: "Cucumber",
        correctSlot: "S4"
      },
      {
        label: "Grass",
        correctSlot: null
      },
      {
        label: "Potato",
        correctSlot: null
      },
      {
        label: "Measuring Tape",
        correctSlot: null
      },
      {
        label: "Stoplight",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Movie + Christmas + Ghost",
    difficultyEstimate: 57,
    labels: {
      A: "Movie",
      B: "Christmas",
      C: "Ghost"
    },
    tiles: [
      {
        label: "The Polar Express",
        correctSlot: "S1"
      },
      {
        label: "The Sixth Sense",
        correctSlot: "S2"
      },
      {
        label: "Ghost of Christmas Past",
        correctSlot: "S3"
      },
      {
        label: "A Christmas Carol",
        correctSlot: "S4"
      },
      {
        label: "Tinsel Garland",
        correctSlot: null
      },
      {
        label: "Haunted House",
        correctSlot: null
      },
      {
        label: "Cinema Seat",
        correctSlot: null
      },
      {
        label: "Snow Globe",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Dish + Spicy + Mexican",
    difficultyEstimate: 45,
    labels: {
      A: "Dish",
      B: "Spicy",
      C: "Mexican"
    },
    tiles: [
      {
        label: "Vindaloo",
        correctSlot: "S1"
      },
      {
        label: "Cheese Quesadilla",
        correctSlot: "S2"
      },
      {
        label: "Habanero Pepper",
        correctSlot: "S3"
      },
      {
        label: "Mole Poblano",
        correctSlot: "S4"
      },
      {
        label: "Mac and Cheese",
        correctSlot: null
      },
      {
        label: "Sombrero",
        correctSlot: null
      },
      {
        label: "Wasabi Paste",
        correctSlot: null
      },
      {
        label: "Mariachi Band",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-07",
  easy: {
    title: "Wood + Furniture + Has Legs",
    difficultyEstimate: 83,
    labels: {
      A: "Wood",
      B: "Furniture",
      C: "Has Legs"
    },
    tiles: [
      {
        label: "Wooden Bookshelf",
        correctSlot: "S1"
      },
      {
        label: "Wooden Stilts",
        correctSlot: "S2"
      },
      {
        label: "Metal Bar Stool",
        correctSlot: "S3"
      },
      {
        label: "Wooden Dining Table",
        correctSlot: "S4"
      },
      {
        label: "Pencil",
        correctSlot: null
      },
      {
        label: "Beanbag Chair",
        correctSlot: null
      },
      {
        label: "Camera Tripod",
        correctSlot: null
      },
      {
        label: "Cardboard Box",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Pixar + Sequel + Animal",
    difficultyEstimate: 60,
    labels: {
      A: "Pixar",
      B: "Sequel",
      C: "Animal"
    },
    tiles: [
      {
        label: "Toy Story 2",
        correctSlot: "S1"
      },
      {
        label: "Ratatouille",
        correctSlot: "S2"
      },
      {
        label: "Madagascar 2",
        correctSlot: "S3"
      },
      {
        label: "Finding Dory",
        correctSlot: "S4"
      },
      {
        label: "Steve Jobs",
        correctSlot: null
      },
      {
        label: "The Godfather Part II",
        correctSlot: null
      },
      {
        label: "The Lion King (1994)",
        correctSlot: null
      },
      {
        label: "Coco",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Composer + Deaf + German",
    difficultyEstimate: 43,
    labels: {
      A: "Composer",
      B: "Deaf",
      C: "German"
    },
    tiles: [
      {
        label: "Bedrich Smetana",
        correctSlot: "S1"
      },
      {
        label: "Johannes Brahms",
        correctSlot: "S2"
      },
      {
        label: "German Sign Language",
        correctSlot: "S3"
      },
      {
        label: "Beethoven",
        correctSlot: "S4"
      },
      {
        label: "Piano Bench",
        correctSlot: null
      },
      {
        label: "Ear Trumpet",
        correctSlot: null
      },
      {
        label: "Bavarian Flag",
        correctSlot: null
      },
      {
        label: "Symphony Hall",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-06",
  easy: {
    title: "Blue + Water + Animal",
    difficultyEstimate: 84,
    labels: {
      A: "Blue",
      B: "Water",
      C: "Animal"
    },
    tiles: [
      {
        label: "Blue Lagoon",
        correctSlot: "S1"
      },
      {
        label: "Blue Jay",
        correctSlot: "S2"
      },
      {
        label: "River Otter",
        correctSlot: "S3"
      },
      {
        label: "Blue Whale",
        correctSlot: "S4"
      },
      {
        label: "Indigo Dye",
        correctSlot: null
      },
      {
        label: "Drinking Fountain",
        correctSlot: null
      },
      {
        label: "Puppy",
        correctSlot: null
      },
      {
        label: "Paper Clip",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "School + Paper + Sticky",
    difficultyEstimate: 63,
    labels: {
      A: "School",
      B: "Paper",
      C: "Sticky"
    },
    tiles: [
      {
        label: "Composition Book",
        correctSlot: "S1"
      },
      {
        label: "Glue Stick",
        correctSlot: "S2"
      },
      {
        label: "Post-it Note",
        correctSlot: "S3"
      },
      {
        label: "Sticker Book",
        correctSlot: "S4"
      },
      {
        label: "Chalkboard",
        correctSlot: null
      },
      {
        label: "Origami Crane",
        correctSlot: null
      },
      {
        label: "Honey Jar",
        correctSlot: null
      },
      {
        label: "Locker Key",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Scientist + Nobel + Jewish",
    difficultyEstimate: 42,
    labels: {
      A: "Scientist",
      B: "Nobel",
      C: "Jewish"
    },
    tiles: [
      {
        label: "Marie Curie",
        correctSlot: "S1"
      },
      {
        label: "Rosalind Franklin",
        correctSlot: "S2"
      },
      {
        label: "Saul Bellow",
        correctSlot: "S3"
      },
      {
        label: "Albert Einstein",
        correctSlot: "S4"
      },
      {
        label: "Lab Notebook",
        correctSlot: null
      },
      {
        label: "Torah Scroll",
        correctSlot: null
      },
      {
        label: "Peace Medal",
        correctSlot: null
      },
      {
        label: "Telescope Lens",
        correctSlot: null
      }
    ]
  }
},

  {
  date: "2026-05-05",
  easy: {
    title: "Sweet + Drink + Hot",
    difficultyEstimate: 82,
    labels: {
      A: "Sweet",
      B: "Drink",
      C: "Hot"
    },
    tiles: [
      {
        label: "Lemonade",
        correctSlot: "S1"
      },
      {
        label: "Apple Pie",
        correctSlot: "S2"
      },
      {
        label: "Black Coffee",
        correctSlot: "S3"
      },
      {
        label: "Hot Chocolate",
        correctSlot: "S4"
      },
      {
        label: "Sugar Cube",
        correctSlot: null
      },
      {
        label: "Unsweetened Iced Tea",
        correctSlot: null
      },
      {
        label: "Sauna",
        correctSlot: null
      },
      {
        label: "Salt Shaker",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Superhero + Has Powers + Marvel",
    difficultyEstimate: 60,
    labels: {
      A: "Superhero",
      B: "Has Powers",
      C: "Marvel"
    },
    tiles: [
      {
        label: "Wonder Woman",
        correctSlot: "S1"
      },
      {
        label: "Hawkeye",
        correctSlot: "S2"
      },
      {
        label: "Magneto",
        correctSlot: "S3"
      },
      {
        label: "Spider-Man",
        correctSlot: "S4"
      },
      {
        label: "Batman",
        correctSlot: null
      },
      {
        label: "Gandalf",
        correctSlot: null
      },
      {
        label: "Stan Lee",
        correctSlot: null
      },
      {
        label: "The Joker",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Capital + Has Metro + South America",
    difficultyEstimate: 44,
    labels: {
      A: "Capital",
      B: "Has Metro",
      C: "South America"
    },
    tiles: [
      {
        label: "London",
        correctSlot: "S1"
      },
      {
        label: "Asunción",
        correctSlot: "S2"
      },
      {
        label: "Medellín",
        correctSlot: "S3"
      },
      {
        label: "Buenos Aires",
        correctSlot: "S4"
      },
      {
        label: "New York City",
        correctSlot: null
      },
      {
        label: "Iguazu Falls",
        correctSlot: null
      },
      {
        label: "Sahara Desert",
        correctSlot: null
      },
      {
        label: "Eiffel Tower",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-04",
  easy: {
    title: "Space + Movie + Robot",
    difficultyEstimate: 80,
    labels: {
      A: "Space",
      B: "Movie",
      C: "Robot"
    },
    tiles: [
      {
        label: "Gravity",
        correctSlot: "S1"
      },
      {
        label: "Mars Rover",
        correctSlot: "S2"
      },
      {
        label: "Big Hero 6",
        correctSlot: "S3"
      },
      {
        label: "R2-D2",
        correctSlot: "S4"
      },
      {
        label: "Telescope",
        correctSlot: null
      },
      {
        label: "Clapperboard",
        correctSlot: null
      },
      {
        label: "Vacuum Cleaner",
        correctSlot: null
      },
      {
        label: "Astronaut Glove",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Paris + Art + Museum",
    difficultyEstimate: 61,
    labels: {
      A: "Paris",
      B: "Art",
      C: "Museum"
    },
    tiles: [
      {
        label: "Montmartre",
        correctSlot: "S1"
      },
      {
        label: "Paris Sewer Museum",
        correctSlot: "S2"
      },
      {
        label: "MoMA",
        correctSlot: "S3"
      },
      {
        label: "Louvre",
        correctSlot: "S4"
      },
      {
        label: "Metro Ticket",
        correctSlot: null
      },
      {
        label: "Paintbrush",
        correctSlot: null
      },
      {
        label: "Gift Shop",
        correctSlot: null
      },
      {
        label: "Croque Monsieur",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Reptile + Venomous + Australia",
    difficultyEstimate: 44,
    labels: {
      A: "Reptile",
      B: "Venomous",
      C: "Australia"
    },
    tiles: [
      {
        label: "King Cobra",
        correctSlot: "S1"
      },
      {
        label: "Frilled Lizard",
        correctSlot: "S2"
      },
      {
        label: "Box Jellyfish",
        correctSlot: "S3"
      },
      {
        label: "Inland Taipan",
        correctSlot: "S4"
      },
      {
        label: "Iguana",
        correctSlot: null
      },
      {
        label: "Dingo",
        correctSlot: null
      },
      {
        label: "Black Widow Spider",
        correctSlot: null
      },
      {
        label: "Wombat",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-03",
  easy: {
    title: "Halloween + Orange + Round",
    difficultyEstimate: 84,
    labels: {
      A: "Halloween",
      B: "Orange",
      C: "Round"
    },
    tiles: [
      {
        label: "Candy Corn",
        correctSlot: "S1"
      },
      {
        label: "Witch's Cauldron",
        correctSlot: "S2"
      },
      {
        label: "Basketball",
        correctSlot: "S3"
      },
      {
        label: "Pumpkin",
        correctSlot: "S4"
      },
      {
        label: "Spider Web",
        correctSlot: null
      },
      {
        label: "Carrot",
        correctSlot: null
      },
      {
        label: "Frisbee",
        correctSlot: null
      },
      {
        label: "Skateboard",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Cartoon + Talking Animal + 1990s",
    difficultyEstimate: 60,
    labels: {
      A: "Cartoon",
      B: "Talking Animal",
      C: "1990s"
    },
    tiles: [
      {
        label: "Bugs Bunny",
        correctSlot: "S1"
      },
      {
        label: "The Simpsons",
        correctSlot: "S2"
      },
      {
        label: "Babe (the movie)",
        correctSlot: "S3"
      },
      {
        label: "The Lion King",
        correctSlot: "S4"
      },
      {
        label: "Tamagotchi",
        correctSlot: null
      },
      {
        label: "Charlie Brown",
        correctSlot: null
      },
      {
        label: "Parrot",
        correctSlot: null
      },
      {
        label: "Crayon",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Renaissance + Italian + Inventor",
    difficultyEstimate: 45,
    labels: {
      A: "Renaissance",
      B: "Italian",
      C: "Inventor"
    },
    tiles: [
      {
        label: "Raphael",
        correctSlot: "S1"
      },
      {
        label: "Gutenberg",
        correctSlot: "S2"
      },
      {
        label: "Marconi",
        correctSlot: "S3"
      },
      {
        label: "Leonardo da Vinci",
        correctSlot: "S4"
      },
      {
        label: "Pizza",
        correctSlot: null
      },
      {
        label: "Espresso",
        correctSlot: null
      },
      {
        label: "Smartphone",
        correctSlot: null
      },
      {
        label: "Renaissance Fair",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-02",
  easy: {
    title: "Beach + Rubber + Footwear",
    difficultyEstimate: 83,
    labels: {
      A: "Beach",
      B: "Rubber",
      C: "Footwear"
    },
    tiles: [
      {
        label: "Rubber Raft",
        correctSlot: "S1"
      },
      {
        label: "Espadrille",
        correctSlot: "S2"
      },
      {
        label: "Rain Boot",
        correctSlot: "S3"
      },
      {
        label: "Flip-Flop",
        correctSlot: "S4"
      },
      {
        label: "Beach Umbrella",
        correctSlot: null
      },
      {
        label: "Pencil Eraser",
        correctSlot: null
      },
      {
        label: "Sneaker",
        correctSlot: null
      },
      {
        label: "Sand Pail",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Capital + River + Europe",
    difficultyEstimate: 60,
    labels: {
      A: "Capital",
      B: "River",
      C: "Europe"
    },
    tiles: [
      {
        label: "Cairo",
        correctSlot: "S1"
      },
      {
        label: "Madrid",
        correctSlot: "S2"
      },
      {
        label: "Rhine",
        correctSlot: "S3"
      },
      {
        label: "Vienna",
        correctSlot: "S4"
      },
      {
        label: "Riyadh",
        correctSlot: null
      },
      {
        label: "Mississippi River",
        correctSlot: null
      },
      {
        label: "Alps",
        correctSlot: null
      },
      {
        label: "Sahara",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Astronaut + Female + Russian",
    difficultyEstimate: 43,
    labels: {
      A: "Astronaut",
      B: "Female",
      C: "Russian"
    },
    tiles: [
      {
        label: "Sally Ride",
        correctSlot: "S1"
      },
      {
        label: "Yuri Gagarin",
        correctSlot: "S2"
      },
      {
        label: "Catherine the Great",
        correctSlot: "S3"
      },
      {
        label: "Valentina Tereshkova",
        correctSlot: "S4"
      },
      {
        label: "Neil Armstrong",
        correctSlot: null
      },
      {
        label: "Princess Diana",
        correctSlot: null
      },
      {
        label: "Vodka",
        correctSlot: null
      },
      {
        label: "Mount Everest",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-05-01",
  easy: {
    title: "Spring + Flower + Pink",
    difficultyEstimate: 82,
    labels: {
      A: "Spring",
      B: "Flower",
      C: "Pink"
    },
    tiles: [
      {
        label: "Yellow Daffodil",
        correctSlot: "S1"
      },
      {
        label: "Pink Easter Egg",
        correctSlot: "S2"
      },
      {
        label: "Pink Chrysanthemum",
        correctSlot: "S3"
      },
      {
        label: "Pink Cherry Blossom",
        correctSlot: "S4"
      },
      {
        label: "April Showers",
        correctSlot: null
      },
      {
        label: "Sunflower",
        correctSlot: null
      },
      {
        label: "Pink Bubblegum",
        correctSlot: null
      },
      {
        label: "Skyscraper",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Music + Female + 2010s",
    difficultyEstimate: 58,
    labels: {
      A: "Music",
      B: "Female",
      C: "2010s"
    },
    tiles: [
      {
        label: "Aretha Franklin's Respect",
        correctSlot: "S1"
      },
      {
        label: "Drake's Hotline Bling",
        correctSlot: "S2"
      },
      {
        label: "Greta Thunberg's UN Speech",
        correctSlot: "S3"
      },
      {
        label: "Beyoncé's Lemonade",
        correctSlot: "S4"
      },
      {
        label: "Frank Sinatra's My Way",
        correctSlot: null
      },
      {
        label: "Cleopatra",
        correctSlot: null
      },
      {
        label: "iPhone 5 Launch",
        correctSlot: null
      },
      {
        label: "Library Card",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Pulitzer + Novel + Southern",
    difficultyEstimate: 45,
    labels: {
      A: "Pulitzer",
      B: "Novel",
      C: "Southern"
    },
    tiles: [
      {
        label: "The Goldfinch",
        correctSlot: "S1"
      },
      {
        label: "A Streetcar Named Desire",
        correctSlot: "S2"
      },
      {
        label: "The Help",
        correctSlot: "S3"
      },
      {
        label: "To Kill a Mockingbird",
        correctSlot: "S4"
      },
      {
        label: "Journalism Prize",
        correctSlot: null
      },
      {
        label: "Book Club",
        correctSlot: null
      },
      {
        label: "Magnolia Tree",
        correctSlot: null
      },
      {
        label: "Reading Lamp",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-30",
  easy: {
    title: "Red + Vehicle + Emergency",
    difficultyEstimate: 84,
    labels: {
      A: "Red",
      B: "Vehicle",
      C: "Emergency"
    },
    tiles: [
      {
        label: "Red Bicycle",
        correctSlot: "S1"
      },
      {
        label: "Fire Alarm",
        correctSlot: "S2"
      },
      {
        label: "Ambulance",
        correctSlot: "S3"
      },
      {
        label: "Fire Engine",
        correctSlot: "S4"
      },
      {
        label: "Red Balloon",
        correctSlot: null
      },
      {
        label: "Skateboard",
        correctSlot: null
      },
      {
        label: "Siren",
        correctSlot: null
      },
      {
        label: "Paint Bucket",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Camping + Fire + Food",
    difficultyEstimate: 63,
    labels: {
      A: "Camping",
      B: "Fire",
      C: "Food"
    },
    tiles: [
      {
        label: "Fire Pit",
        correctSlot: "S1"
      },
      {
        label: "Trail Mix",
        correctSlot: "S2"
      },
      {
        label: "Flambe",
        correctSlot: "S3"
      },
      {
        label: "S'more",
        correctSlot: "S4"
      },
      {
        label: "Tent",
        correctSlot: null
      },
      {
        label: "Fireplace",
        correctSlot: null
      },
      {
        label: "Microwave Dinner",
        correctSlot: null
      },
      {
        label: "Hiking Boots",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Painter + Spanish + 20th Century",
    difficultyEstimate: 42,
    labels: {
      A: "Painter",
      B: "Spanish",
      C: "20th Century"
    },
    tiles: [
      {
        label: "Goya",
        correctSlot: "S1"
      },
      {
        label: "Andy Warhol",
        correctSlot: "S2"
      },
      {
        label: "Francisco Franco",
        correctSlot: "S3"
      },
      {
        label: "Picasso",
        correctSlot: "S4"
      },
      {
        label: "Mona Lisa",
        correctSlot: null
      },
      {
        label: "Don Quixote",
        correctSlot: null
      },
      {
        label: "Smartphone",
        correctSlot: null
      },
      {
        label: "Rembrandt",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-29",
  easy: {
    title: "Garden + Tool + Water",
    difficultyEstimate: 81,
    labels: {
      A: "Garden",
      B: "Tool",
      C: "Water"
    },
    tiles: [
      {
        label: "Pruning Shears",
        correctSlot: "S1"
      },
      {
        label: "Koi Pond",
        correctSlot: "S2"
      },
      {
        label: "Fire Hose",
        correctSlot: "S3"
      },
      {
        label: "Soaker Hose",
        correctSlot: "S4"
      },
      {
        label: "Flower Bed",
        correctSlot: null
      },
      {
        label: "Hammer",
        correctSlot: null
      },
      {
        label: "Rain Cloud",
        correctSlot: null
      },
      {
        label: "Lawn Chair",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Board Game + Word + Tile",
    difficultyEstimate: 58,
    labels: {
      A: "Board Game",
      B: "Word",
      C: "Tile"
    },
    tiles: [
      {
        label: "Codenames",
        correctSlot: "S1"
      },
      {
        label: "Azul",
        correctSlot: "S2"
      },
      {
        label: "Letter Tile",
        correctSlot: "S3"
      },
      {
        label: "Scrabble",
        correctSlot: "S4"
      },
      {
        label: "Monopoly",
        correctSlot: null
      },
      {
        label: "Dictionary",
        correctSlot: null
      },
      {
        label: "Mosaic Tile",
        correctSlot: null
      },
      {
        label: "Playing Cards",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Director + Actor + Oscar Winner",
    difficultyEstimate: 46,
    labels: {
      A: "Director",
      B: "Actor",
      C: "Oscar Winner"
    },
    tiles: [
      {
        label: "Rob Reiner",
        correctSlot: "S1"
      },
      {
        label: "Kathryn Bigelow",
        correctSlot: "S2"
      },
      {
        label: "Daniel Day-Lewis",
        correctSlot: "S3"
      },
      {
        label: "Clint Eastwood",
        correctSlot: "S4"
      },
      {
        label: "Shot List",
        correctSlot: null
      },
      {
        label: "Audition Tape",
        correctSlot: null
      },
      {
        label: "Academy Ballot",
        correctSlot: null
      },
      {
        label: "Theater Seat",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-28",
  easy: {
    title: "Yellow + Fruit + Sour",
    difficultyEstimate: 85,
    labels: {
      A: "Yellow",
      B: "Fruit",
      C: "Sour"
    },
    tiles: [
      {
        label: "Plantain",
        correctSlot: "S1"
      },
      {
        label: "Lemonade",
        correctSlot: "S2"
      },
      {
        label: "Granny Smith Apple",
        correctSlot: "S3"
      },
      {
        label: "Lemon",
        correctSlot: "S4"
      },
      {
        label: "Sunflower",
        correctSlot: null
      },
      {
        label: "Blueberry",
        correctSlot: null
      },
      {
        label: "Vinegar",
        correctSlot: null
      },
      {
        label: "Rubber Duck",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Kitchen + Sharp + Electric",
    difficultyEstimate: 64,
    labels: {
      A: "Kitchen",
      B: "Sharp",
      C: "Electric"
    },
    tiles: [
      {
        label: "Chef's Knife",
        correctSlot: "S1"
      },
      {
        label: "Rice Cooker",
        correctSlot: "S2"
      },
      {
        label: "Electric Razor",
        correctSlot: "S3"
      },
      {
        label: "Food Processor",
        correctSlot: "S4"
      },
      {
        label: "Mixing Bowl",
        correctSlot: null
      },
      {
        label: "Butter Knife",
        correctSlot: null
      },
      {
        label: "Desk Lamp",
        correctSlot: null
      },
      {
        label: "Extension Cord",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Greek Mythology + Sea + Monster",
    difficultyEstimate: 42,
    labels: {
      A: "Greek Mythology",
      B: "Sea",
      C: "Monster"
    },
    tiles: [
      {
        label: "Poseidon",
        correctSlot: "S1"
      },
      {
        label: "Medusa",
        correctSlot: "S2"
      },
      {
        label: "Kraken",
        correctSlot: "S3"
      },
      {
        label: "Scylla",
        correctSlot: "S4"
      },
      {
        label: "Apollo",
        correctSlot: null
      },
      {
        label: "Coral Reef",
        correctSlot: null
      },
      {
        label: "Bigfoot",
        correctSlot: null
      },
      {
        label: "Frankenstein",
        correctSlot: null
      }
    ]
  }
},

  {
  date: "2026-04-27",
  easy: {
    title: "French + Bread + Pastry",
    difficultyEstimate: 78,
    labels: {
      A: "French",
      B: "Bread",
      C: "Pastry"
    },
    tiles: [
      {
        label: "Baguette",
        correctSlot: "S1"
      },
      {
        label: "Macaron",
        correctSlot: "S2"
      },
      {
        label: "Cinnamon Roll",
        correctSlot: "S3"
      },
      {
        label: "Croissant",
        correctSlot: "S4"
      },
      {
        label: "Beret",
        correctSlot: null
      },
      {
        label: "Bagel",
        correctSlot: null
      },
      {
        label: "Apple Pie",
        correctSlot: null
      },
      {
        label: "Eiffel Tower",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Author + Female + American",
    difficultyEstimate: 60,
    labels: {
      A: "Author",
      B: "Female",
      C: "American"
    },
    tiles: [
      {
        label: "Jane Austen",
        correctSlot: "S1"
      },
      {
        label: "Mark Twain",
        correctSlot: "S2"
      },
      {
        label: "Marilyn Monroe",
        correctSlot: "S3"
      },
      {
        label: "Toni Morrison",
        correctSlot: "S4"
      },
      {
        label: "Shakespeare",
        correctSlot: null
      },
      {
        label: "Statue of Liberty",
        correctSlot: null
      },
      {
        label: "Cleopatra",
        correctSlot: null
      },
      {
        label: "Library",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Founding Father + President + Inventor",
    difficultyEstimate: 41,
    labels: {
      A: "Founding Father",
      B: "President",
      C: "Inventor"
    },
    tiles: [
      {
        label: "John Adams",
        correctSlot: "S1"
      },
      {
        label: "Benjamin Franklin",
        correctSlot: "S2"
      },
      {
        label: "Abraham Lincoln",
        correctSlot: "S3"
      },
      {
        label: "Thomas Jefferson",
        correctSlot: "S4"
      },
      {
        label: "Liberty Bell",
        correctSlot: null
      },
      {
        label: "Oval Office",
        correctSlot: null
      },
      {
        label: "Thomas Edison",
        correctSlot: null
      },
      {
        label: "Constitution",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-26",
  easy: {
    title: "Italian + Cheese + Pasta",
    difficultyEstimate: 81,
    labels: {
      A: "Italian",
      B: "Cheese",
      C: "Pasta"
    },
    tiles: [
      {
        label: "Mozzarella",
        correctSlot: "S1"
      },
      {
        label: "Spaghetti",
        correctSlot: "S2"
      },
      {
        label: "Mac and Cheese",
        correctSlot: "S3"
      },
      {
        label: "Lasagna",
        correctSlot: "S4"
      },
      {
        label: "Olive Oil",
        correctSlot: null
      },
      {
        label: "Cheddar",
        correctSlot: null
      },
      {
        label: "Ramen",
        correctSlot: null
      },
      {
        label: "Vespa",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Album + Rock + 1970s",
    difficultyEstimate: 58,
    labels: {
      A: "Album",
      B: "Rock",
      C: "1970s"
    },
    tiles: [
      {
        label: "Nevermind",
        correctSlot: "S1"
      },
      {
        label: "Saturday Night Fever",
        correctSlot: "S2"
      },
      {
        label: "CBGB",
        correctSlot: "S3"
      },
      {
        label: "Dark Side of the Moon",
        correctSlot: "S4"
      },
      {
        label: "Compact Disc",
        correctSlot: null
      },
      {
        label: "Electric Guitar",
        correctSlot: null
      },
      {
        label: "Bell-Bottoms",
        correctSlot: null
      },
      {
        label: "Mosh Pit",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "TV Show + 1980s + Science",
    difficultyEstimate: 41,
    labels: {
      A: "TV Show",
      B: "1980s",
      C: "Science"
    },
    tiles: [
      {
        label: "Cheers",
        correctSlot: "S1"
      },
      {
        label: "MythBusters",
        correctSlot: "S2"
      },
      {
        label: "Cold Fusion",
        correctSlot: "S3"
      },
      {
        label: "MacGyver",
        correctSlot: "S4"
      },
      {
        label: "VHS Tape",
        correctSlot: null
      },
      {
        label: "Lab Coat",
        correctSlot: null
      },
      {
        label: "Remote Control",
        correctSlot: null
      },
      {
        label: "Rubik's Cube",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-25",
  easy: {
    title: "City + Canal + Italy",
    difficultyEstimate: 81,
    labels: {
      A: "City",
      B: "Canal",
      C: "Italy"
    },
    tiles: [
      {
        label: "Amsterdam",
        correctSlot: "S1"
      },
      {
        label: "Rome",
        correctSlot: "S2"
      },
      {
        label: "Grand Canal",
        correctSlot: "S3"
      },
      {
        label: "Venice",
        correctSlot: "S4"
      },
      {
        label: "Map",
        correctSlot: null
      },
      {
        label: "Gondola",
        correctSlot: null
      },
      {
        label: "Pizza Box",
        correctSlot: null
      },
      {
        label: "Bridge",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Weather + Song + Dance",
    difficultyEstimate: 58,
    labels: {
      A: "Weather",
      B: "Song",
      C: "Dance"
    },
    tiles: [
      {
        label: "Thunder",
        correctSlot: "S1"
      },
      {
        label: "Rain Dance",
        correctSlot: "S2"
      },
      {
        label: "Macarena",
        correctSlot: "S3"
      },
      {
        label: "Singin' in the Rain",
        correctSlot: "S4"
      },
      {
        label: "Forecast",
        correctSlot: null
      },
      {
        label: "Vinyl Record",
        correctSlot: null
      },
      {
        label: "Ballet Slippers",
        correctSlot: null
      },
      {
        label: "Barometer",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Place + Food + Movie",
    difficultyEstimate: 43,
    labels: {
      A: "Place",
      B: "Food",
      C: "Movie"
    },
    tiles: [
      {
        label: "Bologna",
        correctSlot: "S1"
      },
      {
        label: "Fargo",
        correctSlot: "S2"
      },
      {
        label: "Ratatouille",
        correctSlot: "S3"
      },
      {
        label: "Mystic Pizza",
        correctSlot: "S4"
      },
      {
        label: "Road Map",
        correctSlot: null
      },
      {
        label: "Fork",
        correctSlot: null
      },
      {
        label: "Film Reel",
        correctSlot: null
      },
      {
        label: "Postcard",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-24",
  easy: {
    title: "Baseball + Animal + Team",
    difficultyEstimate: 83,
    labels: {
      A: "Baseball",
      B: "Animal",
      C: "Team"
    },
    tiles: [
      {
        label: "Yankees",
        correctSlot: "S2"
      },
      {
        label: "Baseball Bat",
        correctSlot: "S1"
      },
      {
        label: "Detroit Lions",
        correctSlot: "S3"
      },
      {
        label: "Baltimore Orioles",
        correctSlot: "S4"
      },
      {
        label: "Glove",
        correctSlot: null
      },
      {
        label: "Zoo Map",
        correctSlot: null
      },
      {
        label: "Jersey",
        correctSlot: null
      },
      {
        label: "Mascot Head",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Basketball + Movie + Animal",
    difficultyEstimate: 61,
    labels: {
      A: "Basketball",
      B: "Movie",
      C: "Animal"
    },
    tiles: [
      {
        label: "Chicago Bulls",
        correctSlot: "S2"
      },
      {
        label: "Hoosiers",
        correctSlot: "S1"
      },
      {
        label: "Happy Feet",
        correctSlot: "S3"
      },
      {
        label: "Air Bud",
        correctSlot: "S4"
      },
      {
        label: "Sneakers",
        correctSlot: null
      },
      {
        label: "Popcorn",
        correctSlot: null
      },
      {
        label: "Goldfish",
        correctSlot: null
      },
      {
        label: "Whistle",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Sport + 1990s + Movie",
    difficultyEstimate: 40,
    labels: {
      A: "Sport",
      B: "1990s",
      C: "Movie"
    },
    tiles: [
      {
        label: "Dream Team",
        correctSlot: "S1"
      },
      {
        label: "Field of Dreams",
        correctSlot: "S2"
      },
      {
        label: "Titanic",
        correctSlot: "S3"
      },
      {
        label: "Space Jam",
        correctSlot: "S4"
      },
      {
        label: "Starter Jacket",
        correctSlot: null
      },
      {
        label: "Scoreboard",
        correctSlot: null
      },
      {
        label: "VHS Tape",
        correctSlot: null
      },
      {
        label: "Director's Chair",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-23",
  easy: {
    title: "Novel + Animal + Kids",
    difficultyEstimate: 80,
    labels: {
      A: "Novel",
      B: "Animal",
      C: "Kids"
    },
    tiles: [
      {
        label: "Life of Pi",
        correctSlot: "S1"
      },
      {
        label: "Diary of a Wimpy Kid",
        correctSlot: "S2"
      },
      {
        label: "Teddy Bear",
        correctSlot: "S3"
      },
      {
        label: "Charlotte's Web",
        correctSlot: "S4"
      },
      {
        label: "Library Card",
        correctSlot: null
      },
      {
        label: "Zoo Exhibit",
        correctSlot: null
      },
      {
        label: "Playground",
        correctSlot: null
      },
      {
        label: "Bookmark",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Book + Detective + London",
    difficultyEstimate: 57,
    labels: {
      A: "Book",
      B: "Detective",
      C: "London"
    },
    tiles: [
      {
        label: "Nancy Drew",
        correctSlot: "S1"
      },
      {
        label: "Oliver Twist",
        correctSlot: "S2"
      },
      {
        label: "Scotland Yard",
        correctSlot: "S3"
      },
      {
        label: "Sherlock Holmes",
        correctSlot: "S4"
      },
      {
        label: "Tea Cup",
        correctSlot: null
      },
      {
        label: "Library Ladder",
        correctSlot: null
      },
      {
        label: "Police Tape",
        correctSlot: null
      },
      {
        label: "Double-Decker",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Novel + Place Name + Person Name",
    difficultyEstimate: 38,
    labels: {
      A: "Novel",
      B: "Place Name",
      C: "Person Name"
    },
    tiles: [
      {
        label: "West Egg",
        correctSlot: "S1"
      },
      {
        label: "Emma",
        correctSlot: "S2"
      },
      {
        label: "Madison",
        correctSlot: "S3"
      },
      {
        label: "Orlando",
        correctSlot: "S4"
      },
      {
        label: "Hardcover",
        correctSlot: null
      },
      {
        label: "Map Pin",
        correctSlot: null
      },
      {
        label: "Name Tag",
        correctSlot: null
      },
      {
        label: "Chapter One",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-22",
  easy: {
    title: "Environment + Holiday + Animal",
    difficultyEstimate: 82,
    labels: {
      A: "Environment",
      B: "Holiday",
      C: "Animal"
    },
    tiles: [
      {
        label: "Earth Day",
        correctSlot: "S1"
      },
      {
        label: "Wildlife Rescue",
        correctSlot: "S2"
      },
      {
        label: "Groundhog Day",
        correctSlot: "S3"
      },
      {
        label: "World Wildlife Day",
        correctSlot: "S4"
      },
      {
        label: "Recycling Bin",
        correctSlot: null
      },
      {
        label: "Calendar",
        correctSlot: null
      },
      {
        label: "Squirrel",
        correctSlot: null
      },
      {
        label: "Party Hat",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "Ocean + Animal + Movie",
    difficultyEstimate: 63,
    labels: {
      A: "Ocean",
      B: "Animal",
      C: "Movie"
    },
    tiles: [
      {
        label: "Dolphin",
        correctSlot: "S1"
      },
      {
        label: "Titanic",
        correctSlot: "S2"
      },
      {
        label: "Zootopia",
        correctSlot: "S3"
      },
      {
        label: "Jaws",
        correctSlot: "S4"
      },
      {
        label: "Seashell",
        correctSlot: null
      },
      {
        label: "Popcorn",
        correctSlot: null
      },
      {
        label: "Zoo Map",
        correctSlot: null
      },
      {
        label: "Sailboat",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "Green + Energy + Company",
    difficultyEstimate: 45,
    labels: {
      A: "Green",
      B: "Energy",
      C: "Company"
    },
    tiles: [
      {
        label: "Green Energy",
        correctSlot: "S1"
      },
      {
        label: "Green Giant",
        correctSlot: "S2"
      },
      {
        label: "ExxonMobil",
        correctSlot: "S3"
      },
      {
        label: "Tesla",
        correctSlot: "S4"
      },
      {
        label: "Grass Stain",
        correctSlot: null
      },
      {
        label: "Battery Pack",
        correctSlot: null
      },
      {
        label: "Corporate Logo",
        correctSlot: null
      },
      {
        label: "Wind Turbine",
        correctSlot: null
      }
    ]
  }
},
  {
  date: "2026-04-21",
  easy: {
    title: "Music + Movie + Animal",
    difficultyEstimate: 81,
    labels: {
      A: "Music",
      B: "Movie",
      C: "Animal"
    },
    tiles: [
      {
        label: "The Sound of Music",
        correctSlot: "S1"
      },
      {
        label: "Songbird",
        correctSlot: "S2"
      },
      {
        label: "Babe",
        correctSlot: "S3"
      },
      {
        label: "The Lion King",
        correctSlot: "S4"
      },
      {
        label: "Headphones",
        correctSlot: null
      },
      {
        label: "Popcorn",
        correctSlot: null
      },
      {
        label: "Goldfish",
        correctSlot: null
      },
      {
        label: "Microphone",
        correctSlot: null
      }
    ]
  },
  medium: {
    title: "TV Show + New York + Crime",
    difficultyEstimate: 60,
    labels: {
      A: "TV Show",
      B: "New York",
      C: "Crime"
    },
    tiles: [
      {
        label: "Seinfeld",
        correctSlot: "S1"
      },
      {
        label: "Breaking Bad",
        correctSlot: "S2"
      },
      {
        label: "Times Square Heist",
        correctSlot: "S3"
      },
      {
        label: "Only Murders in the Building",
        correctSlot: "S4"
      },
      {
        label: "Remote Control",
        correctSlot: null
      },
      {
        label: "Subway Token",
        correctSlot: null
      },
      {
        label: "Handcuffs",
        correctSlot: null
      },
      {
        label: "Laugh Track",
        correctSlot: null
      }
    ]
  },
  hard: {
    title: "1990s + Animated + Movie",
    difficultyEstimate: 42,
    labels: {
      A: "1990s",
      B: "Animated",
      C: "Movie"
    },
    tiles: [
      {
        label: "Animaniacs",
        correctSlot: "S1"
      },
      {
        label: "Titanic",
        correctSlot: "S2"
      },
      {
        label: "Frozen",
        correctSlot: "S3"
      },
      {
        label: "The Lion King",
        correctSlot: "S4"
      },
      {
        label: "Tamagotchi",
        correctSlot: null
      },
      {
        label: "Storyboard",
        correctSlot: null
      },
      {
        label: "Popcorn Tub",
        correctSlot: null
      },
      {
        label: "Dial-Up Modem",
        correctSlot: null
      }
    ]
  }
},
  {
    date: "2026-04-20",
    easy: {
      title: "Movie + Ocean + Creature",
      difficultyEstimate: 76,
      labels: { A: "Movie", B: "Ocean", C: "Creature" },
      tiles: [
        { label: "Titanic", correctSlot: "S1" },
        { label: "Shrek", correctSlot: "S2" },
        { label: "Hermit Crab", correctSlot: "S3" },
        { label: "Finding Nemo", correctSlot: "S4" },
        { label: "Movie Poster", correctSlot: null },
        { label: "Life Preserver", correctSlot: null },
        { label: "Mascot Head", correctSlot: null },
        { label: "Beach Chair", correctSlot: null }
      ]
    },
    medium: {
      title: "Musician + Texas + Guitar",
      difficultyEstimate: 61,
      labels: { A: "Musician", B: "Texas", C: "Guitar" },
      tiles: [
        { label: "Beyonce", correctSlot: "S1" },
        { label: "Prince", correctSlot: "S2" },
        { label: "Austin Guitar Shop", correctSlot: "S3" },
        { label: "Stevie Ray Vaughan", correctSlot: "S4" },
        { label: "Microphone", correctSlot: null },
        { label: "Cowboy Hat", correctSlot: null },
        { label: "Amplifier", correctSlot: null },
        { label: "Space Center", correctSlot: null }
      ]
    },
    hard: {
      title: "Actor + Doctor + Time Travel",
      difficultyEstimate: 43,
      labels: { A: "Actor", B: "Doctor", C: "Time Travel" },
      tiles: [
        { label: "Hugh Laurie", correctSlot: "S1" },
        { label: "Michael J. Fox", correctSlot: "S2" },
        { label: "TARDIS", correctSlot: "S3" },
        { label: "David Tennant", correctSlot: "S4" },
        { label: "Red Carpet", correctSlot: null },
        { label: "Lab Coat", correctSlot: null },
        { label: "Stopwatch", correctSlot: null },
        { label: "Script Notes", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-19",
    easy: {
      title: "Movie + Space + Toy",
      difficultyEstimate: 78,
      labels: { A: "Movie", B: "Space", C: "Toy" },
      tiles: [
        { label: "Apollo 13", correctSlot: "S1" },
        { label: "Barbie", correctSlot: "S2" },
        { label: "Moon Rover", correctSlot: "S3" },
        { label: "Buzz Lightyear", correctSlot: "S4" },
        { label: "Popcorn", correctSlot: null },
        { label: "Moon Rock", correctSlot: null },
        { label: "Action Figure", correctSlot: null },
        { label: "Board Game", correctSlot: null }
      ]
    },
    medium: {
      title: "TV Show + Lawyer + Boston",
      difficultyEstimate: 59,
      labels: { A: "TV Show", B: "Lawyer", C: "Boston" },
      tiles: [
        { label: "The Good Wife", correctSlot: "S1" },
        { label: "Cheers", correctSlot: "S2" },
        { label: "Boston Bar Association", correctSlot: "S3" },
        { label: "Boston Legal", correctSlot: "S4" },
        { label: "Remote Control", correctSlot: null },
        { label: "Briefcase", correctSlot: null },
        { label: "Fenway Park", correctSlot: null },
        { label: "Clam Chowder", correctSlot: null }
      ]
    },
    hard: {
      title: "Book + Witch + British",
      difficultyEstimate: 44,
      labels: { A: "Book", B: "Witch", C: "British" },
      tiles: [
        { label: "Wicked", correctSlot: "S1" },
        { label: "Paddington", correctSlot: "S2" },
        { label: "Pendle Witches", correctSlot: "S3" },
        { label: "Harry Potter", correctSlot: "S4" },
        { label: "Bookmark", correctSlot: null },
        { label: "Cauldron", correctSlot: null },
        { label: "Big Ben", correctSlot: null },
        { label: "Teacup", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-18",
    easy: {
      title: "Movie + Animal + Family",
      difficultyEstimate: 80,
      labels: { A: "Movie", B: "Animal", C: "Family" },
      tiles: [
        { label: "Jaws", correctSlot: "S1" },
        { label: "Toy Story", correctSlot: "S2" },
        { label: "Zoo Trip", correctSlot: "S3" },
        { label: "The Lion King", correctSlot: "S4" },
        { label: "Popcorn", correctSlot: null },
        { label: "Goldfish", correctSlot: null },
        { label: "Family Photo", correctSlot: null },
        { label: "Movie Ticket", correctSlot: null }
      ]
    },
    medium: {
      title: "Movie + New York + Comedy",
      difficultyEstimate: 62,
      labels: { A: "Movie", B: "New York", C: "Comedy" },
      tiles: [
        { label: "King Kong", correctSlot: "S1" },
        { label: "Bridesmaids", correctSlot: "S2" },
        { label: "Comedy Cellar", correctSlot: "S3" },
        { label: "Ghostbusters", correctSlot: "S4" },
        { label: "Taxi Cab", correctSlot: null },
        { label: "Popcorn Tub", correctSlot: null },
        { label: "Laugh Track", correctSlot: null },
        { label: "Empire State", correctSlot: null }
      ]
    },
    hard: {
      title: "Movie + 1990s + Crime",
      difficultyEstimate: 41,
      labels: { A: "Movie", B: "1990s", C: "Crime" },
      tiles: [
        { label: "Titanic", correctSlot: "S1" },
        { label: "The Godfather", correctSlot: "S2" },
        { label: "O.J. Trial", correctSlot: "S3" },
        { label: "Pulp Fiction", correctSlot: "S4" },
        { label: "Dial-Up Modem", correctSlot: null },
        { label: "Courtroom", correctSlot: null },
        { label: "Red Carpet", correctSlot: null },
        { label: "Beeper", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-17",
    easy: {
      title: "TV Show + New York + Comedy",
      difficultyEstimate: 74,
      labels: { A: "TV Show", B: "New York", C: "Comedy" },
      tiles: [
        { label: "Gossip Girl", correctSlot: "S1" },
        { label: "The Office", correctSlot: "S2" },
        { label: "Stand-Up Club", correctSlot: "S3" },
        { label: "Seinfeld", correctSlot: "S4" },
        { label: "Central Park", correctSlot: null },
        { label: "Microphone", correctSlot: null },
        { label: "Remote Control", correctSlot: null },
        { label: "Drama Class", correctSlot: null }
      ]
    },
    medium: {
      title: "2010s + Streaming + TV Show",
      difficultyEstimate: 58,
      labels: { A: "2010s", B: "Streaming", C: "TV Show" },
      tiles: [
        { label: "Netflix Original", correctSlot: "S1" },
        { label: "Game of Thrones", correctSlot: "S2" },
        { label: "Hulu Series", correctSlot: "S3" },
        { label: "Stranger Things", correctSlot: "S4" },
        { label: "DVR", correctSlot: null },
        { label: "Smartphone", correctSlot: null },
        { label: "Red Carpet", correctSlot: null },
        { label: "Channel Guide", correctSlot: null }
      ]
    },
    hard: {
      title: "TV Show + 2010s + Political",
      difficultyEstimate: 38,
      labels: { A: "TV Show", B: "2010s", C: "Political" },
      tiles: [
        { label: "Breaking Bad", correctSlot: "S1" },
        { label: "The West Wing", correctSlot: "S2" },
        { label: "Brexit", correctSlot: "S3" },
        { label: "House of Cards", correctSlot: "S4" },
        { label: "Campaign Sign", correctSlot: null },
        { label: "Netflix Queue", correctSlot: null },
        { label: "Oval Office", correctSlot: null },
        { label: "Reality Show", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-16",
    easy: {
      title: "Country + Island + Vacation",
      difficultyEstimate: 78,
      labels: { A: "Country", B: "Island", C: "Vacation" },
      tiles: [
        { label: "Iceland", correctSlot: "S1" },
        { label: "Mexico", correctSlot: "S2" },
        { label: "Beach Resort", correctSlot: "S3" },
        { label: "Jamaica", correctSlot: "S4" },
        { label: "Atlas", correctSlot: null },
        { label: "Suitcase", correctSlot: null },
        { label: "Peninsula", correctSlot: null },
        { label: "Airport", correctSlot: null }
      ]
    },
    medium: {
      title: "Desert + City + Famous",
      difficultyEstimate: 65,
      labels: { A: "Desert", B: "City", C: "Famous" },
      tiles: [
        { label: "Phoenix", correctSlot: "S1" },
        { label: "Sahara", correctSlot: "S2" },
        { label: "Hollywood", correctSlot: "S3" },
        { label: "Las Vegas", correctSlot: "S4" },
        { label: "Cactus", correctSlot: null },
        { label: "Subway Map", correctSlot: null },
        { label: "Postcard", correctSlot: null },
        { label: "Sandcastle", correctSlot: null }
      ]
    },
    hard: {
      title: "Island + Prison + Movie",
      difficultyEstimate: 40,
      labels: { A: "Island", B: "Prison", C: "Movie" },
      tiles: [
        { label: "Alcatraz", correctSlot: "S1" },
        { label: "Shutter Island", correctSlot: "S2" },
        { label: "The Shawshank Redemption", correctSlot: "S3" },
        { label: "Escape from Alcatraz", correctSlot: "S4" },
        { label: "Treasure Map", correctSlot: null },
        { label: "Jail Cell", correctSlot: null },
        { label: "Hawaii", correctSlot: null },
        { label: "Movie Ticket", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-15",
    easy: {
      title: "Toy + Vehicle + Movie",
      difficultyEstimate: 80,
      labels: { A: "Toy", B: "Vehicle", C: "Movie" },
      tiles: [
        { label: "Hot Wheels", correctSlot: "S1" },
        { label: "Barbie", correctSlot: "S2" },
        { label: "Batmobile", correctSlot: "S3" },
        { label: "Transformers", correctSlot: "S4" },
        { label: "Dollhouse", correctSlot: null },
        { label: "Bicycle", correctSlot: null },
        { label: "Popcorn", correctSlot: null },
        { label: "Board Game", correctSlot: null }
      ]
    },
    medium: {
      title: "Toy + Cartoon + Bear",
      difficultyEstimate: 61,
      labels: { A: "Toy", B: "Cartoon", C: "Bear" },
      tiles: [
        { label: "Mickey Mouse Plush", correctSlot: "S1" },
        { label: "Teddy Bear", correctSlot: "S2" },
        { label: "Yogi Bear", correctSlot: "S3" },
        { label: "Care Bears", correctSlot: "S4" },
        { label: "Robot", correctSlot: null },
        { label: "Dollhouse", correctSlot: null },
        { label: "Race Car", correctSlot: null },
        { label: "Crayon", correctSlot: null }
      ]
    },
    hard: {
      title: "Toy + Movie + Soldier",
      difficultyEstimate: 42,
      labels: { A: "Toy", B: "Movie", C: "Soldier" },
      tiles: [
        { label: "Toy Story", correctSlot: "S1" },
        { label: "G.I. Joe", correctSlot: "S2" },
        { label: "Saving Private Ryan", correctSlot: "S3" },
        { label: "Small Soldiers", correctSlot: "S4" },
        { label: "Barbie", correctSlot: null },
        { label: "Army Helmet", correctSlot: null },
        { label: "Cinema Ticket", correctSlot: null },
        { label: "Nerf Gun", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-14",
    easy: {
      title: "1980s + Music + Movie",
      difficultyEstimate: 77,
      labels: { A: "1980s", B: "Music", C: "Movie" },
      tiles: [
        { label: "MTV", correctSlot: "S1" },
        { label: "The Breakfast Club", correctSlot: "S2" },
        { label: "Soundtrack", correctSlot: "S3" },
        { label: "Footloose", correctSlot: "S4" },
        { label: "Leg Warmers", correctSlot: null },
        { label: "Director's Chair", correctSlot: null },
        { label: "Guitar Pick", correctSlot: null },
        { label: "Popcorn Tub", correctSlot: null }
      ]
    },
    medium: {
      title: "1980s + Toy + Cartoon",
      difficultyEstimate: 58,
      labels: { A: "1980s", B: "Toy", C: "Cartoon" },
      tiles: [
        { label: "Cabbage Patch Kid", correctSlot: "S1" },
        { label: "The Smurfs", correctSlot: "S2" },
        { label: "Mickey Mouse Plush", correctSlot: "S3" },
        { label: "He-Man", correctSlot: "S4" },
        { label: "VHS Tape", correctSlot: null },
        { label: "Yo-Yo", correctSlot: null },
        { label: "Comic Strip", correctSlot: null },
        { label: "Crayon Box", correctSlot: null }
      ]
    },
    hard: {
      title: "1980s + Sci-Fi + Sequel",
      difficultyEstimate: 39,
      labels: { A: "1980s", B: "Sci-Fi", C: "Sequel" },
      tiles: [
        { label: "Blade Runner", correctSlot: "S1" },
        { label: "Rocky III", correctSlot: "S2" },
        { label: "Terminator 2", correctSlot: "S3" },
        { label: "Return of the Jedi", correctSlot: "S4" },
        { label: "Rubik's Cube", correctSlot: null },
        { label: "Boxing Glove", correctSlot: null },
        { label: "Laser Tag", correctSlot: null },
        { label: "Movie Poster", correctSlot: null }
      ]
    }
  },  {
    date: "2026-04-13",
    easy: {
      title: "Artisan + Metal + Fire",
      difficultyEstimate: 70,
      labels: { A: "Artisan", B: "Metal", C: "Fire" },
      tiles: [
        { label: "Machinist", correctSlot: "S1" },
        { label: "Glassblower", correctSlot: "S2" },
        { label: "Forging", correctSlot: "S3" },
        { label: "Blacksmith", correctSlot: "S4" },
        { label: "Pottery Wheel", correctSlot: null },
        { label: "Steel Beam", correctSlot: null },
        { label: "Campfire", correctSlot: null },
        { label: "Wood Chisel", correctSlot: null }
      ]
    },
    hard: {
      title: "Mobster + Movie + 1920s",
      difficultyEstimate: 44,
      labels: { A: "Mobster", B: "Movie", C: "1920s" },
      tiles: [
        { label: "The Godfather", correctSlot: "S1" },
        { label: "Bootlegger", correctSlot: "S2" },
        { label: "The Jazz Singer", correctSlot: "S3" },
        { label: "The Untouchables", correctSlot: "S4" },
        { label: "Tommy Gun", correctSlot: null },
        { label: "Flapper Dress", correctSlot: null },
        { label: "Popcorn", correctSlot: null },
        { label: "Cocktail Shaker", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-12",
    easy: {
      title: "Golf + Sunday + Spring",
      difficultyEstimate: 71,
      labels: { A: "Golf", B: "Sunday", C: "Spring" },
      tiles: [
        { label: "Sunday Tee Time", correctSlot: "S1" },
        { label: "Spring Golf Trip", correctSlot: "S2" },
        { label: "Easter Sunday", correctSlot: "S3" },
        { label: "The Masters", correctSlot: "S4" },
        { label: "Scorecard", correctSlot: null },
        { label: "Clubhouse", correctSlot: null },
        { label: "Brunch", correctSlot: null },
        { label: "Tulip", correctSlot: null }
      ]
    },
    hard: {
      title: "Ireland + Pub + Celebration",
      difficultyEstimate: 48,
      labels: { A: "Ireland", B: "Pub", C: "Celebration" },
      tiles: [
        { label: "Guinness", correctSlot: "S1" },
        { label: "St. Patrick's Parade", correctSlot: "S2" },
        { label: "Round of Drinks", correctSlot: "S3" },
        { label: "Temple Bar", correctSlot: "S4" },
        { label: "Shamrock", correctSlot: null },
        { label: "Bartender", correctSlot: null },
        { label: "Birthday Cake", correctSlot: null },
        { label: "Whiskey Glass", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-11",
    easy: {
      title: "Music + Protest + 1960s",
      difficultyEstimate: 72,
      labels: { A: "Music", B: "Protest", C: "1960s" },
      tiles: [
        { label: "Protest Anthem", correctSlot: "S1" },
        { label: "The Beatles", correctSlot: "S2" },
        { label: "Civil Rights Movement", correctSlot: "S3" },
        { label: "Bob Dylan", correctSlot: "S4" },
        { label: "Vinyl Record", correctSlot: null },
        { label: "Peace Necklace", correctSlot: null },
        { label: "Bell Bottoms", correctSlot: null },
        { label: "Television Set", correctSlot: null }
      ]
    },
    hard: {
      title: "Buddy Movie + Crime + Comedy",
      difficultyEstimate: 46,
      labels: { A: "Buddy Movie", B: "Crime", C: "Comedy" },
      tiles: [
        { label: "Lethal Weapon", correctSlot: "S1" },
        { label: "Wayne's World", correctSlot: "S2" },
        { label: "Fargo", correctSlot: "S3" },
        { label: "Rush Hour", correctSlot: "S4" },
        { label: "Top Gun", correctSlot: null },
        { label: "Pulp Fiction", correctSlot: null },
        { label: "The Godfather", correctSlot: null },
        { label: "Pretty Woman", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-10",
    easy: {
      title: "Dance + Music + 1970s",
      difficultyEstimate: 75,
      labels: { A: "Dance", B: "Music", C: "1970s" },
      tiles: [
        { label: "Dance Floor", correctSlot: "S1" },
        { label: "Disco Ball", correctSlot: "S2" },
        { label: "Bee Gees", correctSlot: "S3" },
        { label: "Saturday Night Fever", correctSlot: "S4" },
        { label: "Cassette Tape", correctSlot: null },
        { label: "Jukebox", correctSlot: null },
        { label: "Vinyl Record", correctSlot: null },
        { label: "Lava Lamp", correctSlot: null }
      ]
    },
    hard: {
      title: "World War I + World War II + Technology",
      difficultyEstimate: 45,
      labels: { A: "World War I", B: "World War II", C: "Technology" },
      tiles: [
        { label: "Allied Powers", correctSlot: "S1" },
        { label: "Acoustic Locators", correctSlot: "S2" },
        { label: "Radar", correctSlot: "S3" },
        { label: "Tank", correctSlot: "S4" },
        { label: "Trench Coat", correctSlot: null },
        { label: "Victory Medal", correctSlot: null },
        { label: "Helmet", correctSlot: null },
        { label: "Periscope", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-09",
    easy: {
      title: "Middle East + Tourism + Structure",
      difficultyEstimate: 73,
      labels: { A: "Middle East", B: "Tourism", C: "Structure" },
      tiles: [
        { label: "Dubai Tour", correctSlot: "S1" },
        { label: "Oil Refinery", correctSlot: "S2" },
        { label: "Observation Deck", correctSlot: "S3" },
        { label: "Petra", correctSlot: "S4" },
        { label: "Oasis", correctSlot: null },
        { label: "Luggage", correctSlot: null },
        { label: "Blueprint", correctSlot: null },
        { label: "Sand Dune", correctSlot: null }
      ]
    },
    hard: {
      title: "Space + Cold War + America",
      difficultyEstimate: 42,
      labels: { A: "Space", B: "Cold War", C: "America" },
      tiles: [
        { label: "Sputnik", correctSlot: "S1" },
        { label: "SpaceX", correctSlot: "S2" },
        { label: "Berlin Wall", correctSlot: "S3" },
        { label: "Apollo 11 Moon Landing", correctSlot: "S4" },
        { label: "Launch Pad", correctSlot: null },
        { label: "Iron Curtain", correctSlot: null },
        { label: "Stars and Stripes", correctSlot: null },
        { label: "Space Suit", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-08",
    easy: {
      title: "College + Party + Spring",
      difficultyEstimate: 78,
      labels: { A: "College", B: "Party", C: "Spring" },
      tiles: [
        { label: "Frat House", correctSlot: "S1" },
        { label: "Spring Finals", correctSlot: "S2" },
        { label: "Spring Fling", correctSlot: "S3" },
        { label: "Spring Break", correctSlot: "S4" },
        { label: "Textbook", correctSlot: null },
        { label: "Solo Cup", correctSlot: null },
        { label: "Backpack", correctSlot: null },
        { label: "Tulip", correctSlot: null }
      ]
    },
    hard: {
      title: "Pop Culture + Social Media + Trend",
      difficultyEstimate: 43,
      labels: { A: "Pop Culture", B: "Social Media", C: "Trend" },
      tiles: [
        { label: "Celebrity Post", correctSlot: "S1" },
        { label: "Barbiecore", correctSlot: "S2" },
        { label: "Hashtag", correctSlot: "S3" },
        { label: "TikTok", correctSlot: "S4" },
        { label: "Selfie", correctSlot: null },
        { label: "Celebrity Gossip", correctSlot: null },
        { label: "Neon", correctSlot: null },
        { label: "Blue Check", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-07",
    easy: {
      title: "Exercise + Technology + Home",
      difficultyEstimate: 81,
      labels: { A: "Exercise", B: "Technology", C: "Home" },
      tiles: [
        { label: "Fitness Tracker", correctSlot: "S1" },
        { label: "Home Gym", correctSlot: "S2" },
        { label: "Smart Speaker", correctSlot: "S3" },
        { label: "Peloton", correctSlot: "S4" },
        { label: "Yoga Mat", correctSlot: null },
        { label: "Laptop", correctSlot: null },
        { label: "Couch", correctSlot: null },
        { label: "Air Fryer", correctSlot: null }
      ]
    },
    hard: {
      title: "1990s + Movie + Romance",
      difficultyEstimate: 48,
      labels: { A: "1990s", B: "Movie", C: "Romance" },
      tiles: [
        { label: "Fight Club", correctSlot: "S1" },
        { label: "JFK Jr. and Carolyn Bessette", correctSlot: "S2" },
        { label: "The Notebook", correctSlot: "S3" },
        { label: "Cruel Intentions", correctSlot: "S4" },
        { label: "Bennifer", correctSlot: null },
        { label: "Brangelina", correctSlot: null },
        { label: "Y2K", correctSlot: null },
        { label: "Love Letter", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-06",
    easy: {
      title: "Russia + City + Landmark",
      difficultyEstimate: 77,
      labels: { A: "Russia", B: "City", C: "Landmark" },
      tiles: [
        { label: "Saint Petersburg", correctSlot: "S1" },
        { label: "Volcanoes of Kamchatka", correctSlot: "S2" },
        { label: "Space Needle", correctSlot: "S3" },
        { label: "Kremlin", correctSlot: "S4" },
        { label: "Siberia", correctSlot: null },
        { label: "Skyline", correctSlot: null },
        { label: "Passport", correctSlot: null },
        { label: "Czar", correctSlot: null }
      ]
    },
    hard: {
      title: "1980s + Fads + Toys",
      difficultyEstimate: 52,
      labels: { A: "1980s", B: "Fads", C: "Toys" },
      tiles: [
        { label: "Moonwalk", correctSlot: "S1" },
        { label: "Speak & Spell", correctSlot: "S2" },
        { label: "Fidget Spinner", correctSlot: "S3" },
        { label: "Rubik's Cube", correctSlot: "S4" },
        { label: "Boom Box", correctSlot: null },
        { label: "Yo-Yo", correctSlot: null },
        { label: "Neon", correctSlot: null },
        { label: "Action Figure", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-05",
    easy: {
      title: "Animal + Ocean + Danger",
      difficultyEstimate: 82,
      labels: { A: "Animal", B: "Ocean", C: "Danger" },
      tiles: [
        { label: "🐬", revealLabel: "Dolphin", correctSlot: "S1" },
        { label: "🦂", revealLabel: "Scorpion", correctSlot: "S2" },
        { label: "🌊⚠️", revealLabel: "Rip Current", correctSlot: "S3" },
        { label: "🦈", revealLabel: "Shark", correctSlot: "S4" },
        { label: "🐚", revealLabel: "Seashell", correctSlot: null },
        { label: "⛵", revealLabel: "Sailboat", correctSlot: null },
        { label: "🐢", revealLabel: "Turtle", correctSlot: null },
        { label: "🛟", revealLabel: "Life Ring", correctSlot: null }
      ]
    },
    hard: {
      title: "Night + Travel + City",
      difficultyEstimate: 53,
      labels: { A: "Night", B: "Travel", C: "City" },
      tiles: [
        { label: "🌙🚆", revealLabel: "Midnight Express", correctSlot: "S1" },
        { label: "🌃✨", revealLabel: "City Lights", correctSlot: "S2" },
        { label: "🚇🗺️", revealLabel: "Metro Map", correctSlot: "S3" },
        { label: "😴✈️🗽", revealLabel: "Red-Eye to New York", correctSlot: "S4" },
        { label: "🍸🌙", revealLabel: "Nightcap", correctSlot: null },
        { label: "🧳🏨", revealLabel: "Hotel Stay", correctSlot: null },
        { label: "🕰️🌆", revealLabel: "Twilight", correctSlot: null },
        { label: "🚕💵", revealLabel: "Cab Fare", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-04",
    easy: {
      title: "Movie + Famous People + California",
      difficultyEstimate: 78,
      labels: { A: "Movie", B: "Famous People", C: "California" },
      tiles: [
        { label: "Tom Cruise", correctSlot: "S1" },
        { label: "Hollywood", correctSlot: "S2" },
        { label: "Kardashian", correctSlot: "S3" },
        { label: "Arnold Schwarzenegger", correctSlot: "S4" },
        { label: "Casablanca", correctSlot: null },
        { label: "Jerry Seinfeld", correctSlot: null },
        { label: "Redwood Forest", correctSlot: null },
        { label: "Frank Sinatra", correctSlot: null }
      ]
    },
    hard: {
      title: "Sports + Destination + Landmark",
      difficultyEstimate: 56,
      labels: { A: "Sports", B: "Destination", C: "Landmark" },
      tiles: [
        { label: "Aspen", correctSlot: "S1" },
        { label: "Wrigley Field", correctSlot: "S2" },
        { label: "Golden Gate Bridge", correctSlot: "S3" },
        { label: "Pebble Beach", correctSlot: "S4" },
        { label: "Skiing", correctSlot: null },
        { label: "Cancun", correctSlot: null },
        { label: "Monument", correctSlot: null },
        { label: "Napa Valley", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-03",
    easy: {
      title: "Movie + Travel + Time",
      difficultyEstimate: 83,
      labels: { A: "Movie", B: "Travel", C: "Time" },
      tiles: [
        { label: "✈️🚆🚗", revealLabel: "Planes, Trains and Automobiles", correctSlot: "S1" },
        { label: "🦫⏰🔁", revealLabel: "Groundhog Day", correctSlot: "S2" },
        { label: "✈️😵‍💫", revealLabel: "Jet Lag", correctSlot: "S3" },
        { label: "🌍✈️8️⃣0️⃣", revealLabel: "Around the World in 80 Days", correctSlot: "S4" },
        { label: "🍿🎥", revealLabel: "Movie Night", correctSlot: null },
        { label: "🧳🛂", revealLabel: "Passport Control", correctSlot: null },
        { label: "⌛🕰️", revealLabel: "Timepiece", correctSlot: null },
        { label: "🚉🎫", revealLabel: "Train Ticket", correctSlot: null }
      ]
    },
    hard: {
      title: "Science + People + Film",
      difficultyEstimate: 48,
      labels: { A: "Science", B: "People", C: "Film" },
      tiles: [
        { label: "Nikola Tesla", correctSlot: "S1" },
        { label: "Interstellar", correctSlot: "S2" },
        { label: "Tilda Swinton", correctSlot: "S3" },
        { label: "Oppenheimer", correctSlot: "S4" },
        { label: "Robert F. Kennedy Jr.", correctSlot: null },
        { label: "Sundance", correctSlot: null },
        { label: "Experiment", correctSlot: null },
        { label: "Michael Jordan", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-02",
    easy: {
      title: "Animal + Fiction + Classic",
      difficultyEstimate: 71,
      labels: { A: "Animal", B: "Fiction", C: "Classic" },
      tiles: [
        { label: "War Horse", correctSlot: "S1" },
        { label: "Seabiscuit", correctSlot: "S2" },
        { label: "The Lone Ranger", correctSlot: "S3" },
        { label: "The Black Stallion", correctSlot: "S4" },
        { label: "Stallion", correctSlot: null },
        { label: "Storybook", correctSlot: null },
        { label: "Timeless", correctSlot: null },
        { label: "Colt", correctSlot: null }
      ]
    },
    hard: {
      title: "Mystery + Mansion + Dark",
      difficultyEstimate: 44,
      labels: { A: "Mystery", B: "Mansion", C: "Dark" },
      tiles: [
        { label: "Knives Out", correctSlot: "S1" },
        { label: "Game Night", correctSlot: "S2" },
        { label: "The Haunted Mansion", correctSlot: "S3" },
        { label: "Clue", correctSlot: "S4" },
        { label: "The Nice Guys", correctSlot: null },
        { label: "Downton Abbey", correctSlot: null },
        { label: "The Lost Boys", correctSlot: null },
        { label: "Before Sunrise", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-28",
    easy: {
      title: "Chicago + Pizza + Chain",
      difficultyEstimate: 86,
      labels: { A: "Chicago", B: "Pizza", C: "Chain" },
      tiles: [
        { label: "Deep Dish", correctSlot: "S1" },
        { label: "Portillo's", correctSlot: "S2" },
        { label: "Domino's", correctSlot: "S3" },
        { label: "Giordano's", correctSlot: "S4" },
        { label: "Wrigley Field", correctSlot: null },
        { label: "Ketchup", correctSlot: null },
        { label: "Waiter", correctSlot: null },
        { label: "Food Court", correctSlot: null }
      ]
    },
    hard: {
      title: "Party + City + Night",
      difficultyEstimate: 58,
      labels: { A: "Party", B: "City", C: "Night" },
      tiles: [
        { label: "Block Party", correctSlot: "S1" },
        { label: "Rave", correctSlot: "S2" },
        { label: "Nightlife", correctSlot: "S3" },
        { label: "Nightclub District", correctSlot: "S4" },
        { label: "Taxi", correctSlot: null },
        { label: "Champagne", correctSlot: null },
        { label: "Moonlight", correctSlot: null },
        { label: "Skyscraper", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-27",
    easy: {
      title: "School + Spring + Sports",
      difficultyEstimate: 84,
      labels: { A: "School", B: "Spring", C: "Sports" },
      tiles: [
        { label: "Spring Break", correctSlot: "S1" },
        { label: "Hockey Team", correctSlot: "S2" },
        { label: "Opening Day", correctSlot: "S3" },
        { label: "Field Day", correctSlot: "S4" },
        { label: "Report Card", correctSlot: null },
        { label: "Tulip", correctSlot: null },
        { label: "Baseball Cap", correctSlot: null },
        { label: "Playground", correctSlot: null }
      ]
    },
    hard: {
      title: "Weather + Event + Sports",
      difficultyEstimate: 47,
      labels: { A: "Weather", B: "Event", C: "Sports" },
      tiles: [
        { label: "Hurricane", correctSlot: "S1" },
        { label: "Rain Delay", correctSlot: "S2" },
        { label: "Super Bowl", correctSlot: "S3" },
        { label: "Snow Bowl", correctSlot: "S4" },
        { label: "Forecast", correctSlot: null },
        { label: "Whistle", correctSlot: null },
        { label: "Parade", correctSlot: null },
        { label: "Umbrella", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-26",
    easy: {
      title: "Sitcom + New York + Romance",
      difficultyEstimate: 81,
      labels: { A: "Sitcom", B: "New York", C: "Romance" },
      tiles: [
        { label: "Seinfeld", correctSlot: "S1" },
        { label: "Dharma & Greg", correctSlot: "S2" },
        { label: "You've Got Mail", correctSlot: "S3" },
        { label: "Mad About You", correctSlot: "S4" },
        { label: "Full House", correctSlot: null },
        { label: "Central Park", correctSlot: null },
        { label: "The Notebook", correctSlot: null },
        { label: "Cheers", correctSlot: null }
      ]
    },
    hard: {
      title: "Movie + Romance + L.A.",
      difficultyEstimate: 55,
      labels: { A: "Movie", B: "Romance", C: "L.A." },
      tiles: [
        { label: "The Notebook", correctSlot: "S1" },
        { label: "Die Hard", correctSlot: "S2" },
        { label: "New Girl", correctSlot: "S3" },
        { label: "Pretty Woman", correctSlot: "S4" },
        { label: "Popcorn", correctSlot: null },
        { label: "Cupid", correctSlot: null },
        { label: "Hollywood Sign", correctSlot: null },
        { label: "Friends", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-25",
    easy: {
      title: "Spring + Music + Festival",
      difficultyEstimate: 79,
      labels: { A: "Spring", B: "Music", C: "Festival" },
      tiles: [
        { label: "Spring Recital", correctSlot: "S1" },
        { label: "Cherry-Blossom Festival", correctSlot: "S2" },
        { label: "Lolla-palooza", correctSlot: "S3" },
        { label: "Coachella", correctSlot: "S4" },
        { label: "Tulip", correctSlot: null },
        { label: "Guitar Pick", correctSlot: null },
        { label: "Food Truck", correctSlot: null },
        { label: "Maypole", correctSlot: null }
      ]
    },
    hard: {
      title: "Film + Festival + Europe",
      difficultyEstimate: 51,
      labels: { A: "Film", B: "Festival", C: "Europe" },
      tiles: [
        { label: "Sundance", correctSlot: "S1" },
        { label: "Italian Cinema", correctSlot: "S2" },
        { label: "Oktoberfest", correctSlot: "S3" },
        { label: "Cannes", correctSlot: "S4" },
        { label: "Popcorn", correctSlot: null },
        { label: "Passport", correctSlot: null },
        { label: "Parade Float", correctSlot: null },
        { label: "Broadway", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-04-01",
    easy: {
      title: "Prank + Surprise + Sound",
      difficultyEstimate: 74,
      labels: { A: "Prank", B: "Surprise", C: "Sound" },
      tiles: [
        { label: "Jump Scare", correctSlot: "S1" },
        { label: "Whoopee Cushion", correctSlot: "S2" },
        { label: "Party Popper", correctSlot: "S3" },
        { label: "Air Horn", correctSlot: "S4" },
        { label: "Doorbell", correctSlot: null },
        { label: "Confetti", correctSlot: null },
        { label: "Banana Peel", correctSlot: null },
        { label: "Glitter", correctSlot: null }
      ]
    },
    hard: {
      title: "Prank + Message + Technology",
      difficultyEstimate: 39,
      labels: { A: "Prank", B: "Message", C: "Technology" },
      tiles: [
        { label: "Fake Love Letter", correctSlot: "S1" },
        { label: "Deepfake", correctSlot: "S2" },
        { label: "Push Notification", correctSlot: "S3" },
        { label: "Rickroll", correctSlot: "S4" },
        { label: "Screenshot", correctSlot: null },
        { label: "Spam Folder", correctSlot: null },
        { label: "Webcam", correctSlot: null },
        { label: "Airplane Mode", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-31",
    easy: {
      title: "Desert + Hotel + Night",
      difficultyEstimate: 76,
      labels: { A: "Desert", B: "Hotel", C: "Night" },
      tiles: [
        { label: "Arizona Biltmore", correctSlot: "S1" },
        { label: "Moonlit Mesa", correctSlot: "S2" },
        { label: "Late Check-In", correctSlot: "S3" },
        { label: "Las Vegas", correctSlot: "S4" },
        { label: "Cactus", correctSlot: null },
        { label: "Lobby", correctSlot: null },
        { label: "Moonlight", correctSlot: null },
        { label: "Mini Bar", correctSlot: null }
      ]
    },
    hard: {
      title: "80s Movie + Sci-Fi + Adventure",
      difficultyEstimate: 44,
      labels: { A: "80s Movie", B: "Sci-Fi", C: "Adventure" },
      tiles: [
        { label: "Blade Runner", correctSlot: "S1" },
        { label: "Romancing the Stone", correctSlot: "S2" },
        { label: "Avatar", correctSlot: "S3" },
        { label: "Flight of the Navigator", correctSlot: "S4" },
        { label: "Wall Street", correctSlot: null },
        { label: "Arrival", correctSlot: null },
        { label: "The Revenant", correctSlot: null },
        { label: "Casablanca", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-30",
    easy: {
      title: "Light + Book + Travel",
      difficultyEstimate: 72,
      labels: { A: "Light", B: "Book", C: "Travel" },
      tiles: [
        { label: "Book Light", correctSlot: "S1" },
        { label: "Carry On Only", correctSlot: "S2" },
        { label: "Guidebook", correctSlot: "S3" },
        { label: "Kindle", correctSlot: "S4" },
        { label: "Flashlight", correctSlot: null },
        { label: "Passport", correctSlot: null },
        { label: "Paperback", correctSlot: null },
        { label: "Boarding Gate", correctSlot: null }
      ]
    },
    hard: {
      title: "Pitch + Court + Match",
      difficultyEstimate: 34,
      labels: { A: "Pitch", B: "Court", C: "Match" },
      tiles: [
        { label: "Pickup Line", correctSlot: "S1" },
        { label: "Dating Profile", correctSlot: "S2" },
        { label: "Speed Dating", correctSlot: "S3" },
        { label: "Tinder", correctSlot: "S4" },
        { label: "Microphone", correctSlot: null },
        { label: "Jury", correctSlot: null },
        { label: "Matchstick", correctSlot: null },
        { label: "Love Letter", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-29",
    easy: {
      title: "U.S. History + President + Monument",
      difficultyEstimate: 79,
      labels: { A: "U.S. History", B: "President", C: "Monument" },
      tiles: [
        { label: "Abraham Lincoln", correctSlot: "S1" },
        { label: "Bunker Hill Monument", correctSlot: "S2" },
        { label: "Mount Rushmore", correctSlot: "S3" },
        { label: "Jefferson Memorial", correctSlot: "S4" },
        { label: "Paul Revere", correctSlot: null },
        { label: "Capitol Building", correctSlot: null },
        { label: "Marble Statue", correctSlot: null },
        { label: "Oval Office", correctSlot: null }
      ]
    },
    hard: {
      title: "China + City + Landmark",
      difficultyEstimate: 41,
      labels: { A: "China", B: "City", C: "Landmark" },
      tiles: [
        { label: "Shenzhen", correctSlot: "S1" },
        { label: "Terracotta Army", correctSlot: "S2" },
        { label: "Space Needle", correctSlot: "S3" },
        { label: "Forbidden City", correctSlot: "S4" },
        { label: "Silk Road", correctSlot: null },
        { label: "Jade Palace", correctSlot: null },
        { label: "Night Market", correctSlot: null },
        { label: "Porcelain Vase", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-24",
    easy: {
      title: "Animal + Fictional Character + Nintendo",
      difficultyEstimate: 83,
      labels: { A: "Animal", B: "Fictional Character", C: "Nintendo" },
      tiles: [
        { label: "Garfield", correctSlot: "S1" },
        { label: "Nintendogs", correctSlot: "S2" },
        { label: "Mario", correctSlot: "S3" },
        { label: "Yoshi", correctSlot: "S4" },
        { label: "Goldfish", correctSlot: null },
        { label: "Elsa", correctSlot: null },
        { label: "Game Boy", correctSlot: null },
        { label: "Lightning McQueen", correctSlot: null }
      ]
    },
    hard: {
      title: "Name + Place Name + Fiction",
      difficultyEstimate: 49,
      labels: { A: "Name", B: "Place Name", C: "Fiction" },
      tiles: [
        { label: "Madison", correctSlot: "S1" },
        { label: "Sherlock Holmes", correctSlot: "S2" },
        { label: "West Egg", correctSlot: "S3" },
        { label: "Dallas", correctSlot: "S4" },
        { label: "Notebook", correctSlot: null },
        { label: "Taxi", correctSlot: null },
        { label: "Biography", correctSlot: null },
        { label: "Broadway", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-23",
    easy: {
      title: "Home Amenities + Recreation + Basement",
      difficultyEstimate: 86,
      labels: { A: "Home Amenities", B: "Recreation", C: "Basement" },
      tiles: [
        { label: "Basketball Hoop", correctSlot: "S1" },
        { label: "Dehumidifier", correctSlot: "S2" },
        { label: "Ping Pong Match", correctSlot: "S3" },
        { label: "Game Room", correctSlot: "S4" },
        { label: "Garden Hose", correctSlot: null },
        { label: "Bookshelf", correctSlot: null },
        { label: "Sleeping Bag", correctSlot: null },
        { label: "Driveway", correctSlot: null }
      ]
    },
    hard: {
      title: "Golf + Elite + Event",
      difficultyEstimate: 44,
      labels: { A: "Golf", B: "Elite", C: "Event" },
      tiles: [
        { label: "Country Club Membership", correctSlot: "S1" },
        { label: "Charity Scramble", correctSlot: "S2" },
        { label: "Black Tie Gala", correctSlot: "S3" },
        { label: "The Masters", correctSlot: "S4" },
        { label: "Tennis Bracelet", correctSlot: null },
        { label: "Scoreboard", correctSlot: null },
        { label: "Valet Parking", correctSlot: null },
        { label: "Bowling Alley", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-22",
    easy: {
      title: "Famous Building + Washington D.C. + Tourist",
      difficultyEstimate: 82,
      labels: { A: "Famous Building", B: "Washington D.C.", C: "Tourist" },
      tiles: [
        { label: "Pentagon", correctSlot: "S1" },
        { label: "Eiffel Tower", correctSlot: "S2" },
        { label: "National Mall", correctSlot: "S3" },
        { label: "Lincoln Memorial", correctSlot: "S4" },
        { label: "Beacon Hill", correctSlot: null },
        { label: "Postcard", correctSlot: null },
        { label: "Hotel Lobby", correctSlot: null },
        { label: "Seattle", correctSlot: null }
      ]
    },
    hard: {
      title: "Fast + Luxury + Transportation",
      difficultyEstimate: 46,
      labels: { A: "Fast", B: "Luxury", C: "Transportation" },
      tiles: [
        { label: "Rolex Daytona", correctSlot: "S1" },
        { label: "Jet", correctSlot: "S2" },
        { label: "Limousine", correctSlot: "S3" },
        { label: "Private Jet", correctSlot: "S4" },
        { label: "Diamond Ring", correctSlot: null },
        { label: "Speedometer", correctSlot: null },
        { label: "Bicycle", correctSlot: null },
        { label: "Fur Coat", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-21",
    easy: {
      title: "Book + Disney Character + Animal",
      difficultyEstimate: 80,
      labels: { A: "Book", B: "Disney Character", C: "Animal" },
      tiles: [
        { label: "Snow White", correctSlot: "S1" },
        { label: "Charlotte's Web", correctSlot: "S2" },
        { label: "Pluto", correctSlot: "S3" },
        { label: "Baloo", correctSlot: "S4" },
        { label: "Journal", correctSlot: null },
        { label: "Buzz Lightyear", correctSlot: null },
        { label: "Goldfish", correctSlot: null },
        { label: "Lightning McQueen", correctSlot: null }
      ]
    },
    hard: {
      title: "Zoo + Crime + TV",
      difficultyEstimate: 43,
      labels: { A: "Zoo", B: "Crime", C: "TV" },
      tiles: [
        { label: "Animal Smuggling", correctSlot: "S1" },
        { label: "Animal Planet", correctSlot: "S2" },
        { label: "True Crime Series", correctSlot: "S3" },
        { label: "Tiger King", correctSlot: "S4" },
        { label: "Lion Cage", correctSlot: null },
        { label: "Police Siren", correctSlot: null },
        { label: "Sitcom", correctSlot: null },
        { label: "Zoo Map", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-20",
    easy: {
      title: "Cartoon + Animal + Yellow",
      difficultyEstimate: 88,
      labels: { A: "Cartoon", B: "Animal", C: "Yellow" },
      tiles: [
        { label: "Snoopy", correctSlot: "S1" },
        { label: "Bart Simpson", correctSlot: "S2" },
        { label: "Big Bird", correctSlot: "S3" },
        { label: "Tweety", correctSlot: "S4" },
        { label: "Taxi Cab", correctSlot: null },
        { label: "Banana", correctSlot: null },
        { label: "George Jetson", correctSlot: null },
        { label: "Barney Rubble", correctSlot: null }
      ]
    },
    hard: {
      title: "Politics + Media + Money",
      difficultyEstimate: 41,
      labels: { A: "Politics", B: "Media", C: "Money" },
      tiles: [
        { label: "Press Secretary", correctSlot: "S1" },
        { label: "Political Donor", correctSlot: "S2" },
        { label: "Network Executive", correctSlot: "S3" },
        { label: "Rupert Murdoch", correctSlot: "S4" },
        { label: "Campaign Button", correctSlot: null },
        { label: "Struggling Actor", correctSlot: null },
        { label: "Bank Vault", correctSlot: null },
        { label: "Photographer", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-19",
    easy: {
      title: "HBO + Show + Movie",
      difficultyEstimate: 81,
      labels: { A: "HBO", B: "Show", C: "Movie" },
      tiles: [
        { label: "The Sopranos", correctSlot: "S1" },
        { label: "Behind the Candelabra", correctSlot: "S2" },
        { label: "Downton Abbey", correctSlot: "S3" },
        { label: "Entourage", correctSlot: "S4" },
        { label: "Netflix", correctSlot: null },
        { label: "Blockbuster", correctSlot: null },
        { label: "Movie Poster", correctSlot: null },
        { label: "Grey's Anatomy", correctSlot: null }
      ]
    },
    hard: {
      title: "Celebrity + Award Show + Scandal",
      difficultyEstimate: 53,
      labels: { A: "Celebrity", B: "Award Show", C: "Scandal" },
      tiles: [
        { label: "Meryl Streep", correctSlot: "S1" },
        { label: "Tiger Woods", correctSlot: "S2" },
        { label: "Envelope Mix-Up", correctSlot: "S3" },
        { label: "Will Smith", correctSlot: "S4" },
        { label: "Red Carpet", correctSlot: null },
        { label: "TMZ", correctSlot: null },
        { label: "Golden Globe", correctSlot: null },
        { label: "Bodyguard", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-18",
    easy: {
      title: "Fast Food Chains + Fried Food + Chicken",
      difficultyEstimate: 78,
      labels: { A: "Fast Food Chains", B: "Fried Food", C: "Chicken" },
      tiles: [
        { label: "Captain D's", correctSlot: "S1" },
        { label: "Kenny Rogers Roasters", correctSlot: "S2" },
        { label: "Korean Chicken Drumstick", correctSlot: "S3" },
        { label: "KFC", correctSlot: "S4" },
        { label: "Milkshake", correctSlot: null },
        { label: "Fish Sandwich", correctSlot: null },
        { label: "Tater Tots", correctSlot: null },
        { label: "Pizza Hut", correctSlot: null }
      ]
    },
    hard: {
      title: "Canada + Winter + Sport",
      difficultyEstimate: 57,
      labels: { A: "Canada", B: "Winter", C: "Sport" },
      tiles: [
        { label: "Quebec Winter Carnival", correctSlot: "S1" },
        { label: "CFL", correctSlot: "S2" },
        { label: "Snow Golf", correctSlot: "S3" },
        { label: "Hockey", correctSlot: "S4" },
        { label: "Maple Syrup", correctSlot: null },
        { label: "Snow Boots", correctSlot: null },
        { label: "Baseball Cap", correctSlot: null },
        { label: "Ice Scraper", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-17",
    easy: {
      title: "Hobbies + Sports + Collections",
      difficultyEstimate: 84,
      labels: { A: "Hobbies", B: "Sports", C: "Collections" },
      tiles: [
        { label: "Golf", correctSlot: "S1" },
        { label: "Stamp Album", correctSlot: "S2" },
        { label: "Baseball Cards", correctSlot: "S3" },
        { label: "Sneaker Collection", correctSlot: "S4" },
        { label: "Chess Board", correctSlot: null },
        { label: "Coin Jar", correctSlot: null },
        { label: "Tennis Ball", correctSlot: null },
        { label: "Whistle", correctSlot: null }
      ]
    },
    hard: {
      title: "Banking + Risk + Power",
      difficultyEstimate: 39,
      labels: { A: "Banking", B: "Risk", C: "Power" },
      tiles: [
        { label: "Big Short", correctSlot: "S1" },
        { label: "Federal Reserve", correctSlot: "S2" },
        { label: "Hostile Takeover", correctSlot: "S3" },
        { label: "Wall Street", correctSlot: "S4" },
        { label: "Gold Bar", correctSlot: null },
        { label: "Casino Chip", correctSlot: null },
        { label: "Private Jet", correctSlot: null },
        { label: "Stock Photo", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-16",
    easy: {
      title: "Holiday + Character + Outfit",
      difficultyEstimate: 79,
      labels: { A: "Holiday", B: "Character", C: "Outfit" },
      tiles: [
        { label: "Jack Skellington", correctSlot: "S1" },
        { label: "Santa Hat", correctSlot: "S2" },
        { label: "Cinderella Dress", correctSlot: "S3" },
        { label: "Buddy the Elf", correctSlot: "S4" },
        { label: "Pumpkin", correctSlot: null },
        { label: "Storybook", correctSlot: null },
        { label: "Bow Tie", correctSlot: null },
        { label: "Reindeer", correctSlot: null }
      ]
    },
    hard: {
      title: "Nautical + Adventure + Wealth",
      difficultyEstimate: 52,
      labels: { A: "Nautical", B: "Adventure", C: "Wealth" },
      tiles: [
        { label: "Treasure Map", correctSlot: "S1" },
        { label: "Superyacht", correctSlot: "S2" },
        { label: "Lara Croft", correctSlot: "S3" },
        { label: "Sunken Treasure", correctSlot: "S4" },
        { label: "Anchor", correctSlot: null },
        { label: "Explorer Hat", correctSlot: null },
        { label: "Diamond Ring", correctSlot: null },
        { label: "Dock Rope", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-15",
    easy: {
      title: "Florida + Tourist + Water",
      difficultyEstimate: 87,
      labels: { A: "Florida", B: "Tourist", C: "Water" },
      tiles: [
        { label: "Disney World", correctSlot: "S1" },
        { label: "Everglades", correctSlot: "S2" },
        { label: "Boat Tour", correctSlot: "S3" },
        { label: "Miami Beach", correctSlot: "S4" },
        { label: "Disneyland", correctSlot: null },
        { label: "Palm Tree", correctSlot: null },
        { label: "Pool Float", correctSlot: null },
        { label: "Theme Park Map", correctSlot: null }
      ]
    },
    hard: {
      title: "Texas + Cowboy + Food",
      difficultyEstimate: 62,
      labels: { A: "Texas", B: "Cowboy", C: "Food" },
      tiles: [
        { label: "Rodeo", correctSlot: "S1" },
        { label: "Brisket", correctSlot: "S2" },
        { label: "Canned Beans", correctSlot: "S3" },
        { label: "Texas Chili", correctSlot: "S4" },
        { label: "Boot Spurs", correctSlot: null },
        { label: "BBQ Sauce", correctSlot: null },
        { label: "Longhorn", correctSlot: null },
        { label: "Campfire", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-14",
    easy: {
      title: "Britain + Royalty + Tourist",
      difficultyEstimate: 83,
      labels: { A: "Britain", B: "Royalty", C: "Tourist" },
      tiles: [
        { label: "King Charles", correctSlot: "S1" },
        { label: "Big Ben", correctSlot: "S2" },
        { label: "Versailles", correctSlot: "S3" },
        { label: "Buckingham Palace", correctSlot: "S4" },
        { label: "Crown", correctSlot: null },
        { label: "Tea Cup", correctSlot: null },
        { label: "Postcard", correctSlot: null },
        { label: "Castle Map", correctSlot: null }
      ]
    },
    hard: {
      title: "Spring Break + Beach + Travel",
      difficultyEstimate: 66,
      labels: { A: "Spring Break", B: "Beach", C: "Travel" },
      tiles: [
        { label: "Beach Bash", correctSlot: "S1" },
        { label: "Road Trip", correctSlot: "S2" },
        { label: "Surf Trip", correctSlot: "S3" },
        { label: "Cancun", correctSlot: "S4" },
        { label: "Flip-Flops", correctSlot: null },
        { label: "Boarding Pass", correctSlot: null },
        { label: "Beach Towel", correctSlot: null },
        { label: "Hotel Key", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-13",
    easy: {
      title: "Ireland + Drink + Green",
      difficultyEstimate: 82,
      labels: { A: "Ireland", B: "Drink", C: "Green" },
      tiles: [
        { label: "Guinness", correctSlot: "S1" },
        { label: "Shamrock", correctSlot: "S2" },
        { label: "Kale Smoothie", correctSlot: "S3" },
        { label: "Shamrock Shake", correctSlot: "S4" },
        { label: "Kilt", correctSlot: null },
        { label: "Tea Kettle", correctSlot: null },
        { label: "Pickle", correctSlot: null },
        { label: "Stone Castle", correctSlot: null }
      ]
    },
    hard: {
      title: "Space + Movie + Travel",
      difficultyEstimate: 56,
      labels: { A: "Space", B: "Movie", C: "Travel" },
      tiles: [
        { label: "Star Wars", correctSlot: "S1" },
        { label: "Rocket Launch", correctSlot: "S2" },
        { label: "Road Trip", correctSlot: "S3" },
        { label: "Interstellar", correctSlot: "S4" },
        { label: "Astronaut", correctSlot: null },
        { label: "Cinema Ticket", correctSlot: null },
        { label: "Suitcase", correctSlot: null },
        { label: "Moon", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-12",
    easy: {
      title: "Breakfast + Sweet + Baked",
      difficultyEstimate: 90,
      labels: { A: "Breakfast", B: "Sweet", C: "Baked" },
      tiles: [
        { label: "Pancakes", correctSlot: "S1" },
        { label: "Toast", correctSlot: "S2" },
        { label: "Brownie", correctSlot: "S3" },
        { label: "Muffin", correctSlot: "S4" },
        { label: "Bacon", correctSlot: null },
        { label: "Candy Bar", correctSlot: null },
        { label: "Pretzel", correctSlot: null },
        { label: "Sausage", correctSlot: null }
      ]
    },
    hard: {
      title: "Kitchen + Electric + Cleans",
      difficultyEstimate: 68,
      labels: { A: "Kitchen", B: "Electric", C: "Cleans" },
      tiles: [
        { label: "Toaster", correctSlot: "S1" },
        { label: "Dish Soap", correctSlot: "S2" },
        { label: "Robot Vacuum", correctSlot: "S3" },
        { label: "Dishwasher", correctSlot: "S4" },
        { label: "Cutting Board", correctSlot: null },
        { label: "Charging Cable", correctSlot: null },
        { label: "Broom", correctSlot: null },
        { label: "Oven Mitt", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-11",
    easy: {
      title: "Red + Round + Food",
      difficultyEstimate: 91,
      labels: { A: "Red", B: "Round", C: "Food" },
      tiles: [
        { label: "Stop Sign", correctSlot: "S1" },
        { label: "Strawberry", correctSlot: "S2" },
        { label: "Bagel", correctSlot: "S3" },
        { label: "Tomato", correctSlot: "S4" },
        { label: "Fire Truck", correctSlot: null },
        { label: "Frisbee", correctSlot: null },
        { label: "Pizza Slice", correctSlot: null },
        { label: "Rose", correctSlot: null }
      ]
    },
    hard: {
      title: "Luxury + Travel + Water",
      difficultyEstimate: 63,
      labels: { A: "Luxury", B: "Travel", C: "Water" },
      tiles: [
        { label: "First Class", correctSlot: "S1" },
        { label: "Infinity Pool", correctSlot: "S2" },
        { label: "Cruise", correctSlot: "S3" },
        { label: "Yacht", correctSlot: "S4" },
        { label: "Resort", correctSlot: null },
        { label: "Suitcase", correctSlot: null },
        { label: "Surfboard", correctSlot: null },
        { label: "Champagne", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-10",
    easy: {
      title: "School + Write + Small",
      difficultyEstimate: 88,
      labels: { A: "School", B: "Write", C: "Small" },
      tiles: [
        { label: "Whiteboard", correctSlot: "S1" },
        { label: "Eraser", correctSlot: "S2" },
        { label: "Gift Tag", correctSlot: "S3" },
        { label: "Pencil", correctSlot: "S4" },
        { label: "Backpack", correctSlot: null },
        { label: "Essay", correctSlot: null },
        { label: "Thumbtack", correctSlot: null },
        { label: "Lunch Tray", correctSlot: null }
      ]
    },
    hard: {
      title: "Workout + Music + Portable",
      difficultyEstimate: 61,
      labels: { A: "Workout", B: "Music", C: "Portable" },
      tiles: [
        { label: "Running Playlist", correctSlot: "S1" },
        { label: "Gym Bag", correctSlot: "S2" },
        { label: "Bluetooth Speaker", correctSlot: "S3" },
        { label: "Phone Armband", correctSlot: "S4" },
        { label: "Dumbbell", correctSlot: null },
        { label: "Vinyl Record", correctSlot: null },
        { label: "Duffel Bag", correctSlot: null },
        { label: "Protein Shake", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-09",
    easy: {
      title: "Cold + Sweet + Party",
      difficultyEstimate: 89,
      labels: { A: "Cold", B: "Sweet", C: "Party" },
      tiles: [
        { label: "Ice Cream", correctSlot: "S1" },
        { label: "Cooler", correctSlot: "S2" },
        { label: "Birthday Cake", correctSlot: "S3" },
        { label: "Ice Cream Cake", correctSlot: "S4" },
        { label: "Ice Cube", correctSlot: null },
        { label: "Lollipop", correctSlot: null },
        { label: "Streamers", correctSlot: null },
        { label: "Confetti", correctSlot: null }
      ]
    },
    hard: {
      title: "Wedding + Fancy + Photos",
      difficultyEstimate: 59,
      labels: { A: "Wedding", B: "Fancy", C: "Photos" },
      tiles: [
        { label: "Champagne Tower", correctSlot: "S1" },
        { label: "Photo Booth", correctSlot: "S2" },
        { label: "Glamour Shot", correctSlot: "S3" },
        { label: "Wedding Portrait", correctSlot: "S4" },
        { label: "Bouquet", correctSlot: null },
        { label: "Satin Gloves", correctSlot: null },
        { label: "Selfie Stick", correctSlot: null },
        { label: "Veil", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-08",
    easy: {
      title: "Los Angeles + Tourist + Gridlock",
      difficultyEstimate: 86,
      labels: { A: "Los Angeles", B: "Tourist", C: "Gridlock" },
      tiles: [
        { label: "Hollywood Sign", correctSlot: "S1" },
        { label: "405 Freeway", correctSlot: "S2" },
        { label: "Sightseeing Bus", correctSlot: "S3" },
        { label: "Hollywood Boulevard", correctSlot: "S4" },
        { label: "Palm Tree", correctSlot: null },
        { label: "Souvenir Stand", correctSlot: null },
        { label: "Traffic Jam", correctSlot: null },
        { label: "In-N-Out", correctSlot: null }
      ]
    },
    hard: {
      title: "France + Fashion + Tourist",
      difficultyEstimate: 57,
      labels: { A: "France", B: "Fashion", C: "Tourist" },
      tiles: [
        { label: "Paris Runway", correctSlot: "S1" },
        { label: "Eiffel Tower", correctSlot: "S2" },
        { label: "Designer Travel Bag", correctSlot: "S3" },
        { label: "Champs-Elysees", correctSlot: "S4" },
        { label: "Baguette", correctSlot: null },
        { label: "Silk Scarf", correctSlot: null },
        { label: "Camera Strap", correctSlot: null },
        { label: "Metro Map", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-07",
    easy: {
      title: "Pet + Home + Sleep",
      difficultyEstimate: 92,
      labels: { A: "Pet", B: "Home", C: "Sleep" },
      tiles: [
        { label: "Litter Box", correctSlot: "S1" },
        { label: "Crate Mat", correctSlot: "S2" },
        { label: "Pillow", correctSlot: "S3" },
        { label: "Dog Bed", correctSlot: "S4" },
        { label: "Chew Toy", correctSlot: null },
        { label: "Welcome Mat", correctSlot: null },
        { label: "Pajamas", correctSlot: null },
        { label: "Leash", correctSlot: null }
      ]
    },
    hard: {
      title: "Luxury + Watch + Travel",
      difficultyEstimate: 65,
      labels: { A: "Luxury", B: "Watch", C: "Travel" },
      tiles: [
        { label: "Rolex", correctSlot: "S1" },
        { label: "First Class", correctSlot: "S2" },
        { label: "Airport Clock", correctSlot: "S3" },
        { label: "GMT Rolex", correctSlot: "S4" },
        { label: "Limousine", correctSlot: null },
        { label: "Stopwatch", correctSlot: null },
        { label: "Passport", correctSlot: null },
        { label: "Suitcase", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-06",
    easy: {
      title: "New York + Tourist + Crowded",
      difficultyEstimate: 84,
      labels: { A: "New York", B: "Tourist", C: "Crowded" },
      tiles: [
        { label: "Empire State Building", correctSlot: "S1" },
        { label: "Subway Platform", correctSlot: "S2" },
        { label: "Tour Group", correctSlot: "S3" },
        { label: "Times Square", correctSlot: "S4" },
        { label: "NY Yankees", correctSlot: null },
        { label: "Souvenir Magnet", correctSlot: null },
        { label: "Rush Hour", correctSlot: null },
        { label: "Pizza Slice", correctSlot: null }
      ]
    },
    hard: {
      title: "Movie + Crime + New York",
      difficultyEstimate: 48,
      labels: { A: "Movie", B: "Crime", C: "New York" },
      tiles: [
        { label: "Scarface", correctSlot: "S1" },
        { label: "Home Alone 2", correctSlot: "S2" },
        { label: "Mob Hit", correctSlot: "S3" },
        { label: "Goodfellas", correctSlot: "S4" },
        { label: "Red Carpet", correctSlot: null },
        { label: "Handcuffs", correctSlot: null },
        { label: "Brooklyn Bridge", correctSlot: null },
        { label: "Detective Badge", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-05",
    easy: {
      title: "Basketball + Famous + Sneakers",
      difficultyEstimate: 80,
      labels: { A: "Basketball", B: "Famous", C: "Sneakers" },
      tiles: [
        { label: "Larry Bird", correctSlot: "S1" },
        { label: "High-Tops", correctSlot: "S2" },
        { label: "Yeezy", correctSlot: "S3" },
        { label: "Michael Jordan", correctSlot: "S4" },
        { label: "NBA Jersey", correctSlot: null },
        { label: "Paparazzi", correctSlot: null },
        { label: "Running Shoes", correctSlot: null },
        { label: "Sneaker Box", correctSlot: null }
      ]
    },
    hard: {
      title: "President + Famous + American",
      difficultyEstimate: 45,
      labels: { A: "President", B: "Famous", C: "American" },
      tiles: [
        { label: "Nelson Mandela", correctSlot: "S1" },
        { label: "Millard Fillmore", correctSlot: "S2" },
        { label: "Eddie Murphy", correctSlot: "S3" },
        { label: "John F. Kennedy", correctSlot: "S4" },
        { label: "Governor", correctSlot: null },
        { label: "Celebrity Chef", correctSlot: null },
        { label: "Bald Eagle", correctSlot: null },
        { label: "Capitol Dome", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-04",
    easy: {
      title: "London + Tourist + Crowded",
      difficultyEstimate: 85,
      labels: { A: "London", B: "Tourist", C: "Crowded" },
      tiles: [
        { label: "Red Phone Booth", correctSlot: "S1" },
        { label: "Tube Platform", correctSlot: "S2" },
        { label: "Walking Tour", correctSlot: "S3" },
        { label: "Piccadilly Circus", correctSlot: "S4" },
        { label: "Black Cab", correctSlot: null },
        { label: "Souvenir Magnet", correctSlot: null },
        { label: "Rush Hour", correctSlot: null },
        { label: "Bowler Hat", correctSlot: null }
      ]
    },
    hard: {
      title: "Adjective + Fashion + Compliment",
      difficultyEstimate: 54,
      labels: { A: "Adjective", B: "Fashion", C: "Compliment" },
      tiles: [
        { label: "Trendy", correctSlot: "S1" },
        { label: "Helpful", correctSlot: "S2" },
        { label: "Statement Necklace", correctSlot: "S3" },
        { label: "Elegant", correctSlot: "S4" },
        { label: "Adverb", correctSlot: null },
        { label: "Blazer", correctSlot: null },
        { label: "Nice Job", correctSlot: null },
        { label: "Tailor", correctSlot: null }
      ]
    }
  },
  {
    date: "2026-03-03",
    easy: {
      title: "Famous Athlete + Tennis + Fashion",
      difficultyEstimate: 78,
      labels: { A: "Famous Athlete", B: "Tennis", C: "Fashion" },
      tiles: [
        { label: "Rafael Nadal", correctSlot: "S1" },
        { label: "Eileen Gu", correctSlot: "S2" },
        { label: "Wimbledon Whites", correctSlot: "S3" },
        { label: "Serena Williams", correctSlot: "S4" },
        { label: "Gold Medal", correctSlot: null },
        { label: "Racket Bag", correctSlot: null },
        { label: "Runway Show", correctSlot: null },
        { label: "Tennis Ball", correctSlot: null }
      ]
    },
    hard: {
      title: "Famous Musician + Rock + Country",
      difficultyEstimate: 52,
      labels: { A: "Famous Musician", B: "Rock", C: "Country" },
      tiles: [
        { label: "Mick Jagger", correctSlot: "S1" },
        { label: "Dolly Parton", correctSlot: "S2" },
        { label: "Southern Rock", correctSlot: "S3" },
        { label: "Neil Young", correctSlot: "S4" },
        { label: "Billboard Chart", correctSlot: null },
        { label: "Guitar Solo", correctSlot: null },
        { label: "Cowboy Boots", correctSlot: null },
        { label: "Drum Kit", correctSlot: null }
      ]
    }
  }
];





