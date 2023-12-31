"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemesProvider } from "@/contexts/ThemeContext";
import Theme from "./Theme";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemesProvider>
					<Theme />
					{children}
					<Footer />
				</ThemesProvider>
			</body>
		</html>
	);
}
