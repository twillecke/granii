const MenuItem = ({ title, description, price_big, price_small }) => (
	<div className="mb-6">
		<div className="mb-0 flex justify-between items-center">
			<h3 className="text-rose-900 pb-1 text-xl font-medium">{title}</h3>
			<div className="text-rose-900 flex items-center justify-center text-xl font-medium">
				<span className="mx-4">{price_small}</span>
				<span>{price_big}</span>
			</div>
		</div>
		<p className="font-medium pl-1 text-sm text-rose-400">{description}</p>
	</div>
);

export default MenuItem;
