import React from "react";
import { Link, useParams } from "react-router-dom";

export const ClassDetail = () => {
	const { classId } = useParams();

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
				</nav>
			</header>

			<main className="tm-content">
				<Link to="/classes" className="tm-back-link">
					← Volver a clases
				</Link>

				<section className="tm-detail-layout">
					<div className="tm-detail-main">
						<span className="tm-kicker">Detalle de clase #{classId}</span>
						<h1>Boxeo técnico</h1>

						<p>
							Clase enfocada en coordinación, desplazamiento, guardia,
							resistencia y técnica básica. Ideal para usuarios que quieren
							mejorar condición física y aprender fundamentos de boxeo.
						</p>

						<div className="tm-detail-list">
							<div>
								<strong>Duración</strong>
								<span>60 minutos</span>
							</div>
							<div>
								<strong>Nivel</strong>
								<span>Principiante / Intermedio</span>
							</div>
							<div>
								<strong>Entrenador</strong>
								<span>Coach asignado</span>
							</div>
							<div>
								<strong>Cupos disponibles</strong>
								<span>8</span>
							</div>
						</div>
					</div>

					<aside className="tm-reserve-box">
						<h2>Reserva tu cupo</h2>
						<p>
							Esta acción luego se conectará con el backend para crear una
							reserva real en la base de datos.
						</p>

						<button>Reservar clase →</button>
						<Link to="/dashboard">Ver mis reservas</Link>
					</aside>
				</section>
			</main>
		</div>
	);
};