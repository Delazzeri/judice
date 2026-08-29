import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    quote:
      "Gostaríamos de expressar nossa profunda satisfação com os serviços prestados pela Judice. Como um dos maiores fornecedores de advogados audiencistas e prepostos do Brasil, eles se destacam pela excelência e compromisso com a qualidade. A dedicação da equipe em atender às nossas necessidades com precisão e eficiência é simplesmente incomparável. Não há nada parecido no mercado. A qualidade e o comprometimento da Judice são, sem dúvida, palavras-chave que definem seu trabalho. Recomendamos seus serviços com total confiança. Obrigado, Judice, por serem parceiros tão excepcionais em nossas operações!",
    name: "Bruna Bertocco",
    role: "Diretora Jurídica",
    company: "OMNIJUS",
    logo: "/images/testimonial/omnijus_logo.jpg",
  },
  {
    quote:
      "Trabalhamos com a empresa Judice para a realização de todas as nossas audiências presenciais, pelo fato do seu atendimento de excelência. Sempre muito solícitos, ágeis e atenciosos no atendimento das demandas, além da simpatia em todos os atendimentos. Contam ainda com uma plataforma fácil e autoexplicativa para inserção das solicitações. Com certeza recomendamos os serviços da empresa Judice.",
    name: "Andressa de Lourdes Riconi",
    role: "Gerente",
    company: "MARTINELLI ADVOGADOS",
    logo: "/images/testimonial/martinelli_logo.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="feedbacks" className="bg-judice-navy py-12 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
        <SectionHeading
          eyebrow="Usuários da plataforma Judice"
          title={
            <>
              Feedbacks Judice
            </>
          }
          tone="dark"
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} tone="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}
