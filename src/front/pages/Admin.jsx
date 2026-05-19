import React from "react";
import { Link } from "react-router-dom";

const users = [
	{
		id: 1,
		name: "Carlos Méndez",
		email: "carlos@test.com",
		role: "Cliente",
		status: "Activo",
	},
	{
		id: 2,
		name: "Laura Pérez",
		email: "laura@test.com",
		role: "Cliente",
		status: "Activo",
	},
	{
		id: 3,
		name: "Admin Total",
		email: "admin@totalmuscle.com",
		role: "Admin",
		status: "Activo",
	},
];

export const Admin = () => {
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
					<span className="tm-kicker">Panel administrador</span>
					<h1>Gestión de usuarios</h1>
					<p>
						El administrador podrá ver usuarios registrados y bloquear o
						activar cuentas desde un endpoint protegido.
					</p>
				</section>

				<section className="tm-panel">
					<div className="tm-section-title-row">
						<div>
							<span className="tm-kicker">Usuarios</span>
							<h2>Listado general</h2>
						</div>

						<button className="tm-small-btn">Nuevo usuario</button>
					</div>

					<div className="tm-table">
						<div className="tm-table-row tm-table-head">
							<span>Nombre</span>
							<span>Email</span>
							<span>Rol</span>
							<span>Estado</span>
							<span>Acción</span>
						</div>

						{users.map((user) => (
							<div className="tm-table-row" key={user.id}>
								<span>{user.name}</span>
								<span>{user.email}</span>
								<span>{user.role}</span>
								<span className="tm-badge">{user.status}</span>
								<span>
									<button className="tm-danger-btn">Bloquear</button>
								</span>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};