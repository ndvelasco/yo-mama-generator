const descriptors = [
    "fat",
    "ugly",
    "stupid",
    "old",
    "poor",
    "lazy",
    "short",
    "tall",
    "hairy",
    "clumsy",
    "slow",
    "cheap",
    "bald",
    "fancy",
    "loud",
    "boring",
    "gross",
    "dumb",
    "weird"
];
const setups = [
    "sits around the house", 
    "opened the fridge", 
    "went to the zoo",
    "jumped in the pool",
    "looked in the mirror",
    "went skydiving",
    "went outside",
    "used Google",
    "tried to cook",
    "smiled",
    "sat on the couch",
    "walked into Walmart",
    "turned on the TV",
    "used the microwave",
    "answered the phone",
    "took a selfie",
    "walked past a library",
    "ordered a pizza",
    "put on makeup",
    "started dancing",
    "sneezed",
    "went to school"
];
const punchlines = [
    "she sat *around* the house", 
    "the light went out",
    "the gorillas started clapping", 
    "the pool overflowed", 
    "her reflection ran away", 
    "the parachute broke",
    "the sun hid behind the clouds",
    "even Google didn't know",
    "the smoke alarm broke",
    "the glass shattered",
    "he filed a restraining order",
    "Walmart closed early",
    "it called for backup",
    'the phone said "Wrong number"',
    "the camera cracked",
    "she couldn't fit on the screen",
    "everyone started screaming",
    'she said "Thank you"',
    "the pizza ordered *her*",
    "the floor quit its job",
    "her teeth filed a complaint",
    "it was like an earthquake",
    "the world stopped spinning",
    "everyone went back to the Stone Age",
    "everyone disappeared",
    "everyone hid from her",
    "everyone screamed"
];

function randomize() {
    let randomDescriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    let randomSetup = setups[Math.floor(Math.random() * setups.length)];
    let randomPunchline = punchlines[Math.floor(Math.random() * punchlines.length)];

    document.getElementById("descriptor").innerHTML = randomDescriptor;
    document.getElementById("setup").innerHTML = randomSetup;
    document.getElementById("punchline").innerHTML = randomPunchline;
}