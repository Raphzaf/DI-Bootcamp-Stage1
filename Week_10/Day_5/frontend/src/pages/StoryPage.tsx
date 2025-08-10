import { useParams } from "react-router-dom";
import { useGetStoriesQuery } from "../features/stories/storiesApi";

export default function StoryPage() {
  const { id } = useParams();
  const { data } = useGetStoriesQuery();
  const story = data?.find((s) => String(s.id) === id);
  if (!story) return <div className="p-4">Story not found</div>;
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{story.title}</h1>
      <p className="mt-2 whitespace-pre-wrap">{story.content}</p>
      <h3 className="mt-4 font-semibold">Contributors</h3>
      <ul className="list-disc ml-5">
        {story.contributors?.map((u) => <li key={u.id}>{u.username}</li>)}
      </ul>
    </div>
  );
}