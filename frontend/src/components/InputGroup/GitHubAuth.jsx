/* eslint-disable no-console */
import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {
  Image, Text, TouchableHighlight, View,
} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../../../redux/actions/userActions';

WebBrowser.maybeCompleteAuthSession();
// const CLIENT_SECRET = '240728e3da06e34c6d19dc6fe260c55f25db9dc8';
// const CLIENT_ID = 'e7e0dbdf9df4beb0df04';

// const { CLIENT_SECRET } = process.env; // Ключи Насти, не удалять
// const { CLIENT_ID } = process.env;

const CLIENT_ID = 'adc41a463eca775a7c9e';
const CLIENT_SECRET = '536ccb679e41844a74a5a386abaff1a6b81ea576';

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
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Text>
        Авторизация с помощью
      </Text>
      <Text>
        GitHub
      </Text>
      <View>
        <TouchableHighlight
          onPress={() => pressHandler()}
          underlayColor="transparent"
          style={{
            borderBottomWidth: 10,
            borderTopWidth: 10,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderRadius: 120,
          }}
        >
          <Image
            style={{
              resizeMode: 'contain',
              width: 100,
              height: 100,
            }}
            source={require('../../../assets/github_logo_icon_143772.png')}
          />
        </TouchableHighlight>
      </View>
    </View>

  );
}
