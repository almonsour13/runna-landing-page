"use client";

import { cn } from "@/shared/utils/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Card from "../ui/Card";
import { Column } from "../ui/Column";

const faqs = [
    {
        q: "Is Runna free to use?",
        a: "Yes — the core app is completely free. You can track unlimited runs, view your route map, and see all your stats at no cost. A Pro plan with advanced analytics and training plans is available for power users.",
    },
    {
        q: "How accurate is the GPS tracking?",
        a: "Runna uses Kalman filtering on raw GPS coordinates, achieving sub-5m accuracy in most conditions. In dense urban areas, accuracy may vary slightly — but dead-reckoning fills any short gaps so your distance is always reliable.",
    },
    {
        q: "Will it drain my battery?",
        a: "Runna is built with battery efficiency in mind. Background tracking uses the device's low-power GPS mode and only wakes the CPU on meaningful movement changes. A typical 5km run uses under 4% battery on modern devices.",
    },
    {
        q: "Does it work without internet?",
        a: "Completely. Runna is offline-first — all runs are saved locally using SQLite. Maps cache your recent areas automatically. Your data stays on your device with no cloud sync required.",
    },
    {
        q: "Which devices are supported?",
        a: "Runna runs on iOS 15+ and Android 10+, optimised for both phones and tablets. Apple Watch and Wear OS companion apps are on the roadmap for later this year.",
    },
    {
        q: "Can I export my run data?",
        a: "Yes. You can export any run as a GPX or CSV file from the activity detail screen, making it easy to import into Strava, Garmin Connect, or any other fitness platform.",
    },
    {
        q: "How does background tracking work?",
        a: "Runna uses Expo's Task Manager to keep tracking in the background. When you minimize the app, it continues collecting GPS data efficiently and periodically syncs it to local storage.",
    },
    {
        q: "Can I customize the app to my preferences?",
        a: "Yes. Runna lets you customize units (metric/imperial), choose between light/dark/auto themes, adjust notification preferences, and set personal fitness goals.",
    },
    {
        q: "What happens to my data?",
        a: "All your data stays on your device. There's no cloud sync, no tracking, and no ads. You have complete privacy and control over your running information.",
    },
    {
        q: "Can I share my runs with others?",
        a: "While Runna stores data locally for privacy, you can export your runs and share them via your platform of choice, or use the export feature to upload to social fitness apps.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="px-4 flex justify-center">
            <div className="w-full max-w-7xl flex flex-col gap-8">
                <Column className="gap-2">
                    <p className="text-xs uppercase tracking-widest text-primary">
                        FAQ
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl">
                        Common questions
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-md">
                        Everything you need to know before your first run.
                    </p>
                </Column>

                <Card className="border border-border flex flex-col p-0 overflow-hidden divide-y divide-border">
                    {faqs.map(({ q, a }, i) => (
                        <div key={q}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-muted/40 transition-colors"
                            >
                                <span className="text-sm font-medium leading-snug">
                                    {q}
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={cn(
                                        "text-muted-foreground shrink-0 transition-transform duration-200",
                                        open === i && "rotate-180",
                                    )}
                                />
                            </button>

                            {open === i && (
                                <p className="text-sm text-muted-foreground leading-relaxed px-5 pb-4">
                                    {a}
                                </p>
                            )}
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    );
}
