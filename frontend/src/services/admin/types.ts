export type EntityId = string;

export type PasseioAdmin = {
  id: EntityId;
  titulo: string;
  local: string;
  preco: string;
  status: string;
};

export type GaleriaAdmin = {
  id: EntityId;
  titulo: string;
  categoria: string;
  imagemUrl: string;
};

export type AvaliacaoAdmin = {
  id: EntityId;
  cliente: string;
  nota: string;
  comentario: string;
};

export type PasseioInput = Omit<PasseioAdmin, "id">;
export type GaleriaInput = Omit<GaleriaAdmin, "id">;
export type AvaliacaoInput = Omit<AvaliacaoAdmin, "id">;

export interface AdminContentGateway {
  listPasseios(): Promise<PasseioAdmin[]>;
  createPasseio(input: PasseioInput): Promise<PasseioAdmin>;
  updatePasseio(id: EntityId, input: PasseioInput): Promise<PasseioAdmin>;
  deletePasseio(id: EntityId): Promise<void>;
  listGaleria(): Promise<GaleriaAdmin[]>;
  createGaleria(input: GaleriaInput): Promise<GaleriaAdmin>;
  updateGaleria(id: EntityId, input: GaleriaInput): Promise<GaleriaAdmin>;
  deleteGaleria(id: EntityId): Promise<void>;
  listAvaliacoes(): Promise<AvaliacaoAdmin[]>;
  createAvaliacao(input: AvaliacaoInput): Promise<AvaliacaoAdmin>;
  updateAvaliacao(id: EntityId, input: AvaliacaoInput): Promise<AvaliacaoAdmin>;
  deleteAvaliacao(id: EntityId): Promise<void>;
}
