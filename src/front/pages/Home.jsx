import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="tm-page">
			<header className="tm-navbar">
				<Link to="/" className="tm-logo">
					<span className="tm-logo-icon">🏋️</span>
					<span>
						TOTAL<span>MUSCLE</span>
					</span>
				</Link>

				<nav className="tm-nav-links">
					<a href="#disciplinas">Disciplinas</a>
					<a href="#beneficios">Beneficios</a>
					<Link to="/login">Acceso</Link>
				</nav>

				<Link to="/login" className="tm-wallet-btn">
					Monedero
				</Link>
			</header>

			<main className="tm-hero">
				<div className="tm-hero-overlay"></div>

				<section className="tm-hero-content">
					<div className="tm-tag">Action Muscle</div>

					<h1>
						TOTAL
						<br />
						<span>MUSCLE</span>
					</h1>

					<p>
						Boxeo, Crossfit y Calistenia en un solo lugar. Sube de
						nivel tu cuerpo, mide tu nutrición y conquista tu árbol
						de habilidades.
					</p>

					<div className="tm-hero-buttons">
						<Link to="/register" className="tm-primary-btn">
							Empieza ya →
						</Link>

						<a href="#skill-tree" className="tm-secondary-btn">
							Skill Tree
						</a>
					</div>

					<div className="tm-stats">
						<div>
							<strong>300+</strong>
							<span>Atletas</span>
						</div>

						<div>
							<strong>3</strong>
							<span>Disciplinas</span>
						</div>

						<div>
							<strong>24/7</strong>
							<span>Acceso</span>
						</div>
					</div>
				</section>
			</main>

			<section id="disciplinas" className="tm-section">
				<div className="tm-section-header">
					<span>Entrenamiento</span>
					<h2>Elige tu disciplina</h2>
					<p>
						La plataforma está pensada para que cada usuario pueda
						registrarse, elegir objetivos y reservar clases según su
						nivel.
					</p>
				</div>

				<div className="tm-card-grid">
					<article className="tm-card">
						<h3>Boxeo</h3>
						<p>
							Entrenamientos de técnica, resistencia y coordinación
							para usuarios principiantes e intermedios.
						</p>
					</article>

					<article className="tm-card">
						<h3>Crossfit</h3>
						<p>
							Clases de fuerza, movilidad y acondicionamiento con
							control de horarios y cupos disponibles.
						</p>
					</article>

					<article className="tm-card">
						<h3>Calistenia</h3>
						<p>
							Progreso por niveles, retos semanales y seguimiento
							del avance físico del usuario.
						</p>
					</article>
				</div>
			</section>

			<section id="beneficios" className="tm-section tm-section-dark">
				<div className="tm-section-header">
					<span>MVP</span>
					<h2>Qué podrá hacer el usuario</h2>
				</div>

				<div className="tm-feature-list">
					<div>Crear una cuenta segura</div>
					<div>Completar su perfil físico</div>
					<div>Reservar o cancelar clases</div>
					<div>Consultar su dashboard personal</div>
					<div>Ver progreso y objetivos</div>
					<div>Gestionar datos desde perfil</div>
				</div>
			</section>
		</div>
	);
};