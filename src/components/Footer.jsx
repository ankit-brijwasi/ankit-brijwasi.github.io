import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaStackOverflow,
  FaCopyright,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-6 relative min-h-[200px]">
      <hr
        style={{
          height: "1.2px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      />
      <div className="pt-4">
        <small className="font-bold text-zinc-500 block text-center">
          Find me on:
        </small>
        <div className="flex justify-evenly align-center mt-2 max-w-[200px] mx-auto">
          <a
            href="https://www.instagram.com/ankit_brijwasi"
            rel="nopener noreferrer"
            target="_blank"
          >
            <FaInstagram style={{ width: "20px", height: "20px" }} />
          </a>
          <a
            href="https://twitter.com/ankit_brijwasi4"
            rel="nopener noreferrer"
            target="_blank"
          >
            <FaTwitter style={{ width: "20px", height: "20px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmI1-o9-wJG_Vd0orE-44RQ"
            rel="nopener noreferrer"
            target="_blank"
          >
            <FaYoutube style={{ width: "20px", height: "20px" }} />
          </a>
          <a
            rel="nopener noreferrer"
            href="https://github.com/ankit-brijwasi"
            target="_blank"
          >
            <FaGithub style={{ width: "20px", height: "20px" }} />
          </a>
          <a
            rel="nopener noreferrer"
            href="https://www.linkedin.com/in/ankit-brijwasi"
            target="_blank"
          >
            <FaLinkedin style={{ width: "20px", height: "20px" }} />
          </a>
          <a
            rel="nopener noreferrer"
            href="https://stackoverflow.com/users/11261362/ankit-brijwasi"
            target="_blank"
          >
            <FaStackOverflow style={{ width: "20px", height: "20px" }} />
          </a>
        </div>
      </div>
      <div className="absolute mb-5 bottom-0 w-full text-center text-zinc-500">
        {new Date().getFullYear()}
        <FaCopyright
          style={{
            display: "inline-block",
            verticalAlign: "-2px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        />
        Ankit Brijwasi
      </div>
    </footer>
  );
}
