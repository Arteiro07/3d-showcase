import React, { useState } from "react";
import style from "./app.module.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function Footer() {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<>
			<div
				className={`${style.footer} ${
					isExpanded ? style.expanded : style.notExpanded
				}`}
			>
				<div className={style.toggle} onClick={handleToggle}>
					{isExpanded ? <FaChevronDown /> : <FaChevronUp />}
				</div>
				<div className={style.content}>
					<p>This is the expanded content of the footer.</p>
					<p>It can contain any additional information or components.</p>
				</div>
			</div>
		</>
	);
}
