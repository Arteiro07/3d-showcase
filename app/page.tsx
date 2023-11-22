"use client";

import Link from "next/link";
import style from "./app.module.scss";

export default function Home() {
	return (
		<div className={style.navigation}>
			<Link href="boxes"> BOXES</Link>;
		</div>
	);
}
