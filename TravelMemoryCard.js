import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TravelMemoryCard = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    const memoryDetails = {
      location: 'Paris, France',
      date: 'March 20, 2024',
      note: 'Explored the Eiffel Tower at sunset',
    };
    console.log('Travel Memory:', memoryDetails);
    Alert.alert('Shared!', 'Travel memory details logged in console.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Memory</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' }}
        style={styles.image}
      />
      <View style={styles.cardContent}>
        <Text style={styles.location}>Paris, France</Text>
        <Text style={styles.date}>March 20, 2024</Text>
        <Text style={styles.note}>Explored the Eiffel Tower at sunset</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleLike}>
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={28}
              color={liked ? 'red' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Icon name="share-social-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footer}>Your Name - John Doe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },
  cardContent: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  location: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  note: {
    fontSize: 16,
    marginBottom: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    color: '#444',
  },
});

export default TravelMemoryCard;
