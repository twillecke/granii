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
				width="36"
				height="36"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
			</svg>
		</button>
	);
}
