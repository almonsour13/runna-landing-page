import GitHubIcon from "@mui/icons-material/GitHub";
import { Download } from "lucide-react";
import Link from "next/link";
import Card from "../ui/Card";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";

const link = "https://github.com/almonsour13/runna/releases/latest";
const source = "https://github.com/almonsour13/runna";

export default function DownloadSection() {
    return (
        <section
            id="download"
            className="px-4 flex flex-col flex-1 justify-center items-center"
        >
            <div className="w-full max-w-7xl flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8 md:items-center">
                    <Column className="flex-1 gap-4">
                        <Column>
                            <h1 className="text-base text-primary">Download</h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                                Ready to run your best
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Free, open source, no account needed. Install in
                                seconds and start your first run today.
                            </p>
                        </Column>
                        <Row className="gap-2">
                            <Link
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="px-4 h-10 items-center bg-primary text-white font-medium text-sm flex flex-row gap-2">
                                    <Download size={14} />
                                    Download APK
                                </Card>
                            </Link>
                            <Link
                                href={source}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="px-4 h-10 items-center bg-muted text-foreground text-sm flex flex-row gap-2">
                                    <GitHubIcon fontSize="small" />
                                    View Source
                                </Card>
                            </Link>
                        </Row>

                        <div className="flex flex-col gap-2 pt-1">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Android
                                    </span>
                                    <span className="text-primary font-medium">
                                        · Available now
                                    </span>
                                </div>
                                <span className="text-muted-foreground/40">
                                    ·
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <span>iOS</span>
                                    <span className="text-muted-foreground/60">
                                        · Coming soon
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Requires Android 8.0+
                            </p>
                        </div>
                    </Column>

                    <Card className="flex-1 p-0 overflow-hidden">
                        <Column className="w-full gap-0">
                            <div className="w-full flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
                                <span className="text-xs text-muted-foreground ml-2 font-mono">
                                    install.sh
                                </span>
                            </div>
                            <div className="p-5 font-mono text-xs flex flex-col gap-3">
                                <div className="flex gap-3">
                                    <span className="text-primary select-none">
                                        $
                                    </span>
                                    <span className="text-foreground/80">
                                        git clone
                                        https://github.com/almonsour13/runna
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-primary select-none">
                                        $
                                    </span>
                                    <span className="text-foreground/80">
                                        cd runna && npm install
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-primary select-none">
                                        $
                                    </span>
                                    <span className="text-foreground/80">
                                        npm run android
                                    </span>
                                </div>
                            </div>
                        </Column>
                    </Card>
                </div>
            </div>
        </section>
    );
}
