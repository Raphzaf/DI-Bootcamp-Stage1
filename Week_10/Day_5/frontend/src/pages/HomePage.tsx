import { useGetStoriesQuery } from "../features/stories/storiesApi";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data, isLoading } = useGetStoriesQuery();
  if (isLoading) return <div className="p-4">Loading…</div>;
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Stories</h1>
      <div className="grid gap-3">
        {data?.map((s) => (
          <Link to={`/story/${s.id}`} key={s.id} className="card bg-base-200 p-4 hover:bg-base-300">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="opacity-80 line-clamp-2">{s.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}