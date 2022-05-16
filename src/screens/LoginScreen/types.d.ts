import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStack } from '../../navigation/types';

export type Container = NativeStackScreenProps<LoginStack, 'Login'>;
export interface Presenter {
  onPressNextStep: () => void;
}
