import { cn } from "@/shared/utils/cn";

interface Props {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export default function Card({ children, className, ...props }: Props) {
    return (
        <div
            className={cn(
                "p-4 flex bg-card rounded",
                // "border border-border",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
