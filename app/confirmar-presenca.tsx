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
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Confirmar Presença</Text>
        <View style={{ width: 24 }} /> {/* Alinhamento */}
      </View>

      {/* Lista de dias */}
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

      {/* Botão confirmar */}
      <TouchableOpacity style={styles.botao} onPress={confirmar}>
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
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: { fontSize: 22, fontWeight: '600', color: '#333' },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  cardSelecionado: {
    borderColor: '#007bff',
    backgroundColor: '#e6f0ff',
  },
  diaTexto: {
    fontSize: 16,
    color: '#555',
  },
  diaTextoSelecionado: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 16,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
