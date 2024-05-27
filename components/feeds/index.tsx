import { EllipsisVertical } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UserInfo from "../user-info";
import Comments from "../comments";
import FeedContainer from "./feed-container";

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        //  handle error
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

const Feeds = async () => {
    const data = await getPosts();

    // sort posts descending order by post id
    const posts = [...data].sort((a, b) => b.id - a.id);

    return (
        <div className=" py-6  min-h-dvh">
            <div className="space-y-4">
                <FeedContainer posts={posts} />
            </div>
        </div>
    );
};

export default Feeds;
