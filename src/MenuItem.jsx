const MenuItem = ({ title, description, price_big, price_small }) => (
    <div className="mb-6 flex justify-between">
        <div>
            <h3 className="text-rose-900 pb-1 font-medium">{title}</h3>
            <p className="font-medium text-sm text-rose-400">{description}</p>
        </div>
        <div className="text-rose-900 flex items-top justify-center text-xl font-medium">
            <span className="mx-4">{price_small}</span>
            <span>{price_big}</span>
        </div>
    </div>
);

export default MenuItem;
