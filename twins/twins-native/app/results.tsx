import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Svg, { G, Line, Polygon, Text as SvgText } from 'react-native-svg';
import { scaleLinear } from 'd3'; // eslint-disable-line import/no-unresolved
import { Answer } from '../types';
import { predictPersonality } from '../utils/tflite';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { DesignSystem } from '@/constants/DesignSystem';

const traits = ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'];

function ResultsScreen() {
  const { answers: answersParam, user: userParam } = useLocalSearchParams();
  const router = useRouter();
  const answers: Answer[] = answersParam ? JSON.parse(answersParam as string) : [];
  const user = userParam ? JSON.parse(userParam as string) : { nickname: '' };
  const [profileData, setProfileData] = useState<number[] | null>(null);

  useEffect(() => {
    const calculateProfile = async () => {
      try {
        const inputData = answers.map((a) => parseFloat(a.answer) || 0);
        const result = await predictPersonality(inputData);
        if (
          Array.isArray(result) &&
          result.length === traits.length &&
          result.every((v) => typeof v === 'number' && !isNaN(v))
        ) {
          setProfileData(result as number[]);
        } else {
          setProfileData(null);
        }
      } catch (e) {
        console.error('Error calculating profile:', e);
        setProfileData(null);
      }
    };
    calculateProfile();
  }, [answers]);

  const size = 300;
  const center = size / 2;
  const radius = size / 2 - 40;
  const angleSlice = (Math.PI * 2) / traits.length;
  const scale = scaleLinear().domain([0, 100]).range([0, radius]);

  const points = profileData
    ? profileData.map((d, i) => {
        const angle = i * angleSlice - Math.PI / 2;
        const r = scale(d);
        return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
      })
    : [];

  const polygonPoints = points.map((p) => p.join(',')).join(' ');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Welcome, {user.nickname}!
      </ThemedText>
      {profileData ? (
        <Svg width={size} height={size}>
          <G>
            {traits.map((trait, i) => {
              const angle = i * angleSlice - Math.PI / 2;
              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);
              return (
                <G key={trait}>
                  <Line x1={center} y1={center} x2={x} y2={y} stroke="#ccc" />
                  <SvgText x={x} y={y} fontSize="12" fill="#333" textAnchor="middle">
                    {trait}
                  </SvgText>
                </G>
              );
            })}
            <Polygon
              points={polygonPoints}
              fill="rgba(0,123,255,0.5)"
              stroke="#007bff"
              strokeWidth={2}
            />
          </G>
        </Svg>
      ) : (
        <ThemedText style={styles.loadingText}>No profile data available.</ThemedText>
      )}
      <Button
        title="Restart"
        onPress={() => router.replace('/')}
        color={DesignSystem.colors.primary}
      />
    </ThemedView>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: DesignSystem.spacing[4],
    backgroundColor: DesignSystem.colors.bg,
  },
  title: {
    marginBottom: DesignSystem.spacing[4],
  },
  loadingText: {
    fontFamily: 'Inter',
    fontSize: DesignSystem.typography.fontSizeMd,
    color: DesignSystem.colors.textMuted,
    marginBottom: DesignSystem.spacing[4],
  },
});
