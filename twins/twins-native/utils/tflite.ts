import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export async function predictPersonality(inputData: number[]): Promise<number[] | null> {
  try {
    await tf.ready();
    const model = await tf.loadGraphModel(require('../assets/model/model.json'));
    const inputTensor = tf.tensor([inputData]);
    const output = model.predict(inputTensor) as tf.Tensor;
    const data = Array.from(await output.data());
    return data;
  } catch (e) {
    console.error('Failed to run model', e);
    return null;
  }
}