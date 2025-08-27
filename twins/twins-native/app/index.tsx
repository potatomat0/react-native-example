import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [errors, setErrors] = useState<{ nickname?: string; email?: string; ageRange?: string; gender?: string }>({});
  const router = useRouter();

  const backgroundColor = useThemeColor({}, 'background');
  const primaryColor = useThemeColor({}, 'primary');
  const borderColor = useThemeColor({}, 'border');
  const textColor = useThemeColor({}, 'text');

  const ageOptions = ['<18', '18-24', '25-34', '35-44', '45+'];
  const genderOptions = ['M', 'F', 'Non-Binary', 'Prefer Not To Say'];

  const handleRegister = () => {
    const newErrors: { nickname?: string; email?: string; ageRange?: string; gender?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nickname.length <= 3) newErrors.nickname = 'Nickname must be longer than 3 characters';
    if (!emailRegex.test(email)) newErrors.email = 'Invalid email address';
    if (!ageRange) newErrors.ageRange = 'Age group is required';
    if (!gender) newErrors.gender = 'Gender is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
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
      {errors.nickname && <ThemedText style={styles.errorText}>{errors.nickname}</ThemedText>}
      <TextInput
        style={[styles.input, { borderColor, color: textColor }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor={textColor}
      />
      {errors.email && <ThemedText style={styles.errorText}>{errors.email}</ThemedText>}
      <TouchableOpacity
        style={[styles.input, { borderColor }]}
        onPress={() => setShowAgeDropdown(!showAgeDropdown)}
      >
        <ThemedText style={{ color: ageRange ? textColor : DesignSystem.colors.textMuted }}>
          {ageRange || 'Select Age Group'}
        </ThemedText>
      </TouchableOpacity>
      {showAgeDropdown && (
        <View style={[styles.dropdown, { borderColor, backgroundColor }]}>
          {ageOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.dropdownOption}
              onPress={() => {
                setAgeRange(option);
                setShowAgeDropdown(false);
              }}
            >
              <ThemedText style={{ color: textColor }}>{option}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {errors.ageRange && <ThemedText style={styles.errorText}>{errors.ageRange}</ThemedText>}
      <TouchableOpacity
        style={[styles.input, { borderColor }]}
        onPress={() => setShowGenderDropdown(!showGenderDropdown)}
      >
        <ThemedText style={{ color: gender ? textColor : DesignSystem.colors.textMuted }}>
          {gender || 'Select Gender'}
        </ThemedText>
      </TouchableOpacity>
      {showGenderDropdown && (
        <View style={[styles.dropdown, { borderColor, backgroundColor }]}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.dropdownOption}
              onPress={() => {
                setGender(option);
                setShowGenderDropdown(false);
              }}
            >
              <ThemedText style={{ color: textColor }}>{option}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {errors.gender && <ThemedText style={styles.errorText}>{errors.gender}</ThemedText>}
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
    borderRadius: DesignSystem.radius.lg,
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderRadius: DesignSystem.radius.lg,
    marginBottom: DesignSystem.spacing[4],
  },
  dropdownOption: {
    padding: DesignSystem.spacing[2],
  },
  errorText: {
    color: DesignSystem.colors.danger,
    marginBottom: DesignSystem.spacing[2],
    alignSelf: 'flex-start',
  },
});

export default RegistrationScreen;
