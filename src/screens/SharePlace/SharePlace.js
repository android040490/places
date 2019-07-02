import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions';

class SharePlaceScreen extends Component {
    placeAddedHandler = (placeName) => {
        this.props.addPlace(placeName)
    }

    render(){
        return(
            <View>
                <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    addPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);