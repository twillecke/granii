export default function Maps() {
	const openMap = () => {
		const url = `https://www.google.com.br/maps/place/R.+Jos%C3%A9+El%C3%ADas+Lopes,+591+-+Campeche,+Florian%C3%B3polis+-+SC,+88066-060/@-27.7011775,-48.504133,17z/data=!3m1!4b1!4m6!3m5!1s0x95273b36f9545a4f:0xf617e609de60bcf9!8m2!3d-27.7011775!4d-48.5015527!16s%2Fg%2F11csh5yk5g?entry=ttu`;
		window.open(url, "_blank");
	};

	return (
		<button
			className="relative mx-4 md:right-0 fill-white bg-cyan-500 w-14 h-14 md:w-14 md:h-14 md:opacity-75  rounded-full drop-shadow-lg flex justify-center items-center hover:bg-cyan-600 hover:opacity-100 hover:drop-shadow-2xl duration-300"
			onClick={openMap}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="36"
				height="36"
				viewBox="0 0 24 25"
			>
				<path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 14h-24l4-8h3.135c.385.641.798 1.309 1.232 2h-3.131l-2 4h17.527l-2-4h-3.131c.435-.691.848-1.359 1.232-2h3.136l4 8z" />
			</svg>
		</button>
	);
}
