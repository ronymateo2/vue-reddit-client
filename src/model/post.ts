export interface PostItem {
  kind: string;
  data: PostItemData;
}

export interface PostItemData {
  domain: string;
  banned_by?: any;
  media_embed: Mediaembed;
  subreddit: string;
  selftext_html?: any;
  selftext: string;
  likes?: any;
  user_reports: any[];
  secure_media?: any;
  link_flair_text?: any;
  id: string;
  gilded: number;
  secure_media_embed: Mediaembed;
  clicked: boolean;
  report_reasons?: any;
  author: string;
  media?: any;
  score: number;
  approved_by?: any;
  over_18: boolean;
  hidden: boolean;
  thumbnail: string;
  subreddit_id: string;
  edited: boolean;
  link_flair_css_class?: any;
  author_flair_css_class?: any;
  downs: number;
  mod_reports: any[];
  saved: boolean;
  is_self: boolean;
  name: string;
  permalink: string;
  stickied: boolean;
  created: number;
  url: string;
  author_flair_text?: any;
  title: string;
  created_utc: number;
  ups: number;
  num_comments: number;
  visited: boolean;
  num_reports?: any;
  distinguished?: any;
}

interface Mediaembed {}
