// ===============================
// AI Mood Board Studio
// Day 29 - 30 Days 30 AI Websites Challenge
// ===============================

// Elements

const promptInput = document.getElementById("promptInput");
const moodSelect = document.getElementById("moodSelect");
const colorSelect = document.getElementById("colorSelect");
const styleSelect = document.getElementById("styleSelect");

const generateBtn = document.getElementById("generateBtn");
const randomBtn = document.getElementById("randomBtn");

const summary = document.getElementById("summary");
const palette = document.getElementById("palette");
const gallery = document.getElementById("gallery");
const keywords = document.getElementById("keywords");

// ---------------------------
// Inspiration Ideas
// ---------------------------

const inspirations = [

"Futuristic smart city with neon lights",

"Minimal Scandinavian living room",

"Luxury fashion brand campaign",

"Japanese Zen garden",

"Cyberpunk Tokyo streets",

"Mountain cabin during snowfall",

"Tropical beach sunset",

"Modern AI workspace",

"Dreamy fantasy castle",

"Luxury office interior",

"Space exploration mission",

"Dark hacker workstation",

"Retro gaming room",

"Coffee shop aesthetic",

"Nature inspired eco architecture",

"Luxury sports car showroom",

"Creative artist studio",

"Digital futuristic classroom",

"Magical enchanted forest",

"Luxury hotel lobby"

];

// ---------------------------
// Keywords
// ---------------------------

const keywordPool = [

"Innovation",
"Luxury",
"Minimal",
"Creative",
"Harmony",
"Modern",
"Elegant",
"Vibrant",
"Technology",
"Future",
"Nature",
"Architecture",
"AI",
"Visual",
"Premium",
"Bold",
"Typography",
"Glass",
"Motion",
"Abstract",
"Design",
"Color",
"Concept",
"Atmosphere",
"Inspiration"

];

// ---------------------------
// Color Palettes
// ---------------------------

const palettes = {

Auto:["#6366F1","#8B5CF6","#06B6D4","#F8FAFC","#1E293B"],

Blue:["#1D4ED8","#3B82F6","#60A5FA","#BFDBFE","#DBEAFE"],

Purple:["#581C87","#7E22CE","#A855F7","#D8B4FE","#F3E8FF"],

Orange:["#EA580C","#F97316","#FB923C","#FDBA74","#FFF7ED"],

Green:["#166534","#16A34A","#4ADE80","#BBF7D0","#F0FDF4"],

Pink:["#BE185D","#EC4899","#F472B6","#FBCFE8","#FDF2F8"],

Black:["#000000","#1F2937","#374151","#6B7280","#D1D5DB"],

Gold:["#B45309","#D97706","#F59E0B","#FCD34D","#FEF3C7"],

Pastel:["#FBCFE8","#BFDBFE","#C7F9CC","#FDE68A","#DDD6FE"],

Rainbow:["#EF4444","#F97316","#FACC15","#22C55E","#3B82F6"]

};

// ---------------------------
// Generate Summary
// ---------------------------

function generateSummary(){

const prompt = promptInput.value.trim();

const mood = moodSelect.value;
const color = colorSelect.value;
const style = styleSelect.value;

summary.innerHTML = `
Your creative direction focuses on
<strong>${prompt}</strong>.

The visual identity follows a
<strong>${mood}</strong> mood with a
<strong>${style}</strong> artistic style.

The recommended palette emphasizes
<strong>${color}</strong> tones to improve consistency, storytelling, aesthetics, and visual balance.

This AI-inspired mood board can be used for branding, UI/UX design, presentations, posters, marketing campaigns, product concepts, architecture, digital art, photography, or creative inspiration.
`;

}

// ---------------------------
// Generate Palette
// ---------------------------

function generatePalette(){

const selected = colorSelect.value;

const colors = palettes[selected] || palettes["Auto"];

palette.innerHTML="";

colors.forEach(color=>{

const box=document.createElement("div");

box.className="color-box";

box.style.background=color;

box.title=color;

palette.appendChild(box);

});

}

// ---------------------------
// Generate Keywords
// ---------------------------

function generateKeywords(){

keywords.innerHTML="";

let shuffled=[...keywordPool];

shuffled.sort(()=>Math.random()-0.5);

const mood=moodSelect.value;

const style=styleSelect.value;

const promptWords=promptInput.value
.split(" ")
.filter(word=>word.length>4)
.slice(0,3);

const finalTags=[
mood,
style,
...promptWords,
...shuffled.slice(0,7)
];

finalTags.forEach(item=>{

const span=document.createElement("span");

span.className="tag";

span.textContent=item;

keywords.appendChild(span);

});

}

// ---------------------------
// Generate Images
// ---------------------------

function generateImages(){

gallery.innerHTML="";

const seed=Math.floor(Math.random()*1000);

for(let i=0;i<6;i++){

const card=document.createElement("div");

card.className="image-card";

const img=document.createElement("img");

img.src=`https://picsum.photos/600/600?random=${seed+i}`;

img.alt="Mood Board";

card.appendChild(img);

gallery.appendChild(card);

}

}

// ---------------------------
// Generate Board
// ---------------------------

function generateBoard(){

const text=promptInput.value.trim();

if(text===""){

alert("Please describe your creative idea.");

promptInput.focus();

return;

}

generateSummary();

generatePalette();

generateKeywords();

generateImages();

}

// ---------------------------
// Random Inspiration
// ---------------------------

function randomIdea(){

const idea=inspirations[
Math.floor(Math.random()*inspirations.length)
];

promptInput.value=idea;

const moods=[
"Creative",
"Minimal",
"Luxury",
"Cyberpunk",
"Nature",
"Dreamy",
"Vintage",
"Dark",
"Bright",
"Fantasy"
];

const colors=[
"Auto",
"Blue",
"Purple",
"Orange",
"Green",
"Pink",
"Black",
"Gold",
"Pastel",
"Rainbow"
];

const styles=[
"Modern",
"Glassmorphism",
"Minimal",
"Abstract",
"3D",
"Anime",
"Illustration",
"Digital Art",
"Photography"
];

moodSelect.value=moods[Math.floor(Math.random()*moods.length)];

colorSelect.value=colors[Math.floor(Math.random()*colors.length)];

styleSelect.value=styles[Math.floor(Math.random()*styles.length)];

generateBoard();

}

// ---------------------------
// Events
// ---------------------------

generateBtn.addEventListener("click",generateBoard);

randomBtn.addEventListener("click",randomIdea);

promptInput.addEventListener("keydown",function(e){

if(e.key==="Enter" && e.ctrlKey){

generateBoard();

}

});

// ---------------------------
// Initial Board
// ---------------------------

promptInput.value="Futuristic AI-powered smart city with sustainable architecture";

generateBoard();