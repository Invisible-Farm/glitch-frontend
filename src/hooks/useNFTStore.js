import useStore from './useStore';
import { nftStore } from '../stores/NFTStore';

export default function useUserStore() {
  return useStore(nftStore);
}
