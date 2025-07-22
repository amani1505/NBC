import type { Article } from "./article";

export interface SideTabConfig {
  name: string;
  component: React.ComponentType<{ articles: Article[]; loading?: boolean }>;
  filter?: (article: Article) => boolean;
}
