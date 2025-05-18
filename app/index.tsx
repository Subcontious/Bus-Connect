// app/index.tsx
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bus-icon.png')} style={styles.busImage} />
      <View style={styles.box}>
        <Text style={styles.logo}><Text style={styles.logoBlue}>BUS</Text> CONNECT</Text>
        <Text style={styles.subtitle}>Facilitando sua vida</Text>
        <Text style={styles.desc}>crie sua conta ou faça login e deixe sua vida mais prática</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  busImage: { width: 200, height: 200, resizeMode: 'contain' },
  box: { width: '85%', backgroundColor: '#f6f6f6', borderRadius: 15, padding: 20, alignItems: 'center' },
  logo: { fontSize: 24, fontWeight: 'bold' },
  logoBlue: { color: '#007BFF' },
  subtitle: { fontSize: 16, marginTop: 10, fontWeight: '600' },
  desc: { fontSize: 14, textAlign: 'center', marginVertical: 10, color: '#555' },
  button: { backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
