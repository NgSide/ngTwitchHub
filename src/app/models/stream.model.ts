export class StreamModel {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: [string];
    is_mature: boolean;
  
    constructor(obj: any) {
      this.id = obj.id;
      this.user_id = obj.user_id;
      this.user_login = obj.user_login;
      this.user_name = obj.user_name;
      this.game_id = obj.game_id;
      this.game_name = obj.game_name;
      this.type = obj.type;
      this.title = obj.title;
      this.viewer_count = obj.viewer_count;
      this.started_at = obj.started_at;
      this.language = obj.language;
      this.thumbnail_url = obj.thumbnail_url;
      this.tag_ids = obj.tag_ids;
      this.is_mature = obj.is_mature;
    }
  }