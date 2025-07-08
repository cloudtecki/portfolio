import { useDispatch } from 'react-redux';
import { AppDispatch } from './configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
