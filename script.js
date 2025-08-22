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
    "clumsy"
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
    "smiled"
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
    "the glass shattered"
];

function randomize() {
    let randomDescriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    let randomSetup = setups[Math.floor(Math.random() * setups.length)];
    let randomPunchline = punchlines[Math.floor(Math.random() * punchlines.length)];

    document.getElementById("descriptor").innerHTML = randomDescriptor;
    document.getElementById("setup").innerHTML = randomSetup;
    document.getElementById("punchline").innerHTML = randomPunchline;
}