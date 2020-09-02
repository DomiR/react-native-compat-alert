import { NativeModules } from 'react-native';

type CompatAlertType = {
  multiply(a: number, b: number): Promise<number>;
};

const { CompatAlert } = NativeModules;

export default CompatAlert as CompatAlertType;
