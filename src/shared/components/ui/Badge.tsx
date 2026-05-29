import { cn } from "@/shared/utils/cn";

interface Props {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export default function Badge({ children, className, ...props }: Props) {
    return (
        <div
            className={cn(
                "w-fit flex items-center text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded bg-primary/25 border border-primary/50",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
