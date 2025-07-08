import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
export default function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join('');
    if (code.length === 4) {
      console.log('Verifying code:', code);
      // Add verification logic here
    }
  };

  const handleResendCode = () => {
    console.log('Resending verification code');
    // Add resend logic here
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}
        activeOpacity={0.8}
      >
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.title}>Check email for code</Text>
          <Text style={styles.subtitle}>
            Please enter the verification code sent to{'\n'}your email address
          </Text>
        </View>

        {/* Verification Code Section */}
        <View style={styles.codeSection}>
          <View style={styles.codeInputContainer}>
            {verificationCode.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.codeInput}
                value={digit}
                onChangeText={(value) => handleCodeChange(index, value)}
                onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
                selectTextOnFocus
              />
            ))}
          </View>

          <View style={styles.resendSection}>
            <Text style={styles.resendText}>Didn't receive a code? </Text>
            <TouchableOpacity onPress={handleResendCode} activeOpacity={0.8}>
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Verify Code Button */}
      <TouchableOpacity
        style={[
          styles.verifyButton,
          verificationCode.join('').length !== 4 && styles.verifyButtonDisabled,
        ]}
        onPress={handleVerifyCode}
        disabled={verificationCode.join('').length !== 4}
        activeOpacity={0.8}
      >
        <Text style={styles.verifyButtonText}>Verify code</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 64,
    left: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 124,
    gap: 32,
  },
  headerSection: {
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
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
  codeSection: {
    alignItems: 'center',
    gap: 16,
  },
  codeInputContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  codeInput: {
    width: 70,
    height: 70,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontSize: 24,
    fontWeight: '500',
    color: '#1a1a1a',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {
        fontWeight: 'bold',
      },
      web: {
        fontWeight: '500',
      },
    }),
  },
  resendSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  resendText: {
    fontSize: 14,
    color: '#66696e',
    letterSpacing: -0.24,
    fontWeight: '400',
  },
  resendLink: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    letterSpacing: -0.24,
  },
  verifyButton: {
    marginHorizontal: 24,
    marginBottom: Math.max(60, screenHeight * 0.074),
    height: 48,
    backgroundColor: '#030318',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonDisabled: {
    opacity: 0.5,
  },
  verifyButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: -0.32,
  },
});