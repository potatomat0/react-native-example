import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { DesignSystem } from '@/constants/DesignSystem';
import { User } from '../types';

const RegistrationScreen: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (nickname && email && ageRange && gender) {
      const user: User = { nickname, email, ageRange, gender };
      router.push({ pathname: '/questionnaire', params: { user: JSON.stringify(user) } });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Register
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Age Range"
        value={ageRange}
        onChangeText={setAgeRange}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <Button
        title="Register"
        onPress={handleRegister}
        color={DesignSystem.colors.primary}
      />
    </ThemedView>
  );
};

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
  input: {
    width: '100%',
    padding: DesignSystem.spacing[2],
    borderWidth: 1,
    borderColor: DesignSystem.colors.border,
    marginBottom: DesignSystem.spacing[4],
    borderRadius: DesignSystem.radius.sm,
  },
});

export default RegistrationScreen;
