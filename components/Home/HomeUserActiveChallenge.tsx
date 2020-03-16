/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useEffect} from 'react';
import {StyleSheet, View, TextInput, Alert, Linking} from 'react-native';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  DatePicker,
  List,
  ListItem,
} from 'native-base';
import useStore from '../../state/state';

function HomeUserActiveChallenge({navigation, route}) {
  const state = useStore(state => state);
  // console.log('state in HomeUserActiveChallenge.tsx: ', state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Welcome back, {route.params.userName}!</H1>
        <H2 style={styles.H2}>Current Challenges:</H2>
        <List>
          {state.userActiveChallengesList.map(item => (
            <ListItem key={item.id}>
              <Text
                onPress={() => {
                  state.setUserCurrentChallenge(
                    state.userActiveChallengesList.find(
                      x => x.id === item.title,
                    ),
                  );
                  navigation.navigate('Home', {
                    screen: 'ChallengeStatusMain',
                  });
                }}>
                {item.title}
              </Text>
            </ListItem>
          ))}
        </List>
        <Button style={styles.btn}>
          <Text>Create a New Challenge</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    marginTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  H2: {
    marginTop: 20,
  },
  btn: {
    marginTop: 10,
  },
});

export default HomeUserActiveChallenge;