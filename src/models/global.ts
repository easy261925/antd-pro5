import type { Reducer, Effect } from 'umi';
import type { ConnectState } from './connect.d';

export type GlobalModelState = {
  data: any
};

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    getData: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    data: ''
  },

  effects: {
    *getData({ payload }, { call }) {

    }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default GlobalModel;
