// document.getElementById("plotTwitch").addEventListener("mouseover", mouseOver);
// document.getElementById("plotTwitch").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("plotTwitchInfo").style.opacity= "0.8";
// }

// function mouseOut() {
//   document.getElementById("plotTwitchInfo").style.opacity= "0";
// }

document.getElementById("plotTwitch").addEventListener("click", plotTwitchClick);
document.getElementById("librari").addEventListener("click", librariClick);
document.getElementById("orienteeringApp").addEventListener("click", orienteeringClick);
document.getElementById("dinnerPlanner").addEventListener("click", dinnerPlannerClick);

document.getElementById("projectsLink").addEventListener("click", projectsClick);
document.getElementById("aboutLink").addEventListener("click", aboutClick);

function projectsClick(){
    document.getElementById("projects").style.display = "flex";
    document.getElementById("about").style.display = "none";
    document.getElementById("projectOverview").style.display = "block";
}

function aboutClick(){
    document.getElementById("projects").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("projectOverview").style.display = "none";
}

function plotTwitchClick() {
    document.getElementById("headline").innerHTML = "Plot Twitch"
    document.getElementById("info").innerHTML = "Plot twitch is a visualisation of the top 100 streams on Twitch in real time, which is built with the framework Vue. The visualization is built with d3.js, where each cluster of dots represent a different game in the overview. If you click a cluster, a dot diagram is shown of the different streams and how many viewers it has.<br/><br/> Plot Twitch is the outcome from a group project in the course Information Visualization at KTH. "
    document.getElementById("links").innerHTML = "<div><a target='_blank' href='https://infoviz-dh2321.firebaseapp.com/intro'><img src='images/internet.png' width='30px'/></a><a target='_blank' href='https://github.com/TechpriestV/infoviz'><img src='images/github.png' width='30px'/></div>"
}

function librariClick() {
    document.getElementById("headline").innerHTML = "Librari"
    document.getElementById("info").innerHTML = "Librari is an site that makes it possible to keep track of books and sort them into different bookshelves that you see fit. The framework used in this project was React.js in combination with HTML and CSS. The project uses Firebase as database in order to log in to the wedsite and save your personal bookshelves. <br/><br/>Librari is the outcome from a group project of 4 people in the course Interaction Programming and the Dynamic Web at KTH.  "
    document.getElementById("links").innerHTML = "<div><a target='_blank' href='https://librari-41dab.firebaseapp.com'><img src='images/internet.png' width='30px'/></a><a target='_blank' href='https://github.com/davidtranaeus/Librari'><img src='images/github.png' width='30px'/></div>"
}

function orienteeringClick() {
    document.getElementById("headline").innerHTML = "OrienteeringApp"
    document.getElementById("info").innerHTML = "Add some information about OrienteeringApp.<br/><br/>OrienteeringApp is the outcome of a group project of 4 people in the course Mobile Development at KTH."
    document.getElementById("links").innerHTML = "<div><a target='_blank' href='https://github.com/Kahevajo/orienteering_app/tree/master/orienteering_app'><img src='images/github.png' width='30px'/></div>"
}

function dinnerPlannerClick() {
    document.getElementById("headline").innerHTML = "Dinner Planner"
    document.getElementById("info").innerHTML = "Add some info.<br/><br/>Librari is the outcome from a group project of 4 people in the course Interaction Programming and the Dynamic Web at KTH.  "
    document.getElementById("links").innerHTML = "<div><a target='_blank' href='https://github.com/matildacson/dinnerplanner-lab4'><img src='images/github.png' width='30px'/></div>"
}