import { _useAppSelector } from '@/stores/useAppStore';
import { _renderActiveSideMenu } from '@/utils/app';
import { _useRouter } from '@/utils/library';
import Link from 'next/link';

interface Menus {
	title: string;
	path: string;
	children?: Menus[];
}

export type ISideMenu = {
	isFixed?: ReactNode;
	data: Menus[];
	isShowFooter?: boolean;
	isDefaultActiveFirstMenu?: boolean;
};

const SubMenu = ({ children = [], title }) => {
	const { pathname, asPath } = _useRouter();
	const { activeSideMenuCls, setActiveSideCls } = _useAppSelector();

	return (
		children?.length > 0 && (
			<details className="group">
				<>
					<summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<span className="ml-3 text-sm font-medium">{title}</span>
						<span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</summary>
					{children?.map(subMenu1Item => {
						return (
							<nav
								onClick={() => setActiveSideCls(false)}
								key={subMenu1Item?.title}
								className={_tw(
									'mt-1.5 ml-8 flex flex-col',
									_renderActiveSideMenu(subMenu1Item?.path, asPath)
								)}
							>
								<Link href={pathname + subMenu1Item?.path}>
									<a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 opacity-75"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
											/>
										</svg>
										<span className="ml-3 text-sm font-medium">
											{subMenu1Item?.title}
										</span>
									</a>
								</Link>
							</nav>
						);
					})}
				</>
			</details>
		)
	);
};

export default function SideMenu(props: ISideMenu) {
	const { isFixed = true, data, isShowFooter, isDefaultActiveFirstMenu = true } = props;
	const fixedMenu = useMemo(() => isFixed && 'fixed', [isFixed]);
	const { pathname, asPath } = _useRouter();
	const { activeSideMenuCls } = _useAppSelector();

	return (
		<div className={_tw('flex flex-col h-screen bg-white border-r', fixedMenu)}>
			{data?.map((menuItem, key) => {
				const { title, children = [], path } = menuItem || {};
				return (
					<div key={title} className="px-4 pb-6">
						{/* <span className="block w-32 h-10 bg-gray-200 rounded-lg" /> */}
						<nav
							className={_tw(
								'flex flex-col space-y-1',
								activeSideMenuCls && _renderActiveSideMenu(path, asPath, key)
							)}
						>
							{children?.length < 1 && (
								<Link href={pathname + path}>
									<a
										href=""
										className="flex items-center px-4 py-2 text-gray-700 rounded-lg"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 opacity-75"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										<span className="ml-3 text-sm font-medium">{title} </span>
									</a>
								</Link>
							)}
							{children?.length > 0 && <SubMenu {...{ children, title }} />}
						</nav>
					</div>
				);
			})}

			{isShowFooter && (
				<div className="absolute inset-x-0 border-t border-gray-100 bottom-24">
					<a href="" className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
						<img
							className="object-cover w-10 h-10 rounded-full"
							src="https://www.hyperui.dev/photos/man-4.jpeg"
							alt="Simon Lewis"
						/>
						<div className="ml-1.5">
							<p className="text-xs">
								<strong className="block font-medium">Simon Lewis</strong>
								<span> simonlewis@fakemail.com </span>
							</p>
						</div>
					</a>
				</div>
			)}
		</div>
	);
}
