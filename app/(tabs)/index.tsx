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
  Dimensions,
  Platform,
} from 'react-native';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
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
        <View style={styles.backgroundGradient1} />
        <View style={styles.backgroundGradient2} />

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoIconText}>M</Text>
            </View>
            <Text style={styles.logoText}>Myuze</Text>
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
    minHeight: screenHeight,
  },
  backgroundGradient1: {
    position: 'absolute',
    width: screenWidth * 0.84,
    height: screenHeight * 0.4,
    top: 0,
    left: 0,
    backgroundColor: '#f8f9ff',
    borderBottomRightRadius: 100,
    opacity: 0.6,
  },
  backgroundGradient2: {
    position: 'absolute',
    width: screenWidth * 0.93,
    height: screenHeight * 0.69,
    top: screenHeight * 0.087,
    left: screenWidth * 0.067,
    backgroundColor: '#f0f4ff',
    borderRadius: 60,
    opacity: 0.4,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: screenHeight * 0.155,
    paddingHorizontal: 24,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: 16,
  },
  logoIcon: {
    width: 52,
    height: 52,
    backgroundColor: '#4f46e5',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    letterSpacing: -1,
  },
  tagline: {
    fontSize: 16,
    color: '#66696e',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.24,
    fontWeight: '400',
  },
  mainContent: {
    backgroundColor: '#fff',
    marginTop: screenHeight * 0.098,
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
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
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        fontWeight: 'bold',
      },
      web: {
        fontWeight: '600',
      },
    }),
  },
  subtitle: {
    fontSize: 14,
    color: '#66696e',
    textAlign: 'center',
    lineHeight: 21,
    letterSpacing: -0.24,
    fontWeight: '400',
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
    fontWeight: '400',
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
    fontWeight: '400',
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
    fontWeight: '400',
  },
  signUpLink: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    letterSpacing: -0.24,
  },
});