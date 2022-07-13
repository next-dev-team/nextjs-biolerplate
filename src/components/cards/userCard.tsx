export type IUserCard = {
	title: string;
	position: string;
};

const UserCard = ({ title, position }: IUserCard) => {
	return (
		<section>
			<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
				<div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
					<div className="p-6">
						<img
							className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
							src="/assets/images/placeholders/squareCard.png"
							alt="blog"
						/>
						<div className="inline-flex justify-between w-full">
							<h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
								Short headline.
							</h1>
							<span>$00.00</span>
						</div>
						<p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
							Free and Premium themes, UI Kit, templates and landing pages built with
							Tailwind CSS, HTML &amp; Next.js.
						</p>
					</div>
					<div className="p-6">
						<img
							className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
							src="/assets/images/placeholders/squareCard.png"
							alt="blog"
						/>
						<div className="inline-flex justify-between w-full">
							<h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
								Short headline.
							</h1>
							<span>$00.00</span>
						</div>
						<p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
							Free and Premium themes, UI Kit's, templates and landing pages built with
							Tailwind CSS, HTML &amp; Next.js.
						</p>
					</div>
					<div className="p-6">
						<img
							className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
							src="/assets/images/placeholders/squareCard.png"
							alt="blog"
						/>
						<div className="inline-flex justify-between w-full">
							<h1 className="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
								Short headline.
							</h1>
							<span>$00.00</span>
						</div>
						<p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
							Free and Premium themes, UI Kit, templates and landing pages built with
							Tailwind CSS, HTML &amp; Next.js.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserCard;
