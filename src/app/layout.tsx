import { ThemeProvider } from "@/shared/components/ThemeProvider";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "Runna",
    description:
        "A comprehensive activity tracking and fitness management mobile application built with React Native and Expo. Track your runs, workouts, and physical activities with real-time GPS mapping, detailed statistics, and personalized schedules.",

    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${dmSans.variable} ${dmSans.className} h-full antialiased`}
        >
            <body className="min-h-full bg-background flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
