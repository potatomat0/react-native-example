import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export interface Question {
  itemNumber: string;
  question: string;
  scale: string;
  direction: string;
  factorName: string;
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
      const [itemNumber, question, scale, direction, factorName] = line.split(',');
      return { itemNumber, question, scale, direction, factorName };
    });
}
