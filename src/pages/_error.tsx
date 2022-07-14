import ErrorPage from 'next/error';

export default function Page(props: { examples: false }) {
	console.log('err page');

	if (props.examples === false) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<div className="container mx-auto my-24">
				<div className="prose">
					<h2>Examples</h2>
				</div>
			</div>
		</>
	);
}
