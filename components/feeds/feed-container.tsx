import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UserInfo from "../user-info";
import { EllipsisVertical } from "lucide-react";
import Comments from "../comments";
const FeedContainer = ({ posts }: { posts: any }) => {
    return (
        <Accordion className="space-y-4" type="single" collapsible>
            {" "}
            {posts?.map((post: any) => (
                <AccordionItem
                    className="rounded-xl overflow-hidden border-b-0 bg-white border cursor-pointer "
                    key={`post-${post.id}`}
                    value={`post-${post.id}`}
                >
                    <AccordionTrigger asChild>
                        <div className="  flex-col gap-4 items-start text-start p-4 hover:no-underline ">
                            <div className=" w-full flex justify-between ">
                                <UserInfo id={post.userId} />
                                <EllipsisVertical className=" text-[#4A4B67] " />
                            </div>
                            <div className="  w-full ">
                                <p>{post.title}</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className=" p-4 h-96  ">
                        <Comments postId={post?.id} />
                    </AccordionContent>
                </AccordionItem>
            ))}{" "}
        </Accordion>
    );
};

export default FeedContainer;
