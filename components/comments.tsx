import type { Comment } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";

const Comments = ({ postId, data }: { postId: number; data: Comment[] }) => {
    const comments = data?.filter((el: Comment) => el.postId === postId);

    return (
        <div className="border-t pt-4 space-y-2 h-[500px] overflow-y-auto divide-y  ">
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
