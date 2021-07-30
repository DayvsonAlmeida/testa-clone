import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props;

  return(
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          {' '}
          <Text style={styles.subtitleCTA}>
            {tagLineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content={'Custom Order'}
          onPress={ () => console.warn('Custom Order Pressed') }
        />

        <StyledButton
          type='secondary'
          content={'Existing Inventory'}
          onPress={ () => console.warn('Existing Inventory Pressed') }
        />
      </View>
    </View>
  );
};

export default CarItem;