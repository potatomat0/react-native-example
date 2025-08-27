import React, { useState, useEffect } from 'react';
import { ScrollView, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { parseQuestionList, Question } from '@/utils/csvParser';
import { ThemedText } from '@/components/ThemedText';
import { DesignSystem } from '@/constants/DesignSystem';
import { Answer } from '../types';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function QuestionnaireScreen() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const router = useRouter();
  const { user: userParam } = useLocalSearchParams();

  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  const borderColor = useThemeColor({}, 'border');
  const textColor = useThemeColor({}, 'text');

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
        user: encodeURIComponent(userParam as string),
        answers: encodeURIComponent(JSON.stringify(answersArray)),
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor }]}>
      {questions.map((q) => {
        const questionText = q.question.replace(/^"|"$/g, '');
        const formattedQuestion = `I ${questionText.charAt(0).toLowerCase()}${questionText.slice(1)}`;
        return (
          <View key={q.itemNumber} style={styles.question}>
            <ThemedText>{formattedQuestion}</ThemedText>
            <View style={styles.optionsContainer}>
              {[1, 2, 3, 4, 5].map((value) => {
                const selected = answers[Number(q.itemNumber)] === String(value);
                return (
                  <TouchableOpacity
                    key={value}
                    style={[
                      styles.option,
                      { borderColor },
                      selected && [styles.selectedOption, { backgroundColor: primaryColor }],
                    ]}
                    onPress={() => handleAnswer(Number(q.itemNumber), String(value))}
                  >
                    <ThemedText style={selected ? styles.selectedText : { color: textColor }}>
                      {value}
                    </ThemedText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      })}
      <Button
        title="Submit"
        onPress={handleSubmit}
        color={primaryColor}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: DesignSystem.spacing[4],
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
    borderRadius: DesignSystem.radius.sm,
    padding: DesignSystem.spacing[2],
    minWidth: 40,
    alignItems: 'center',
  },
  selectedOption: {},
  selectedText: {
    color: DesignSystem.colors.bg,
  },
});
