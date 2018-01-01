import React, { Component, PropTypes } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleTextChange = (amount) => {
    console.log(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
    console.log(swapCurrency());
  };

  handleOptionsPress = () => {
    console.log('press options');
    this.props.navigation.navigate('Options');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            onPress={this.handlePressBaseCurrency}
            buttonText={TEMP_BASE_CURRENCY}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            onPress={this.handlePressQuoteCurrency}
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />
          <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
