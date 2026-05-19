import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
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

			<main className="tm-dashboard">
				<section className="tm-dashboard-hero">
					<span className="tm-kicker">Panel del atleta</span>
					<h1>Bienvenido a tu zona de entrenamiento</h1>
					<p>
						Aquí el usuario podrá ver sus próximas reservas, su progreso y
						su objetivo principal dentro de Total Muscle.
					</p>
				</section>

				<section className="tm-dashboard-grid">
					<div className="tm-stat-card">
						<span>Próximas clases</span>
						<strong>2</strong>
						<p>Boxeo técnico y Crossfit inicial.</p>
					</div>

					<div className="tm-stat-card">
						<span>Progreso semanal</span>
						<strong>68%</strong>
						<p>Objetivo de entrenamiento en curso.</p>
					</div>

					<div className="tm-stat-card">
						<span>Nivel actual</span>
						<strong>Intermedio</strong>
						<p>Basado en el onboarding inicial.</p>
					</div>
				</section>

				<section className="tm-panel">
					<div className="tm-section-title-row">
						<div>
							<span className="tm-kicker">Reservas</span>
							<h2>Próximas actividades</h2>
						</div>

						<Link to="/classes" className="tm-small-btn">
							Ver clases
						</Link>
					</div>

					<div className="tm-table">
						<div className="tm-table-row tm-table-head">
							<span>Clase</span>
							<span>Día</span>
							<span>Hora</span>
							<span>Estado</span>
						</div>

						<div className="tm-table-row">
							<span>Boxeo técnico</span>
							<span>Lunes</span>
							<span>18:00</span>
							<span className="tm-badge">Reservada</span>
						</div>

						<div className="tm-table-row">
							<span>Crossfit base</span>
							<span>Miércoles</span>
							<span>19:30</span>
							<span className="tm-badge">Reservada</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};