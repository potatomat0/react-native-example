import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { parseQuestionList, Question } from '@/utils/csvParser';
import { Answer } from '../types';

export default function QuestionnaireScreen() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter();
  const { user: userParam } = useLocalSearchParams();

  useEffect(() => {
    async function loadQuestions() {
      const parsedQuestions = await parseQuestionList();
      setQuestions(parsedQuestions);
    }
    loadQuestions();
  }, []);

  const handleAnswer = (questionNumber: number, answer: string) => {
    setAnswers({ ...answers, [questionNumber]: answer });
  };

  const handleSubmit = () => {
    const answersArray: Answer[] = Object.entries(answers).map(([key, value]) => ({
      question: key,
      answer: value,
    }));
    router.push({
      pathname: '/results',
      params: {
        user: userParam as string,
        answers: JSON.stringify(answersArray),
      },
    });
  };

  return (
    <View>
      {questions.map((q) => (
        <View key={q.number}>
          <Text>{q.text}</Text>
          <TextInput
            placeholder="Enter your answer"
            onChangeText={(text) => handleAnswer(Number(q.number), text)}
          />
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}