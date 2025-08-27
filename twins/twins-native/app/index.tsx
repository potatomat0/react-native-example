import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { DesignSystem } from '@/constants/DesignSystem';
import { User } from '../types';
import { useThemeColor } from '@/hooks/useThemeColor';

const RegistrationScreen: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [gender, setGender] = useState('');
  const router = useRouter();

  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  const borderColor = useThemeColor({}, 'border');
  const textColor = useThemeColor({}, 'text');

  const handleRegister = () => {
    if (nickname && email && ageRange && gender) {
      const user: User = { nickname, email, ageRange, gender };
      router.push({ pathname: '/questionnaire', params: { user: JSON.stringify(user) } });
    }
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedText type="title" style={styles.title}>
        Register
      </ThemedText>
      <TextInput
        style={[styles.input, { borderColor, color: textColor }]}
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
        placeholderTextColor={textColor}
      />
      <TextInput
        style={[styles.input, { borderColor, color: textColor }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={textColor}
      />
      <TextInput
        style={[styles.input, { borderColor, color: textColor }]}
        placeholder="Age Range"
        value={ageRange}
        onChangeText={setAgeRange}
        placeholderTextColor={textColor}
      />
      <TextInput
        style={[styles.input, { borderColor, color: textColor }]}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        placeholderTextColor={textColor}
      />
      <Button
        title="Register"
        onPress={handleRegister}
        color={primaryColor}
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
  },
  title: {
    marginBottom: DesignSystem.spacing[4],
  },
  input: {
    width: '100%',
    padding: DesignSystem.spacing[2],
    borderWidth: 1,
    marginBottom: DesignSystem.spacing[4],
    borderRadius: DesignSystem.radius.sm,
  },
});

export default RegistrationScreen;
