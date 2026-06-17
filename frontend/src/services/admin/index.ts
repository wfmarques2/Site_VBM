import type { AdminContentGateway } from "./types";
import { mockAdminContentGateway } from "./mock-admin-content.gateway";

// Ponto unico para trocar mock por API real no futuro.
export const adminContentGateway: AdminContentGateway = mockAdminContentGateway;
