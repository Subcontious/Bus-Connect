import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type DiaSemana = {
  id: number;
  dia: string;
  selecionado: boolean;
};

export default function ConfirmarPresencaScreen() {
  const [dias, setDias] = useState<DiaSemana[]>([
    { id: 1, dia: 'Segunda-feira', selecionado: false },
    { id: 2, dia: 'Terça-feira', selecionado: false },
    { id: 3, dia: 'Quarta-feira', selecionado: false },
    { id: 4, dia: 'Quinta-feira', selecionado: false },
    { id: 5, dia: 'Sexta-feira', selecionado: false },
  ]);

  const router = useRouter();

  const alternarDia = (id: number) => {
    setDias(prev =>
      prev.map(d =>
        d.id === id ? { ...d, selecionado: !d.selecionado } : d
      )
    );
  };

  const confirmar = () => {
    const selecionados = dias.filter(d => d.selecionado);
    if (selecionados.length === 0) {
      alert('Selecione pelo menos um dia.');
      return;
    }
    alert(`Você confirmou presença para: ${selecionados.map(d => d.dia).join(', ')}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Confirmar Presença</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {dias.map(dia => (
          <TouchableOpacity
            key={dia.id}
            style={[styles.card, dia.selecionado && styles.cardSelecionado]}
            onPress={() => alternarDia(dia.id)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={dia.selecionado ? 'checkmark-circle' : 'ellipse-outline'}
              size={24}
              color={dia.selecionado ? '#007bff' : '#aaa'}
              style={{ marginRight: 12 }}
            />
            <Text style={[styles.diaTexto, dia.selecionado && styles.diaTextoSelecionado]}>
              {dia.dia}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.botao} onPress={confirmar} activeOpacity={0.8}>
        <Text style={styles.botaoTexto}>Confirmar Presença</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafe' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },

  title: { fontSize: 22, fontWeight: '600', color: '#111827' },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },

  cardSelecionado: {
    borderColor: '#007bff',
    backgroundColor: '#e6f0ff',
  },

  diaTexto: {
    fontSize: 16,
    color: '#374151',
  },

  diaTextoSelecionado: {
    color: '#007bff',
    fontWeight: '600',
  },

  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
