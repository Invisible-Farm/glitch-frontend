import useStore from './useStore';
import { letterFormStore } from '../stores/LetterFormStore';

export default function useUserStore() {
  return useStore(letterFormStore);
}
