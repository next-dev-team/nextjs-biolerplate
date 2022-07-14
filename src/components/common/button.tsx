import { LinkProps } from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const GBackButton = ({ href }: { href: LinkProps['href'] }) => {
	return (
		<Link href={href}>
			<button
				type="button"
				className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in rounded shadow-md bg-gradient-to-r from-green-400 to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
			>
				<AiOutlineArrowLeft className="text-lg font-bold" />
				Go Back
			</button>
		</Link>
	);
};
export default GBackButton;
