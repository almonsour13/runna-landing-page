import { cn } from "@/shared/utils/cn";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export function Row({ className, children, ...props }: Props) {
    return (
        <div className={cn("flex flex-row gap-2", className)} {...props}>
            {children}
        </div>
    );
}
