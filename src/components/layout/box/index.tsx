export type IBox = {
	hide?: boolean;
	children?: ReactNode;
	content?: ReactNode;
	className?: string;
};

export default function Box({ hide, children, content, className }: IBox) {
	// hide condition
	const renderT = useMemo(() => {
		if (hide && (children || content)) {
			return null;
		}
		return children || content;
	}, [hide, children, content]);

	return <div className={className}>{renderT}</div>;
}
