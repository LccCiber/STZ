import {
  Baby,
  CalendarCheck,
  Dumbbell,
  HeartHandshake,
  MapPin,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import type { Benefit, FaqItem, Modality, NavItem, QuickFact } from "@/types/site";

export const academy = {
  name: "SZT Torre",
  shortName: "SZT Torre",
  complement: "South Zone Team - Academia de Artes Marciais em Joao Pessoa",
  unit: "Torre, Joao Pessoa - PB",
  fullLocation: "SZT Torre - South Zone Team - Torre, Joao Pessoa - PB",
  aliases: ["South Zone Team Torre", "Extreme Elite Fight / SZT Torre", "Casa do Flow"],
  address: "Av. Min. José Américo de Almeida, 196 - Torre, João Pessoa - PB, 58040-911",
  instagram: "https://www.instagram.com/szttorre/",
  secondaryInstagram: "https://www.instagram.com/extreme_elite_fight/",
  community: "https://chat.whatsapp.com/BnTDcmnE6Tk58K5eSbEzIY",
  mapsQuery: "Av. Min. José Américo de Almeida, 196, Torre, João Pessoa, PB, 58040-911",
  whatsapp: {
    number: "5583987673230",
    defaultMessage:
      "Ola! Conheci a SZT Torre pelo site e gostaria de agendar minha primeira aula experimental.",
  },
  hours: "Consulte os horários de cada modalidade diretamente com a equipe.",
  parking: "",
  contacts: [
    { name: "Professor Buba", graduation: "Faixa-preta", phone: "5583987673230" },
    { name: "Professor Abuh", graduation: "Faixa-preta", phone: "5583993960193" },
    { name: "Cebola", graduation: "Faixa-roxa", phone: "5583987089813" },
  ],
};

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Professores", href: "#professores" },
  { label: "Localização", href: "#localizacao" },
];

export const historyPoints = [
  {
    title: "Raiz South Zone Team",
    text: "A SZT Torre integra a identidade da South Zone Team, equipe paraibana reconhecida pela presenca no cenario competitivo e pela cultura de evolucao constante.",
  },
  {
    title: "Casa do Flow",
    text: "O apelido usado nas publicacoes traduz o clima que o site precisa vender: treino forte, ambiente vivo, energia de grupo e alunos construindo ritmo dentro do tatame.",
  },
  {
    title: "Extreme Elite Fight / SZT Torre",
    text: "A unidade tambem aparece associada a uma proposta ampla de artes marciais, conectando Jiu-Jitsu, Muay Thai, MMA, Sanda, Sipalki-do e defesa pessoal.",
  },
  {
    title: "Marketing com verdade",
    text: "A comunicacao valoriza o que ja foi encontrado publicamente e deixa pronto o espaco para dados oficiais de professores, horarios, endereco e conquistas especificas da unidade.",
  },
];

export const marketingPillars = [
  "Treino para quem quer comecar sem medo",
  "Ambiente de disciplina, respeito e constancia",
  "Modalidades para condicionamento, defesa pessoal e competicao",
  "Equipe com cultura de tatame e evolucao coletiva",
];

export const quickFacts: QuickFact[] = [
  {
    title: "Aula experimental",
    text: "Converse com a equipe e confirme a disponibilidade da primeira experiencia.",
    icon: CalendarCheck,
  },
  {
    title: "Iniciantes bem-vindos",
    text: "A orientacao acompanha seu ritmo desde os fundamentos.",
    icon: HeartHandshake,
  },
  {
    title: "Artes marciais",
    text: "Jiu-Jitsu, Muay Thai, MMA, Sanda, Sipalki-do e defesa pessoal foram encontrados nos perfis publicos.",
    icon: Users,
  },
  {
    title: "Ambiente respeitoso",
    text: "Disciplina, seguranca e espirito de equipe no tatame.",
    icon: ShieldCheck,
  },
  {
    title: "Unidade na Torre",
    text: "Atendimento local em Joao Pessoa, Paraiba.",
    icon: MapPin,
  },
];

export const modalities: Modality[] = [
  {
    title: "Jiu-Jitsu",
    audience: "Iniciantes, adultos, criancas e atletas",
    status: "Modalidade encontrada publicamente",
    description:
      "Base da South Zone Team, com treino tecnico, disciplina, condicionamento e evolucao para diferentes objetivos.",
    image: "/images/mod-adulto.jpg",
  },
  {
    title: "Muay Thai",
    audience: "Condicionamento, striking e defesa pessoal",
    status: "Confirmar turmas ativas",
    description:
      "Treino em pe voltado para tecnica, ritmo, resistencia e confianca, conforme disponibilidade atual da unidade.",
    image: "/images/gal-4.jpg",
  },
  {
    title: "MMA",
    audience: "Alunos que buscam treino completo",
    status: "Confirmar turmas ativas",
    description:
      "Integra fundamentos de luta em pe e solo para quem deseja uma experiencia ampla em artes marciais.",
    image: "/images/mod-competicao.jpg",
  },
  {
    title: "Sanda",
    audience: "Combate em pe e transicoes",
    status: "Confirmar turmas ativas",
    description:
      "Modalidade citada nos perfis publicos da unidade; horarios e professor responsavel devem ser confirmados.",
    image: "/images/hero-training.jpg",
  },
  {
    title: "Sipalki-do",
    audience: "Arte marcial tradicional",
    status: "Confirmar turmas ativas",
    description:
      "Modalidade encontrada no levantamento publico. O site fica preparado para detalhar turmas e faixas etarias.",
    image: "/images/gal-3.jpg",
  },
  {
    title: "Defesa pessoal",
    audience: "Seguranca, confianca e iniciantes",
    status: "Confirmar formato das aulas",
    description:
      "Treinamento voltado para consciencia corporal, resposta tecnica e desenvolvimento de autocontrole.",
    image: "/images/mod-infantil.jpg",
  },
];

export const benefits: Benefit[] = [
  { title: "Condicionamento fisico" },
  { title: "Autoconfianca" },
  { title: "Disciplina" },
  { title: "Defesa pessoal" },
  { title: "Reducao do estresse" },
  { title: "Coordenacao motora" },
  { title: "Concentracao" },
  { title: "Respeito" },
  { title: "Socializacao" },
  { title: "Controle emocional" },
  { title: "Qualidade de vida" },
  { title: "Espirito de equipe" },
];

export const beginnerAnswers = [
  "Nao preciso saber lutar",
  "Nao preciso estar em boa forma para comecar",
  "Posso fazer uma aula antes de decidir",
  "Receberei orientacao durante o treino",
  "Posso conversar com a equipe pelo WhatsApp",
];

export const processSteps = [
  "Entre em contato pelo WhatsApp",
  "Confirme modalidade e melhor horario disponivel",
  "Compareca para realizar sua aula experimental",
];

export const professors = [
  {
    name: "Professor Buba",
    role: "Faixa-preta",
    details:
      "Professor responsável e contato da equipe para orientar novos alunos, apresentar as modalidades e organizar a primeira experiência no tatame.",
    phone: "5583987673230",
    icon: Trophy,
  },
  {
    name: "Professor Abuh",
    role: "Faixa-preta",
    details:
      "Experiência e acompanhamento técnico para desenvolver fundamentos, disciplina e evolução consistente em cada etapa do treino.",
    phone: "5583993960193",
    icon: Dumbbell,
  },
  {
    name: "Cebola",
    role: "Faixa-roxa",
    details:
      "Parte da equipe responsável pelo suporte aos alunos e pela construção de um ambiente de treino técnico, respeitoso e acolhedor.",
    phone: "5583987089813",
    icon: Baby,
  },
];

export const professorTrustPoints = [
  {
    title: "Orientacao desde o primeiro treino",
    text: "O aluno entende onde pisar, como treinar e como evoluir sem precisar chegar pronto.",
    icon: HeartHandshake,
  },
  {
    title: "Tecnica com disciplina",
    text: "A comunicacao destaca correcao, constancia, respeito e seguranca em cada aula.",
    icon: ShieldCheck,
  },
  {
    title: "Caminho para competir",
    text: "Para quem deseja ir alem, a conexao com a South Zone Team reforca cultura competitiva.",
    icon: Medal,
  },
];

export const galleryImages = [
  {
    src: "/images/hero-training.jpg",
    alt: "Atletas treinando artes marciais em tatame com iluminacao cinematografica",
    title: "Treino intenso no tatame",
    caption: "Imagem principal para vender energia, foco e presenca de treino.",
  },
  {
    src: "/images/gal-4.jpg",
    alt: "Atleta de kimono saudando em ambiente de competicao",
    title: "Cultura de competicao",
    caption: "Visual de autoridade para conectar a SZT Torre ao universo competitivo da equipe.",
  },
  {
    src: "/images/gal-3.jpg",
    alt: "Detalhe de kimono em treino de artes marciais",
    title: "Detalhe, tecnica e identidade",
    caption: "Foto de textura para reforcar tatame, kimono, disciplina e cuidado com a pratica.",
  },
  {
    src: "/images/mod-competicao.jpg",
    alt: "Dois atletas praticando tecnica de combate",
    title: "Evolucao em dupla",
    caption: "Mostra pratica, parceria e intensidade controlada dentro do treino.",
  },
  {
    src: "/images/mod-adulto.jpg",
    alt: "Dois praticantes adultos treinando artes marciais",
    title: "Treino adulto",
    caption: "Composicao para divulgar turma adulta, condicionamento e desenvolvimento tecnico.",
  },
  {
    src: "/images/mod-infantil.jpg",
    alt: "Criancas praticando artes marciais em tatame",
    title: "Turmas infantis",
    caption: "Imagem para comunicar disciplina, socializacao e confianca para familias.",
  },
];

export const testimonials = [
  {
    label: "Placeholder de depoimento real",
    text: "Relato reservado para aluno real da SZT Torre. Substituir por avaliacao autorizada antes da publicacao final.",
    type: "Aluno iniciante",
  },
  {
    label: "Placeholder de responsavel",
    text: "Espaco para relato de responsavel ou aluno infantil, com nome e tempo de treino somente quando enviados pela academia.",
    type: "Responsavel",
  },
  {
    label: "Placeholder de atleta",
    text: "Area preparada para depoimento de praticante experiente ou competidor, sem inventar resultados ou titulos.",
    type: "Atleta",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Preciso ter experiencia?",
    answer:
      "Nao. A proposta do primeiro contato e orientar iniciantes com seguranca e apresentar os fundamentos no seu ritmo.",
  },
  {
    question: "A primeira aula e gratuita?",
    answer:
      "O levantamento publico nao confirmou essa informacao com seguranca. Por isso, o ideal e consultar a equipe pelo WhatsApp antes de ir.",
  },
  {
    question: "O que devo vestir na primeira aula?",
    answer:
      "Use roupa confortavel para atividade fisica. Caso precise de kimono ou outra orientacao, confirme com a equipe antes da aula.",
  },
  {
    question: "Preciso comprar kimono antes de comecar?",
    answer:
      "Nao compre antes de conversar com a academia. A equipe orienta o que e necessario para a primeira experiencia.",
  },
  {
    question: "Existem turmas para criancas?",
    answer:
      "O site esta preparado para divulgar turmas infantis, mas idade minima e horarios devem ser confirmados com a unidade.",
  },
  {
    question: "Como posso consultar os horarios?",
    answer:
      "Envie uma mensagem pelo WhatsApp com sua faixa etaria e disponibilidade para receber a orientacao atualizada.",
  },
  {
    question: "Onde fica a unidade da Torre?",
    answer:
      "A unidade fica no bairro da Torre, em Joao Pessoa - PB. O endereco completo deve ser confirmado pela equipe.",
  },
  {
    question: "Posso treinar apenas para melhorar o condicionamento?",
    answer:
      "Sim. As artes marciais podem apoiar condicionamento, disciplina e qualidade de vida, sem promessa de resultado garantido.",
  },
];

export const trustIcons = [Sparkles, ShieldCheck, Users];
