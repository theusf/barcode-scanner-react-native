import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class barcodeScanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      torchOn: false,
      barcode: '',
    };
  }

  onBarCodeRead = (e) => {
    this.setState({barcode: e.data});
    Alert.alert(`barcode: ${e.data} type ${e.type}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          defaultTouchToFocus
          aspect={1}
          barCodeTypes={[RNCamera.Constants.BarCodeType.code128]}
          flashMode={RNCamera.Constants.FlashMode.on}
          captureAudio={false}
          onBarCodeRead={this.onBarCodeRead}
          style={styles.preview}
          ref={(cam) => (this.camera = cam)}>
          <Text style={{backgroundColor: 'white'}}>
            BARCODE SCANNER {this.state.barcode}{' '}
          </Text>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
