//Importações do react native
import { View, Image, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

//Importações de assets
import RmHeader from '../../assets/Header.png'
import RmFooter from '../../assets/Footer.png'

//Importação de libs
import { RmService } from '../../utils/RmService'
import { RmCard } from '../../components/RmCard'

export const Home = () => {
  const [rms, setRm] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const fetchRm = async () => {
    setLoading(true)
    const newRm = await RmService.getRm(page)
    setRm([...rms, ...newRm.data.results])
    console.log('Novo:', newRm)
    setPage(page + 1)
    setLoading(false)
  }

  const renderItem = ({ item }) => <RmCard rm={item}></RmCard>

  useEffect(() => {
    fetchRm()
  }, [])

  if (loading) return null

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerBg} source={RmHeader}></Image>
      </View>

      <FlatList
        data={rms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.containerList}
        onEndReached={fetchRm}
        onEndReachedThreshold={0.5}
      />

      <View style={styles.footer}>
        <Image style={styles.headerBg} source={RmFooter}></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#208D45'
  },
  containerList: {
    flexGrow: 1,
    padding: 16
  },
  containerScroll: {
    flexGrow: 1,
    padding: 16
  },
  header: {},
  headerBg: {
    maxWidth: '100%'
  },
  footer: {}
})
