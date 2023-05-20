import useStore from './useStore';
import { incenseStore } from '../stores/IncenseStore';

export default function useUserStore() {
  return useStore(incenseStore);
}
