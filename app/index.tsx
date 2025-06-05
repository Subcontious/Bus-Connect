import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bus-icon.png')} style={styles.busImage} />

      <View style={styles.box}>
        <Text style={styles.logo}>
          <Text style={styles.logoBlue}>BUS</Text> CONNECT
        </Text>

        <Text style={styles.subtitle}>Facilitando sua vida</Text>

        <Text style={styles.desc}>
          Crie sua conta ou faça login e deixe sua rotina mais prática e eficiente.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/home')} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f9fafb',
    paddingHorizontal: 20,
  },

  busImage: { 
    width: 220, 
    height: 220, 
    resizeMode: 'contain', 
    marginBottom: 30 
  },

  box: { 
    width: '100%', 
    backgroundColor: '#ffffff', 
    borderRadius: 20, 
    padding: 25, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },

  logo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#111827',
    marginBottom: 8,
  },

  logoBlue: { 
    color: '#007BFF' 
  },

  subtitle: { 
    fontSize: 18, 
    marginTop: 10, 
    fontWeight: '600', 
    color: '#374151',
  },

  desc: { 
    fontSize: 14, 
    textAlign: 'center', 
    marginVertical: 15, 
    color: '#6b7280',
    lineHeight: 20,
  },

  button: { 
    backgroundColor: '#007BFF', 
    paddingVertical: 14, 
    paddingHorizontal: 40, 
    borderRadius: 12, 
    marginTop: 10,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  buttonText: { 
    color: '#fff', 
    fontWeight: '700', 
    fontSize: 16,
    letterSpacing: 1,
  },
});
