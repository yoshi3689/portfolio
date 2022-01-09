import {
  SiJava,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { GrMonitor } from "react-icons/gr";

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
        <GrMonitor/>
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
