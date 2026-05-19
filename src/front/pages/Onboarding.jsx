import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Onboarding = () => {
	const [formData, setFormData] = useState({
		weight: "",
		height: "",
		age: "",
		level: "",
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
		console.log("Onboarding pendiente de conectar:", formData);
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

				<Link to="/dashboard" className="tm-small-btn">
					Saltar por ahora
				</Link>
			</header>

			<main className="tm-onboarding">
				<section className="tm-onboarding-text">
					<span className="tm-kicker">Primer paso</span>
					<h1>Personaliza tu entrenamiento</h1>
					<p>
						Antes de entrar al dashboard queremos conocer algunos datos
						básicos para recomendar clases, objetivos y progreso de forma
						más personalizada.
					</p>
				</section>

				<section className="tm-panel">
					<form onSubmit={handleSubmit} className="tm-form-grid">
						<label>
							Peso actual
							<input
								type="number"
								name="weight"
								placeholder="Ej: 82 kg"
								value={formData.weight}
								onChange={handleChange}
							/>
						</label>

						<label>
							Altura
							<input
								type="number"
								name="height"
								placeholder="Ej: 178 cm"
								value={formData.height}
								onChange={handleChange}
							/>
						</label>

						<label>
							Edad
							<input
								type="number"
								name="age"
								placeholder="Ej: 25"
								value={formData.age}
								onChange={handleChange}
							/>
						</label>

						<label>
							Nivel actual
							<select
								name="level"
								value={formData.level}
								onChange={handleChange}
							>
								<option value="">Selecciona</option>
								<option value="principiante">Principiante</option>
								<option value="intermedio">Intermedio</option>
								<option value="avanzado">Avanzado</option>
							</select>
						</label>

						<label className="tm-full">
							Objetivo principal
							<select
								name="goal"
								value={formData.goal}
								onChange={handleChange}
							>
								<option value="">Selecciona un objetivo</option>
								<option value="perder-peso">Perder peso</option>
								<option value="ganar-musculo">Ganar músculo</option>
								<option value="resistencia">Mejorar resistencia</option>
								<option value="tecnica">Mejorar técnica</option>
							</select>
						</label>

						<button type="submit" className="tm-full">
							Guardar y continuar →
						</button>
					</form>
				</section>
			</main>
		</div>
	);
};