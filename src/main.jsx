import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import WhatsApp from "./WhatsApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App>
			<div className="bg-amber-100 min-h-screen">
				<div className="mx-auto max-w-2xl">
					<div className="bg-amber-100">
						<div>
							<img
								className="p-4 w-44 md:w-44 mx-auto align-middle"
								src=""
								alt=""
								srcSet="./src/assets/logo_alpha.png"
							/>
						</div>
						<div className="py-4 px-8 ">
							<h1 className="text-rose-900 text-2xl font-bold">
								Focaccia Menu
							</h1>
							<hr className="h-px my-2 bg-gray-200 border-0 dark:bg-amber-300"></hr>
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
								price_small="$30"
								price_big="$60"
							/>
							<MenuItem
								title="Pêra, gorgonzola e mel"
								description="Vegetariana"
								price_small="$30"
								price_big="$60"
							/>
							<MenuItem
								title="Bacon, tomate cereja e alecrim"
								price_small="$30"
								price_big="$60"
							/>

							<div className="pb-6 flex justify-end">
								<div className="font-medium text-sm text-rose-400">
									<p>tamanho P aprox. 500g</p>
									<p>tamanho G aprox. 500g</p>
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
											Mande uma mensagem para o WhatsApp
											dizendo qual sabor e tamanho deseja.
										</p>
									</li>
									<li className="flex items-start pb-4">
										<span className="w-4 h-6 flex-shrink-0 mr-2">
											<ArrowRightIcon className="w-full h-full text-rose-900" />
										</span>
										<p className="text-rose-900 font-medium">
											Os pedidos serão recebidos até às
											18h das quintas-feiras.
										</p>
									</li>
									<li className="flex items-start pb-4">
										<span className="w-4 h-6 flex-shrink-0 mr-2">
											<ArrowRightIcon className="w-full h-full text-rose-900" />
										</span>
										<p className="text-rose-900 font-medium">
											Retirada aos sábados.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<WhatsApp/>
			</div>
		</App>
	</React.StrictMode>
);
