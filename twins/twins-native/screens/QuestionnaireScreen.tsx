import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { parseQuestionList, Question } from '@/utils/csvParser';

export default function QuestionnaireScreen() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState({});

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

  return (
    <View>
      {questions.map(q => (
        <View key={q.number}>
          <Text>{q.text}</Text>
          <TextInput
            placeholder="Enter your answer"
            onChangeText={text => handleAnswer(Number(q.number), text)}
          />
        </View>
      ))}
      <Button title="Submit" onPress={() => console.log(answers)} />
    </View>
  );
}