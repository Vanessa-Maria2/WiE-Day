import { Component } from '@angular/core';
import { Participant } from '../../interfaces/Participant';
import { CardParticipantComponent } from '../card-participant/card-participant.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-list-participants',
  standalone: true,
  imports: [CardParticipantComponent, MatDialogModule],
  templateUrl: './list-participants.component.html',
  styleUrl: './list-participants.component.css'
})
export class ListParticipantsComponent {
  participants: Participant[] = [
    {
      name: 'Ana Catarina',
      content: 'Graduanda em Tecnologia da Informação, com cerca de 2 anos de experiência na área de dados, atuando inicialmente como Analista de BI. Durante este período, me envolvi em projetos de bioinformática, aplicando minha expertise em dados para contribuir com pesquisas no laboratório em que trabalhei. Atualmente, sou Desenvolvedora de IA em um projeto de pesquisa da UFRN em parceria com a Dell Technologies. Além disso, estou engajada em um projeto de pesquisa focado em Modelos de Linguagem de Grande Escala (LLMs).',
      imagePath: 'assets/foto_ana.jpeg'
    },
    {
      name: 'Mônica', 
      content: 'Bacharel em Ciência da Computação e Mestre em Sistemas e Computação pela UFRN, além de Doutora em Ciência da Computação pela UFRGS. Atualmente, ela é Professora Associada da UFRN e coordena o Laboratório de Sistemas em Chip (LaSiC). Durante cinco anos, foi conselheira do nosso grupo IEEE WIE UFRN e continua a se dedicar a projetos de extensão voltados para meninas e mulheres na tecnologia. Seus principais tópicos de pesquisa incluem projeto de sistemas embarcados e a participação feminina na tecnologia.',
      imagePath: 'assets/foto_monica.jpeg'
    },
    {
      name: 'Thaís',
      content: 'Graduada em Ciência da Computação pela UFPB, especialista em Bioinformática pela Universidade de Chile, com mestrado e doutorado em Bioinformática pela UFRN. Atualmente, ela é líder técnica de IA na Minsait e cientista de dados.',
      imagePath: 'assets/foto_thais.jpeg'
    },
    {
      name: 'Marina Ribeiro',
      content: 'Física com mestrado em neurociências pela UFRN. Atualmente, está fazendo doutorado em bioinformática pela mesma instituição. Apaixonada por inovação e tecnologia, usa suas habilidades computacionais para investir em impacto social em educação e saúde mental.',
      imagePath: 'assets/foto_marina.jpeg'
    },
    {
      name: 'Thuanny Albuquerque', 
      content: 'Com 21 anos, está prestes a concluir seu Bacharelado em Tecnologia da Informação com ênfase em Ciência da Computação. Atualmente trabalha como desenvolvedora backend PHP, mas teve durante um ano e meio uma participação em um projeto de Deep Reinforcement Learning para Jogos, onde aplicou técnicas avançadas de inteligência artificial.',
      imagePath: 'assets/foto_thuanny.png'
    },
    {
      name: 'Juliana Santiago',
      content: '21 anos de idade, técnica em informática formada pela EAJ/UFRN e hoje está no sexto período do BTI. É bolsista de um projeto que trabalha com NLP e atua como voluntária em outro projeto envolvendo Eyetracking. Se encontrou na área de dados e tem fortes interesses em aprendizado de máquina e data science.',
      imagePath: 'assets/foto_juliana.jpeg'
    },
  ];
}
