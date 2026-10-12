/* EDIT YOUR DETAILS HERE. This static website needs no npm or Node.js commands. */
const profile = {
  name: "Baguna, Alian Lei",
  initials: "BA",
  role: "BS Information Technology Student",
  course: "Bachelor of Science in Information Technology",
  school: "STI College Caloocan",
  yearLevel: "3rd Year",
  location: "Caloocan City, Philippines",
  studentCode: "IT STUDENT",
  intro: "Welcome to my digital portfolio. Explore my background, skills, school projects, and ways to contact me.",
  about: "I am an Information Technology student who enjoys learning about software development, databases, web technologies, and building practical digital solutions. I use this portfolio to present my learning journey and projects.",
  careerGoal: "To grow as an IT professional and build useful, user-friendly systems.",
  interests: "Web development · Software projects · Database systems",
  workStyle: "Curious, collaborative, and willing to learn.",
  achievements: "Add your certificates, awards, trainings, or academic achievements here.",
  contact: {
    email: "your.email@example.com",
    phone: "Add your preferred contact number",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/"
  }
};
const skills = [
  {icon:"🌐",name:"HTML & CSS",level:"Web page structure and styling"},
  {icon:"⚙️",name:"JavaScript",level:"Interactive front-end features"},
  {icon:"🗃️",name:"Database Basics",level:"SQL and relational database concepts"},
  {icon:"💻",name:"Programming",level:"Add your languages and experience"},
  {icon:"🧩",name:"Problem Solving",level:"Debugging and logical thinking"},
  {icon:"🤝",name:"Teamwork",level:"Collaboration and communication"}
];
const projects = [
  {icon:"📅",title:"Student Appointment System",description:"A concept for helping students request appointments with school offices and allowing authorized staff to manage appointment requests.",details:"Describe what you personally built, which features work, what technologies you used, and what you learned. Do not claim features that are not implemented.",tags:["Web Development","Database","Prototype"]},
  {icon:"🪪",title:"NFC Digital Student Portfolio",description:"A digital identity page designed to open from a compatible phone when an NFC card stores its public URL.",details:"This portfolio demonstrates a simple NFC use case: the card stores a website link. The actual portfolio is hosted online, while the NFC card contains only the URL.",tags:["NFC","HTML","CSS","JavaScript"]},
  {icon:"📚",title:"Academic Project",description:"Replace this card with another real school or personal project you have completed.",details:"Add the project's problem, target users, key features, your role, tools, and outcome. If it is still a proposal, label it clearly as a concept or prototype.",tags:["School Project","Learning"]}
];
const education = [
  {date:"Current",title:"Bachelor of Science in Information Technology",school:"STI College Caloocan",description:"Add your current year level, relevant subjects, and expected graduation date if you want to share them."},
  {date:"Previous",title:"Senior High School",school:"Add your school name",description:"Add your strand, graduation year, or relevant achievements. Remove this entry if you do not want to include it."}
];
const $ = id => document.getElementById(id);
const setText = (id,value) => {const el=$(id);if(el)el.textContent=value;};
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function initialsFrom(name){return name.trim().split(/\s+/).filter(Boolean).slice(0,2).map(p=>p[0].toUpperCase()).join("")||"YN";}
function renderProfile(){document.title=`${profile.name} | Digital Student Portfolio`;setText("brandName",`${profile.name.toUpperCase()} · PORTFOLIO`);setText("footerName",`${profile.name.toUpperCase()} · PORTFOLIO`);setText("heroName",profile.name);setText("heroRole",profile.role);setText("heroIntro",profile.intro);setText("heroLocation",profile.location);setText("heroSchool",profile.school);setText("studentCode",profile.studentCode);setText("avatar",profile.initials||initialsFrom(profile.name));setText("cardName",profile.name);setText("cardCourse",profile.course);setText("cardSchool",profile.school);setText("cardYear",profile.yearLevel);setText("aboutText",profile.about);setText("careerGoal",profile.careerGoal);setText("interests",profile.interests);setText("workStyle",profile.workStyle);setText("achievements",profile.achievements);}
function renderSkills(){$("skillsGrid").innerHTML=skills.map(s=>`<article class="skill-card"><div class="skill-icon" aria-hidden="true">${s.icon}</div><div><b>${escapeHTML(s.name)}</b><span>${escapeHTML(s.level)}</span></div></article>`).join("");}
function renderProjects(){$("projectsGrid").innerHTML=projects.map((p,i)=>`<article class="project-card"><div class="project-symbol" aria-hidden="true">${p.icon}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><div class="tag-list">${p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("")}</div><button class="text-button" type="button" data-project="${i}">View project details →</button></article>`).join("");$("projectsGrid").querySelectorAll("[data-project]").forEach(b=>b.addEventListener("click",()=>openProject(Number(b.dataset.project))));}
function renderEducation(){$("educationList").innerHTML=education.map(e=>`<article class="timeline-item"><div class="timeline-date">${escapeHTML(e.date)}</div><div><h3>${escapeHTML(e.title)}</h3><p><strong>${escapeHTML(e.school)}</strong> · ${escapeHTML(e.description)}</p></div></article>`).join("");}
function validProfileLink(value,domain){try{const u=new URL(value);return u.protocol==="https:"&&u.hostname.endsWith(domain)&&u.pathname!=="/";}catch{return false;}}
function renderContact(){const c=profile.contact;const items=[{icon:"✉",label:"Email",value:c.email,href:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)&&c.email!=="your.email@example.com"?`mailto:${c.email}`:""},{icon:"☎",label:"Phone",value:c.phone,href:""},{icon:"in",label:"LinkedIn",value:c.linkedin,href:validProfileLink(c.linkedin,"linkedin.com")?c.linkedin:""},{icon:"⌘",label:"GitHub",value:c.github,href:validProfileLink(c.github,"github.com")?c.github:""}];$("contactList").innerHTML=items.map(i=>`<div class="contact-item"><span class="contact-icon" aria-hidden="true">${i.icon}</span><div><span class="contact-label">${i.label}</span>${i.href?`<a href="${escapeHTML(i.href)}" target="_blank" rel="noopener noreferrer">${escapeHTML(i.value)}</a>`:`<span>${escapeHTML(i.value)}</span>`}</div></div>`).join("");}
function openProject(index){const p=projects[index];if(!p)return;setText("dialogTitle",p.title);setText("dialogDescription",p.details);$("dialogTags").innerHTML=p.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join("");$("projectDialog").showModal();}
$("dialogClose").addEventListener("click",()=>$("projectDialog").close());
$("projectDialog").addEventListener("click",e=>{if(e.target===$("projectDialog"))$("projectDialog").close();});
$("menuToggle").addEventListener("click",()=>{const open=$("nav").classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(open));});
$("nav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{$("nav").classList.remove("open");$("menuToggle").setAttribute("aria-expanded","false");}));
$("copyLinkBtn").addEventListener("click",async()=>{const status=$("copyStatus");try{await navigator.clipboard.writeText(window.location.href);status.textContent="Page link copied!";}catch{status.textContent="Copy is blocked here. Copy the address from your browser's address bar.";}});
renderProfile();renderSkills();renderProjects();renderEducation();renderContact();
