import { formatNumber } from "../utils/utils.js";
export default class InfoBioResource {
  constructor({ data }) {
    this.data = data;
  }

  toJSON() {
    return {
      fullName: this.data.full_name,
      biography: this.data.biography,
      categoryName: this.data.category_name,
      isVerified: this.data.is_verified,
      followers: {
        count: this.data.edge_followed_by.count,
        abbreviation: formatNumber(this.data.edge_followed_by.count),
      },
      followed: {
        count: this.data.edge_follow.count,
        abbreviation: formatNumber(this.data.edge_follow.count),
      },
      publications: {
        count: this.data.edge_owner_to_timeline_media.count,
        abbreviation: formatNumber(
          this.data.edge_owner_to_timeline_media.count
        ),
        edges: this.data.edge_owner_to_timeline_media.edges.map((edge) => {
          return {
            id: edge.node.id,
            image: edge.node.display_url,
            caption: edge.node.accessibility_caption,
            likes: {
              count: edge.node.edge_liked_by.count,
              abbreviation: formatNumber(edge.node.edge_liked_by.count),
            },
            comments: {
              count: edge.node.edge_media_to_comment.count,
              abbreviation: formatNumber(edge.node.edge_media_to_comment.count),
            },
          };
        }),
      },
    };
  }
}
