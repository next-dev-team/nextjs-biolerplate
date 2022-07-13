export type IBox = {
	hide?: boolean;
	children?: ReactNode;
	content?: ReactNode;
	className?: string;
	typeBox?: 'div' | 'footer' | 'header' | 'main';
} & BoxElProps;

/**
 * shortcut box wrapper
 */
export default function Box({
	hide,
	children,
	content,
	className,
	typeBox = 'div',
	...rest
}: IBox) {
	//get all props to element
	const mergedClass = {
		className: _tw(!hide && className),
		...rest,
	};

	const renderContent = children || content;

	// if hide will hide element in html
	if (hide) {
		return null;
	}

	// page render base on html structure
	const pages: Record<IBox['typeBox'], ReactNode> = {
		main: <main {...mergedClass}>{renderContent}</main>,
		div: <div {...mergedClass}>{renderContent}</div>,
		header: <header {...mergedClass}>{renderContent}</header>,
		footer: <footer {...mergedClass}>{renderContent}</footer>,
	};

	return <>{pages[typeBox]}</>;
}
