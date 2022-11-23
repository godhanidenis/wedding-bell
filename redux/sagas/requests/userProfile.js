import { getUserProfile } from "../../../graphql/mutations/userProfile";

export function requestGetUserProfile() {
  return getUserProfile();
}
