import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
projectExpDetails = [{
  title: 'INFOSYS WINGSPAN AI FEATURES',
  projects: [
    {
      name: 'Zoiee tutor',
      description: 'Designed and developed UI screens which is used as a chat assistant alongside player content to get summary or explanation about the content',
    },
    {
      name: 'Knowledge Assistant',
      description: 'Designed and developed UI screens which is used as a chatbot which brings up answers, related questions and suggested courses based on query.',
    },
    {
      name: 'Doc Insights',
      description: 'Designed and developed UI screens which is used to give answers based on query within the user uploaded pdf document also renders user uploaded pdf.',
    },
    {
      name: 'Knowledge Box',
      description: 'Designed and developed UI screens which is used to show additional details of searched query contents in search page alongside search cards.',
    }
]
},
{
  title: 'INFOSYS WINGSPAN FEATURES - SEARCH , PLAYER AND TOC',
  projects: [
    {
      name: 'Search Module',
      description: 'Worked on Search feature which shows multiple features under it such as learning search, people search, skill/roles search and user can search based on features, query and filters.',
    },
    {
      name: 'Player Module',
      description: 'Worked on Player and Toc feature which will show respective details of learning contents and used to play different format of contents such as pdf, video, audio etc.. ',
    },
    {
      name: 'Hotspot',
      description: 'Developed responsive screens for hotspot feature which is used to work without internet using rasperryPi.',
    },
    {
      name: 'Groups',
      description: 'Developed UI screens for Groups feature which is used to create and edit groups and has multiple use cases such as enabling features for specific peoples who are in respective group.',
    }
]
},{
  title: 'INFOSYS WINGSPAN COACHING APP',
  projects: [
    {
      name: '',
      description: ' Developed and implemented key functionalities for the feature coaching app including coach Admin request, accept flow, managing initiatives and topics flow.',
    },
    {
      name: '',
      description: 'Successfully made enhancements and fixed issues on coach and coachee flow screens and functionalities.',
    }
]
}]}
