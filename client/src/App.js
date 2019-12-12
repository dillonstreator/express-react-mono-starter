import React, { useEffect } from "react";

import styles from "./styles.module.scss";

function App() {
	useEffect(() => {
		fetch("/health")
			.then(console.log)
			.catch(console.error);
	}, []);

	return (
		<div className={styles.App}>
			<h1>Express React Mono Starter</h1>
			<p>
				Get started{" "}
				<a href="https://github.com/DillonStreator/express-react-mono-starter">
					here
				</a>
			</p>
		</div>
	);
}

export default App;
