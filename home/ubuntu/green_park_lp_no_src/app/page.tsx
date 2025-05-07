
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
    </main>
  );
}
