import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📰 Notícias</Text>
        <TouchableOpacity onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={require('../assets/onibus-news.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Nova linha é adicionada à Zona Norte</Text>
            <Text style={styles.cardText}>Confira os horários e itinerários da nova linha 518.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={require('../assets/atraso.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Atrasos nesta manhã</Text>
            <Text style={styles.cardText}>Linhas 216, 322 e 410 estão com atrasos de até 30 minutos.</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace('/')} activeOpacity={0.7}>
          <Ionicons name="home" size={26} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/confirmar-presenca')} activeOpacity={0.7}>
          <Ionicons name="calendar" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/menu')} activeOpacity={0.7}>
          <Ionicons name="menu" size={26} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },

  title: { fontSize: 26, fontWeight: '700', color: '#111827' },

  content: { paddingHorizontal: 20, paddingBottom: 20 },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  cardImage: { width: '100%', height: 180 },

  cardContent: { padding: 16 },

  cardTitle: { fontSize: 18, fontWeight: '600', color: '#111827', marginBottom: 4 },

  cardText: { fontSize: 14, color: '#6b7280' },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
});
