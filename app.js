
let name = "Becca Allen"
let job = "Full Stack Developer"
let description = "I can code a lil'"
let experience = [
    {
        companyName: "Anthropologie",
        jobTitle: "Sales Assoc",
        jobDescription: "Fold, relocate, checkout"

    }, {
        companyName: "Warby Parker",
        jobTitle: "Optical Manager",
        jobDescription: "Create phenomenal experiences"
    }, {
        companyName: "IB",
        jobTitle: "Leaner",
        jobDescription: "Code the most"
    }
]
let madSkills = [
    {
        skills: "Reading",
        cool: false
    }, {
        skills: "Writing",
        cool: false
    }, {
        skills: "Arithmetic",
        cool: true
    },
    {
        skills: "Illustrating",
        cool: true
    }
];

console.log("Name: " + name.toUpperCase());
console.log("Career: " + job);
console.log("Description: " + description);

console.log(" ");

console.log("My Interests");
console.log("* Books");
console.log("* TV");
console.log("* Movies");

console.log(" ");

console.log("My Previous Experience");

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + companyName + ", " + jobTitle + ", " + jobDescription);
};

displayPosition(experience[0].companyName, experience[0].jobTitle, experience[0].jobDescription);
displayPosition(experience[1].companyName, experience[1].jobTitle, experience[1].jobDescription);
displayPosition(experience[2].companyName, experience[2].jobTitle, experience[1].jobDescription);

console.log(" ");

console.log("My Skills");

function displaySkill(skills, cool) {

    if (cool === true) {
        console.log("* BAM: " + skills)
    }  else {
        console.log("* " + skills);
    }

}

for (i = 0; i < madSkills.length; i++) {
    displaySkill(madSkills[i].skills, madSkills[i].cool)
}
