import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

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
      
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleGoBack}
        activeOpacity={0.8}
      >
        <ArrowLeft size={24} color="#1e293b" strokeWidth={2.5} />
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
              <View key={index} style={styles.codeInputWrapper}>
                <TextInput
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  style={[
                    styles.codeInput,
                    digit && styles.codeInputFilled,
                    Platform.OS === 'ios' && styles.codeInputIOS
                  ]}
                  value={digit}
                  onChangeText={(value) => handleCodeChange(index, value)}
                  onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                  selectTextOnFocus
                />
              </View>
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
      <View style={styles.buttonContainer}>
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
      </View>
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
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    top: -40,
    right: -40,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(168, 85, 247, 0.06)',
    bottom: 150,
    left: -20,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 140 : 120,
    gap: 40,
  },
  headerSection: {
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.24,
    fontWeight: '500',
  },
  codeSection: {
    alignItems: 'center',
    gap: 32,
  },
  codeInputContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  codeInputWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  codeInput: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    backgroundColor: '#fff',
  },
  codeInputFilled: {
    borderColor: '#6366f1',
    backgroundColor: '#f8fafc',
  },
  codeInputIOS: {
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resendSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  resendText: {
    fontSize: 16,
    color: '#64748b',
    letterSpacing: -0.2,
  },
  resendLink: {
    fontSize: 16,
    color: '#6366f1',
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  verifyButton: {
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
  verifyButtonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0.1,
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
});