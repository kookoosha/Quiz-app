/* eslint-disable no-console */
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {
  Button, View,
} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../../../redux/actions/userActions';
import styles from '../../screens/MainScreen/mainScreen';
import theme from '../../ThemeContext/Theme';

WebBrowser.maybeCompleteAuthSession();
const CLIENT_SECRET = '3838058d41cef9a1713953ed59c1398fcd20d590';
const CLIENT_ID = 'e7e0dbdf9df4beb0df04';

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${CLIENT_ID}`,
};

export default function GitHubAuth({ navigation }) {
  const dispatch = useDispatch();
  const [str, setStr] = React.useState('');
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      additionalHeaders: { Accept: 'application/json' },
      scopes: ['user'],
      redirectUri: makeRedirectUri({
        scheme: ['exp://'],
      }),
    },
    discovery,
  );
  const storeData = async (user) => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    axios.get('https://api.github.com/user', { headers: { Authorization: `Bearer ${str}` } })
      .then((res) => {
        storeData(res.data);
        dispatch(setUser(res.data));
      }).then(() => {
        navigation.navigate('Main');
      })
      .catch((err) => console.log(err.message));
  }, [str]);
  const token = (string) => {
    const t = string.slice(13, 53);
    setStr(t);
  };

  const tokenAll = (code) => axios.post(`https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`)
    .then((res) => {
      token(res.data);
    })
    .catch((err) => console.log(err));

  React.useEffect(() => {
    console.log('response=>', response);
    if (response?.type === 'success') {
      const { code } = response.params;
      tokenAll(code);
    } else {
      console.log('Ты попал в элс');
    }
  }, [response]);

  const pressHandler = () => {
    promptAsync();
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.mainPageBtns}>
        <Button
          style={{ marginBottom: 30 }}
          disabled={!request}
          title="Login"
          onPress={() => pressHandler()}
        />
      </View>
    </View>

  );
}
