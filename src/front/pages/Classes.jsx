import React from "react";
import { Link } from "react-router-dom";

const classes = [
	{
		id: 1,
		name: "Boxeo técnico",
		type: "Boxeo",
		level: "Principiante",
		time: "Lunes 18:00",
		spots: 8,
	},
	{
		id: 2,
		name: "Crossfit base",
		type: "Crossfit",
		level: "Intermedio",
		time: "Miércoles 19:30",
		spots: 5,
	},
	{
		id: 3,
		name: "Calistenia control",
		type: "Calistenia",
		level: "Principiante",
		time: "Viernes 17:00",
		spots: 10,
	},
];

export const Classes = () => {
	return (
		<div className="tm-app-page">
			<header className="tm-app-header">
				<Link to="/" className="tm-logo">
					<span className="tm-logo-icon">🏋️</span>
					<span>
						TOTAL<span>MUSCLE</span>
					</span>
				</Link>

				<nav className="tm-app-nav">
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/classes">Clases</Link>
					<Link to="/profile">Perfil</Link>
					<Link to="/admin">Admin</Link>
				</nav>
			</header>

			<main className="tm-content">
				<section className="tm-page-title">
					<span className="tm-kicker">Catálogo</span>
					<h1>Clases disponibles</h1>
					<p>
						El usuario podrá consultar el listado de clases, ver detalles y
						reservar según cupos disponibles.
					</p>
				</section>

				<section className="tm-class-grid">
					{classes.map((item) => (
						<article className="tm-class-card" key={item.id}>
							<span className="tm-class-type">{item.type}</span>
							<h2>{item.name}</h2>

							<div className="tm-class-info">
								<p>
									<strong>Nivel:</strong> {item.level}
								</p>
								<p>
									<strong>Horario:</strong> {item.time}
								</p>
								<p>
									<strong>Cupos:</strong> {item.spots}
								</p>
							</div>

							<Link to={`/classes/${item.id}`} className="tm-primary-btn tm-card-btn">
								Ver detalle →
							</Link>
						</article>
					))}
				</section>
			</main>
		</div>
	);
};