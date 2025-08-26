import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './screens/RegistrationScreen';
import QuestionnaireScreen from './screens/QuestionnaireScreen';
import ResultsScreen from './screens/ResultsScreen';
import { Screen, User, Answer } from './types';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleRegister = (userData: User) => {
    setUser(userData);
  };

  const handleQuestionnaireComplete = (answerData: Answer[]) => {
    setAnswers(answerData);
  };

  const handleRestart = () => {
    setUser(null);
    setAnswers([]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screen.Registration}>
        <Stack.Screen name={Screen.Registration} options={{ headerShown: false }}>
          {() => <RegistrationScreen onRegister={handleRegister} />}
        </Stack.Screen>
        <Stack.Screen name={Screen.Questionnaire} options={{ headerShown: false }}>
          {() => <QuestionnaireScreen onComplete={handleQuestionnaireComplete} />}
        </Stack.Screen>
        <Stack.Screen name={Screen.Results} options={{ headerShown: false }}>
          {() =>
            user && answers.length > 0 ? (
              <ResultsScreen answers={answers} user={user} onRestart={handleRestart} />
            ) : (
              <RegistrationScreen onRegister={handleRegister} />
            )
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
