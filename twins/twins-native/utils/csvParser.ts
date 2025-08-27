import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export interface Question {
  number: string;
  text: string;
  scale: string;
  direction: string;
  scaleName: string;
}

export async function parseQuestionList(): Promise<Question[]> {
  const asset = Asset.fromModule(require('../assets/questionList.csv'));
  await asset.downloadAsync();
  const csv = await FileSystem.readAsStringAsync(asset.localUri!);
  return csv
    .trim()
    .split('\n')
    .slice(1)
    .map((line) => {
      const [number, text, scale, direction, scaleName] = line.split(',');
      return { number, text, scale, direction, scaleName };
    });
}