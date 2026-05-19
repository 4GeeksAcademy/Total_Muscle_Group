import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			console.log("Login pendiente de conectar con backend:", {
				email,
				password,
			});
		}, 800);
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
					<span className="tm-tag">Acceso de atleta</span>
					<h1>
						ENTRA
						<br />
						CON PROPÓSITO
					</h1>

					<p>
						Accede a tus reservas, consulta tus próximas clases y
						continúa avanzando en tu progreso físico.
					</p>

					<div className="tm-auth-mini-stats">
						<div>
							<strong>3</strong>
							<span>disciplinas</span>
						</div>
						<div>
							<strong>24/7</strong>
							<span>control</span>
						</div>
						<div>
							<strong>MVP</strong>
							<span>activo</span>
						</div>
					</div>
				</div>
			</section>

			<section className="tm-auth-form-wrapper">
				<div className="tm-auth-form-box">
					<div className="tm-auth-title">
						<span>Login</span>
						<h2>Bienvenido de vuelta</h2>
						<p>
							¿Todavía no tienes cuenta?{" "}
							<Link to="/register">Crear cuenta</Link>
						</p>
					</div>

					<form onSubmit={handleSubmit} className="tm-auth-form">
						<label>
							Email
							<input
								type="email"
								placeholder="atleta@totalmuscle.com"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								required
							/>
						</label>

						<label>
							Contraseña
							<input
								type="password"
								placeholder="••••••••"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								required
							/>
						</label>

						<div className="tm-form-row">
							<label className="tm-check">
								<input type="checkbox" />
								Recordarme
							</label>

							<a href="#">¿Olvidaste?</a>
						</div>

						<button type="submit" disabled={loading}>
							{loading ? "Entrando..." : "Entrar →"}
						</button>
					</form>

					<p className="tm-auth-note">
						Esta vista está preparada para conectarse luego con JWT,
						roles y rutas privadas.
					</p>
				</div>
			</section>
		</div>
	);
};