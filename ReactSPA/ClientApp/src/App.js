import React from 'react';
import MainPage from './MainPage';
import {
  ConfigProvider,
} from 'antd';
import enUS from 'antd/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/ru';

moment.locale('en');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locale: enUS,
    };
  }

  changeLocale = e => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('ru');
    }
  };

  render() {
    const { locale } = this.state;
    return (
        <ConfigProvider locale={locale}>
          <MainPage locale={locale} changeLocale={this.changeLocale}/>
        </ConfigProvider>
    );
  }
}

export default App;