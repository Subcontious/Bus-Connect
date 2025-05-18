// app/home.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Notícias</Text>
        <TouchableOpacity onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo com Scroll */}
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/onibus-news.png')} // coloque a imagem correta aqui
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Nova linha é adicionada à Zona Norte</Text>
          <Text style={styles.cardText}>Confira os horários e itinerários da nova linha 518.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/atraso.png')} // imagem ilustrativa
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>Atrasos nesta manhã</Text>
          <Text style={styles.cardText}>Linhas 216, 322 e 410 estão com atrasos de até 30 minutos.</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Ionicons name="home" size={28} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/confirmar-presenca')}>
          <Ionicons name="calendar" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 20
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  content: { paddingHorizontal: 20, paddingBottom: 20 },
  card: {
    backgroundColor: '#f2f2f2', borderRadius: 10, marginBottom: 20,
    overflow: 'hidden'
  },
  cardImage: { width: '100%', height: 150 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', padding: 10 },
  cardText: { fontSize: 14, color: '#555', paddingHorizontal: 10, paddingBottom: 10 },
  footer: {
    flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', padding: 15, borderTopWidth: 1,
    borderColor: '#ddd'
  }
});
