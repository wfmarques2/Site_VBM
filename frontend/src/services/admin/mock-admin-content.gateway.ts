import type {
  AdminContentGateway,
  AvaliacaoAdmin,
  AvaliacaoInput,
  EntityId,
  GaleriaAdmin,
  GaleriaInput,
  PasseioAdmin,
  PasseioInput
} from "./types";

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));
const createId = () => Math.random().toString(36).slice(2, 10);

const db: {
  passeios: PasseioAdmin[];
  galeria: GaleriaAdmin[];
  avaliacoes: AvaliacaoAdmin[];
} = {
  passeios: [
    { id: createId(), titulo: "City Tour Premium", local: "Sao Paulo", preco: "R$ 580", status: "ativo" },
    { id: createId(), titulo: "Tour Serra e Vinho", local: "Interior SP", preco: "R$ 890", status: "ativo" }
  ],
  galeria: [
    { id: createId(), titulo: "Fachada Hotel", categoria: "Corporativo", imagemUrl: "https://placehold.co/600x400" },
    { id: createId(), titulo: "SUV Premium", categoria: "Frota", imagemUrl: "https://placehold.co/600x400" }
  ],
  avaliacoes: [
    { id: createId(), cliente: "Ricardo M.", nota: "5", comentario: "Pontualidade impecavel." },
    { id: createId(), cliente: "Fernanda A.", nota: "5", comentario: "Atendimento premium do inicio ao fim." }
  ]
};

function updateById<T extends { id: EntityId }>(items: T[], id: EntityId, data: Omit<T, "id">): T {
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) throw new Error("Registro nao encontrado");
  const updated = { id, ...data } as T;
  items[index] = updated;
  return updated;
}

function deleteById<T extends { id: EntityId }>(items: T[], id: EntityId): void {
  const index = items.findIndex((item) => item.id === id);
  if (index < 0) throw new Error("Registro nao encontrado");
  items.splice(index, 1);
}

export const mockAdminContentGateway: AdminContentGateway = {
  async listPasseios() {
    await wait();
    return [...db.passeios];
  },
  async createPasseio(input: PasseioInput) {
    await wait();
    const created = { id: createId(), ...input };
    db.passeios.unshift(created);
    return created;
  },
  async updatePasseio(id, input) {
    await wait();
    return updateById(db.passeios, id, input);
  },
  async deletePasseio(id) {
    await wait();
    deleteById(db.passeios, id);
  },
  async listGaleria() {
    await wait();
    return [...db.galeria];
  },
  async createGaleria(input: GaleriaInput) {
    await wait();
    const created = { id: createId(), ...input };
    db.galeria.unshift(created);
    return created;
  },
  async updateGaleria(id, input) {
    await wait();
    return updateById(db.galeria, id, input);
  },
  async deleteGaleria(id) {
    await wait();
    deleteById(db.galeria, id);
  },
  async listAvaliacoes() {
    await wait();
    return [...db.avaliacoes];
  },
  async createAvaliacao(input: AvaliacaoInput) {
    await wait();
    const created = { id: createId(), ...input };
    db.avaliacoes.unshift(created);
    return created;
  },
  async updateAvaliacao(id, input) {
    await wait();
    return updateById(db.avaliacoes, id, input);
  },
  async deleteAvaliacao(id) {
    await wait();
    deleteById(db.avaliacoes, id);
  }
};
