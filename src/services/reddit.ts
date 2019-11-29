import { PostItemData } from '@/model/post';
import { postStub } from '@/stub/top';
// TODO: implement api call if we have enough time
export const redditService = {
  getPosts(): Promise<PostItemData[]> {
    return Promise.resolve(postStub.data.children.map((c: any) => c.data) as PostItemData[]);
  },
};
