export const SITE_URL = "https://judice.com.br";

// Imagem exibida ao compartilhar qualquer link do site (WhatsApp, LinkedIn etc.).
export const OG_IMAGE = { url: "/images/og-image.png", width: 1200, height: 630, alt: "Judice" };

export const COMPANY = {
  legalName: "Judice",
  foundingYear: 2003,
  foundingDate: "2003-01-01", // TODO: verificar se há mês/dia exato com o cliente
  founder: "Rodrigo Wichmann Cruz",
  email: "judice@judice.com.br",
  whatsapp: "+5551983458538",
  whatsappDisplay: "51 98345-8538",
  whatsappHref: "https://wa.me/5551983458538",
  phone: "+555132116505",
  phoneDisplay: "(51) 3211-6505",
  phoneHref: "tel:+555132116505",
  loginUrl: "https://www.judiceonline.com.br/judice/judiceSite/login.jsp",
  cnpj: "06.066.194/0001-04",
  // Usado apenas em dados estruturados (JSON-LD), não exibido no site.
  address: {
    streetAddress: "Rua Manoelito de Ornellas, Nº 55, sala 603",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    postalCode: "90110-230",
    addressCountry: "BR",
  },
  sameAs: [
    "https://web.facebook.com/profile.php?id=61590731609237",
    "https://www.linkedin.com/in/judice-solu%C3%A7%C3%B5es-eletr%C3%B4nicas-b3671842/",
  ],
};
