import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		goal: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Registro pendiente de conectar con backend:", formData);
	};

	return (
		<div className="tm-auth-page">
			<section className="tm-auth-brand">
				<Link to="/" className="tm-logo tm-auth-logo">
					<span className="tm-logo-icon">🏋️</span>
					<span>
						TOTAL<span>MUSCLE</span>
					</span>
				</Link>

				<div className="tm-auth-brand-content">
					<span className="tm-tag">Nuevo atleta</span>
					<h1>
						EMPIEZA
						<br />
						TU CAMBIO
					</h1>

					<p>
						Crea tu perfil, define tu objetivo y empieza a reservar
						clases dentro de Total Muscle.
					</p>
				</div>
			</section>

			<section className="tm-auth-form-wrapper">
				<div className="tm-auth-form-box">
					<div className="tm-auth-title">
						<span>Registro</span>
						<h2>Crear cuenta</h2>
						<p>
							¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
						</p>
					</div>

					<form onSubmit={handleSubmit} className="tm-auth-form">
						<label>
							Nombre completo
							<input
								type="text"
								name="name"
								placeholder="Nombre del atleta"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Email
							<input
								type="email"
								name="email"
								placeholder="atleta@totalmuscle.com"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Contraseña
							<input
								type="password"
								name="password"
								placeholder="Mínimo 8 caracteres"
								value={formData.password}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Objetivo principal
							<select
								name="goal"
								value={formData.goal}
								onChange={handleChange}
								required
							>
								<option value="">Selecciona un objetivo</option>
								<option value="perder-peso">Perder peso</option>
								<option value="ganar-musculo">Ganar músculo</option>
								<option value="resistencia">Mejorar resistencia</option>
								<option value="tecnica">Mejorar técnica</option>
							</select>
						</label>

						<button type="submit">Crear cuenta →</button>
					</form>

					<p className="tm-auth-note">
						Después del registro el usuario pasará al onboarding con
						preguntas físicas básicas.
					</p>
				</div>
			</section>
		</div>
	);
};