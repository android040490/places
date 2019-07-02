import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.setDefaultOptions({
            bottomTab: {
              iconColor: "blue",
              textColor: "blue",
              selectedIconColor: "orange",
              selectedTextColor: "orange"
            },
            topBar: {
              leftButtons: [
                {
                  id: "buttonMenu",
                  color: "orange"
                }
              ]
            }
          });


        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [
                        {
                            stack: {
                                children: [{
                                    component: {
                                        name: 'awesome-places.FindPlaceScreen',
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'Find Place',
                                        icon: sources[0]
                                    },
                                    topBar: {
                                        title: {
                                            text: 'Find Place'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            stack: {
                                children: [{
                                    component: {
                                        name: 'awesome-places.SharePlaceScreen',
                                    }
                                }],
                                options: {
                                    bottomTab: {
                                        text: 'Share Place',
                                        icon: sources[1]
                    
                                    },
                                    topBar: {
                                        title: {
                                            text: 'Share Place'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        })
    });
    
}

export default startTabs;

