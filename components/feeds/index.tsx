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

const getComments = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (!res.ok) {
        //  handle error
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
const getUserInfo = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!res.ok) {
        // handle error
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

const Feeds = async () => {
    const data = await getPosts();
    const comments = await getComments();
    const users = await getUserInfo();
    // sort posts descending order by post id
    const posts = [...data].sort((a, b) => b.id - a.id);

    return (
        <div className=" py-6  min-h-dvh">
            <div className="space-y-4">
                <FeedContainer
                    users={users}
                    comments={comments}
                    posts={posts}
                />
            </div>
        </div>
    );
};

export default Feeds;
