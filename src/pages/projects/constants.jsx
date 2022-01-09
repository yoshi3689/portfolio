import {
  SiJava,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
// import { GrMonitor } from "react-icons/gr";
import Button from '../../components/button/Button'
import { copyToClipboard } from "../../util/copy";
import { scrollToBottom } from "../../util/scrollBottom";

export const PROJECTS = [
  {
    src: "/img/portfolio_placeholder.jpg",
    title: "CLOTHIT",
    dates: {
      label: "Date",
      items: ["2021/10/20 ~ ", "2021/11/3"],
    },
    duration: {
      label: "Duration",
      items: ["2 weeks"],
    },
    techStacks: {
      label: "Tech Stack",
      items: [<SiReact />, 
      <SiRedux />, 
      <SiJava />,
        <SiJavascript />,
        <SiMongodb />,
        <SiNodedotjs/>,
        <SiExpress/>,
      ],
    },
    description: {
      label: null,
      items: [
        "e-commerce web app for selling clothes with features like cart and checkout",
      ],
    },
    links: ["/github", "/deploy"],
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
    <>My tech stacks are <span className="tech-stacks"><SiReact /><SiRedux /><SiJava /><SiJavascript /><SiMongodb /><SiNodedotjs/><SiExpress/></span></>,
    <>My interests are <span>podcasts, craft beer, climbing</span></>,
    <>Feel free to look at <Button element="a" onClick={scrollToBottom} type="text" size="small" position="space-right" innertext={"my resume"}/></> ,
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
    <>Feel free to look at my projects on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innertext={"portfolio page"}/> or <Button element="" onClick={scrollToBottom} type="text" size="small" position="space-right" innertext={"here."}/></> ,
    <>Please contact me at <Button element="button" onClick={copyToClipboard} type="text" size="small" position="space-right" innertext={"yoshiyukinagai7@gmail.com"}/></>,
    // <>My bio is on the <Button element="Link" link="/projects" type="text" size="small" position="space-right" innertext={"about page"}/></>  
] 
};
