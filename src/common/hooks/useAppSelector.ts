import {useSelector} from "react-redux";
import type {RootState} from "../../bll/store.ts";


export const useAppSelector = useSelector.withTypes<RootState>()