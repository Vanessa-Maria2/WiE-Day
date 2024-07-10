import { Component } from '@angular/core';
import { CardPartnerComponent } from '../card-partner/card-partner.component';
import { Partner } from '../../interfaces/Partner';
import { ListParticipantsComponent } from '../list-participants/list-participants.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPartnerComponent, ListParticipantsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Grupos e startups';
  partners: Partner[] = [
    { name: 'GPH', content: 'Grupo de extensão da UFRN dedicado a difundir o conhecimento científico e tecnológico. Oferecemos cursos tanto para o público interno quanto externo da UFRN, além de disponibilizar materiais de estudo no GitHub e Instagram. Também participamos e organizamos eventos focados em problemas relacionados à nossa área de pesquisa para aproximar a sociedade dos profissionais da área.', imagePath: 'assets/logo_gph.jpeg'
    },
    { name: 'MEG', content: 'O projeto MEG surgiu com o intuito de fazer um ambiente acadêmico e trabalhista na área das exatas mais agradável e convidativo para meninas e mulheres. O projeto atua com meninas de ensino médio, com oficinas de forma prática para desmitificar e descomplicar a matemática, ciências, computação e engenharias.', imagePath: 'assets/logo_meg.png'
    },
    {
      name: 'POTIGUAR ROCKET DESIGN', content: 'A Potiguar Rocket Design (PRD) é uma equipe voluntária de Tecnologias Aeroespaciais da UFRN, nascida em 2016, esse projeto de extensão tem 3 objetivos principais: ' +
        '- Participar de competições na área aeroespacial, desenvolvendo foguetes e satélites;  🚀' +
        '- Realizar oficinas, palestras e visitas para difusão do setor aeroespacial no RN; 🏫' +
        '- Desenvolver produções científicas como materiais para eventos, revistas e congressos. 📝', 
        imagePath: 'assets/foto_prd.jpg'
    },
    { name: 'POTYGUARA VERSE', content: 'O Potyguara Verse é uma startup que transforma a experiência de eventos online. Nascida durante a pandemia, nossa missão é democratizar o acesso à cultura global, apoiando artistas independentes e oferecendo uma plataforma inovadora. Mais do que um simples site de transmissão, proporcionamos uma experiência imersiva em realidade virtual (RV), onde artistas podem organizar eventos personalizados e monetizá-los de forma justa. Os usuários podem explorar ambientes interativos que simulam pontos turísticos, participar de atividades culturais, jogar minigames ou simplesmente assistir aos eventos de qualquer lugar, seja via óculos de RV ou em seus computadores. Combinamos realidades, integramos indústrias e utilizamos tecnologia de ponta para expandir a cultura pelo mundo.', 
      imagePath: 'assets/logo_potyguara.png'
     },
    {
      name: 'GameLab', content: 'O Laboratório de Jogos Digitais e Educação (GameLab) destina-se à pesquisa e ao desenvolvimento de jogos digitais e tecnologias imersivas e interativas para a criação de soluções inovadoras, especialmente no setor educacional.\n' +
        'O GameLab iniciou suas atividades em 2013, faz parte do Núcleo Integrador de Pesquisa e Inovação em Engenharia de Software(SETE) do Instituto Metrópole Digital(IMD), e é cadastrado no inventário de Laboratórios de Pesquisa da UFRN com o código LAB1747- 2017.\n' +
        'Com uma abordagem interdisciplinar, as pesquisas desenvolvidas neste laboratório buscam aliar conhecimentos de Computação, Artes Visuais, Design, Música, Produção Audiovisual, Comunicação, Psicologia, entre outras áreas, buscando trazer inovações nas interfaces entre essas diferentes áreas de conhecimento a fim de formar profissionais qualificados para a área de jogos digitais.',
        imagePath: 'assets/logo_gamelab.png'
    }
  ];
}
