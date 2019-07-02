import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    }

    placaNameChangedHandler = (val) => {
        // alert(event);
        this.setState({ placeName: val })
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() == "") {
            return
        }

        this.props.onPlaceAdded(this.state.placeName);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    placeholder="Ваше имя"
                    onChangeText={this.placaNameChangedHandler}
                />
                <Button style={styles.placeButton} title="Add" onPress={this.placeSubmitHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeButton: {
        width: "30%"
    },
    placeInput: {
        width: "70%",
        borderColor: "transparent",
        borderBottomColor: "#f00",
        borderWidth: 1,
        marginBottom: 10
    }
})

export default PlaceInput;