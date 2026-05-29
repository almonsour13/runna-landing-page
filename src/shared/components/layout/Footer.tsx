import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const source = "https://github.com/almonsour13/runna";

export const socials = [
    {
        name: "Facebook",
        icon: Facebook,
        link: "https://www.facebook.com/almonsour.salida",
    },
    {
        name: "LinkedIn",
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/almonsour-salida-5354011ba/",
    },
    {
        name: "Instagram",
        icon: Instagram,
        link: "https://www.instagram.com/al_mnsr13/",
    },
    {
        name: "GitHub",
        icon: GitHub,
        link: "https://github.com/almonsour13",
    },
];
export default function Footer() {
    return (
        <div className="px-4 w-full flex justify-center items-center">
            <div className="w-full max-w-7xl">
                <Column className="gap-6">
                    <Row className="justify-between items-start flex-col md:flex-row gap-4">
                        <Column className="gap-1">
                            <Link href="/">
                                <Row className="items-center">
                                    <Image
                                        src="/icon.png"
                                        className="cursor-pointer w-8 h-8"
                                        width={40}
                                        height={40}
                                        alt="logo"
                                    />
                                    <h1 className="text-xl font-medium">
                                        Runna
                                    </h1>
                                </Row>
                            </Link>
                            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                                Open-source activity tracker built with React
                                Native & Expo. Track every run, hit every goal.
                            </p>
                        </Column>
                        <Column className="gap-1">
                            <Row className="items-center">
                                <h1 className="text-xl font-medium">Connect</h1>
                            </Row>
                            <Row className="flex flex-wrap">
                                {socials.map(({ name, icon: Icon, link }) => (
                                    <Link
                                        key={name}
                                        href={link}
                                        target="_blank"
                                    >
                                        <Card className="p-2 h-10 w-10 aspect-square justify-center items-center text-base text-primary">
                                            <Icon fontSize="small" />
                                        </Card>
                                    </Link>
                                ))}
                            </Row>
                        </Column>
                    </Row>

                    {/* Bottom */}
                    <div className="h-20 py-4 flex flex-col-reverse md:flex-row justify-between md:items-center border-t border-border gap-4">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Runna. All rights
                            reserved.
                        </p>
                        <Row className="items-center gap-1.5">
                            <p className="text-xs text-muted-foreground">
                                Developed By Al-Monsour M. Salida
                            </p>
                        </Row>
                    </div>
                </Column>
            </div>
        </div>
    );
}
