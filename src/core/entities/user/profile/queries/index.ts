import { withApiResponse } from '@/utils/rtk-query.util';
import { baseApi } from 'core/api/api.base';
import { IProfile } from 'core/base/type';
import { ProfileService } from 'core/services/profile/profile.service';
import { profileSuccess } from '../profile.slice';

const UserQueryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IProfile, void>({
      queryFn: async () => withApiResponse(() => ProfileService.getProfile()),
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const { data: profile } = await queryFulfilled;
          dispatch(profileSuccess(profile));
        } catch (error) {
          // Handle error if needed
        }
      },
    }),
  }),
});

export const { useGetProfileQuery, useLazyGetProfileQuery } = UserQueryApi;

export { UserQueryApi };
