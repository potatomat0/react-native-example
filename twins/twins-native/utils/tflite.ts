import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export async function loadModel() {
  await tf.ready();
  const model = await tf.loadGraphModel(require('../../assets/model/model.json'));
  return model;
}

export async function predictPersonality(model, inputData) {
  const inputTensor = tf.tensor(inputData, [1, inputData.length]);
  const output = model.predict(inputTensor);
  return output.dataSync();
}