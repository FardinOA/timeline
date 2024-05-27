"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import UserInfo from "../user-info";
import { EllipsisVertical } from "lucide-react";
import Comments from "../comments";
import { VariableSizeList as List } from "react-window";
import {
    useState,
    useRef,
    useCallback,
    useEffect,
    useLayoutEffect,
} from "react";
import AccordionContentWrapper from "./accordionContentWrapper";

const FeedContainer = ({
    posts,
    users,
    comments,
}: {
    posts: any;
    users: any;
    comments: any;
}) => {
    const listRef = useRef<List>(null);
    const [heights, setHeights] = useState(posts.map(() => 120)); // Initial height for each item

    const getItemSize = (index: number) => heights[index];

    const handleResize = useCallback((index: number, size: number) => {
        setHeights((prevHeights: any) => {
            const newHeights = [...prevHeights];
            newHeights[index] = size;
            return newHeights;
        });

        if (listRef.current) {
            listRef.current.resetAfterIndex(index);
        }
    }, []);

    const observeAccordionState = () => {
        console.log("first");
        const accordionItems = document.querySelectorAll(".accordion-item");

        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "data-state"
                ) {
                    const newState = (
                        mutation.target as HTMLElement
                    ).getAttribute("data-state");
                    console.log("AccordionItem state:", newState);
                    if (newState == "open") {
                        const activeIndex = (
                            mutation.target as HTMLElement
                        ).getAttribute("data-index");
                        console.log("AccordionItem index:", activeIndex);
                        // Update the height state only for the opened accordion item
                        setHeights((prev: any) => {
                            const newHeights = [...prev];
                            newHeights[activeIndex] = 500;
                            return newHeights;
                        });
                    }
                }
            });
        });

        accordionItems.forEach((item) => {
            observer.observe(item, { attributes: true });
        });

        // return () => {
        //     observer.disconnect(); // Disconnect the observer when the component unmounts
        // };
    };
    console.log(heights);
    useLayoutEffect(() => {
        const disconnectObserver = observeAccordionState();
        // return () => {
        //     disconnectObserver();
        // };
    }, []);

    const Row = ({ index, style }: { index: any; style: any }) => {
        const post = posts[index];
        return (
            <div style={style}>
                <AccordionItem
                    data-index={index}
                    className="rounded-xl overflow-hidden border-b-0 bg-white border cursor-pointer accordion-item"
                    key={`post-${post.id}`}
                    value={`post-${post.id}`}
                >
                    <AccordionTrigger asChild>
                        <div className="flex-col gap-4 items-start text-start p-4 hover:no-underline">
                            <div className="w-full flex justify-between">
                                <UserInfo data={users} id={post.userId} />
                                <EllipsisVertical className="text-[#4A4B67]" />
                            </div>
                            <div className="w-full">
                                <p>{post.title}</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        {/* <AccordionContentWrapper
                            className="p-4"
                            onHeightChange={(height: any) =>
                                handleResize(index, height)
                            }
                        > */}
                        <Comments data={comments} postId={post?.id} />
                        {/* </AccordionContentWrapper> */}
                    </AccordionContent>
                </AccordionItem>
            </div>
        );
    };

    return (
        <Accordion className="space-y-4" type="single" collapsible>
            <List
                ref={listRef}
                height={800} // Height of the list container
                itemCount={posts.length} // Number of items in the list
                itemSize={getItemSize} // Function to get the height of each item
                width="100%" // Width of the list container
            >
                {Row}
            </List>
        </Accordion>
    );
};

export default FeedContainer;
