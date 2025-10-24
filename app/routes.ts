import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/login", "routes/login.tsx"),
	route("/signup", "routes/signup.tsx"),
	route("/dashboard", "routes/dashboard.tsx"),
	route("/tickets", "routes/tickets.tsx"),
	route("/tickets/new", "routes/tickets.new.tsx"),
	route("/tickets/:id/edit", "routes/tickets.$id.edit.tsx")
] satisfies RouteConfig;

