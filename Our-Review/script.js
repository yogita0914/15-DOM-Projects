const profiles = [
    {
        name: "Rousel",
        profession: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque odit debitis fugiat accusamus officia recusandae mollitia. Molestiae, dolore aperiam.",
        image: "images/girl1.jpg"
    },
    {
        name: "Rihaan",
        profession: "Backend Developer",
        description: "Consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        image: "images/men1.jpg"
    },
    {
        name: "Siya",
        profession: "UI/UX Designer",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "images/girl2.jpg"
    },
    {
        name: "Takshil",
        profession: "Project Manager",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/men2.jpg"
    },
    {
        name: "Shrin",
        profession: "Full Stack Developer",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/girl3.jpg"
    },
    {
        name: "Divyam",
        profession: "MERN Stack Developer",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/men3.jpg"
    },
    {
        name: "Ridhi",
        profession: "React.js Developer",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/girl4.jpg"
    },
    {
        name: "Shreyansh",
        profession: "AI Developer",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/men4.jpg"
    },
    {
        name: "Shreya",
        profession: "Project Manager",
        description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "images/girl5.jpg"
    },
];

function getRandomProfile() {
    return profiles[Math.floor(Math.random() * profiles.length)];
}

function updateProfile() {
    const profile = getRandomProfile();
    document.getElementById('profileImage').src = profile.image;
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileProfession').textContent = profile.profession;
    document.getElementById('profileDescription').textContent = profile.description;
}

document.querySelector('.left').addEventListener('click', updateProfile);
document.querySelector('.right').addEventListener('click', updateProfile);
