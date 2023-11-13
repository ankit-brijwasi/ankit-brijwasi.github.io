import { Link } from "react-router-dom";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

import Box from "../components/box/Box";

import dripdrop from "../assets/projects/dripdrop.png";
import devduels from "../assets/projects/devduels.png";
import fastpanel from "../assets/projects/fastpanel.png";
import ghostCloud from "../assets/projects/ghost-cloud.png";
import chatapp from "../assets/projects/chat-app.png";

const ProjectCard = (props) => {
  return (
    <Box className="p-0" responsive>
      <img
        src={props.img.src}
        alt={props.img.alt}
        style={{
          width: "100%",
          height: "200px",
        }}
      />
      <div className="px-2 pt-2 pb-4">
        <h3 className="text-xl font-bold line-clamp-2 break-words font-mono mb-1">
          {props.title}
        </h3>
        <h6 className="mb-0 line-clamp-2 leading-5">{props.description}</h6>
        <div className="flex align-center">
          <Link
            to={props.github}
            className="text-sky-800 mr-2 inline-block text-lg"
            target="_blank"
          >
            <FaCode style={{ display: "inline-block" }} />
          </Link>
          {props.demo && (
            <Link
              to={props.demo}
              className="text-sky-800 mt-1 inline-block text-sm"
              target="_blank"
            >
              <FaExternalLinkAlt style={{ display: "inline-block" }} />
            </Link>
          )}
        </div>
      </div>
    </Box>
  );
};

const projects = [
  {
    img: { src: dripdrop, alt: "DripDrop home page" },
    title: "DripDrop",
    description: "Social media platform built using Appwrite & FastAPI",
    github: "https://github.com/ankit-brijwasi/dripdrop",
    demo: "https://dripdrop-hashnode.netlify.app",
  },
  {
    img: { src: fastpanel, alt: "fastpanel home page" },
    title: "FastPanel",
    description: "Modern Django like admin panel form FARM stack",
    github: "https://github.com/ankit-brijwasi/fastPanel",
    demo: null,
  },
  {
    img: { src: devduels, alt: "DevDuels challenge completed page" },
    title: "DevDuels",
    description: "A realtime coding platform for devs to compete!",
    github: "https://github.com/ankit-brijwasi/devduels-frontend",
    demo: null,
  },
  {
    img: { src: ghostCloud, alt: "Ghost cloud home page" },
    title: "Ghost Cloud",
    description:
      "Ghost Cloud is an online platform for sharing files, and its a cloud-first microservices application.",
    github: "https://github.com/ankit-brijwasi/ghost-cloud",
    demo: null,
  },
  {
    img: { src: chatapp, alt: "Django ASGI chat app" },
    title: "Django chat app",
    description:
      "A chatting app built using only, Django channels and Javascript",
    github: "https://github.com/ankit-brijwasi/chat-app-backend",
    demo: null,
  },
];

const Project = (props) => {
  return (
    <main className="flex flex-wrap justify-between">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          title={project.title}
          description={project.description}
          img={{ ...project.img }}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </main>
  );
};

export default Project;
