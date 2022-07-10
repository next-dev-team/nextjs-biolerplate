import { _tw } from '@/utils/styles';
import Link from 'next/link';

export default function Header() {
	const activeCls = _tw('border-b border-blue-400 text-blue-600');
	return (
		<>
			<header className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30">
				<div className="container px-4 py-4 mx-auto space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-10">
					<div className="flex justify-between cursor-pointer">
						<Link href="/">
							<div className="flex items-center">
								<svg
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 25 27"
									className="flex-shrink-0 -mt-2 h-7 w-7"
								>
									<path
										d="M22.487.658s5.03 13.072-1.822 22.171C16.476 28.39 9.84 27.26 5.484 25.68c1.513-3.391 3.441-6.067 5.784-8.03 1.176.623 3.186.792 6.03.51-2.535-.221-4.284-.654-5.246-1.3l.125.08c2.122-1.546 4.556-2.556 7.303-3.029-3.16-.285-6.026.315-8.598 1.804-.577-.742-1.157-1.748-1.74-3.018.07 1.534.339 2.734.809 3.6-2.64 1.797-4.953 4.58-6.94 8.351a7.583 7.583 0 01-.188-.088c-.802-.358-1.328-1.037-1.755-2.036C-1.9 13.366 4.645 8.273 11.123 7.989 23.046 7.465 22.487.658 22.487.658z"
										fill="#0ED3CF"
									/>
								</svg>{' '}
								<p className="ml-2 text-xl text-gray-800 dark:text-white">
									NextJs <strong>TailwindCss</strong>
								</p>
							</div>
						</Link>
						<div className="flex items-center space-x-2 lg:hidden">
							<button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none">
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-6 h-6 text-gray-700 dark:text-gray-300"
								>
									<path
										fillRule="evenodd"
										d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</div>{' '}
					<div className="flex flex-col space-y-4 lg:hidden" style={{ display: 'none' }}>
						<div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
							<Link href="/">
								<a className="text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400">
									Home
								</a>
							</Link>
							<div className="relative inline-block lg:block">
								<div>
									<button className="flex items-center space-x-1 text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 focus:outline-none">
										<span>Components</span>{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-5 h-5"
										>
											<path
												fillRule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>{' '}
								{/**/}{' '}
								<div
									className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800"
									style={{ display: 'none' }}
								>
									<div className="w-36">
										<a
											href="/components"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											All Components
										</a>{' '}
										<a
											href="/awesome"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											awesome
										</a>{' '}
										<a
											href="/components/alpinejs"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Alpinejs
										</a>{' '}
										<a
											href="/components/buttons"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Buttons
										</a>{' '}
										<a
											href="/components/cards"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Cards
										</a>{' '}
										<a
											href="/components/dropdowns"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Dropdowns
										</a>{' '}
										<a
											href="/components/forms"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Forms
										</a>{' '}
										<a
											href="/components/inputs"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Inputs
										</a>{' '}
										<a
											href="/components/logins"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Logins
										</a>{' '}
										<a
											href="/components/modals"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Modals
										</a>{' '}
										<a
											href="/components/navigations"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Navigations
										</a>{' '}
										<a
											href="/components/pages"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Pages
										</a>{' '}
										<a
											href="/components/selects"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Selects
										</a>{' '}
										<a
											href="/components/tabs"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Tabs
										</a>{' '}
										<a
											href="/components/tables"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Tables
										</a>{' '}
										<a
											href="/components/widget"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Widget
										</a>
									</div>
								</div>
							</div>{' '}
							<a
								href="/premium"
								className="text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
							>
								Premium
							</a>{' '}
							<a
								href="/cheatsheet"
								target="_blank"
								className="text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
							>
								Cheatsheet
							</a>{' '}
							<div className="flex flex-col space-y-3 lg:hidden">
								<a
									href="/u/rimsila/favorites"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
								>
									My Favourites
								</a>{' '}
								<a
									href="/u/rimsila/edit"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
								>
									Edit Profile
								</a>{' '}
								<form
									id="logout-form"
									action="https://tailwindcomponents.com/logout"
									method="POST"
								>
									<input
										type="hidden"
										name="_token"
										defaultValue="0jLuuo8eZuklwN1GRgqbeLRyM2eL08tMAG5EPvLN"
									/>{' '}
									<button className="flex items-center space-x-3 text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 focus:outline-none">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
											/>
										</svg>{' '}
										<span>Log Out</span>
									</button>
								</form>
							</div>
						</div>{' '}
						<div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
							<button
								type="button"
								aria-label="Color Mode"
								className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
							>
								{/**/}{' '}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 transform -rotate-90"
								>
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							</button>{' '}
							<form className="flex flex-wrap justify-between md:flex-row">
								<input
									type="search"
									name="query"
									placeholder="Search"
									required
									className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-200 dark:focus:border-primary focus:outline-none focus:ring focus:ring-blue-200 dark:placeholder-gray-400 focus:ring-opacity-20"
								/>
							</form>{' '}
							<a
								href="/submit-component"
								className="flex items-center justify-center h-12 px-4 text-sm font-medium text-center text-white transition-colors duration-300 transform rounded-md lg:h-10 bg-primary hover:bg-primary/70"
							>
								Submit <span className="lg:hidden 2xl:inline">&nbsp;new component</span>
							</a>{' '}
							<div className="relative inline-block lg:inline-block">
								<div>
									<button className="flex items-center space-x-2 focus:outline-none">
										<img
											src="https://avatars.githubusercontent.com/u/51617383?v=4"
											alt="rimsila"
											className="object-cover w-8 h-8 rounded-full xl:w-10 xl:h-10"
										/>{' '}
										<span className="font-medium text-gray-800 dark:text-gray-200 lg:hidden">
											rimsila
										</span>
									</button>
								</div>{' '}
								{/**/}{' '}
								<div
									className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800"
									style={{ display: 'none' }}
								>
									<div className="w-48">
										<a
											href="/u/rimsila"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Signed in as <br /> <span className="font-medium">rimsila</span>
										</a>{' '}
										<hr className="border-gray-200 dark:border-gray-700" />{' '}
										<a
											href="/u/rimsila"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											My profile
										</a>{' '}
										<a
											href="/u/rimsila/favorites"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											My Favourites
										</a>{' '}
										<a
											href="/u/rimsila/edit"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Edit Profile
										</a>{' '}
										<hr className="border-gray-200 dark:border-gray-700" />{' '}
										<form
											id="logout-form"
											action="https://tailwindcomponents.com/logout"
											method="POST"
											className="leading-none"
										>
											<input
												type="hidden"
												name="_token"
												defaultValue="0jLuuo8eZuklwN1GRgqbeLRyM2eL08tMAG5EPvLN"
											/>{' '}
											<button className="flex items-center px-4 py-2 space-x-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													className="w-4 h-4"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
													/>
												</svg>{' '}
												<span>Log Out</span>
											</button>
										</form>
									</div>
								</div>
							</div>{' '}
							<a
								href="/u/rimsila"
								className="inline-flex items-center space-x-2 lg:hidden"
							>
								<img
									src="https://avatars.githubusercontent.com/u/51617383?v=4"
									alt="rimsila"
									className="object-cover w-6 h-6 rounded-full"
								/>{' '}
								<span className="text-gray-800 dark:text-gray-200">rimsila</span>
							</a>
						</div>
					</div>{' '}
					<div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
						<div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
							<Link href="/">
								<a
									className={_tw(
										'text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400'
									)}
								>
									Home
								</a>
							</Link>
							<Link href="/components">
								<a className="text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400">
									Components
								</a>
							</Link>
							<a
								href="https://tailwindcss.com/docs/installation"
								target="_blank"
								className="text-gray-500 transition-colors duration-300 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
								rel="noreferrer"
							>
								Cheatsheet
							</a>{' '}
							<div className="flex flex-col space-y-3 lg:hidden">
								<a
									href="/u/rimsila/favorites"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
								>
									My Favourites
								</a>{' '}
								<a
									href="/u/rimsila/edit"
									className="text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"
								>
									Edit Profile
								</a>{' '}
								<form
									id="logout-form"
									action="https://tailwindcomponents.com/logout"
									method="POST"
								>
									<input
										type="hidden"
										name="_token"
										defaultValue="0jLuuo8eZuklwN1GRgqbeLRyM2eL08tMAG5EPvLN"
									/>{' '}
									<button className="flex items-center space-x-3 text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400 focus:outline-none">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
											/>
										</svg>{' '}
										<span>Log Out</span>
									</button>
								</form>
							</div>
						</div>{' '}
						<div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4">
							<button
								type="button"
								aria-label="Color Mode"
								className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
							>
								{/**/}{' '}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 transform -rotate-90"
								>
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							</button>{' '}
							<form
								action="/search"
								className="flex flex-wrap justify-between md:flex-row"
							>
								<input
									type="search"
									name="query"
									placeholder="Search"
									required
									className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
								/>
							</form>{' '}
							<a
								href="/submit-component"
								className="flex items-center justify-center h-12 px-4 text-sm font-medium text-center text-white transition-colors duration-300 transform rounded-md lg:h-10 bg-primary hover:bg-primary/70"
							>
								Submit <span className="lg:hidden 2xl:inline">&nbsp;new component</span>
							</a>{' '}
							<div className="relative hidden inline-block lg:inline-block">
								<div>
									<button className="flex items-center space-x-2 focus:outline-none">
										<img
											src="https://avatars.githubusercontent.com/u/51617383?v=4"
											alt="rimsila"
											className="object-cover w-8 h-8 rounded-full xl:w-10 xl:h-10"
										/>{' '}
										<span className="font-medium text-gray-800 dark:text-gray-200 lg:hidden">
											rimsila
										</span>
									</button>
								</div>{' '}
								{/**/}{' '}
								<div
									className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800"
									style={{ display: 'none' }}
								>
									<div className="w-48">
										<a
											href="/u/rimsila"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Signed in as <br /> <span className="font-medium">rimsila</span>
										</a>{' '}
										<hr className="border-gray-200 dark:border-gray-700" />{' '}
										<a
											href="/u/rimsila"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											My profile
										</a>{' '}
										<a
											href="/u/rimsila/favorites"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											My Favourites
										</a>{' '}
										<a
											href="/u/rimsila/edit"
											className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary"
										>
											Edit Profile
										</a>{' '}
										<hr className="border-gray-200 dark:border-gray-700" />{' '}
										<form
											id="logout-form"
											action="https://tailwindcomponents.com/logout"
											method="POST"
											className="leading-none"
										>
											<input
												type="hidden"
												name="_token"
												defaultValue="0jLuuo8eZuklwN1GRgqbeLRyM2eL08tMAG5EPvLN"
											/>{' '}
											<button className="flex items-center px-4 py-2 space-x-3 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													className="w-4 h-4"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
													/>
												</svg>{' '}
												<span>Log Out</span>
											</button>
										</form>
									</div>
								</div>
							</div>{' '}
							<a
								href="/u/rimsila"
								className="inline-flex items-center space-x-2 lg:hidden"
							>
								<img
									src="https://avatars.githubusercontent.com/u/51617383?v=4"
									alt="rimsila"
									className="object-cover w-6 h-6 rounded-full"
								/>{' '}
								<span className="text-gray-800 dark:text-gray-200">rimsila</span>
							</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
