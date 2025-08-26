import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Answer } from '../types';
import { predictPersonality } from '../utils/tflite';
import { VictoryChart, VictoryPolarAxis, VictoryArea } from 'victory-native'; // Import Victory components

interface ResultsScreenProps {
  answers: Answer[];
  user: { nickname: string };
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ answers, user, onRestart }) => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const calculateProfile = async () => {
      try {
        const inputData = answers.map((answer) => parseFloat(answer.answer) || 0);
        const model = await predictPersonality(inputData);
        setProfileData(model);
      } catch (error) {
        console.error('Error calculating profile:', error);
      }
    };

    calculateProfile();
  }, [answers]);

  const dummyData = [
    { x: 'Openness', y: 50 },
    { x: 'Conscientiousness', y: 60 },
    { x: 'Extraversion', y: 70 },
    { x: 'Agreeableness', y: 80 },
    { x: 'Neuroticism', y: 90 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user.nickname}!</Text>
      {profileData ? (
        <Text style={styles.resultText}>Profile data loaded!</Text>
      ) : (
        <>
          <Text style={styles.loadingText}>Loading your profile...</Text>
          <VictoryChart polar>
            <VictoryPolarAxis />
            <VictoryArea
              data={dummyData}
              style={{
                data: { fill: 'rgba(0, 123, 255, 0.5)', stroke: '#007bff', strokeWidth: 2 },
              }}
            />
          </VictoryChart>
        </>
      )}
      <Button title="Restart" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  loadingText: { fontSize: 16, color: 'gray', marginBottom: 16 },
  resultText: { fontSize: 16, marginBottom: 16 },
});

export default ResultsScreen;
