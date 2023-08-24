import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import WhatsApp from "./WhatsApp.jsx";
import Instagram from "./Instagram.jsx";
import Maps from "./Maps.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App>
			<main className="bg-amber-100 min-h-screen">
				<div className="mx-auto max-w-2xl">
					<div className="bg-amber-100">
						<div>
							<img
								className="p-4 w-44 md:w-44 mx-auto align-middle"
								src="logo_alpha.PNG"
								alt="logo image"
							/>
						</div>
						<div className="py-4 px-8 ">
							<h1 className="text-rose-900 text-2xl font-bold">
								Focaccia Menu
							</h1>
							<hr className="h-px my-2 border-amber-200 border-0 rounded-md dark:bg-amber-300"></hr>
							<div className="mt-6 flex justify-between">
								<div></div>
								<div className="text-rose-900 flex items-center justify-center text-xl font-medium">
									<span className="mx-7">P</span>
									<span className="mx-2">G</span>
								</div>
							</div>
							<MenuItem
								title="Alecrim e sal grosso"
								description="Vegana"
								price_small="$35"
								price_big="$60"
							/>
							<MenuItem
								title="Pêra, gorgonzola e mel"
								description="Vegetariana"
								price_small="$35"
								price_big="$65"
							/>
							<MenuItem
								title="Bacon, tomate cereja e alecrim"
								price_small="$35"
								price_big="$60"
							/>

							<div className="pb-6 flex justify-end">
								<div className="font-medium text-sm text-rose-400">
									<p>tamanho P aprox. 500g</p>
									<p>tamanho G aprox. 1Kg</p>
								</div>
							</div>
						</div>
					</div>
					<div className="py-4 px-8 bg-amber-100 ">
						<h1 className="text-rose-900 text-2xl font-bold">
							Como pedir sua focaccia
						</h1>
						<hr className="h-px my-2 bg-gray-200 border-0 dark:bg-amber-300"></hr>
						<div className="mt-6 flex justify-between">
							<div>
								<h3 className="text-rose-900 pb-1 font-medium"></h3>
								<p className="font-medium text-sm text-rose-400"></p>
							</div>
						</div>
						<div className="">
							<div className="">
								<ul className="list-disc mb-4">
									<li className="flex items-start pb-4">
										<span className="w-4 h-6 flex-shrink-0 mr-2">
											<ArrowRightIcon className="w-full h-full text-rose-900" />
										</span>
										<p className="text-rose-900 font-medium">
											Faça os pedidos até às 18h das
											quintas-feiras.
										</p>
									</li>
									<li className="flex items-start pb-4">
										<span className="w-4 h-6 flex-shrink-0 mr-2">
											<ArrowRightIcon className="w-full h-full text-rose-900" />
										</span>
										<p className="text-rose-900 font-medium">
											Mande uma mensagem para o WhatsApp
											com o sabor e tamanho desejado. Pedidos estão sujeitos à lista de espera.
										</p>
									</li>
									<li className="flex items-start pb-4">
										<span className="w-4 h-6 flex-shrink-0 mr-2">
											<ArrowRightIcon className="w-full h-full text-rose-900" />
										</span>
										<p className="text-rose-900 font-medium">
											Retire aos sábados no bairro
											Campeche, Florianópolis - SC.
										</p>
									</li>
								</ul>
							</div>
						</div>
						<hr className="h-px my-2 bg-gray-200 border-0 dark:bg-amber-300"></hr>

						<div className="flex justify-center my-8">
							<WhatsApp />
							<Instagram />
							<Maps />
						</div>
					</div>
				</div>
			</main>
		</App>
	</React.StrictMode>
);
