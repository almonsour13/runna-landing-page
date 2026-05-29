"use client";
import { cn } from "@/shared/utils/cn";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { Row } from "../ui/Row";

export const NAV = {
    logo: "/icon.png",
    links: [
        { label: "Home", href: "/" },
        { label: "Features", href: "/#features" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "FAQ", href: "/#faq" },
    ],
    cta: {
        label: "Get App",
        href: "#download",
    },
};
export default function Header() {
    const pathname = usePathname();
    const { setTheme, theme } = useTheme();

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("/");

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        const sections = NAV.links
            .map((link) => {
                const id = link.href.split("#")[1];
                if (!id) return null;
                return document.getElementById(id);
            })
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`/#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.6,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 80) {
                setActive("/");
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="sticky top-0 z-10 px-4 bg-background w-full h-20 flex justify-center items-center">
            <div className="w-full max-w-7xl flex justify-between items-center relative">
                <Row className="items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden cursor-pointer"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <Link href="/">
                        <Row className="items-center">
                            <Image
                                src={NAV.logo}
                                className="cursor-pointer w-8 h-8"
                                width={40}
                                height={40}
                                alt="logo"
                            />
                            <h1 className="text-xl font-medium">Runna</h1>
                        </Row>
                    </Link>
                </Row>
                <div className="flex-1 hidden md:flex justify-center items-center gap-8">
                    {NAV.links.map((link) => {
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "hover:text-primary",
                                    active === link.href &&
                                        "text-primary font-medium",
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <Row>
                    <Link href={NAV.cta.href}>
                        <Card className="px-4 h-10 items-center bg-primary text-white font-medium text-sm">
                            <span className="">{NAV.cta.label}</span>
                        </Card>
                    </Link>
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="cursor-pointer"
                    >
                        <Card className="p-2 h-10 w-10 aspect-square justify-center items-center text-base text-foreground border">
                            {theme === "dark" ? (
                                <Sun size={20} />
                            ) : (
                                <Moon size={20} />
                            )}
                        </Card>
                    </button>
                </Row>
                {open && (
                    <div className="absolute top-16 left-0 w-56 rounded-xl border bg-background shadow-lg p-2 flex flex-col gap-1 md:hidden">
                        {NAV.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="px-3 py-2 rounded-lg hover:bg-muted"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
