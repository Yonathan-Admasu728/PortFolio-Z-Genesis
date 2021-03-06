// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 750,
    // if true, animation plays only once when element comes on screen
    once: false,
  };
  // Change your display name on tha landing display
  const header = {
    name: "Yonathan Admasu",
  };
  const background = {
    // Options: Snow or Particle
    type: "Particle",
  };
  // Write a para about yourself here
  // To update your image, go to './styles/images.css'
  const section2title = "About Me";
  const about = {
    paragraph:
      "My name is Yonathan Admasu. I specialize in full stack web development with passion for Front-End Engineering. I create beautiful simplistic websites that creatively solve problem which provides services, and apps around the world. ",
  };
  // Edit your skill and the percentage you know about it
  // To Add a skill, copy any one below and paste it after the last comma
  const skillsBar = [
    {
      name: "HTML5",
      // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
      svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
      faClass: "fab fa-html5",
    },
    {
      name: "CSS3",
      // svg: '',
      faClass: "fab fa-css3",
    },
    {
      name: "Javascript",
      // svg: '',
      faClass: "fab fa-js",
    },
    {
      name: "Typescript",
      // svg: '',
      faClass: "fab fa-ts",
    },
    {
      name: "SASS",
      // svg: '',
      faClass: "fab fa-sass",
    },
    {
      name: "Node",
      // svg: '',
      faClass: "fab fa-node",
    },
    {
      name: "Python",
      // svg: '',
      faClass: "fab fa-python",
    },
    {
      name: "Java",
      // svg: '',
      faClass: "fab fa-java",
    },
    {
      name: "Django",
      // svg: '',
      faClass: "fab fa-django",
    },
    {
      name: "PHP",
      // svg: '',
      faClass: "fab fa-php",
    },
    {
      name: "Database",
      // svg: '',
      faClass: "fas fa-database",
    },
    {
      name: "AWS",
      // svg: '',
      faClass: "fab fa-aws",
    },
  ];
  // Edit your projects, its name, your skills used to make it, and the url.
  // You can omit freely anything if you dont have it
  // To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
  const section3Title = "Past Projects";
  const projects = [
    {
      // Add image in './styles/images.css' in #project1
      id: "project1",
      name: "Project 1",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
    {
      // Add image in './styles/images.css' in #project2
      id: "project2",
      name: "Project 2",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
    {
      // Add image in './styles/images.css' in #project3
      id: "project3",
      name: "Project 3",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
    {
      // Add image in './styles/images.css' in #project4
      id: "project4",
      name: "Project 4",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
    {
      // Add image in './styles/images.css' in #project5
      id: "project5",
      name: "Project 5",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
    {
      // Add image in './styles/images.css' in #project6
      id: "project6",
      name: "Project 6",
      skills: ["HTML, CSS, JS"],
      url: "https://github.com/kaustubhai",
    },
  ];
 
  // Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
  // To get your own jotform link, go to https://formspree.io/
  // If you hacve the link already, paste it in the contactUrl below
  const section5Title = "Get in Touch";
  const contact = {
    pitch:
      "Feel free to contact me by submitting this form, clicking on Github, LinkedIn, Tweeter,and please click on Resume icons to see my Resume.",
    copyright: "Yonathan Admasu",
    contactUrl: "https://formspree.io/f/mknywzgn",
  };
  // Paste your respective social media links. You can omit any if you dont have it
  // Upload your resume in your drive, get the shaareable link and paste it in the resume section
  const social = {
    github: "https://github.com/Yonathan-Admasu728",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com/Yonatha56298641",
    instagram: "https://instagram.com",
    linkedin: "https://www.linkedin.com/in/yonathanadmasu/",
    resume: "https://docs.google.com/document/d/1tXyqEPaG0NZcBMNjJBzkFNSBgfTQnSEziq7WV8GV_z0/edit?usp=sharing",
  };
  // Dont change anything here
  export {
    animation,
    header,
    background,
    about,
    skillsBar,
    projects,
    contact,
    social,
    section2title,
    section3Title,
    section5Title,
  };