import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStack } from '../../navigation/types';

export type Container = NativeStackScreenProps<LoginStack, 'Cert'>;
export interface Presenter {
  onPressLogin: () => void;
  onChangeName: (name: string) => void;
  name: string;
}
