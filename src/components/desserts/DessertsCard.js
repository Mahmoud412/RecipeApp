import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loading from '../Loading';
import Error from '../Error';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {data} from '../../assets/data/data';
import {fetchDessert} from '../../redux/store';

const DessertsCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {dessert, loading, error} = useSelector(state => state.desserts);
  console.log(dessert);

  // useEffect(() => {
  //   dispatch(fetchDessert());
  // }, []);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <AntDesign name="bars" size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{margin: 10, left: 5, flex: 1}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <SafeAreaView>
            <TouchableOpacity
              style={{
                margin: 10,
                top: 10,
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                padding: 10,
              }}>
              <Image
                style={{width: '100%', height: 300, borderRadius: 15}}
                source={{uri: item.img}}
              />
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      />
    </SafeAreaView>
  );
};

export default DessertsCard;
