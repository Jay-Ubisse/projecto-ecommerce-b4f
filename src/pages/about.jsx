import { Header } from "../components/header";

export const About = () => {
  return (
    <>
      <Header />
      <main  className="px-10 mt-8">

<div style={{ width: '100%', height: 'auto' }}>
          <img src="public\2149241406.jpg" alt="" style={{ width: '100%', height: 'auto', borderRadius:"0 0 80px 80px"}} />
          <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px', borderRadius: '5px' }}>
            <h1 className="font-bold text-white text-7xl mt-80"  >Sobre Nós</h1>
          </div>
        </div>

  

      <div className="flex gap-6 text-justify my-4">
        <div>
        <h1 className="font-bold text-2xl justify-between">O seu destino de moda onde a elegância encontra a modernidade</h1>
        </div>
        <div >
        <p>Na Kuxonga, somos apaixonados por proporcionar  uma experiência de compra única. Nosso compromisso vai além das peças de roupa que oferecemos; queremos inspirar confiança e expressão pessoal por meio da moda. Desde roupas casuais até looks sofisticados, nossa coleção é cuidadosamente curada para atender aos diversos estilos e ocasiões.</p>
        <p >Nossa coleção é um reflexo da nossa dedicação em atender a diversos estilos e ocasiões. Das roupas casuais que abraçam a simplicidade à elegância sofisticada que destaca a singularidade, cada peça é cuidadosamente selecionada para enriquecer a jornada da moda de nossos clientes.</p>
        </div>
      </div>
  

      
      <div className="bg-cream-100  pt-12">
     

      <div className="text-center">
        <h1 className="font-bold text-2xl ">O Nosso Compromisso</h1>
        <p > Na KuXonga, acreditamos na moda que é acessível, </p>
       <p >sustentável e atemporal. Comprometemo-nos a trazer peças de </p> 
      <p> qualidade que não apenas seguem as últimas tendências, mas</p>
      <p>também resistem ao teste do tempo. Trabalhamos</p>
      <p>incessantemente para garantir que cada peça reflete o padrão de excelência que você merece</p> 
      </div>
 


      /*  simao/*

      <div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
/*  simao/*


      <div className="flex text-justify gap-12 px-10 mb-14" >
        <div className="w-1/2">
          <h3 className="font-bold mb-6" >A Nossa Comunidade</h3>
          <p>Não somos apenas uma loja; Somos uma equipe que compartilha uma paixão pela moda. Em nossa página, você encontrará dicas de estilo e inspirações de looks. Junte-se a nós e faça parte dessa jornada de autoexpressão e empoderamento.</p>
        </div>
        <div className="w-1/2">
          <h3 className="font-bold mb-6">porquê Escolher a KuXonga?</h3>
          <p className="mb-2"><span className="font-bold ">Últimas Tendências: </span> Mantemos nossos olhos nas passarelas para trazer as últimas tendências diretamente para o seu guarda-roupa.</p>
          <p className="mb-2"><span className="font-bold ">Qualidade Impecável:</span> Cada peça é selecionada com base em padrões rigorosos de qualidade.</p>
          <p className="mb-2"><span className="font-bold ">Variedade e Versatilidade: </span> Oferecemos uma ampla gama de opções para se adequar a qualquer estilo e ocasião.</p>
        </div>
      </div>

      <div>
        <div className=" relative before:absolute before:bg-black/45  before:w-full  before:h-[594px]">
        <img  className= "" src="/Cover-Website-2cover-2.jpg" alt="" />
        <div  className="ml-56 text-center absolute top-32 text-white">
          <h2 className="font-bold   text-5xl mb-5">Interessado nesta coleção de roupas</h2>
          <p>Explore a KuXonga e descubra um mundo de moda que celebra a individualidade. </p>
          <p>Estamos aqui para ajudar você a contar a sua história, uma peça de roupa de cada vez.</p>
            <button className="bg-white text-black px-6  py-2 font-semibold  rounded-lg hover:bg-sky-blue-200 hover:duration-1000 hover:text-white my-6  active:bg-sky-blue-100 ">Comprar</button>
        </div>
        </div>
      </div>


      </div>
      </main>
    </>
  );
};
