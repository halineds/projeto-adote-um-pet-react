import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista'


const Home: NextPage = () => {
  return (
    <div >
      <Titulo titulo= ""
      subtitulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong> adotar um pet virtualmente </strong>
        </span>
      } />

      <Lista
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia:'Pet saudável, animado, carinhoso e com muitas qualidades para animar os seus dias! esse gato bebê precisa de cuidado e atenção! Se essa é sua primeira adoção e está meio perdido sobre o que fazer, fique tranquilo: reunimos aqui as principais informações para você cuidar bem do seu novo pet e ser um ótimo tutor! Confira!',
            foto: 'https://www.petlove.com.br/dicas/wp-content/uploads/2021/09/gato-persa-filhote-petlove-04.jpg'
          },
          {
            id: 2,
            nome: 'Fenix',
            historia:'Com certeza você não vai se arrepender de uma escolha como esta! De origem britânica, conhecido por ser muito dócil e companheiro, o Golden Retriever é considerado por muitos o “cão dos sonhos”. Bastante inteligente, pronto para aprender truques e muitas vezes usados como cães-guia, o Golden é um cachorro ativo e que gosta de ajudar e agradar a todos (inclusive aqueles que não conhece tão bem). Adora truques e precisa de muita atenção e de tempo disponível para gastar sua energia. Ele também é um ótimo nadador e o favorito de várias famílias, algo que fez com que a sua popularidade ficasse bastante alta nas últimas décadas aqui no Brasil e no mundo.' ,
            foto: 'https://super.abril.com.br/wp-content/uploads/2018/01/dog_hme.png'
          }
        ]}
      />
    </div>
  )
}

export default Home
