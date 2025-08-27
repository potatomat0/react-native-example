import React, { useState, useEffect } from 'react';
import { ScrollView, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { parseQuestionList, Question } from '@/utils/csvParser';
import { ThemedText } from '@/components/ThemedText';
import { DesignSystem } from '@/constants/DesignSystem';
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
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((q) => (
        <View key={q.itemNumber} style={styles.question}>
          <ThemedText>{q.question}</ThemedText>
          <View style={styles.optionsContainer}>
            {[1, 2, 3, 4, 5].map((value) => (
              <TouchableOpacity
                key={value}
                style={[
                  styles.option,
                  answers[Number(q.itemNumber)] === String(value) && styles.selectedOption,
                ]}
                onPress={() => handleAnswer(Number(q.itemNumber), String(value))}
              >
                <ThemedText>{value}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <Button
        title="Submit"
        onPress={handleSubmit}
        color={DesignSystem.colors.primary}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: DesignSystem.spacing[4],
    backgroundColor: DesignSystem.colors.bg,
  },
  question: {
    marginBottom: DesignSystem.spacing[4],
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: DesignSystem.spacing[2],
  },
  option: {
    borderWidth: 1,
    borderColor: DesignSystem.colors.border,
    borderRadius: DesignSystem.radius.sm,
    padding: DesignSystem.spacing[2],
    minWidth: 40,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: DesignSystem.colors.primary,
  },
});
