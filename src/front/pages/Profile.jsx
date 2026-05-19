import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
	const [profile, setProfile] = useState({
		name: "Usuario Total Muscle",
		phone: "",
		goal: "Ganar músculo",
		level: "Intermedio",
	});

	const handleChange = (event) => {
		setProfile({
			...profile,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Perfil pendiente de actualizar:", profile);
	};

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
				<section className="tm-page-title">
					<span className="tm-kicker">Mi cuenta</span>
					<h1>Perfil del usuario</h1>
					<p>
						El cliente podrá cambiar datos básicos como nombre de contacto,
						teléfono, objetivo y nivel.
					</p>
				</section>

				<section className="tm-panel">
					<form onSubmit={handleSubmit} className="tm-form-grid">
						<label>
							Nombre
							<input
								type="text"
								name="name"
								value={profile.name}
								onChange={handleChange}
							/>
						</label>

						<label>
							Teléfono
							<input
								type="text"
								name="phone"
								placeholder="+34 600 000 000"
								value={profile.phone}
								onChange={handleChange}
							/>
						</label>

						<label>
							Objetivo
							<select name="goal" value={profile.goal} onChange={handleChange}>
								<option value="Perder peso">Perder peso</option>
								<option value="Ganar músculo">Ganar músculo</option>
								<option value="Mejorar resistencia">Mejorar resistencia</option>
								<option value="Mejorar técnica">Mejorar técnica</option>
							</select>
						</label>

						<label>
							Nivel
							<select name="level" value={profile.level} onChange={handleChange}>
								<option value="Principiante">Principiante</option>
								<option value="Intermedio">Intermedio</option>
								<option value="Avanzado">Avanzado</option>
							</select>
						</label>

						<button type="submit" className="tm-full">
							Guardar cambios →
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};