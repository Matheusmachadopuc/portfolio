import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const Sobre = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Oi, eu sou Matheus Machado</p>
              <p className="grid-subtext">
                Faço faculdade de ciencias da computação na PUC-RS e sou desenvolvedor FullStack. Sou apaixonado por tecnologia e sempre busco aprender
                novas habilidades. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">FullStack</p>
              <p className="grid-subtext">
                Sou um desenvolvedor FullStack com experiência em React, Node.js, Express e MongoDB. Tenho alto conhecimento em HTML, CSS e JavaScript.
                Estou sempre aprendendo novas tecnologias e frameworks para melhorar minhas habilidades e oferecer soluções de alta qualidade. alem disso tenho conhecimento em Java, Spring, SQL, C, C++.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Sou nascido no Brasil no estado do Rio Grande do Sul</p>
              <p className="grid-subtext">Falo inglês avançado e tenho conhecimentos básicos de espanhol, idioma que estou aperfeiçoando atualmente.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Sobre Mim</p>
              <p className="grid-subtext">
              Sou apaixonado por tecnologia e por transformar ideias em soluções funcionais através da programação. Mais do que uma profissão, codificar é o que me motiva todos os dias. Gosto de enfrentar desafios, resolver problemas complexos e buscar constantemente novas tecnologias que me permitam evoluir como desenvolvedor. Estou sempre aprimorando minhas habilidades para criar soluções eficientes, escaláveis e inovadoras.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Entre em contato</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">matheusrocharoc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
