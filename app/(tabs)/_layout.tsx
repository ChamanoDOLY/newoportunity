import { Tabs } from 'expo-router';
import { User, Mail } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, // Hide tab bar for login flow
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sign In',
          tabBarIcon: ({ size, color }) => (
            <User size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="email-verification"
        options={{
          title: 'Email Verification',
          tabBarIcon: ({ size, color }) => (
            <Mail size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}