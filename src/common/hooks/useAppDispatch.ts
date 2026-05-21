import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../bll/store.ts";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()