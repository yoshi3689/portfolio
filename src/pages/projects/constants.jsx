import {
  SiJava,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiBootstrap
} from "react-icons/si";
// import { GrMonitor } from "react-icons/gr";
import Button from '../../components/button/Button'
import { copyToClipboard } from "../../util/copy";
import { scrollToBottom } from "../../util/scrollBottom";

export const FEATURED_PROJECT = [
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit1.png"
  },
  {
    to: "https://github.com/yoshi3689/e-commerce",
    desc: "hello",
    src: "/img/featured/clothit3.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit4.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit5.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit6.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit7.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit8.png"
  },
  {
    to: "https://loving-bhaskara-66c001.netlify.app/",
    desc: "hello",
    src: "/img/featured/clothit9.png"
  },
]

export const PROJECTS = [
  {
    src: "/img/featured/clothit1.png",
    title: "CLOTHIT",
    dates: {
      label: "Date",
      items: ["June 2021 ~ ", "present"],
    },
    techStacks: {
      label: "Main Stacks",
      items: [
      <SiReact />, 
      <SiRedux />, 
      ],
    },
    description: {
      label: null,
      items: [
        "An e-commerce app with shopping cart and checkout features. Product data is managed by redux and wrapper components.",
      ],
    },
    links: {github: "/github", deploy: "https://loving-bhaskara-66c001.netlify.app/"},
  },
  {
    src: "/img/genyosha.png",
    title: "Genyosha website",
    dates: {
      label: "Date",
      items: ["July 2021~ ", "September 2021"],
    },
    techStacks: {
      label: "Tech Stack",
      items: [
        <SiReact />
      ],
    },
    description: {
      label: null,
      items: [
        "An website for a hip-hop production group with CSS glitch text effect and a built-in youtube player",
      ],
    },
    links: {github:"https://github.com/yoshi3689/genyosha-website", deploy: "https://genyosha-website.vercel.app/"},
  },
  {
    src: "/img/haru_books.png",
    title: "Haru-Books",
    dates: {
      label: "Date",
      items: ["2021/10/20 ~ ", "2021/11/3"],
    },
    techStacks: {
      label: "Main Stacks",
      items: [
      <SiReact />, 
      <SiRedux />, 
      ],
    },
    description: {
      label: null,
      items: [
        "An app for keeping track of books to read. It has google login auth and redux store to manage data fetched from google books.",
      ],
    },
    links: {github: "/github", deploy: "http://haru-books.herokuapp.com/"},
  },
  {
    src: "/img/havocado.png",
    title: "Havomacho",
    dates: {
      label: "Date",
      items: ["2021/12/17 ~ ", "2021/12/19"],
    },
    techStacks: {
      label: "Tech Stack",
      items: [
        <SiJavascript />,
        <SiMongodb />,
        <SiNodedotjs/>,
        <SiExpress/>,
      ],
    },
    description: {
      label: null,
      items: [
        "A hackathon project for decreasing food waste which allows the user to post to and read from the backend built with MongoDB and Express.",
      ],
    },
    links: {github: "https://github.com/yoshi3689/Entomology-Enthusiasts", deploy: null},
  },
  {
    src: "/img/daily_dose.png",
    title: "Daily Dose",
    dates: {
      label: "Date",
      items: ["September ~ ", "December 2021"],
    },
    techStacks: {
      label: "Tech Stack",
      items: [
        <SiJavascript />,
        <SiHtml5 />,
        <SiCss3 />,
        <SiBootstrap />,
        <SiFirebase />
      ],
    },
    description: {
      label: null,
      items: [
        "A term-project for self-improvements that fetches and filters a list of tasks from FireBase.",
      ],
    },
    links: {github: "https://github.com/yoshi3689/1800_BBYTeam15", deploy: "https://comp1800-group.web.app/"},
  },
];

export const HERO_ABOUT_CONTENTS = { 
  startSmallTxt: "It's me, ",
  startBigTxt: <>Yoshi<small className="small">(yuki)</small></>,
  img: "/img/profile_pic.jpeg",
  imgLink: "/",
  bottomContents: [
    <>I'm from Japan, came to Canada 6 months ago.</>,
    <>I started programming about a year ago.</>,
    <>My tech stacks are <span className="tech-stacks"><SiReact /><SiRedux /><SiJava /><SiJavascript /><SiMongodb /><SiNodedotjs/><SiExpress/></span> .</>,
    <>My interests are <span>podcasts, craft beer, climbing</span>.</>,
    <>Feel free to look at <Button element="a" type="text" size="small" link={"https://www.linkedin.com/in/yoshiyuki-nagai-14734918a/"} position="space-right" innerText={"my resume"}/></> ,
] 
};

export const HERO_HOME_CONTENTS = { 
  startSmallTxt: "My name is",
  startBigTxt: "Yoshiyuki Nagai",
  img: "/img/profile_pic.jpeg",
  imgLink: "/about",
  bottomHighlight: "",
  bottomContents: [
    <>I am a term 2 CST student at BCIT with experience with React.</>,
    <>Feel free to look at my projects on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innerText={"projects page"}/> or <Button element="" onClick={scrollToBottom} type="text" size="small" position="space-right" innerText={"here."}/></> ,
    <>Please contact me at <Button element="button" onClick={copyToClipboard} type="text" size="small" position="space-right" innerText={"yoshiyukinagai7@gmail.com"}/></>,
] 
};
