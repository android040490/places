// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { StyleSheet, View} from 'react-native';
// import { connect } from 'react-redux';

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';

// type Props = {};
// class App extends Component<Props> {
//     placeAddedHandler = (placeName) => {
//        this.props.onAddPlace(placeName);
//     }

//     placeSelectedHandler = index => {
//         this.props.onSelectPlace(index);
//     }

//     modalClosedHandler = () => {
//         this.props.onDeselectPlace();
//     }

//     placeDeletedHandler = () => {
//         this.props.onDeletePlace();
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <PlaceDetail  
//                     selectedPlace={this.props.selectedPlace} 
//                     onModalClosed={this.modalClosedHandler}
//                     onItemDeleted={this.placeDeletedHandler}
//                 />
//                 <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
//                 <PlaceList 
//                     places={this.props.places} 
//                     onItemSelected={this.placeSelectedHandler}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     }
// });

// const mapStateToProps = state => {
//     return {
//         places: state.places.places,
//         selectedPlace: state.places.selectedPlace
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddPlace: (name) => dispatch(addPlace(name)),
//         onDeletePlace: () => dispatch(deletePlace()),
//         onSelectPlace: (key) => dispatch(selectPlace(key)),
//         onDeselectPlace: () => dispatch(deselectPlace())
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen", () => (props) => 
    <Provider store={store}>
        <AuthScreen {...props}/>
    </Provider> ,
    () => AuthScreen
);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => (props) => 
    <Provider store={store}>
        <SharePlaceScreen {...props}/>
    </Provider> ,
    () => SharePlaceScreen
);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => (props) => 
    <Provider store={store}>
        <FindPlaceScreen {...props}/>
    </Provider> ,
    () => FindPlaceScreen
);

Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'awesome-places.AuthScreen',
            passProps: {
              text: 'Login'
            }
          }
        }],
        options: {
          topBar: {
            title: {
              text: 'Login'
            }
          }
        }
      }
    }
  });

