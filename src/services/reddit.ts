import { PostItemData } from '@/model/post';
import { postStub } from '@/stub/top';
// TODO: implement api call if we have enough time
export const redditService = {
  getPosts(after?: string): Promise<{ results: PostItemData[]; next?: string }> {
    return Promise.resolve({
      results: postStub.data.children.map((c: any) => c.data) as PostItemData[],
      next: postStub.data.after,
    });
  },
};
