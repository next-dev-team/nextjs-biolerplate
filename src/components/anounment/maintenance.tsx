export default function GMaintenance({
	title = 'This Section is under maintenance',
}: {
	title?: string;
}) {
	return (
		<aside className="bg-gray-50">
			<div className="p-8 md:p-12 lg:px-16 lg:py-24">
				<div className="max-w-lg mx-auto text-center">
					<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>

					<p className="hidden text-gray-500 sm:mt-4 sm:block">
						We are working on it and bring new features soon. Please check back soon or
						subscribe to our newsletter.
					</p>
				</div>

				<div className="max-w-xl mx-auto mt-8">
					<form action="#" className="sm:gap-4 sm:flex">
						<div className="sm:flex-1">
							<label htmlFor="email" className="sr-only">
								Email
							</label>

							<input
								type="email"
								placeholder="Email address"
								className="w-full p-3 text-gray-700 transition bg-white border-gray-200 rounded-md shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-white"
							/>
						</div>

						<button
							type="submit"
							className="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
						>
							<span className="text-sm font-medium"> subscribe </span>

							<svg
								className="w-5 h-5 ml-3"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</aside>
	);
}
