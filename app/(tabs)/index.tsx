import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="/image" style={styles.imageLink}>
        Go to image
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLink: {
    color: '#f0f0f0',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
