import { NativeModules } from 'react-native';

type CompressionAndroidType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CompressionAndroid } = NativeModules;

export default CompressionAndroid as CompressionAndroidType;
