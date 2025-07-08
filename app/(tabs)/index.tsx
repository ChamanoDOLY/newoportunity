import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { LogoIcon } from '../../components/LogoIcon';
import { LogoText } from '../../components/LogoText';
import { BackgroundGradient1, BackgroundGradient2 } from '../../components/BackgroundGradient';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim()) {
      router.push('/email-verification');
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic
    console.log('Google sign in');
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in logic
    console.log('Facebook sign in');
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Background Decorations */}
        <BackgroundGradient1 style={styles.backgroundVector1} />
        <BackgroundGradient2 style={styles.backgroundVector2} />

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <LogoIcon width={52} height={52} />
            <LogoText width={110} height={32} />
          </View>
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
              <Image
                source={{ uri: 'https://c.animaapp.com/8EEkSz1P/img/g@2x.png' }}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleFacebookSignIn}
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: 'https://c.animaapp.com/8EEkSz1P/img/image-25@2x.png' }}
                style={styles.socialIcon}
                resizeMode="contain"
              />
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
              <View style={styles.inputWrapper}>
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
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    minHeight: 812,
  },
  backgroundVector1: {
    position: 'absolute',
    width: 316,
    height: 323,
    top: 0,
    left: 0,
  },
  backgroundVector2: {
    position: 'absolute',
    width: 350,
    height: 558,
    top: 71,
    left: 25,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 126,
    paddingHorizontal: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 16,
    color: '#66696e',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.24,
  },
  mainContent: {
    backgroundColor: '#fff',
    marginTop: 80,
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#66696e',
    textAlign: 'center',
    lineHeight: 21,
    letterSpacing: -0.24,
  },
  socialSection: {
    gap: 12,
    marginBottom: 16,
  },
  socialButton: {
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  socialIcon: {
    width: 17,
    height: 17,
  },
  socialButtonText: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    fontSize: 12,
    color: '#626369',
    letterSpacing: -0.32,
  },
  formSection: {
    gap: 16,
    marginBottom: 24,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '400',
    letterSpacing: -0.24,
  },
  inputWrapper: {
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 14,
    color: '#1a1a1a',
    flex: 1,
    letterSpacing: -0.24,
  },
  signInButton: {
    height: 48,
    backgroundColor: '#030318',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButtonDisabled: {
    opacity: 0.5,
  },
  signInButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: -0.32,
  },
  signUpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  signUpText: {
    fontSize: 14,
    color: '#9ca3af',
    letterSpacing: -0.24,
  },
  signUpLink: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    letterSpacing: -0.24,
  },
});