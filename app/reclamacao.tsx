import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ReclamacaoScreen() {
  const router = useRouter();
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const enviarReclamacao = () => {
    if (!assunto || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Enviado!', 'Sua reclamação foi registrada com sucesso.');
    setAssunto('');
    setDescricao('');
    router.back();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Fazer uma Reclamação</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Assunto</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o assunto"
          value={assunto}
          onChangeText={setAssunto}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, { height: 120 }]}
          placeholder="Descreva o problema"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        <TouchableOpacity style={styles.botao} onPress={enviarReclamacao} activeOpacity={0.8}>
          <Text style={styles.botaoTexto}>Enviar Reclamação</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  title: { fontSize: 20, fontWeight: '600', color: '#333' },

  form: { padding: 20 },

  label: { fontSize: 14, color: '#374151', marginBottom: 6 },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    fontSize: 14,
    color: '#111827',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },

  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
