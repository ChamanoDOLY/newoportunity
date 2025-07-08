import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

// Logo component using text since SVGs don't work consistently on mobile
const MyuzeLogo = () => (
  <View style={styles.logoContainer}>
    <View style={styles.logoIcon}>
      <Text style={styles.logoIconText}>M</Text>
    </View>
    <Text style={styles.logoText}>Myuze</Text>
  </View>
);

// Google icon component
const GoogleIcon = () => (
  <View style={styles.googleIcon}>
    <Text style={styles.googleIconText}>G</Text>
  </View>
);

// Facebook icon component
const FacebookIcon = () => (
  <View style={styles.facebookIcon}>
    <Text style={styles.facebookIconText}>f</Text>
  </View>
);

export default function SignIn() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim()) {
      router.push('/email-verification');
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in');
  };

  const handleFacebookSignIn = () => {
    console.log('Facebook sign in');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#f8fafc', '#e2e8f0', '#cbd5e1']}
        style={styles.backgroundGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      
      {/* Decorative Elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.decorativeCircle3} />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <MyuzeLogo />
          <Text style={styles.tagline}>
            Find your style with AI.{'\n'}Try it on. Own it.
          </Text>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.subtitle}>
              Enter your email address to complete sign in
            </Text>
          </View>

          {/* Social Sign In Buttons */}
          <View style={styles.socialSection}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleSignIn}
              activeOpacity={0.8}
            >
              <GoogleIcon />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleFacebookSignIn}
              activeOpacity={0.8}
            >
              <FacebookIcon />
              <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or sign in with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Email Form */}
          <View style={styles.formSection}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email address</Text>
              <View style={[
                styles.inputWrapper,
                Platform.OS === 'ios' && styles.inputWrapperIOS
              ]}>
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter email address"
                  placeholderTextColor="#66696e"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[styles.signInButton, !email.trim() && styles.signInButtonDisabled]}
              onPress={handleSubmit}
              disabled={!email.trim()}
              activeOpacity={0.8}
            >
              <Text style={styles.signInButtonText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpSection}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    top: -50,
    left: -50,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(168, 85, 247, 0.08)',
    top: 100,
    right: -30,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(59, 130, 246, 0.06)',
    bottom: 200,
    left: 20,
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: Platform.OS === 'web' ? 812 : '100%',
  },
  logoSection: {
    alignItems: 'center',
    marginTop: Platform.OS === 'web' ? 126 : 80,
    paddingHorizontal: 24,
    marginBottom: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  logoIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoIconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.24,
    fontWeight: '500',
  },
  mainContent: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 12,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  socialSection: {
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4285f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1877f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  dividerText: {
    fontSize: 14,
    color: '#64748b',
    letterSpacing: -0.2,
    fontWeight: '500',
  },
  formSection: {
    gap: 20,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  inputWrapper: {
    height: 52,
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  inputWrapperIOS: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  textInput: {
    fontSize: 16,
    color: '#1e293b',
    flex: 1,
    letterSpacing: -0.2,
    fontWeight: '500',
  },
  signInButton: {
    height: 52,
    backgroundColor: '#1e293b',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1e293b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  signInButtonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0.1,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  signUpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  signUpText: {
    fontSize: 16,
    color: '#64748b',
    letterSpacing: -0.2,
  },
  signUpLink: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
});