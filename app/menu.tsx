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
      <View style={styles.header}>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>

      <View style={styles.profileCard}>
        <Image source={require('../assets/profile.png')} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>Nome do Usuário</Text>
          <Text style={styles.email}>usuario@gmail.com</Text>
          <Text style={styles.role}>Cliente</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuList}>
        <MenuItem icon="home-outline" label="Início" onPress={() => router.push('/home')} />
        <MenuItem icon="calendar-outline" label="Horário" />
        <MenuItem icon="checkmark-done-outline" label="Confirmar Presença" onPress={() => router.push('/confirmar-presenca')} />
        <MenuItem icon="people-outline" label="Lista de Alunos" />
        <MenuItem icon="chatbox-ellipses-outline" label="Fazer uma reclamação" onPress={() => router.push('/reclamacao')}/>
        <MenuItem icon="information-circle-outline" label="Sobre" />
        <MenuItem icon="log-out-outline" label="Sair" color="#dc3545" onPress={sair} />
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress, color = '#007BFF' }: any) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icon} size={24} color={color} style={{ marginRight: 15 }} />
      <Text style={[styles.menuText, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f3f4f6',
    paddingBottom: 50,
  },

  header: {
    backgroundColor: '#007BFF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  menuTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginTop: -25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },

  info: {
    alignItems: 'center',
    marginBottom: 12,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111827',
  },

  email: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },

  role: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 2,
  },

  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  editText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  menuList: {
    marginTop: 25,
    gap: 12,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  menuText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
