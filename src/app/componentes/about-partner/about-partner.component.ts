import { Component } from '@angular/core';
import { CardPartnerComponent } from '../card-partner/card-partner.component';
import { Partner } from '../../interfaces/Partner';

@Component({
  selector: 'app-about-partner',
  standalone: true,
  imports: [CardPartnerComponent],
  templateUrl: './about-partner.component.html',
  styleUrl: './about-partner.component.css'
})
export class AboutPartnerComponent {
  title = 'Apoiadores e patrocinadores';
  partners: Partner[] = [
    {
      name: 'Alura', content: 'A Alura é a maior escola de tecnologia do Brasil, há 11 anos transformando a comunidade tech do país. Durante esse período, mais de 1 milhão de pessoas foram impactadas pela Alura, seja através dos cursos da plataforma, podcasts, conteúdos em vídeo ou pelas Imersões gratuitas.' +
        'São mais de 1450 cursos disponíveis, em uma única matrícula, para mergulhar com profundidade em diferentes áreas da tecnologia, como: Front-end, Programação, Mobile, DevOps, Inteligência Artificial, UX & Design, Data Science e Inovação & Gestão. ✨',
        imagePath: 'assets/logo_alura.jpg'
    },
    {
      name: 'Intelnet', content: 'A Intelnet é uma empresa do interior do estado do Rio Grande do Norte que oferece serviços de Internet para Nova Cruz/RN e cidades vizinhas.'
        + 'Fundada em 2004, ela se consolidou oferecendo segurança, alta tecnologia e qualidade nos seus serviços.'
        + 'A equipe é formada por técnicos e engenheiros que são capazes de implementar e projetar redes de telecomunicações.',
        imagePath: 'assets/foto_prd.jpg'
    },
    {
      name: 'Metrópole Digital', content: 'O Metrópole Parque é um complexo inovador impulsionado pela iniciativa da UFRN, com o apoio do SEBRAE e da Prefeitura Municipal do Natal. Confira algumas das conquistas do Metrópole Parque:'
        + '🌟Mais de 130 empresas de Tl reunidas, tornando-se o maior polo de tecnologia, empreendedorismo e inovação do Rio Grande do Norte.'
        + '🌟A incubadora de empresas, localizada dentro do Instituto Metrópole Digital, já graduou mais de 15 startups de tecnologia através do Programa de Incubação.'
        + '🌟As mais de 130 empresas associadas empregam cerca de 3 mil pessoas, transformando a economia de Natal e conectando o RN com o futuro.',
        imagePath: 'assets/logo_metropole_parque.jpg'
    }
  ];
}
