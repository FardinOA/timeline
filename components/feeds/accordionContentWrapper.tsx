import { ReactNode, useEffect, useRef } from "react";

const AccordionContentWrapper = ({
    children,
    className,
    onHeightChange,
}: {
    children: ReactNode;
    className: string;
    onHeightChange: any;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.getBoundingClientRect().height;
            onHeightChange(height);
        }
    }, [onHeightChange, children]);

    return (
        <div ref={contentRef} className={className}>
            {children}
        </div>
    );
};

export default AccordionContentWrapper;
