import { cn } from "@/shared/utils/cn";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export function Column({ className, children, ...props }: Props) {
    return (
        <div className={cn("flex flex-col gap-2", className)} {...props}>
            {children}
        </div>
    );
}
