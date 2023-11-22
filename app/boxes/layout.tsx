"use client";

import { Inter } from "next/font/google";
import { BoxIndexProvider } from "@/contexts/BoxIndexContext";

const inter = Inter({ subsets: ["latin"] });

export default function BoxesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <BoxIndexProvider>{children}</BoxIndexProvider>;
}
