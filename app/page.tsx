
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, ShieldCheck, Star, Trees, Wallet, Sun } from "lucide-react";
import React from "react";

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function Home() {
  const features: Feature[] = [
    { icon: <MapPin className="w-10 h-10 text-green-600" />, title: "Localização Privilegiada", description: "Na Vila Conceição, perto de tudo que você precisa." },
    { icon: <Trees className="w-10 h-10 text-green-600" />, title: "Lazer Completo", description: "Piscina, academia, beach tennis e muito mais para toda a família." },
    { icon: <ShieldCheck className="w-10 h-10 text-green-600" />, title: "Segurança", description: "Condomínio fechado com preparação para portaria 24h." },
    { icon: <Star className="w-10 h-10 text-green-600" />, title: "Qualidade Versati", description: "Acabamento premium e construção com certificações." },
    { icon: <Wallet className="w-10 h-10 text-green-600" />, title: "Condições Facilitadas", description: "Financiamento MCMV, use seu FGTS e entrada em até 36x." },
    { icon: <Sun className="w-10 h-10 text-green-600" />, title: "Sustentabilidade", description: "Sistema fotovoltaico para economia nas áreas comuns." }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-gray-800 bg-white">
      <section className="w-full h-[80vh] md:h-[70vh] bg-gray-300 relative flex items-center justify-center text-center px-4 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-white max-w-4xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Green Park Residence: Conquiste seu apê completo em Diadema!</h1>
            <p className="text-xl md:text-2xl mb-8">2 Dorms | Lazer Completo | MCMV</p>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Receba Mais Informações</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="sr-only">Nome</Label>
                <Input id="name" placeholder="Seu Nome Completo" required className="border-gray-300" />
              </div>
              <div>
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" type="email" placeholder="Seu Melhor E-mail" required className="border-gray-300" />
              </div>
              <div>
                <Label htmlFor="phone" className="sr-only">WhatsApp/Telefone</Label>
                <Input id="phone" placeholder="Seu WhatsApp (com DDD)" required className="border-gray-300" />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">Quero Falar com um Especialista</Button>
            </form>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-12">Por que morar no Green Park?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plants" className="w-full py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Conheça as Plantas Inteligentes</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-sm">
            <img src="/images/plantas/planta-43.jpg" alt="Planta 43,01m²" className="rounded-lg mb-4 w-full h-64 object-cover" />
            <h3 className="text-xl font-semibold">Planta 43,01m²</h3>
            <p className="text-gray-600">2 Dormitórios, Varanda, Cozinha, Sala de Estar/Jantar, Banheiro, Área de Serviço.</p>
          </div>
          <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-sm">
            <img src="/images/plantas/planta-45.jpg" alt="Planta 45,82m²" className="rounded-lg mb-4 w-full h-64 object-cover" />
            <h3 className="text-xl font-semibold">Planta 45,82m²</h3>
            <p className="text-gray-600">2 Dormitórios, Varanda, Cozinha, Sala de Estar/Jantar, Banheiro, Área de Serviço, Home Office.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="w-full py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Galeria de Imagens</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <img
              key={i}
              src={`/images/galeria/galeria-${i + 1}.jpg`}
              alt={`Imagem ${i + 1}`}
              className="rounded-lg object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      <section id="location" className="w-full py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Localização Privilegiada na Vila Conceição</h2>
        <div className="max-w-4xl mx-auto mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.5215269097835!2d-46.611385723784615!3d-23.693063066445628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446194f1d295%3A0xfd4ad7ba539703c5!2sGREEN%20PARK%20RESIDENCE%20-%20Av.%20Dom%20Pedro%20I%2C%201317%20-%20Concei%C3%A7%C3%A3o%2C%20Diadema%20-%20SP%2C%2009991-000!5e0!3m2!1spt-BR!2sbr!4v1746655946084!5m2!1spt-BR!2sbr"
            width="100%"
            height="320"
            className="rounded-lg border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-lg text-gray-700">Próximo ao Shopping Diadema, Parque do Paço, Rodovia dos Imigrantes e muito mais.</p>
      </section>

      <section id="conditions" className="w-full py-16 px-4 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Condições Facilitadas Para Você Sair do Aluguel!</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Minha Casa Minha Vida</h3>
            <p>Aproveite os benefícios e subsídios do programa.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Use seu FGTS</h3>
            <p>Utilize seu Fundo de Garantia como parte da entrada.</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Entrada em até 36x</h3>
            <p>Facilidade para pagar a entrada do seu novo lar.</p>
          </div>
        </div>
        <Button className="bg-white text-green-700 hover:bg-gray-100 text-lg py-3 px-6">Faça uma Simulação Gratuita</Button>
      </section>

      <section id="developer" className="w-full py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-12">Realização: Versati Incorporadora</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/2 text-left text-gray-700">
            <p className="mb-4">A Versati Incorporadora e Construtora traz sua expertise e compromisso com a qualidade para Diadema. Nossos empreendimentos são pensados para oferecer o melhor em conforto, segurança e valorização.</p>
            <p>Conte com a solidez de uma empresa certificada.</p>
          </div>
          <div className="md:w-1/2 flex justify-center gap-6">
            <div className="bg-gray-200 w-24 h-16 rounded flex items-center justify-center text-gray-500 text-sm">Logo PBQP-H</div>
            <div className="bg-gray-200 w-24 h-16 rounded flex items-center justify-center text-gray-500 text-sm">Logo ISO 9001</div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Gostou do Green Park?</h2>
        <p className="text-xl text-gray-700 mb-8">Não perca tempo! Agende sua visita ao decorado e descubra seu novo lar.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-3 px-8">Agende Sua Visita Agora</Button>
      </section>

      <footer className="w-full py-8 px-4 bg-gray-800 text-gray-300 text-center text-sm">
        <p className="mb-2">Green Park Residence - Incorporação registrada sob o nº XX na matrícula nº XXXX do Cartório de Registro de Imóveis de Diadema/SP.</p>
        <p className="mb-2">Imagens meramente ilustrativas. Móveis, objetos de decoração, pisos e acabamentos são sugestões e não fazem parte do contrato. As áreas comuns serão entregues equipadas e decoradas conforme memorial descritivo.</p>
        <p className="mb-4">Versati Incorporadora e Construtora LTDA - CNPJ XX.XXX.XXX/XXXX-XX.</p>
        <p>&copy; 2025 Green Park Residence. Todos os direitos reservados. | <a href="#" className="underline">Política de Privacidade</a></p>
      </footer>
    </main>
  );
}
