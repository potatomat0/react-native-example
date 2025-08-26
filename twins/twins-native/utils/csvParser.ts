import * as FileSystem from 'expo-file-system';

export interface Question {
  number: string;
  text: string;
  scale: string;
  direction: string;
  scaleName: string;
}

export async function parseQuestionList(): Promise<Question[]> {
  const csv = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'questionList.csv');
  return csv.split('\n').slice(1).map(line => {
    const [number, text, scale, direction, scaleName] = line.split(',');
    return { number, text, scale, direction, scaleName };
  });
}