/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "mdamansour",
  title: "Hi all, I'm Mohammed",
  subTitle: emoji(
    "A passionate Electrical Engineer & Entrepreneur 🚀 with experience in embedded systems, automation, and mobile app development using Flutter, React Native, and Python."
  ),
  resumeLink: "https://amansour.me/resume.pdf", // Link to your resume
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/mdamansour/",
  gmail: "m@amansour.me",
  github: "https://github.com/mdamansour",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED ENGINEER EXPLORING EMBEDDED SYSTEMS, AUTOMATION, AND MOBILE APPS",
  skills: [
    emoji(
      "⚡ Design and implement embedded systems for real-time applications"
    ),
    emoji("⚡ Develop automated solutions using PLCs and microcontrollers"),
    emoji(
      "⚡ Create high-performance mobile apps with minimalist design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "microchip",
      fontAwesomeClassname: "fas fa-microchip" // Custom icon if available
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sidi Mohamed Ben Abdellah University - FST, Fez",
      logo: require("./assets/images/fstfLogo.png"), // Add FST logo if available
      subHeader: "M.Sc. in Electrical Engineering & Embedded Systems",
      duration: "2025-2027",
      desc: "Focused on embedded systems, automation, electronics, and telecommunications.",
      descBullets: [
        "Designed a real-time cable identification system during internship at Aptiv",
        "Developed a traffic lights control system using flip-flops and logic gates"
      ]
    },
	{
      schoolName: "Abdelmalek Essaâdi University - FST, Tangier",
      logo: require("./assets/images/fsttLogo.png"), // Add FST logo if available
      subHeader: "B.Sc. in Electrical Engineering & Industrial Systems",
      duration: "2022-2025",
      desc: "Focused on embedded systems, automation, electronics, and telecommunications.",
      descBullets: [
        "Designed a real-time cable identification system during internship at Aptiv",
        "Developed a traffic lights control system using flip-flops and logic gates"
      ]
    },
    {
      schoolName: "Technical High School Moulay Youssef, Tangier",
      logo: require("./assets/images/moulayYoussefLogo.png"), // Add logo if available
      subHeader: "High School Diploma in Electrical Sciences & Technologies",
      duration: "2019-2022",
      desc: "Gained foundational knowledge in PLCs, PCB design, and programming.",
      descBullets: ["Completed projects on transformers and technical drawing"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Embedded Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "Automation",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Embedded Systems Engineer",
      company: "ALTEN, Fez",
      companylogo: require("./assets/images/altenLogo.png"), // Add Alten logo if available
      date: "Sep 2025 – Ongoing",
      desc: "Designing and developing embedded software solutions for automotive and industrial applications.",
      descBullets: [
        "Developing firmware for microcontrollers and real-time systems",
        "Collaborating with cross-functional teams to integrate hardware and software components",
        "Optimizing performance and ensuring compliance with industry standards"
      ]
    },
	{
      role: "Co-Founder",
      company: "GryLab, Tangier",
      companylogo: require("./assets/images/grylabLogo.png"), // Add GryLab logo if available
      date: "Apr 2025 - Ongoing",
      desc: "Co-founded a tech startup developing high-performance, minimalist mobile apps.",
      descBullets: [
        "Utilized Flutter, React Native, Python, and AWS for app development",
        "Optimized apps for efficiency and single-function performance"
      ]
    },
    {
      role: "Embedded Systems Engineering Intern",
      company: "Aptiv, Tangier",
      companylogo: require("./assets/images/aptivLogo.png"),
      date: "Apr-Jul 2025 (3 months)",
      desc: "Designed and tested a real-time cable identification system.",
      descBullets: [
        "Used Arduino Mega, C++, and Proteus for implementation",
        "Integrated I2C communication and GUI interfaces"
      ]
    },
    {
      role: "Automation Engineering Intern",
      company: "Tanger MED, Ksar Sghir",
      companylogo: require("./assets/images/tangermedLogo.png"), // Add logo if available
      date: "Sep 2024 (1 month)",
      desc: "Configured an anti-collision safety system with SICK laser sensors.",
      descBullets: [
        "Employed SIEMENS PLCs and Ladder Logic for automation",
        "Utilized MATLAB and Simatic Step 7 for configuration"
      ]
    },
    {
      role: "Full-Stack Development Intern",
      company: "Cloud Marketing Hub, Tangier",
      companylogo: require("./assets/images/cloudMarketingLogo.png"), // Add logo if available
      date: "Aug 2024 (1 month)",
      desc: "Developed a school management app for payment and attendance tracking.",
      descBullets: [
        "Used PHP, MySQL, HTML, CSS, and Bootstrap",
        "Managed database with WampServer and phpMyAdmin"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT SHAPED MY ENGINEERING JOURNEY",
  projects: [
    {
      image: require("./assets/images/aptivLogo.png"), // Add image if available
      projectName: "Cable Identification System",
      projectDesc: "Developed a real-time system for Aptiv using Arduino and EEPROM.",
      footerLink: [
        {
          name: "Project Report",
          url: "https://amansour.me/graduation-report.pdf"
        }
      ]
    },
    {
      image: require("./assets/images/aptivLogo.png"), // Add image if available
      projectName: "Traffic Lights Control System",
      projectDesc: "Implemented an automated system using flip-flops and logic gates.",
      footerLink: [
        {
          name: "Project Details",
          url: "https://amansour.me/academic-projects"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "CERTIFICATIONS AND PROJECTS THAT MARK MY GROWTH",

  achievementsCards: [
    {
      title: "EY Green Skills Passport",
      subtitle: "Certified in sustainable engineering practices.",
      image: require("./assets/images/aptivLogo.png"), // Add logo if available
      imageAlt: "EY Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://amansour.me/certifications"
        }
      ]
    },
    {
      title: "Huawei Next-Gen Cyber Security",
      subtitle: "Completed training in cybersecurity fundamentals.",
      image: require("./assets/images/aptivLogo.png"), // Add logo if available
      imageAlt: "Huawei Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://amansour.me/certifications"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "SHARING KNOWLEDGE ON ENGINEERING THROUGH AMANSOUR BLOG",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://amansour.me/blog/embedded-systems",
      title: "Introduction to Embedded Systems",
      description:
        "A guide to getting started with embedded systems and microcontrollers."
    },
    {
      url: "https://amansour.me/blog/automation-tips",
      title: "Tips for Automation Projects",
      description:
        "Practical advice for configuring PLCs and sensors in automation."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING MY ENGINEERING INSIGHTS WITH OTHERS 😊"
  ),

  talks: [
    {
      title: "Embedded Systems in Industry",
      subtitle: "Presentation at FST Tangier Tech Seminar 2025",
      slides_url: "https://amansour.me/slides/embedded-talk",
      event_url: "https://fstt.ac.ma/events/tech-seminar-2025"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING ENGINEERING AND INNOVATION",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/mdamansour/embed/episodes/Engineering-Journey-e9givv"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 708 99 28 70",
  email_address: "m@amansour.me"
};

// Twitter Section

const twitterDetails = {
  userName: "mdamansour", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};