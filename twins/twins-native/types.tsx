
export enum Screen {
    Registration = 'REGISTRATION',
    Questionnaire = 'QUESTIONNAIRE',
    Results = 'RESULTS',
  }
  
  export interface User {
    nickname: string;
    email: string;
    ageRange: string;
    gender: string;
  }
  
  export type AnswerType = 'Likert';

  export interface Question {
    category: string;
    question: string;
    answerType: AnswerType;
  }
  
  export interface Answer {
    question: string;
    answer: string;
  }
  
  export interface RadarDataPoint {
    subject: string;
    score: number;
    fullMark: number;
  }
  
  export interface ProfileData {
    keywords: string[];
    summary: string;
    radarData: RadarDataPoint[];
  }
  
  export interface Theme {
    name: string;
    colors: {
      '--brand-primary': string;
      '--brand-secondary': string;
      '--dark-bg': string;
      '--dark-card': string;
      '--dark-text': string;
      '--dark-text-secondary': string;
    };
  }
  
