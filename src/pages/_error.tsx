import React from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';

export default function Page(props: { examples: false }) {
	if (props.examples === false) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<Head>
				<title>Examples</title>
			</Head>

			<div className="container mx-auto my-24">
				<div className="prose">
					<h2>Examples</h2>
				</div>
			</div>
		</>
	);
}
