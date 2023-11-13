import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import Box from "../components/box/Box";

async function getData() {
  const res = await fetch("https://dev.to/api/articles?username=ankitbrijwasi");
  if (!res.ok) return [];
  return res.json();
}

function formatTime(date) {
  let time = new Date(date).toLocaleTimeString();
  time = time.split(":");
  if (parseInt(time[0]) > 12) return `${(parseInt(time[0]) - 12)}:${time[1]} pm`;
  else if (parseInt(time[0]) === 12) return `12:${time[1]} pm`;
  else if (parseInt(time[0]) === 0) return `12:${time[1]} am`;
  return `${parseInt(time[0])}:${time[1]} am`;
}

const ArticleComponent = ({ article }) => {
  return (
    <Box className="p-0" responsive>
      <div className="px-2 py-4">
        <h4 className="text-lg line-clamp-2 break-words font-mono leading-5 mb-2">
          {article.title}
        </h4>
        <span>
          <FaHeart
            style={{
              display: "inline-block",
              verticalAlign: "-2px",
              color: "crimson",
              marginRight: "3px",
            }}
          />
          {article.public_reactions_count.toString()}
        </span>
        <p className="text-sm font-[calibri] font-[550] text-gray-500">
          {article.readable_publish_date} at {formatTime(article.published_at)}
        </p>
        <Link
          to={article.canonical_url}
          className="text-sky-800 text-sm underline"
          target="_blank"
        >
          Read here
        </Link>
      </div>
    </Box>
  );
};

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setArticles(await getData());
      } catch {
        alert("Unable to fetch blogs! Please try again");
      }
    })();
  }, []);

  return (
    <main className="flex flex-wrap justify-between">
      {articles.map((article, i) => (
        <ArticleComponent key={i} article={article} />
      ))}
    </main>
  );
}
