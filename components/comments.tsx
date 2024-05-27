import type { Comment } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";

const getComments = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (!res.ok) {
        //  handle error
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const Comments = async ({ postId }: { postId: number }) => {
    const data = await getComments();
    const comments = data?.filter((el: any) => el.postId === postId);
    console.log(comments);
    return (
        <div className="border-t pt-4 space-y-2 h-full overflow-y-auto divide-y  ">
            {comments?.map((comment: Comment) => (
                <Card
                    className="  shadow-none py-2 border-0 space-y-2  "
                    key={comment.id}
                >
                    <CardHeader className=" flex-row gap-2 py-2 ">
                        <div className=" size-[32px] bg-primary rounded-full "></div>
                        <p className="font-medium  ">{comment?.name}</p>
                    </CardHeader>
                    <CardContent className="pb-2">
                        <p>{comment?.body}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Comments;
