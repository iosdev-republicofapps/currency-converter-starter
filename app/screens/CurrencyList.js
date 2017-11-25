import React from 'react';
import { Text, FlatList, ScrollView } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <FlatList data={currencies} renderItem={({ item }) => <Text>{item}</Text>} />
);

export default CurrencyList;
