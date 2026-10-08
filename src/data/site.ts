export type UnitId = "u1" | "u2" | "u3";

/** Minutos desde 00:00, por dia da semana (0 = domingo … 6 = sábado). */
export type Schedule = Record<number, [number, number]>;

export type Unit = {
  id: UnitId;
  number: 1 | 2 | 3;
  name: string;
  street: string;
  district: string;
  cep: string;
  phone: string;
  whatsapp: string;
  maps: string;
  rating: { score: string; count: number } | null;
  hours: { label: string; value: string; days: number[] }[];
  holidays: string | null;
  schedule: Schedule;
};

const WHATSAPP_TEXT = "Olá! Vim pelo site da Twenty One Company.";

function whatsapp(number: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
}

const WEEKDAYS: [number, number] = [5 * 60, 22 * 60];
const SATURDAY: [number, number] = [8 * 60, 13 * 60];

export const units: Unit[] = [
  {
    id: "u1",
    number: 1,
    name: "Santa Mônica",
    street: "Av. Segismundo Pereira, 2951",
    district: "Segismundo Pereira, Uberlândia, MG",
    cep: "38408-170",
    phone: "(34) 99883-5577",
    whatsapp: whatsapp("5534998835577"),
    maps: "https://maps.app.goo.gl/qsUWKfieKmHQz8b78",
    rating: { score: "4,8", count: 298 },
    hours: [
      { label: "Segunda a sexta", value: "05h às 22h", days: [1, 2, 3, 4, 5] },
      { label: "Sábado", value: "08h às 13h", days: [6] },
      { label: "Domingo", value: "09h às 12h", days: [0] },
    ],
    holidays: "08h às 13h",
    schedule: {
      0: [9 * 60, 12 * 60],
      1: WEEKDAYS,
      2: WEEKDAYS,
      3: WEEKDAYS,
      4: WEEKDAYS,
      5: WEEKDAYS,
      6: SATURDAY,
    },
  },
  {
    id: "u2",
    number: 2,
    name: "Novo Mundo",
    street: "Av. Segismundo Pereira, 4880",
    district: "Novo Mundo, Uberlândia, MG",
    cep: "38408-267",
    phone: "(34) 99868-2378",
    whatsapp: whatsapp("5534998682378"),
    maps: "https://maps.app.goo.gl/GVbUEkG4NmQuUPQS9",
    rating: { score: "4,6", count: 74 },
    hours: [
      { label: "Segunda a sexta", value: "05h às 22h", days: [1, 2, 3, 4, 5] },
      { label: "Sábado", value: "08h às 13h", days: [6] },
      { label: "Domingo", value: "09h às 12h", days: [0] },
    ],
    holidays: "08h às 13h",
    schedule: {
      0: [9 * 60, 12 * 60],
      1: WEEKDAYS,
      2: WEEKDAYS,
      3: WEEKDAYS,
      4: WEEKDAYS,
      5: WEEKDAYS,
      6: SATURDAY,
    },
  },
  {
    id: "u3",
    number: 3,
    name: "Pátio Sabiá",
    street: "Av. Anselmo Alves dos Santos, 1111",
    district: "Pátio Sabiá, Tibery, Uberlândia, MG",
    cep: "38405-167",
    phone: "(34) 99860-7749",
    whatsapp: whatsapp("5534998607749"),
    maps: "https://maps.app.goo.gl/tpenGwqceE9e9ewT8",
    rating: null,
    hours: [
      { label: "Segunda a sexta", value: "05h às 22h", days: [1, 2, 3, 4, 5] },
      { label: "Sábado", value: "08h às 13h", days: [6] },
      { label: "Domingo", value: "14h às 18h", days: [0] },
    ],
    holidays: null,
    schedule: {
      0: [14 * 60, 18 * 60],
      1: WEEKDAYS,
      2: WEEKDAYS,
      3: WEEKDAYS,
      4: WEEKDAYS,
      5: WEEKDAYS,
      6: SATURDAY,
    },
  },
];

export const instagram = {
  url: "https://www.instagram.com/twenty_onecompany",
  handle: "@twenty_onecompany",
  followers: "18,6 mil",
};

export type ModalityId = "musculacao" | "fitdance" | "pilates" | "bike" | "muaythai";

export const modalities: { id: ModalityId; name: string; text: string }[] = [
  {
    id: "musculacao",
    name: "Musculação",
    text: "Sala ampla, muita variedade de aparelhos e instrutores atentos à execução de cada exercício, do primeiro treino em diante.",
  },
  {
    id: "fitdance",
    name: "Fit Dance",
    text: "Aula coreografada para suar dançando. Não precisa saber dançar: é chegar e acompanhar o professor.",
  },
  {
    id: "pilates",
    name: "Pilates",
    text: "Força, postura e mobilidade trabalhadas com controle do movimento e da respiração.",
  },
  {
    id: "bike",
    name: "Treino na bike",
    text: "Aula de bike indoor em grupo, com o professor puxando o ritmo do aquecimento ao sprint final.",
  },
  {
    id: "muaythai",
    name: "Muay Thai",
    text: "Socos, chutes, joelhadas e muito condicionamento, para quem quer aprender a luta ou só gastar energia.",
  },
];

export type Review = { name: string; text: string };

export const featuredReview: Review = {
  name: "Lorraini E.",
  text: "Há 10 anos essa academia faz parte da minha vida. É aqui que me sinto acolhida, respeitada e motivada a ir além dos meus limites, sempre com cuidado e profissionalismo.",
};

export const reviews: Review[] = [
  {
    name: "Michele M.",
    text: "Nunca havia frequentado uma academia antes, e posso dizer que fui recebida com muito carinho e atenção desde o primeiro dia. Sempre que preciso, tenho suporte, orientação e incentivo, sem nunca me sentir perdida.",
  },
  {
    name: "Maria Sara A.",
    text: "Sem dúvida, a melhor academia de Uberlândia! Instrutores maravilhosos, sempre muito atenciosos e dedicados com todos os alunos.",
  },
  {
    name: "Eliene",
    text: "Fui tão bem recepcionada por toda equipe que hoje não falho nem um dia.",
  },
  {
    name: "Eneida A.",
    text: "Além da estrutura e variedade de aparelhos, os instrutores, de modo geral, são muito atenciosos, pacientes e preocupados com a qualidade e segurança do seu treino, isso me encantou!",
  },
  {
    name: "Renata C.",
    text: "O ambiente é agradável e motivador, o que deixa o treino ainda melhor. Os aparelhos são ótimos e bem cuidados.",
  },
  {
    name: "Betânia C.",
    text: "Lugar aconchegante, música agradável e som no limite certo. Estou amando treinar com vcs.",
  },
  {
    name: "Rosilene B.",
    text: "Super satisfeita nessa academia. Começando pela recepcionista que é maravilhosa, instrutores atenciosos e super prestativos.",
  },
];
