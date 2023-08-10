import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

export const RmCard = ({ rm }) => {
  return (
    <TouchableOpacity key={rm.id} style={styles.card}>
      <Image style={styles.characterImage} source={{ uri: rm.image }}></Image>
      <View style={styles.rmInfo}>
        <Text style={styles.infoRow}>Name: {rm.name}</Text>
        <Text style={styles.infoRow}>Status: {rm.status}</Text>
        <Text style={styles.infoRow}>Species: {rm.species}</Text>
        <Text style={styles.infoRow}>Origin: {rm.origin.name}</Text>
        <Text style={styles.infoRow}>Gender: {rm.gender}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    borderWidth: 4,
    borderColor: 'black',
    backgroundColor: '#42B4CA',
    borderRadius: 16
  },
  characterImage: {
    width: 100,
    height: 100,
    marginRight: 12,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#BFDE42'
  },
  rmInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  infoRow: {
    color: 'black',
    fontWeight: '700',
    maxWidth: 200
  }
})
