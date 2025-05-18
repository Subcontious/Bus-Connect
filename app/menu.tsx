// app/menu.tsx
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  const router = useRouter();

  const sair = () => {
    alert('Você saiu da conta!');
    router.replace('/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>

      {/* Card do usuário */}
      <View style={styles.profileCard}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Nome do Usuario</Text>
          <Text style={styles.email}>usuario@gmail.com</Text>
          <Text style={styles.role}>Cliente</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <View style={styles.menuList}>
        <MenuItem icon="home-outline" label="Início" onPress={() => router.push('/home')} />
        <MenuItem icon="calendar-outline" label="Horário" />
        <MenuItem icon="checkmark-done-outline" label="Confirmar Presença" onPress={() => router.push('/confirmar-presenca')} />
        <MenuItem icon="people-outline" label="Lista de Alunos" />
        <MenuItem icon="chatbox-ellipses-outline" label="Fazer uma reclamação" />
        <MenuItem icon="information-circle-outline" label="Sobre" />
        <MenuItem icon="log-out-outline" label="Sair" color="#dc3545" onPress={sair} />
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress, color = '#007bff' }: any) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={color} style={{ marginRight: 15 }} />
      <Text style={[styles.menuText, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menuTitle: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 25,
    padding: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: -30,
    alignItems: 'center',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40, marginBottom: 10,
  },
  info: {
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  role: {
    fontSize: 14,
    color: '#aaa',
  },
  editButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  menuList: {
    marginTop: 20,
    gap: 10,
    paddingBottom: 50,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 3, shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
