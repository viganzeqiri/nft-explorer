export type NftProperties = {
  id: number;
  name: string;
  image_url: string;
  image_url_cdn: string;
  image_url_png: string;
  image_path: string;
  kitty_items_image_path: string;
  generation: number;
  created_at: string;
  birthday: string;
  color: string;
  kitty_type?: string | null;
  is_fancy: boolean;
  is_exclusive: boolean;
  is_special_edition: boolean;
  fancy_type?: string | null;
  language: string;
  enhanced_cattributes: {
    type: string;
    kittyId: number;
    position: number;
    description: string;
  }[];
  is_prestige: boolean;
  prestige_type?: string | null;
  prestige_ranking?: string | null;
  prestige_time_limit?: number | null;
  status: {
    cooldown: number;
    dynamic_cooldown: number;
    cooldown_index: number;
    is_ready: boolean;
    is_gestating: boolean;
    cooldown_end_block: number;
    pending_tx_type?: string | null;
    pending_tx_since?: string | null;
  };
  purrs: {
    count: number;
    is_purred: boolean;
  };
  hatcher: {
    address: string;
    image: string;
    nickname: string;
    hasDapper: boolean;
  };
  watchlist: {
    count: number;
    is_watchlisted: boolean;
  };
  hatched: boolean;
  auction: {
    id: number;
    type: string;
    start_price: string;
    end_price: string;
    start_time: string;
    end_time: string;
    current_price: string;
    duration: string;
    status: string;
    seller: {
      address: string;
      isDapper: boolean;
      image: string;
      nickname: string;
    };
  };
  owner: {
    address: string;
    hasDapper: boolean;
    nickname: string;
    image: string;
  };
  sire: {
    id: number;
    name?: string | null;
    image_url: string;
    image_url_cdn: string;
    generation: number;
    created_at: string;
    color: string;
    is_fancy: boolean;
    is_exclusive: boolean;
    fancy_type?: string | null;
    image_url_png: string;
    image_url_kitty_items: string;
  };
  matron: {
    id: number;
    name: string;
    image_url: string;
    image_url_cdn: string;
    generation: number;
    created_at: string;
    color: string;
    is_fancy: boolean;
    is_exclusive: boolean;
    fancy_type?: string | null;
    image_url_png: string;
    image_url_kitty_items: string;
  };
  offer: {};
  image_url_kitty_items: string;
};
