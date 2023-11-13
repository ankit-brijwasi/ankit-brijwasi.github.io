import Box from "../components/box/Box";
import BoxContainer from "../components/box/BoxContainer";

// assets
import reactLogo from "../assets/react.png";
import djangoLogo from "../assets/django.webp";
import fastapiLogo from "../assets/fastapi.png";
import flaskLogo from "../assets/flask.png";
import goginLogo from "../assets/go-gin.png";
import muiLogo from "../assets/material-ui.png";
import tailwindLogo from "../assets/tailwind.png";
import grpcLogo from "../assets/grpc.png";

import postgreLogo from "../assets/postgresql.png";
import sqliteLogo from "../assets/sqlite.png";
import mongoDBLogo from "../assets/mongodb.png";

import awsLogo from "../assets/aws.png";
import gcpLogo from "../assets/google-cloud.png";
import k8Logo from "../assets/k8.png";
import kedaLogo from "../assets/keda.png";
import nginxLogo from "../assets/nginx.png";

import rabbitmqLogo from "../assets/rabbitmq.png";
import redisLogo from "../assets/redis.png";

import jsLogo from "../assets/javascript.png";
import pythonLogo from "../assets/python.png";
import golangLogo from "../assets/Go.png";

const SkillCard = ({ skillInfo }) => {
  return (
    <Box className="flex items-center justify-center px-0 py-3" responsive>
      <div className="basis-1/3">
        <img
          src={skillInfo.img}
          width={skillInfo.width}
          height={skillInfo.height}
          alt={skillInfo.name}
          className="m-auto"
        />
      </div>
      <div className="basis-2/3">
        <p className="text-sm font-mono font-bold text-indigo-500">
          {skillInfo.subtitle}
        </p>
        <h2 className="text-xl font-[600]">{skillInfo.name}</h2>
        <h4 className="text-xs text-white font-[calibri] mt-[5px]">
          {skillInfo.level === 0 && (
            <span className="bg-indigo-500 px-2 py-1">Beginner</span>
          )}
          {skillInfo.level === 1 && (
            <span className="bg-indigo-500 px-2 py-1">Intermediate</span>
          )}
          {skillInfo.level === 2 && (
            <span className="bg-indigo-500 px-2 py-1">Advanced</span>
          )}
        </h4>
      </div>
    </Box>
  );
};

const languages = [
  {
    img: pythonLogo,
    subtitle: "APIs & SCRIPTING USING",
    name: "Python",
    width: 59,
    height: 59,
    level: 2,
  },
  {
    img: golangLogo,
    subtitle: "APIs USING",
    name: "Go",
    width: 80,
    height: 80,
    level: 0,
  },
  {
    img: jsLogo,
    subtitle: "SCRIPTING USING",
    name: "Javascript",
    width: 70,
    height: 70,
    level: 1,
  },
];

const serverSideFrameworks = [
  {
    img: djangoLogo,
    subtitle: "BACKEND & APIs USING",
    name: "Django and DRF",
    width: 70,
    height: 70,
    level: 2,
  },
  {
    img: fastapiLogo,
    subtitle: "BACKEND & APIs USING",
    name: "FastAPI",
    width: 65,
    height: 65,
    level: 1,
  },
  {
    img: flaskLogo,
    subtitle: "BACKEND & APIs USING",
    name: "Flask",
    width: 60,
    height: 60,
    level: 0,
  },
  {
    img: grpcLogo,
    subtitle: "M/S & APIs USING",
    name: "gRPC",
    width: 80,
    height: 80,
    level: 0,
  },
  {
    img: goginLogo,
    subtitle: "APIs USING",
    name: "GIN",
    width: 60,
    height: 60,
    level: 0,
  },
];

const databases = [
  {
    img: postgreLogo,
    subtitle: "MANAGING DATA USING",
    name: "PostgreSQL",
    width: 70,
    height: 70,
    level: 2,
  },
  {
    img: sqliteLogo,
    subtitle: "MANAGING DATA USING",
    name: "SQLite",
    width: 80,
    height: 80,
    level: 2,
  },
  {
    img: mongoDBLogo,
    subtitle: "MANAGING DATA USING",
    name: "Mongo DB",
    width: 80,
    height: 80,
    level: 1,
  },
];

const clientSideFrameworks = [
  {
    img: reactLogo,
    subtitle: "FRONTEND USING",
    name: "React JS",
    width: 70,
    height: 70,
    level: 1,
  },
  {
    img: muiLogo,
    subtitle: "UI/UX USING",
    name: "Material UI",
    width: 80,
    height: 80,
    level: 2,
  },
  {
    img: tailwindLogo,
    subtitle: "UI USING",
    name: "tailwind.css",
    width: 80,
    height: 80,
    level: 1,
  },
];

const devops = [
  {
    img: k8Logo,
    subtitle: "DEPLOYEMENTS USING",
    name: "Kubernetes",
    width: 60,
    height: 60,
    level: 1,
  },
  {
    img: nginxLogo,
    subtitle: "DEPLOYEMENTS USING",
    name: "Nginx",
    width: 60,
    height: 60,
    level: 2,
  },
  {
    img: kedaLogo,
    subtitle: "EVENT DRIVEN K8 USING",
    name: "KEDA",
    width: 70,
    height: 70,
    level: 1,
  },
  {
    img: gcpLogo,
    subtitle: "CLOUD SERVICES ON",
    name: "GCP",
    width: 60,
    height: 60,
    level: 2,
  },
  {
    img: awsLogo,
    subtitle: "CLOUD SERVICES ON",
    name: "AWS",
    width: 60,
    height: 60,
    level: 1,
  },
];

const brokers = [
  {
    img: rabbitmqLogo,
    subtitle: "M/S arch. USING",
    name: "Rabbit MQ",
    width: 60,
    height: 60,
    level: 2,
  },
  {
    img: redisLogo,
    subtitle: "Caching & M/S arch. USING",
    name: "Redis",
    width: 60,
    height: 60,
    level: 1,
  },
];

const TechStack = (props) => {
  return (
    <main>
      <section className="mb-4" id="languages">
        <h4 className="text-md text-gray-500 font-semibold mb-1">
          Primary languages
        </h4>
        <BoxContainer>
          {languages.map((language, i) => (
            <SkillCard key={i} skillInfo={language} />
          ))}
        </BoxContainer>
      </section>
      <section className="mb-4" id="server-side-frameworks">
        <h4 className="text-md text-gray-500 font-semibold mb-1">
          Server Side Frameworks
        </h4>
        <BoxContainer>
          {serverSideFrameworks.map((framework, i) => (
            <SkillCard key={i} skillInfo={framework} />
          ))}
        </BoxContainer>
      </section>
      <section className="mb-4" id="server-side-frameworks">
        <h4 className="text-md text-gray-500 font-semibold mb-1">Databases</h4>
        <BoxContainer>
          {databases.map((framework, i) => (
            <SkillCard key={i} skillInfo={framework} />
          ))}
        </BoxContainer>
      </section>
      <section className="mb-4" id="client-side-frameworks">
        <h4 className="text-md text-gray-500 font-semibold mb-1">
          Client Side Frameworks
        </h4>
        <BoxContainer>
          {clientSideFrameworks.map((framework, i) => (
            <SkillCard key={i} skillInfo={framework} />
          ))}
        </BoxContainer>
      </section>
      <section className="mb-4" id="devops">
        <h4 className="text-md text-gray-500 font-semibold mb-1">DevOps</h4>
        <BoxContainer>
          {devops.map((framework, i) => (
            <SkillCard key={i} skillInfo={framework} />
          ))}
        </BoxContainer>
      </section>
      <section className="mb-4" id="brokers">
        <h4 className="text-md text-gray-500 font-semibold mb-1">
          Message Brokers
        </h4>
        <BoxContainer>
          {brokers.map((framework, i) => (
            <SkillCard key={i} skillInfo={framework} />
          ))}
        </BoxContainer>
      </section>
    </main>
  );
};

export default TechStack;
